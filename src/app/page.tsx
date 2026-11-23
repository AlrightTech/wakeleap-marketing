import Link from "next/link";
import { buildMetadata, JsonLd, softwareApplicationSchema, faqPageSchema } from "@/lib/seo";
import { PLAY_STORE_URL, APP_STORE_URL, TRIAL_DAYS, ANNUAL_PRICE_LABEL } from "@/lib/site";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import ScreenshotsCarousel from "@/components/ScreenshotsCarousel";
import { phoneScreenshots, tabletScreenshots } from "@/lib/screenshots";

export const metadata = buildMetadata({
  title: "WakeLeap — Mission Alarm Clock App for Heavy Sleepers (Android & iOS)",
  description:
    "WakeLeap is a mission alarm clock app for Android and iOS. Wake up on the first alarm: complete a Mission such as an Object Hunt, push-ups, a photo, making your bed, or reading a Bible verse before the alarm stops. WakeLeap is free to use, with all features included. For heavy sleepers and morning routines.",
  path: "/",
  keywords: [
    "mission alarm",
    "alarm clock",
    "wake up",
    "morning routine",
    "alarm app",
    "wakeup app",
    "heavy sleeper",
    "alarm snooze",
    "morning alarm",
    "no snooze",
    "morning habits",
    "motivational alarm",
    "daily routine",
  ],
});

const homeFaqs = [
  {
    q: "What is WakeLeap and how does the mission alarm work?",
    a: "WakeLeap is a mission-based alarm clock app built by Dialed Labs Inc. for Android and iOS. Instead of tapping a button to dismiss an alarm, you must complete a Mission such as an Object Hunt, push-ups, a photo, making your bed, or reading a Bible verse before the alarm stops.",
  },
  {
    q: "How much does WakeLeap cost?",
    a: "WakeLeap is completely free. There is no subscription, no trial, and no paid tier. All WakeLeap features, including all mission types, configurable snooze, and all sounds, are free to use.",
  },
  {
    q: "Does WakeLeap work offline without an internet connection?",
    a: "Yes. The core alarm and Mission system in WakeLeap runs fully offline. An internet connection is only needed for account sync.",
  },
  {
    q: "Which devices and operating systems support WakeLeap?",
    a: "WakeLeap supports Android 8.0 (API 26) and above. An iOS version supporting iOS 15 and above is planned. WakeLeap runs on phones and small tablets from 4.7 to 7 inches in both portrait and landscape on tablets.",
  },
  {
    q: "How does WakeLeap compare to Alarmy and other alarm apps?",
    a: "WakeLeap and Alarmy both require a task to dismiss the alarm. WakeLeap offers five focused mission types, configurable snooze with a disable option, a simple annual price around free, and an iOS version planned. Alarmy offers a larger mission library today.",
  },
  {
    q: "Is my data safe and private with WakeLeap?",
    a: "Yes. WakeLeap encrypts all data in transit with TLS 1.2 or higher, hashes passwords with bcrypt or Argon2, handles payments exclusively through Google Play Billing and Apple In-App Purchase, and complies with GDPR and CCPA. You can request complete data deletion within 30 days.",
  },
];

