/** Local WebP Play Store screenshots (max ~828w phones / ~1200w tablets). */

export type Screenshot = {
  src: string;
  alt: string;
  device: "phone" | "tablet";
  width: number;
  height: number;
};

const phoneShots: Screenshot[] = Array.from({ length: 8 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/store/shot-${n}-phone.webp`,
    alt: `WakeLeap mission alarm clock app screenshot ${i + 1} (phone) from Google Play`,
    device: "phone" as const,
    width: 414,
    height: 896,
  };
});

const tabletShots: Screenshot[] = Array.from({ length: 8 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/store/shot-${n}-tablet.webp`,
    alt: `WakeLeap mission alarm clock app screenshot ${i + 1} (tablet) from Google Play`,
    device: "tablet" as const,
    width: 900,
    height: 1200,
  };
});

export const screenshots: Screenshot[] = [...phoneShots, ...tabletShots];
export const phoneScreenshots = phoneShots;
export const tabletScreenshots = tabletShots;