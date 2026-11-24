import { buildMetadata } from "@/lib/seo";
import { SUPPORT_EMAIL } from "@/lib/site";
import Section from "@/components/Section";

export const metadata = buildMetadata({
  title: "Privacy Policy — WakeLeap",
  description:
    "Privacy Policy for WakeLeap, the mission-based alarm clock app by Dialed Labs Inc. Covers data collection, GDPR, CCPA, and data deletion.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: May 2026">
      <div className="max-w-3xl space-y-4 text-muted leading-relaxed">
        <p>
          This Privacy Policy describes how Dialed Labs Inc. (we, us, our)
          collects, uses, and protects information when you use WakeLeap, our
          mission-based alarm clock app for Android, with an iOS version planned (the App).
        </p>
        <h3 className="text-lg font-semibold text-foreground">Information we collect</h3>
        <p>
          WakeLeap may collect account information such as email and password when
          you create an account, device and usage data needed to operate alarms,
          and purchase status validated through Google Play Billing or Apple
          In-App Purchase. Camera data is captured only during photo-based
          missions and is not stored beyond mission validation.
        </p>
        <h3 className="text-lg font-semibold text-foreground">How we use information</h3>
        <p>
          We use information to provide alarm and mission features, sync
          settings across devices, validate purchases, and improve the App.
          We do not sell personal information.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Data sharing</h3>
        <p>
          WakeLeap discloses data types collected and shared in accordance with
          Google Play Data Safety requirements. Payment data is handled
          exclusively by Google Play Billing and Apple In-App Purchase and is
          never stored on Dialed Labs servers.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Security</h3>
        <p>
          All data transmitted between the App and backend servers is encrypted
          using TLS 1.2 or higher. Passwords are hashed using bcrypt or Argon2
          and never stored in plaintext.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Your rights (GDPR and CCPA)</h3>
        <p>
          Users in the EU and California have rights to access, correct, and
          delete their personal data. You may request complete data deletion, and
          we will process it within 30 days of request.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Data deletion</h3>
        <p>
          To request data deletion, email {SUPPORT_EMAIL}. We will delete your
          data within 30 days of the request.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Children</h3>
        <p>
          WakeLeap is not directed to children under 13. We do not knowingly collect
          personal information from children under 13.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Changes to this policy</h3>
        <p>
          We may update this Privacy Policy. Changes will be posted on this page
          with an updated date.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Contact</h3>
        <p>
          Questions about this Privacy Policy:{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}