const missions = [
  { title: "Object Hunt", desc: "WakeLeap asks you to find and photograph a specific object before the alarm stops.", icon: "🔍" },
  { title: "Physical Exercise", desc: "WakeLeap requires a set number of push-ups or reps, confirmed manually, to dismiss the alarm.", icon: "💪" },
  { title: "Photo Mission", desc: "WakeLeap makes you take a photo of a subject like the sky, your face, or your made bed.", icon: "📸" },
  { title: "Make Your Bed", desc: "WakeLeap confirms you made your bed by photo or task confirmation before dismissing the alarm.", icon: "🛏️" },
  { title: "Read a Bible Verse", desc: "WakeLeap presents a daily Bible verse and requires you to confirm you read it before the alarm stops.", icon: "📖" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema(), faqPageSchema(homeFaqs)]} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
        <div className="container-x py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Mission-Based Alarm Clock App
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              WakeLeap — Mission Alarm Clock App for Heavy Sleepers (Android &amp; iOS)
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
              WakeLeap is a mission-based alarm clock app for Android and iOS built
              by Dialed Labs Inc. for heavy snoozers and morning-routine seekers.
              WakeLeap requires you to complete a Mission such as an Object Hunt,
              push-ups, a photo, making your bed, or reading a Bible verse before
              the alarm stops, so one tap is never enough to silence it. WakeLeap
              delivers a ±2 second alarm trigger accuracy, a 1 second Mission
              screen render, and is free to use with all features included.
            </p>
            <p className="mt-4 text-lg md:text-xl text-muted leading-relaxed">
              WakeLeap helps heavy snoozers and morning-routine seekers wake up for
              real by replacing tap-to-dismiss with a Mission, turning the alarm
              into a daily trigger for movement, mindfulness, and a tidy room.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-background hover:opacity-90 transition"
              >
                Download WakeLeap on Google Play
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 font-semibold text-foreground hover:border-accent transition"
              >
                Download WakeLeap on App Store
              </a>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-muted hover:text-foreground transition"
              >
                Explore WakeLeap features →
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">
              WakeLeap is free to download. Try all WakeLeap free features free for{" "}
              {TRIAL_DAYS} days, no credit card required to start.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <Section className="border-y border-border bg-surface/40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { k: "5+", v: "Mission types in WakeLeap at launch" },
            { k: "Free", v: "All WakeLeap features" },
            { k: "±2s", v: "WakeLeap alarm trigger accuracy" },
            { k: "100%", v: "WakeLeap core alarm works offline" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-accent">
                {s.k}
              </div>
              <div className="mt-1 text-sm text-muted">{s.v}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Screenshots */}
      <Section
        eyebrow="See WakeLeap in action"
        title="WakeLeap screenshots from Google Play"
        subtitle="Browse the WakeLeap app interface on phones and tablets. Scroll horizontally to see all WakeLeap screenshots."
      >
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              WakeLeap on phones
            </h3>
            <ScreenshotsCarousel items={phoneScreenshots} label="phone screenshots" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              WakeLeap on tablets
            </h3>
            <ScreenshotsCarousel items={tabletScreenshots} label="tablet screenshots" />
          </div>
        </div>
      </Section>

      {/* What is WakeLeap */}
      <Section
        eyebrow="What is WakeLeap"
        title="WakeLeap mission alarm clock app that blocks the snooze button"
        subtitle="WakeLeap is an alarm clock app where every alarm has one Mission attached to it, and the alarm sound does not stop until the Mission is done."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              WakeLeap is a mobile alarm clock application built by Dialed Labs Inc.
              for Android, with an iOS version planned. The core idea of WakeLeap is
              simple: an alarm should not be silenced by a tap. WakeLeap requires the
              user to complete a physical or cognitive task, called a Mission,
              before the alarm stops sounding.
            </p>
            <p>
              Heavy snoozers often tap dismiss half-asleep and fall back to
              sleep. WakeLeap removes that path. The WakeLeap alarm keeps playing, the
              WakeLeap screen stays awake, and the only way to silence WakeLeap is to
              finish the Mission. This design turns the alarm into a daily
              trigger for movement, mindfulness, or a tidy room.
            </p>
            <p>
              WakeLeap includes standard alarm features such as repeating days,
              labels, custom sounds, independent volume, gradual fade-in, and
              vibration. On top of that, WakeLeap adds mission validation, a streak
              counter, and all features including extra mission types and
              configurable snooze.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">
              WakeLeap vs a standard alarm clock
            </h3>
            <table className="mt-4 w-full text-sm">
              <thead>
                <tr className="text-left text-muted">
                  <th className="py-2">Feature</th>
                  <th className="py-2">WakeLeap</th>
                  <th className="py-2">Standard alarm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Dismiss by tapping", "No", "Yes"],
                  ["Mission required", "Yes", "No"],
                  ["Snooze control", "Configurable / disable", "Always on"],
                  ["Streak tracking", "Yes", "No"],
                  ["Works offline", "Yes", "Yes"],
                  ["Independent volume", "Yes", "Sometimes"],
                ].map((r) => (
                  <tr key={r[0]}>
                    <td className="py-2 text-foreground">{r[0]}</td>
                    <td className="py-2 text-accent font-semibold">{r[1]}</td>
                    <td className="py-2 text-muted">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Missions */}
      <Section
        eyebrow="WakeLeap missions"
        title="Five mission types in the WakeLeap alarm clock app"
        subtitle="Each alarm in WakeLeap has exactly one Mission. Pick the WakeLeap Mission that fits your morning."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-border bg-surface p-6 hover:border-accent/60 transition"
            >
              <div className="text-3xl" aria-hidden="true">
                {m.icon}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{m.desc}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-dashed border-border bg-surface/40 p-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-foreground">
              More WakeLeap missions coming
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              The mission engine in WakeLeap uses a plugin pattern, so new WakeLeap
              mission types can be added without changing core alarm logic.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link
            href="/features"
            className="text-accent font-semibold hover:underline"
          >
            Explore all WakeLeap alarm clock app features →
          </Link>
        </div>
      </Section>

      {/* How it works */}
      <Section
        eyebrow="How WakeLeap works"
        title="Set a WakeLeap alarm, pick a WakeLeap Mission, wake up for real"
        subtitle="WakeLeap walks you through creating your first WakeLeap alarm and WakeLeap Mission during onboarding."
      >
        <ol className="grid md:grid-cols-3 gap-6">
          {[
            {
              n: "1",
              t: "Set your WakeLeap alarm",
              d: "Choose the time, repeat days, label, sound, and volume for your WakeLeap alarm.",
            },
            {
              n: "2",
              t: "Pick a WakeLeap Mission",
              d: "Select one WakeLeap Mission such as Object Hunt, push-ups, a photo, make your bed, or a Bible verse, and configure its parameters.",
            },
            {
              n: "3",
              t: "Wake up and complete it",
              d: "When the WakeLeap alarm triggers, WakeLeap plays the sound and shows the WakeLeap Mission screen. Finish the WakeLeap Mission to silence the alarm and grow your WakeLeap streak.",
            },
          ].map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-background font-black">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {s.t}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Pricing teaser */}
      <Section
        eyebrow="WakeLeap pricing"
        title="WakeLeap pricing: free alarm app to start, free to go further"
        subtitle="WakeLeap is free to use, with all features included. Download and start using WakeLeap today."
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-foreground">WakeLeap Free</h3>
            <p className="mt-1 text-sm text-muted">Basic WakeLeap alarm clock features</p>
            <p className="mt-4 text-3xl font-black">$0</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Create and manage WakeLeap alarms</li>
              <li>• Basic WakeLeap mission types</li>
              <li>• Built-in WakeLeap alarm sounds</li>
              <li>• WakeLeap vibration support</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-accent bg-surface p-6 relative">
            <span className="absolute top-4 right-4 text-xs font-semibold text-accent">
              Recommended
            </span>
            <h3 className="text-lg font-semibold text-foreground">WakeLeap Free</h3>
            <p className="mt-1 text-sm text-muted">
              All WakeLeap missions and advanced controls
            </p>
            <p className="mt-4 text-3xl font-black">
              {ANNUAL_PRICE_LABEL}
              <span className="text-sm font-normal text-muted"> /year</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• All 5+ WakeLeap mission types</li>
              <li>• Configurable WakeLeap snooze with limits</li>
              <li>• Disable WakeLeap snooze entirely</li>
              <li>• WakeLeap sounds and fade-in</li>
              <li>• WakeLeap monthly plan available</li>
            </ul>
            <Link
              href="/pricing"
              className="mt-6 inline-flex items-center rounded-full bg-accent px-5 py-2 font-semibold text-background hover:opacity-90 transition"
            >
              See full WakeLeap pricing
            </Link>
          </div>
        </div>
      </Section>

      {/* SEO keyword-rich section */}
      <Section
        eyebrow="Wake up better"
        title="A motivational alarm for heavy sleepers and morning routines"
        subtitle="WakeLeap is an alarm app and wakeup app for people who struggle to wake up on the first alarm."
      >
        <div className="max-w-3xl space-y-4 text-muted leading-relaxed">
          <p>
            If you are a heavy sleeper, the snooze button is the enemy. WakeLeap
            is an alarm clock app that acts as a snooze blocker: the WakeLeap
            alarm keeps ringing until you complete a Mission, so no snooze is
            possible without action. This turns a simple alarm into a
            motivational alarm that gets you moving.
          </p>
          <p>
            WakeLeap fits into your daily routine and morning habits. Whether you
            want a morning alarm for workdays, a morning schedule for weekends, or
            a healthy morning start, WakeLeap supports morning routines for heavy
            sleepers. Use WakeLeap as your morning alarm, set multiple alarms,
            and build a consistent wake time.
          </p>
          <p>
            WakeLeap is a free alarm app to download, with all features:
            WakeLeap. WakeLeap works as an alarm on silent mode, supports
            alarm volume control, and prevents missed alarms from battery
            optimization on Android.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="WakeLeap FAQ" title="Frequently asked questions about WakeLeap">
        <div className="max-w-3xl">
          <FAQ items={homeFaqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-surface/40 border-y border-border">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to stop snoozing with WakeLeap?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Download WakeLeap and set your first WakeLeap Mission alarm tonight. Wake up
            for real tomorrow morning with WakeLeap.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-background hover:opacity-90 transition"
            >
              Get WakeLeap on Google Play
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 font-semibold text-foreground hover:border-accent transition"
            >
              Download WakeLeap on App Store
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}