"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compare", label: "Compare" },
  { href: "/blog", label: "Blog" },
  { href: "/download", label: "Download" },
];

const downloadCtaClass =
  "inline-flex items-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-background shadow-[0_0_24px_-6px_rgba(245,158,11,0.55)] hover:bg-accent-soft transition";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav
        className="container-x flex h-16 items-center justify-between"
        aria-label="Primary"
      >
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

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className={`hidden sm:inline-flex ${downloadCtaClass}`}
          >
            Download App
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-x flex flex-col py-4 gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base text-foreground hover:bg-surface"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/download"
              onClick={() => setOpen(false)}
              className={`mt-3 justify-center ${downloadCtaClass} py-2.5`}
            >
              Download App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
