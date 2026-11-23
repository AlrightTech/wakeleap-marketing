import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { posts } from "@/lib/blog";
import Section from "@/components/Section";

export const metadata = buildMetadata({
  title: "WakeLeap Blog — Wake Up Better",
  description:
    "Articles on snoozing, morning routines, and mission-based alarms from the WakeLeap team.",
  path: "/blog",
});

export default function BlogHub() {
  return (
    <Section
      eyebrow="Blog"
      title="WakeLeap blog: wake up better"
      subtitle="Practical articles on snoozing, morning routines, and mission-based alarms."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
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
    </Section>
  );
}