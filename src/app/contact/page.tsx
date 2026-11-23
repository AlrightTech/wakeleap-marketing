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
          <h3 className="text-lg font-semibold text-foreground">Support form</h3>
          <form className="mt-4 space-y-4" action={`mailto:${SUPPORT_EMAIL}`} method="post" encType="text/plain">
            <div>
              <label htmlFor="name" className="block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-1 w-full rounded-lg border border-border bg-surface-2 px-3 py-2 text-foreground focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-border bg-surface-2 px-3 py-2 text-foreground focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 w-full rounded-lg border border-border bg-surface-2 px-3 py-2 text-foreground focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-2 font-semibold text-background hover:opacity-90 transition"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}