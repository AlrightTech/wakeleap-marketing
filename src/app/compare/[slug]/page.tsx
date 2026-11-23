import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata, JsonLd, faqPageSchema } from "@/lib/seo";
import { comparisons, getComparison } from "@/lib/compare";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";

export const instant = false;

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) return {};
  return buildMetadata({
    title: `${c.title} — WakeLeap`,
    description: c.description,
    path: `/compare/${c.slug}`,
  });
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) notFound();

  return (
    <>
      <JsonLd data={faqPageSchema(c.faqs)} />
      <Section eyebrow="Comparison" title={c.h1} subtitle={c.description}>
        <div className="max-w-3xl space-y-4 text-muted leading-relaxed">
          {c.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      <Section eyebrow="Side by side" title={`${c.title} comparison table`}>
        <div className="max-w-3xl overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-surface-2">
              <tr className="text-left">
                <th className="py-2 px-3">Feature</th>
                <th className="py-2 px-3 text-accent">WakeLeap</th>
                <th className="py-2 px-3">Other</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {c.rows.map((r) => (
                <tr key={r[0]}>
                  <td className="py-2 px-3 text-foreground">{r[0]}</td>
                  <td className="py-2 px-3 text-accent font-semibold">{r[1]}</td>
                  <td className="py-2 px-3 text-muted">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl text-muted leading-relaxed">
          <strong className="text-foreground">Verdict:</strong> {c.verdict}
        </p>
      </Section>

      <Section eyebrow="FAQ" title={`${c.title} FAQ`}>
        <div className="max-w-3xl">
          <FAQ items={c.faqs} />
        </div>
      </Section>

      <Section className="bg-surface/40 border-y border-border">
        <div className="text-center">
          <Link
            href="/compare"
            className="text-accent font-semibold hover:underline"
          >
            ← All comparisons
          </Link>
        </div>
      </Section>
    </>
  );
}