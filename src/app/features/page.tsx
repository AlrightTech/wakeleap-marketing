import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { features } from "@/lib/features";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";

export const metadata = buildMetadata({
  title: "WakeLeap Features — Mission Alarm Clock App for Android & iOS",
  description:
    "Explore WakeLeap features: mission-based alarms, Object Hunt, push-ups, photo missions, make your bed, Bible verse, snooze blocker, alarm sounds, and streaks. The alarm clock app that makes you complete a Mission to silence the alarm.",
  path: "/features",
  keywords: ["alarm clock app", "alarm app", "clock app", "mission alarm", "snooze blocker", "loud alarm", "best alarm clock app", "wake up early", "alarm app for heavy sleepers", "mission alarm app", "no snooze"],
});

const faqs = [
  {
    q: "What features does WakeLeap include?",
    a: "WakeLeap includes alarm creation with repeat days and labels, five mission types, sound and volume controls, vibration, gradual fade-in, streak tracking, configurable snooze, and the option to disable snooze. All features are free.",
  },
  {
    q: "Are missions required to dismiss every WakeLeap alarm?",
    a: "Yes. Every alarm in WakeLeap has exactly one Mission, and the WakeLeap alarm does not stop until that WakeLeap Mission is completed.",
  },
  {
    q: "Does WakeLeap work offline?",
    a: "Yes. The core alarm and Mission system in WakeLeap runs fully offline. An internet connection is only needed for account sync.",
  },
  {
    q: "Which devices support WakeLeap?",
    a: "WakeLeap supports Android 8.0 (API 26) and above. An iOS version of WakeLeap supporting iOS 15 and above is planned.",
  },
  {
    q: "Can WakeLeap disable snooze entirely?",
    a: "Yes. WakeLeap lets you disable snooze entirely so the only way to silence the WakeLeap alarm is completing the WakeLeap Mission.",
  },
  {
    q: "How does WakeLeap compare to Alarmy?",
    a: "WakeLeap and Alarmy both require a task to dismiss the alarm. WakeLeap offers five focused mission types, configurable snooze with a disable option.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Section
        eyebrow="WakeLeap alarm clock app features"
        title="WakeLeap alarm clock app features for waking up for real"
        subtitle="WakeLeap is a mission-based alarm clock app for Android and iOS. Every WakeLeap alarm has one Mission, and the WakeLeap alarm does not stop until the WakeLeap Mission is done."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent/60 transition"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {f.description}
              </p>
              <span className="mt-4 inline-block text-sm text-accent">
                Learn more about {f.title} →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="WakeLeap core alarm features" title="Standard alarm features included in WakeLeap">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["Alarm creation in WakeLeap", "Create one or more WakeLeap alarms with a specified time in hours and minutes."],
            ["Repeat days in WakeLeap", "Repeat WakeLeap alarms on selected days, weekdays, weekends, or custom days."],
            ["Labels in WakeLeap", "Name each WakeLeap alarm for easy identification."],
            ["Enable / disable in WakeLeap", "Turn WakeLeap alarms on or off without deleting them."],
            ["Sounds in WakeLeap", "Standard tones, nature sounds, and high-intensity sounds like airhorn."],
            ["Volume in WakeLeap", "Independent WakeLeap alarm volume plus gradual fade-in (crescendo)."],
            ["Silent mode override in WakeLeap", "WakeLeap alarm triggers at full volume even in silent or vibrate mode."],
            ["Vibration in WakeLeap", "WakeLeap vibration alongside or instead of audio."],
            ["Streaks in WakeLeap", "WakeLeap streak counter shows consecutive days of successful Mission completion."],
            ["Themes in WakeLeap", "Light, dark, or system default theme in WakeLeap."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="font-semibold text-foreground">{t}</h3>
              <p className="mt-1 text-sm text-muted leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="WakeLeap FAQ" title="WakeLeap features FAQ">
        <div className="max-w-3xl">
          <FAQ items={faqs} />
        </div>
      </Section>
    </>
  );
}