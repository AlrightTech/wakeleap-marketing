import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata, JsonLd, faqPageSchema } from "@/lib/seo";
import { features, getFeature } from "@/lib/features";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";

export const instant = false;

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) return {};
  return buildMetadata({
    title: `${f.title} — WakeLeap`,
    description: f.description,
    path: `/features/${f.slug}`,
  });
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) notFound();

  return (
    <>
      <JsonLd data={faqPageSchema(f.faqs)} />
      <Section eyebrow="Feature" title={f.h1} subtitle={f.description}>
        <div className="max-w-3xl space-y-4 text-muted leading-relaxed">
          {f.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-3xl">
          {f.bullets.map((b) => (
            <li
              key={b}
              className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground"
            >
              ✓ {b}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link href="/features" className="text-accent font-semibold hover:underline">
            ← All WakeLeap features
          </Link>
        </div>
      </Section>

      <Section eyebrow="FAQ" title={`Frequently asked questions about ${f.title}`}>
        <div className="max-w-3xl">
          <FAQ items={f.faqs} />
        </div>
      </Section>
    </>
  );
}