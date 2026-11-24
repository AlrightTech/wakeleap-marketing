"use client";

import { useRef } from "react";
import { screenshots } from "@/lib/screenshots";

type Item = { src: string; alt: string };

export default function ScreenshotsCarousel({
  items,
  label,
}: {
  items?: Item[];
  label?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const data = items && items.length ? items : screenshots;

  const scroll = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:thin]"
        style={{ scrollbarColor: "#f59e0b #14141f" }}
      >
        {data.map((s, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[32%]"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_16px_48px_-28px_rgba(245,158,11,0.35)] transition hover:border-accent/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label={`Previous ${label ?? "screenshots"}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground hover:border-accent hover:text-accent transition"
        >
          ←
        </button>
        <p className="text-sm text-muted">
          Swipe or use arrows to browse {data.length} {label ?? "screenshots"}
        </p>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label={`Next ${label ?? "screenshots"}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground hover:border-accent hover:text-accent transition"
        >
          →
        </button>
      </div>
    </div>
  );
}