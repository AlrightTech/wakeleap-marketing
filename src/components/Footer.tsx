import Image from "next/image";
import Link from "next/link";
import { AppStoreBadge, PlayStoreBadge } from "@/components/StoreBadges";

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
    <footer className="relative z-[1] mt-24 border-t border-border bg-surface/80 backdrop-blur-sm">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
              <Image
                src="/logo.png"
                alt="WakeLeap"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg ring-1 ring-accent/30"
              />
              <span>WakeLeap</span>
            </Link>
            <p className="mt-4 text-sm text-muted max-w-sm leading-relaxed">
              WakeLeap is a mission-based alarm clock app built by Dialed Labs Inc. for
              Android, with an iOS version planned. To silence the alarm, you complete a Mission.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <AppStoreBadge size="sm" />
              <PlayStoreBadge size="sm" />
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted hover:text-accent transition-colors"
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
