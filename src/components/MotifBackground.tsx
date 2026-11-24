/**
 * Decorative orange alarm / clock / time motifs. Purely visual — aria-hidden.
 */
export default function MotifBackground({
  density = "site",
}: {
  density?: "site" | "hero" | "cta";
}) {
  if (density === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden text-accent" aria-hidden="true">
        <IconAlarm className="absolute left-[6%] top-[12%] h-20 w-20 animate-motif-float opacity-[0.16]" />
        <IconClock className="absolute right-[8%] top-[18%] h-14 w-14 animate-motif-drift opacity-[0.14]" />
        <IconBell className="absolute left-[18%] bottom-[22%] h-10 w-10 animate-motif-float opacity-[0.12]" />
        <IconTime className="absolute right-[14%] bottom-[16%] h-14 w-14 animate-motif-drift opacity-[0.15]" />
        <IconRing className="absolute left-[42%] top-[8%] h-36 w-36 animate-motif-spin opacity-[0.08]" />
        <IconHourglass className="absolute right-[28%] top-[42%] h-10 w-10 animate-motif-float opacity-[0.12]" />
        <span className="absolute left-[10%] top-[48%] text-2xl font-extrabold tracking-tight animate-motif-drift opacity-[0.13]">
          6:00
        </span>
        <span className="absolute right-[6%] top-[58%] text-xl font-extrabold tracking-tight animate-motif-float opacity-[0.1]">
          7:30
        </span>
      </div>
    );
  }

  if (density === "cta") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden text-accent" aria-hidden="true">
        <IconAlarm className="absolute left-[8%] top-[20%] h-14 w-14 animate-motif-float opacity-[0.18]" />
        <IconBell className="absolute right-[12%] top-[18%] h-10 w-10 animate-motif-drift opacity-[0.16]" />
        <IconClock className="absolute left-[20%] bottom-[12%] h-14 w-14 animate-motif-float opacity-[0.14]" />
        <IconTime className="absolute right-[18%] bottom-[18%] h-10 w-10 animate-motif-drift opacity-[0.16]" />
        <span className="absolute left-[45%] top-[15%] text-2xl font-extrabold tracking-tight animate-motif-float opacity-[0.12]">
          AM
        </span>
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden text-accent"
      aria-hidden="true"
    >
      <IconAlarm className="absolute left-[3%] top-[8%] h-20 w-20 animate-motif-float opacity-[0.07]" />
      <IconClock className="absolute right-[4%] top-[22%] h-14 w-14 animate-motif-drift opacity-[0.06]" />
      <IconBell className="absolute left-[8%] top-[38%] h-10 w-10 animate-motif-float opacity-[0.06]" />
      <IconRing className="absolute right-[6%] top-[48%] h-36 w-36 animate-motif-spin opacity-[0.05]" />
      <IconHourglass className="absolute left-[5%] top-[62%] h-10 w-10 animate-motif-drift opacity-[0.06]" />
      <IconTime className="absolute right-[5%] top-[72%] h-14 w-14 animate-motif-float opacity-[0.06]" />
      <span className="absolute left-[12%] top-[82%] text-xl font-extrabold tracking-tight animate-motif-drift opacity-[0.06]">
        5:45
      </span>
      <IconAlarm className="absolute right-[10%] top-[88%] h-10 w-10 animate-motif-float opacity-[0.06]" />
    </div>
  );
}

function IconAlarm({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="34" r="16" />
      <path d="M32 26v8l6 4" />
      <path d="M18 18l-6-6M46 18l6-6" />
      <path d="M20 50l-4 6M44 50l4 6" />
      <path d="M14 22a20 20 0 0 1 36 0" />
    </svg>
  );
}

function IconClock({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="20" />
      <path d="M32 16v16l10 6" />
      <circle cx="32" cy="32" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconBell({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 10v4" />
      <path d="M20 28a12 12 0 0 1 24 0c0 10 4 14 4 14H16s4-4 4-14" />
      <path d="M28 50a4 4 0 0 0 8 0" />
    </svg>
  );
}

function IconTime({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="18" width="44" height="28" rx="6" />
      <path d="M20 32h6M30 32h6M40 32h4" />
      <path d="M22 18V14M42 18V14" />
    </svg>
  );
}

function IconHourglass({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 12h24M20 52h24" />
      <path d="M24 12c0 12 16 12 16 20s-16 8-16 20M40 12c0 12-16 12-16 20s16 8 16 20" />
    </svg>
  );
}

function IconRing({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="14" />
      <circle cx="32" cy="32" r="6" />
    </svg>
  );
}
