import { PLAY_STORE_URL, APP_STORE_URL } from "@/lib/site";

const APP_STORE_BADGE =
  "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83";
const PLAY_STORE_BADGE =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { box: string; playScale: string }> = {
  sm: { box: "h-11 w-[132px]", playScale: "h-auto w-[117%] max-w-none" },
  md: { box: "h-14 w-[168px]", playScale: "h-auto w-[117%] max-w-none" },
  lg: { box: "h-16 w-[192px]", playScale: "h-auto w-[117%] max-w-none" },
};

export function AppStoreBadge({
  size = "lg",
  className = "",
}: {
  size?: Size;
  className?: string;
}) {
  const s = sizes[size];
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex transition hover:scale-105 hover:opacity-90 ${className}`}
      aria-label="Download WakeLeap on the App Store"
    >
      <span className={`inline-flex shrink-0 items-center justify-center ${s.box}`}>
        {/* Official Apple badge — hotlinked per Apple Marketing Guidelines */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={APP_STORE_BADGE}
          alt="Download on the App Store"
          width={250}
          height={83}
          className="h-full w-full max-w-none object-contain"
        />
      </span>
    </a>
  );
}

export function PlayStoreBadge({
  size = "lg",
  className = "",
}: {
  size?: Size;
  className?: string;
}) {
  const s = sizes[size];
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex transition hover:scale-105 hover:opacity-90 ${className}`}
      aria-label="Get WakeLeap on Google Play"
    >
      <span className={`inline-flex shrink-0 items-center justify-center ${s.box}`}>
        {/* Official Google Play badge — hotlinked per Google Play badge guidelines */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PLAY_STORE_BADGE}
          alt="Get it on Google Play"
          width={646}
          height={250}
          className={`${s.playScale} object-contain`}
        />
      </span>
    </a>
  );
}

/** Official App Store + Google Play badges side by side (ColorDood-style). */
export default function StoreBadges({
  size = "lg",
  className = "",
}: {
  size?: Size;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-3 ${className}`}
    >
      <AppStoreBadge size={size} />
      <PlayStoreBadge size={size} />
    </div>
  );
}
