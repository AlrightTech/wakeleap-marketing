import { buildMetadata, JsonLd, softwareApplicationSchema, faqPageSchema } from "@/lib/seo";
import { PLAY_STORE_URL, APP_STORE_URL, MIN_ANDROID, MIN_IOS } from "@/lib/site";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import ScreenshotsCarousel from "@/components/ScreenshotsCarousel";
import { phoneScreenshots, tabletScreenshots } from "@/lib/screenshots";

export const metadata = buildMetadata({
  title: "Download WakeLeap — Mission Alarm Clock for Android & iOS",
  description:
    "Download WakeLeap, the mission-based alarm clock app, on Google Play and the App Store. WakeLeap supports Android 8.0+ and iOS 15+.",
  path: "/download",
});

const faqs = [
  {
    q: "Where can I download WakeLeap?",
    a: "WakeLeap is available on Google Play for Android. An iOS version of WakeLeap for the App Store is planned.",
  },
  {
    q: "What are the system requirements for WakeLeap?",
    a: "WakeLeap requires Android 8.0 (API 26) or above. The iOS version of WakeLeap will require iOS 15 or above.",
  },
  {
    q: "Is WakeLeap free to download?",
    a: "Yes. WakeLeap is free to download, and all WakeLeap features are free to use. There is no subscription.",
  },
  {
    q: "Does WakeLeap work offline?",
    a: "Yes. The core alarm and Mission system in WakeLeap runs fully offline. An internet connection is only needed for WakeLeap account sync.",
  },
  {
    q: "Which devices support WakeLeap?",
    a: "WakeLeap supports Android 8.0 (API 26) and above, and iOS 15 and above when the WakeLeap iOS version is released. WakeLeap runs on phones and small tablets from 4.7 to 7 inches.",
  },
  {
    q: "How does WakeLeap compare to Alarmy?",
    a: "WakeLeap and Alarmy both require a task to dismiss the alarm. WakeLeap offers five focused mission types, configurable snooze with a disable option, and a simple annual price around free.",
  },
];

export default function DownloadPage() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema(), faqPageSchema(faqs)]} />
      <Section
        eyebrow="Download WakeLeap"
        title="Download WakeLeap, the mission-based alarm clock"
        subtitle="Get WakeLeap on your phone and set your first WakeLeap Mission alarm tonight."
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent/60 transition"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-background text-xl font-black">
                ▶
              </span>
              <div>
                <p className="text-sm text-muted">Get WakeLeap on</p>
                <p className="text-xl font-bold text-foreground">Google Play</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted">
              WakeLeap is available now for Android {MIN_ANDROID}.
            </p>
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent/60 transition"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-background text-xl font-black">
                
              </span>
              <div>
                <p className="text-sm text-muted">Download WakeLeap on the</p>
                <p className="text-xl font-bold text-foreground">App Store</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted">
              WakeLeap iOS version planned, requires {MIN_IOS} when released.
            </p>
          </a>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground">WakeLeap in action</h3>
          <p className="mt-2 text-sm text-muted">
            Browse WakeLeap screenshots from Google Play on phones and tablets. Scroll horizontally to see all WakeLeap screenshots.
          </p>
          <div className="mt-4 space-y-8">
            <div>
              <h4 className="text-base font-semibold text-foreground mb-3">
                WakeLeap on phones
              </h4>
              <ScreenshotsCarousel items={phoneScreenshots} label="phone screenshots" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-foreground mb-3">
                WakeLeap on tablets
              </h4>
              <ScreenshotsCarousel items={tabletScreenshots} label="tablet screenshots" />
            </div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-foreground">WakeLeap system requirements</h3>
            <table className="mt-4 w-full text-sm">
              <tbody className="divide-y divide-border">
                {[
                  ["Android", MIN_ANDROID],
                  ["iOS", `${MIN_IOS} (planned for WakeLeap)`],
                  ["Screen sizes", "4.7 to 7 inches (phones and small tablets)"],
                  ["Orientation", "Portrait and landscape on tablets"],
                  ["Offline", "WakeLeap core alarm and WakeLeap missions work offline"],
                ].map((r) => (
                  <tr key={r[0]}>
                    <td className="py-2 text-foreground font-medium">{r[0]}</td>
                    <td className="py-2 text-muted">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-foreground">WakeLeap QR code</h3>
            <p className="mt-2 text-sm text-muted">
              Scan to open the WakeLeap listing on Google Play.
            </p>
            <div className="mt-4 inline-block rounded-xl bg-white p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
                  PLAY_STORE_URL
                )}`}
                alt="QR code linking to WakeLeap on Google Play"
                width={160}
                height={160}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 max-w-4xl">
          <h3 className="text-lg font-semibold text-foreground">WakeLeap permissions</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            WakeLeap requests alarm scheduling, camera, and notification permissions
            during onboarding, with clear rationale. Camera and microphone
            permissions in WakeLeap are requested only when required by an active WakeLeap
            Mission.
          </p>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            <li>• WakeLeap alarm scheduling (exact alarm permission on Android 12+)</li>
            <li>• WakeLeap notifications (pre-alarm reminders)</li>
            <li>• WakeLeap camera (only during photo-based WakeLeap missions)</li>
            <li>• WakeLeap battery optimization exemption (to avoid missed WakeLeap alarms)</li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="WakeLeap FAQ" title="WakeLeap download FAQ">
        <div className="max-w-3xl">
          <FAQ items={faqs} />
        </div>
      </Section>
    </>
  );
}