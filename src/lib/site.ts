export const SITE_NAME = "WakeLeap";
export const SITE_TAGLINE = "Mission-Based Alarm Clock to Wake Up";
export const SITE_DESCRIPTION =
  "WakeLeap is a mission-based alarm clock app for Android and iOS. To silence the alarm, you must complete a Mission such as an Object Hunt, push-ups, a photo, or reading a Bible verse. Built by Dialed Labs Inc. Listed as Wayk on Google Play.";
// Prefer NEXT_PUBLIC_SITE_URL in deploy env. Canonical live host is wakeleap.com
// (wakeleap.app currently has no public DNS; nginx redirects .app → .com when set).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://wakeleap.com";
export const DEVELOPER = "Dialed Labs Inc.";
/** Google Play listing title */
export const PLAY_STORE_LISTING_NAME = "Wayk - Mission Alarm Clock App";
/** App Store listing title */
export const APP_STORE_LISTING_NAME = "Wake Up Alarm Clock Missions";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.alrighttech.wayk";
export const APP_STORE_URL =
  "https://apps.apple.com/us/app/wake-up-alarm-clock-missions/id6817215800";
export const SUPPORT_EMAIL = "support@wakeleap.app";
export const SITE_LOGO_URL = `${SITE_URL}/logo.png`;
export const MIN_ANDROID = "Android 8.0 (API 26)+";
export const MIN_IOS = "iOS 15+";
export const KEYWORDS = [
  "mission alarm",
  "alarm clock",
  "wake up",
  "morning routine",
  "alarm app",
  "wakeup app",
  "heavy sleeper",
  "alarm snooze",
  "morning alarm",
  "no snooze",
  "morning habits",
  "motivational alarm",
  "morning schedule",
  "healthy morning",
  "daily routine",
  "alarm clock app",
  "WakeLeap",
  "Dialed Labs",
];