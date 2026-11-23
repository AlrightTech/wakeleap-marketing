import Link from "next/link";
import { buildMetadata, JsonLd, faqPageSchema } from "@/lib/seo";
import { comparisons } from "@/lib/compare";
import Section from "@/components/Section";

export const metadata = buildMetadata({
  title: "Compare WakeLeap — Alarm Clock App Comparisons",
  description:
    "Compare WakeLeap alarm clock app with Alarmy, Sleep as Android, and the default alarm clock. Mission types, snooze control, alarm sound, pricing, and platforms.",
  path: "/compare",
  keywords: ["alarm clock app", "alarmy alternative", "alarm app", "loud alarm", "alarm comparison"],
});

const faqs = [
  {
    q: "What does WakeLeap compare against?",
    a: "WakeLeap comparison pages cover Alarmy, Sleep as Android, and the default alarm clock on your phone. Each page lists mission types, snooze control, pricing, and platform support.",
  },
];

export default function CompareHub() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <Section
        eyebrow="Alarm clock app comparisons"
        title="Compare WakeLeap alarm clock app with other alarm clocks"
        subtitle="WakeLeap is a mission-based alarm clock app. See how the WakeLeap alarm app stacks up against other alarm apps."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent/60 transition"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {c.description}
              </p>
              <span className="mt-4 inline-block text-sm text-accent">
                Read comparison →
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}