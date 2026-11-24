import { buildMetadata } from "@/lib/seo";
import StoreBadges from "@/components/StoreBadges";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";

export const metadata = buildMetadata({
  title: "WakeLeap Pricing — Free Alarm Clock App",
  description:
    "WakeLeap is a free mission-based alarm clock app for Android, with an iOS version planned. All features are free, with no subscription and no paid tier.",
  path: "/pricing",
  keywords: ["alarm clock app", "alarm app", "free alarm", "mission alarm", "alarm sound", "free alarm clock app", "alarm app free", "mission alarm app"],
});

const faqs = [
  {
    q: "How much does WakeLeap cost?",
    a: "WakeLeap is completely free. There is no subscription, no trial, and no paid tier. All WakeLeap features are free to use.",
  },
  {
    q: "What is included in WakeLeap for free?",
    a: "All WakeLeap features are free: alarm creation with repeat days and labels, all mission types, sound and volume controls, vibration, gradual fade-in, streak tracking, configurable snooze, and the option to disable snooze.",
  },
  {
    q: "Does WakeLeap have any paid features?",
    a: "No. WakeLeap has no paid features. Everything in WakeLeap is free, including all mission types and snooze controls.",
  },
  {
    q: "Does WakeLeap restore data on a new device?",
    a: "Yes. WakeLeap syncs your alarms and settings when you sign in on a new device.",
  },
  {
    q: "Does WakeLeap work offline?",
    a: "Yes. The core alarm and Mission system in WakeLeap runs fully offline. An internet connection is only needed for account sync.",
  },
  {
    q: "Which devices support WakeLeap?",
    a: "WakeLeap supports Android 8.0 (API 26) and above. An iOS version of WakeLeap supporting iOS 15 and above is planned.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Section
        eyebrow="WakeLeap alarm app pricing"
        title="WakeLeap is free — all features included"
        subtitle="WakeLeap is a mission-based alarm clock app for Android, with an iOS version planned. Every WakeLeap feature is free, with no subscription and no paid tier."
      >
        <div className="max-w-3xl space-y-4 text-muted leading-relaxed">
          <p>
            WakeLeap is a free alarm clock app. There is no paid tier, no
            subscription, and no trial. All WakeLeap features are free to use
            from the moment you download WakeLeap.
          </p>
          <p>
            WakeLeap includes alarm creation with repeat days and labels, all
            five mission types (Object Hunt, push-ups, photo, make your bed,
            Bible verse), sound and volume controls, vibration, gradual fade-in,
            streak tracking, configurable snooze, and the option to disable snooze
            entirely.
          </p>
        </div>

        <div className="mt-10 max-w-4xl">
          <h3 className="text-lg font-semibold text-foreground">
            WakeLeap features (all free)
          </h3>
          <table className="mt-4 w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-surface-2">
              <tr className="text-left">
                <th className="py-2 px-3">WakeLeap feature</th>
                <th className="py-2 px-3">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Alarm creation", "Yes"],
                ["Repeat days", "Yes"],
                ["Labels", "Yes"],
                ["All 5 mission types", "Yes"],
                ["Configurable snooze", "Yes"],
                ["Disable snooze", "Yes"],
                ["Alarm sounds", "Yes"],
                ["Gradual fade-in", "Yes"],
                ["Vibration", "Yes"],
                ["Streak counter", "Yes"],
                ["Offline core alarm", "Yes"],
                ["Silent mode override", "Yes"],
              ].map((r) => (
                <tr key={r[0]}>
                  <td className="py-2 px-3 text-foreground">{r[0]}</td>
                  <td className="py-2 px-3 text-accent font-semibold">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <StoreBadges size="lg" />
        </div>
      </Section>

      <Section eyebrow="WakeLeap FAQ" title="WakeLeap pricing FAQ">
        <div className="max-w-3xl">
          <FAQ items={faqs} />
        </div>
      </Section>
    </>
  );
}