import { buildMetadata } from "@/lib/seo";
import { SUPPORT_EMAIL } from "@/lib/site";
import Section from "@/components/Section";

export const metadata = buildMetadata({
  title: "Contact WakeLeap — Support and Inquiries",
  description: "Contact the WakeLeap team at Dialed Labs Inc. for support, privacy, or partnership inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Contact the WakeLeap team"
      subtitle="Reach Dialed Labs Inc. for support, privacy requests, or partnerships."
    >
      <div className="max-w-2xl space-y-6">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold text-foreground">Email</h3>
          <p className="mt-2 text-muted">
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p className="mt-1 text-sm text-muted">
            We aim to respond within two business days.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold text-foreground">Contact form</h3>
          <p className="mt-2 text-sm text-muted">
            Send a message to{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=WakeLeap+Support`}
              className="text-accent hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
            . Include your name and a reply email address so we can respond to you.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=WakeLeap+Support`}
            className="mt-4 inline-flex rounded-full bg-accent px-5 py-2 font-semibold text-background hover:opacity-90 transition"
          >
            Compose a message to WakeLeap support →
          </a>
        </div>
      </div>
    </Section>
  );
}