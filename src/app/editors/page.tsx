import { buildMetadata } from "@/lib/seo";
import Section from "@/components/Section";

export const metadata = buildMetadata({
  title: "Editorial Guidelines — WakeLeap",
  description:
    "Editorial guidelines, author bios, and content standards for the WakeLeap blog and website.",
  path: "/editors",
});

const authors = [
  {
    name: "Dialed Labs Editorial Team",
    bio: "The editorial team at Dialed Labs Inc. writes about sleep habits, morning routines, and mission-based alarms for the WakeLeap blog.",
  },
];

export default function EditorsPage() {
  return (
    <Section
      eyebrow="Editors"
      title="Editorial guidelines and author bios"
      subtitle="How WakeLeap content is researched, written, and reviewed."
    >
      <div className="max-w-3xl space-y-4 text-muted leading-relaxed">
        <h3 className="text-lg font-semibold text-foreground">Editorial standards</h3>
        <p>
          Content on the WakeLeap website and blog is written for clarity. Articles
          use plain language at an 8th to 10th grade reading level. Every major
          page starts sections with a direct answer, includes concrete data and
          tables where useful, and repeats the app name and subject names instead
          of vague pronouns.
        </p>
        <p>
          Facts about WakeLeap, such as features, pricing, and platform support, are
          taken from the WakeLeap Software Requirements Document and product
          specifications. Pricing and availability may change; the pricing page
          reflects the current plan.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Review process</h3>
        <p>
          Articles are reviewed by the Dialed Labs team before publication.
          Updates are made when features or pricing change, and the dateModified
          tag is updated accordingly.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Author bios</h3>
        {authors.map((a) => (
          <div key={a.name} className="rounded-xl border border-border bg-surface p-5">
            <p className="font-semibold text-foreground">{a.name}</p>
            <p className="mt-1 text-sm text-muted">{a.bio}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}