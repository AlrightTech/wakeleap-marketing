import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { buildMetadata, JsonLd, articleSchema, faqPageSchema } from "@/lib/seo";
import { posts, getPost } from "@/lib/blog";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";

export const instant = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.title} — WakeLeap`,
    description: p.description,
    path: `/blog/${p.slug}`,
    ogType: "article",
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: p.title,
            description: p.description,
            path: `/blog/${p.slug}`,
            datePublished: p.datePublished,
            dateModified: p.dateModified,
            author: p.author,
          }),
          ...(p.faqs?.length ? [faqPageSchema(p.faqs)] : []),
        ]}
      />
      <Section eyebrow="Blog" title={p.title}>
        <p className="text-sm text-muted">
          {p.datePublished} ·{" "}
          <Link href="/editors" className="text-accent underline underline-offset-2">
            {p.author}
          </Link>
        </p>
        <article className="mt-6 max-w-3xl text-muted leading-relaxed">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-8 mb-3 text-xl font-semibold text-foreground">{children}</h3>
              ),
              p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>,
              ol: ({ children }) => <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>,
              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              a: ({ href, children }) => (
                <Link href={href || "#"} className="text-accent font-medium underline underline-offset-2 hover:no-underline">
                  {children}
                </Link>
              ),
              table: ({ children }) => (
                <div className="mb-6 overflow-x-auto">
                  <table className="w-full border-collapse border border-border text-sm">{children}</table>
                </div>
              ),
              thead: ({ children }) => <thead className="bg-surface">{children}</thead>,
              th: ({ children }) => (
                <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">{children}</th>
              ),
              td: ({ children }) => <td className="border border-border px-4 py-2 align-top">{children}</td>,
              blockquote: ({ children }) => (
                <div className="my-6 rounded-xl border border-accent/30 bg-accent/5 p-5 text-foreground">
                  {children}
                </div>
              ),
              img: ({ src, alt }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src || ""} alt={alt || ""} className="my-6 w-full rounded-xl border border-border" loading="lazy" />
              ),
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
            }}
          >
            {Array.isArray(p.content) ? p.content.join("\n\n") : p.content}
          </ReactMarkdown>
        </article>
        <div className="mt-8">
          <Link href="/blog" className="text-accent font-semibold hover:underline">
            ← Back to blog
          </Link>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Frequently asked questions">
        <div className="max-w-3xl">
          <FAQ items={p.faqs} />
        </div>
      </Section>
    </>
  );
}