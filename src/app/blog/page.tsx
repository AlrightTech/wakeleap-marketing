import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { posts } from "@/lib/blog";
import Section from "@/components/Section";

const PAGE_SIZE = 18;

export const instant = false;

export const metadata = buildMetadata({
  title: "WakeLeap Blog — Wake Up Better",
  description:
    "Articles on snoozing, morning routines, and mission-based alarms from the WakeLeap team.",
  path: "/blog",
});

type BlogHubProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogHub({ searchParams }: BlogHubProps) {
  const { page: pageParam } = await searchParams;
  const requested = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const page = Math.min(requested, totalPages);
  const slice = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <Section
      eyebrow="Blog"
      title="WakeLeap blog: wake up better"
      subtitle="Practical articles on snoozing, morning routines, and mission-based alarms."
    >
      <p className="text-sm text-muted mb-6">
        {posts.length} articles · page {page} of {totalPages}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {slice.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            prefetch={false}
            className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent/60 transition"
          >
            <p className="text-xs text-muted">{p.datePublished}</p>
            <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-accent transition">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {p.description}
            </p>
            <span className="mt-4 inline-block text-sm text-accent">
              Read article →
            </span>
          </Link>
        ))}
      </div>

      {totalPages > 1 ? (
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          aria-label="Blog pagination"
        >
          {page > 1 ? (
            <Link
              href={page === 2 ? "/blog" : `/blog?page=${page - 1}`}
              prefetch={false}
              className="rounded-xl border border-border px-4 py-2 text-sm hover:border-accent/60"
            >
              ← Previous
            </Link>
          ) : null}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <Link
              key={n}
              href={n === 1 ? "/blog" : `/blog?page=${n}`}
              prefetch={false}
              aria-current={n === page ? "page" : undefined}
              className={`rounded-xl border px-3 py-2 text-sm ${
                n === page
                  ? "border-accent bg-accent/10 text-accent font-semibold"
                  : "border-border hover:border-accent/60"
              }`}
            >
              {n}
            </Link>
          ))}
          {page < totalPages ? (
            <Link
              href={`/blog?page=${page + 1}`}
              prefetch={false}
              className="rounded-xl border border-border px-4 py-2 text-sm hover:border-accent/60"
            >
              Next →
            </Link>
          ) : null}
        </nav>
      ) : null}
    </Section>
  );
}