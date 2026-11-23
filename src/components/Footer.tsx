import Image from "next/image";
import Link from "next/link";
import { PLAY_STORE_URL, APP_STORE_URL } from "@/lib/site";

const cols = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/download", label: "Download" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Comparisons",
    links: [
      { href: "/compare", label: "Comparison Hub" },
      { href: "/compare/wakeleap-vs-alarmy", label: "WakeLeap vs Alarmy" },
      { href: "/compare/wakeleap-vs-sleep-as-android", label: "WakeLeap vs Sleep as Android" },
      { href: "/compare/wakeleap-vs-default-alarm", label: "WakeLeap vs Default Alarm" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/editors", label: "Editorial Guidelines" },
      { href: "/contact", label: "Contact" },
      { href: "/llms.txt", label: "llms.txt" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <Image
                src="/logo.png"
                alt="WakeLeap"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span>WakeLeap</span>
            </Link>
            <p className="mt-4 text-sm text-muted max-w-sm">
              WakeLeap is a mission-based alarm clock app built by Dialed Labs Inc. for
              Android and iOS. To silence the alarm, you complete a Mission.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-2 text-sm hover:border-accent transition"
                aria-label="Get WakeLeap on Google Play"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3 20.5V3.5c0-.4.3-.7.7-.5l13.6 8.5c.3.2.3.7 0 .9L3.7 21c-.4.2-.7-.1-.7-.5z" />
                </svg>
                Google Play
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-2 text-sm hover:border-accent transition"
                aria-label="Get WakeLeap on the App Store"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.5 3.5a3.5 3.5 0 0 1-3.2 2.1 3.5 3.5 0 0 1 3.2-2.1zM12 6.5c-3.5 0-6.5 3-6.5 7 0 4 3 8.5 6.5 8.5s6.5-4.5 6.5-8.5c0-4-3-7-6.5-7z" />
                </svg>
                App Store
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-xs text-muted">
            © 2026 Dialed Labs Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            WakeLeap is a mission-based alarm clock app for Android and iOS.
          </p>
        </div>
      </div>
    </footer>
  );
}