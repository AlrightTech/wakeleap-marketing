import { buildMetadata } from "@/lib/seo";
import { DEVELOPER, SUPPORT_EMAIL, PLAY_STORE_URL, APP_STORE_URL } from "@/lib/site";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";

export const metadata = buildMetadata({
  title: "About WakeLeap — Dialed Labs Inc.",
  description:
    "WakeLeap is built by Dialed Labs Inc. Learn about the mission-based alarm clock app, its developer, and its goals.",
  path: "/about",
});

const faqs = [
  {
    q: "Who built WakeLeap?",
    a: "WakeLeap is built by Dialed Labs Inc., the product owner and developer of the mission-based alarm clock app.",
  },
  {
    q: "What is the goal of WakeLeap?",
    a: "The goal of WakeLeap is to help heavy snoozers and routine seekers wake up for real by requiring a Mission before the alarm stops.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="About WakeLeap and Dialed Labs Inc."
        subtitle="WakeLeap is a mission-based alarm clock app built to help you wake up for real."
      >
        <div className="max-w-3xl space-y-4 text-muted leading-relaxed">
          <p>
            WakeLeap is a mobile alarm clock application developed by Dialed Labs
            Inc. Dialed Labs Inc. is the product owner and developer of WakeLeap,
            available on Android through Google Play; the WakeLeap iOS version is planned (iOS 15+).
          </p>
          <p>
            The idea behind WakeLeap is simple. Most alarm clocks stop with one tap.
            That tap is too easy to do while half asleep, so many people snooze
            three to five times every morning. WakeLeap removes the tap-to-dismiss
            path and replaces it with a Mission: a physical or cognitive task
            that must be completed before the alarm stops.
          </p>
          <p>
            WakeLeap includes five mission types at launch: Object Hunt, Physical
            Exercise, Photo Mission, Make Your Bed, and Read a Bible Verse. The
            mission engine uses a plugin pattern so more types can be added
            without changing core alarm logic.
          </p>
          <p>
            Dialed Labs Inc. is committed to privacy and security. All data
            between the WakeLeap app and backend servers is encrypted with TLS 1.2 or
            higher. Payment data is handled exclusively through Google Play
            Billing and Apple In-App Purchase and is never stored on Dialed Labs
            servers.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-foreground">Developer</h3>
            <p className="mt-2 text-sm text-muted">{DEVELOPER}</p>
            <p className="mt-1 text-sm text-muted">Product owner and developer of WakeLeap.</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <p className="mt-2 text-sm text-muted">
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
                {SUPPORT_EMAIL}
              </a>
            </p>
            <p className="mt-1 text-sm text-muted">
              For support, privacy, or partnership inquiries.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-foreground">Platforms</h3>
            <p className="mt-2 text-sm text-muted">Android (Google Play) available now.</p>
            <p className="mt-1 text-sm text-muted">iOS (App Store) planned.</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-foreground">Stores</h3>
            <div className="mt-2 flex flex-col gap-2">
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                Google Play listing
              </a>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                App Store listing
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="About WakeLeap FAQ">
        <div className="max-w-3xl">
          <FAQ items={faqs} />
        </div>
      </Section>
    </>
  );
}