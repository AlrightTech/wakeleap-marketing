import { buildMetadata, JsonLd, softwareApplicationSchema } from "@/lib/seo";
import { MIN_ANDROID, MIN_IOS } from "@/lib/site";
import { AppStoreBadge, PlayStoreBadge } from "@/components/StoreBadges";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import ScreenshotsCarousel from "@/components/ScreenshotsCarousel";
import { phoneScreenshots, tabletScreenshots } from "@/lib/screenshots";

export const metadata = buildMetadata({
  title: "Download WakeLeap — Mission Alarm Clock for Android (iOS Planned)",
  description:
    "Download WakeLeap, the mission-based alarm clock app, on Google Play. WakeLeap supports Android 8.0+; the WakeLeap iOS version is planned (iOS 15+).",
  path: "/download",
  keywords: ["download wakeleap", "wakeleap download", "mission alarm clock download", "alarm app download", "alarm clock app download", "app store alarm clock"],
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
    a: "WakeLeap supports Android 8.0 (API 26) and above; the WakeLeap iOS version is planned (iOS 15+). WakeLeap runs on phones and small tablets from 4.7 to 7 inches.",
  },
  {
    q: "How does WakeLeap compare to Alarmy?",
    a: "WakeLeap and Alarmy both require a task to dismiss the alarm. WakeLeap offers five focused mission types, configurable snooze with a disable option.",
  },
];

export default function DownloadPage() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema()]} />
      <Section
        eyebrow="Download WakeLeap"
        title="Download WakeLeap, the mission-based alarm clock"
        subtitle="Get WakeLeap on your phone and set your first WakeLeap Mission alarm tonight."
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-sm text-muted">Get WakeLeap on</p>
            <p className="mt-1 text-xl font-bold text-foreground">Google Play</p>
            <p className="mt-3 text-sm text-muted">
              WakeLeap is available now for Android {MIN_ANDROID}.
            </p>
            <div className="mt-5">
              <PlayStoreBadge size="md" />
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-sm text-muted">Download WakeLeap on the</p>
            <p className="mt-1 text-xl font-bold text-foreground">App Store</p>
            <p className="mt-3 text-sm text-muted">
              The WakeLeap iOS version is planned, requires {MIN_IOS} when released.
            </p>
            <div className="mt-5">
              <AppStoreBadge size="md" />
            </div>
          </div>
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
              Scan to open this download page on your phone, then choose App Store or Google Play.
            </p>
            <div className="mt-4 inline-block rounded-xl bg-white p-2">
              <img
                src="/qr-download.png"
                alt="QR code linking to the WakeLeap download page"
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