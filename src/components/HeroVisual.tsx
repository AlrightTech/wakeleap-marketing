import { phoneScreenshots } from "@/lib/screenshots";

/**
 * Overlapping phone mockups for the homepage hero — real WakeLeap Play Store
 * screenshots framed like a device preview (ColorDood-style).
 */
export default function HeroVisual() {
  const front = phoneScreenshots[0];
  const mid = phoneScreenshots[1] ?? phoneScreenshots[0];
  const back = phoneScreenshots[2] ?? phoneScreenshots[0];

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] sm:max-w-[400px] lg:mx-0 lg:max-w-none">
      {/* Soft dawn glow behind devices */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
      />

      {/* Back phone — tilted left */}
      <div className="absolute left-[2%] top-[8%] w-[52%] -rotate-6 opacity-55 transition duration-500 hover:opacity-80">
        <PhoneFrame src={back.src} alt="" />
      </div>

      {/* Mid phone — tilted right */}
      <div className="absolute right-[2%] top-[4%] w-[52%] rotate-6 opacity-70 transition duration-500 hover:opacity-90">
        <PhoneFrame src={mid.src} alt="" />
      </div>

      {/* Front phone — centered, sharp */}
      <div className="absolute left-1/2 top-[10%] z-10 w-[60%] -translate-x-1/2 transition duration-500 hover:-translate-y-1">
        <PhoneFrame
          src={front.src}
          alt="WakeLeap mission alarm clock app on a phone — Object Hunt mission screen"
          priority
          ring
        />
      </div>
    </div>
  );
}

function PhoneFrame({
  src,
  alt,
  priority,
  ring,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  ring?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border-[3px] border-white/20 bg-surface shadow-2xl shadow-black/50 ${
        ring ? "ring-1 ring-accent/40" : ""
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center pt-2"
        aria-hidden="true"
      >
        <span className="h-1.5 w-14 rounded-full bg-white/20" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={540}
        height={1168}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="aspect-[9/19.5] h-auto w-full object-cover object-top"
      />
    </div>
  );
}
