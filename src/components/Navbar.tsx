"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PLAY_STORE_URL } from "@/lib/site";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compare", label: "Compare" },
  { href: "/blog", label: "Blog" },
  { href: "/download", label: "Download" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav
        className="container-x flex h-16 items-center justify-between"
        aria-label="Primary"
      >
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

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background hover:opacity-90 transition"
          >
            Download App
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
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
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x flex flex-col py-4 gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground py-2"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background"
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}