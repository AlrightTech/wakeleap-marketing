import { buildMetadata } from "@/lib/seo";
import { SUPPORT_EMAIL } from "@/lib/site";
import Section from "@/components/Section";

export const metadata = buildMetadata({
  title: "Terms of Service — WakeLeap",
  description: "Terms of Service for WakeLeap, the mission-based alarm clock app by Dialed Labs Inc.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section eyebrow="Legal" title="Terms of Service" subtitle="Last updated: May 2026">
      <div className="max-w-3xl space-y-4 text-muted leading-relaxed">
        <p>
          These Terms of Service govern your use of WakeLeap, a mission-based alarm
          clock app provided by Dialed Labs Inc. (we, us, our). By using
          WakeLeap, you agree to these terms.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Use of the app</h3>
        <p>
          WakeLeap is provided for personal, non-commercial use. You agree not to
          misuse the App, attempt to reverse engineer it, or interfere with its
          operation.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Cost</h3>
        <p>
          WakeLeap is free to use. There is no subscription, no trial, and no
          paid tier. All WakeLeap features are free.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Accounts</h3>
        <p>
          You may use WakeLeap in guest mode with limited features. If you create an
          account, you are responsible for keeping your credentials secure.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Disclaimer</h3>
        <p>
          WakeLeap is provided as is without warranties of any kind. We are not
          liable for missed alarms or any damages resulting from use of the App.
          Alarm reliability depends on device settings, battery optimization, and
          permissions granted.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Changes to terms</h3>
        <p>
          We may update these Terms. Continued use of WakeLeap after changes
          constitutes acceptance of the updated terms.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Contact</h3>
        <p>
          Questions about these Terms:{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}