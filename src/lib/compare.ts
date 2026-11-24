export type Comparison = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string[];
  rows: [string, string, string][];
  verdict: string;
  faqs: { q: string; a: string }[];
};

export const comparisons: Comparison[] = [
  {
    slug: "wakeleap-vs-alarmy",
    title: "WakeLeap vs Alarmy",
    h1: "WakeLeap vs Alarmy: mission-based alarm clock comparison",
    description:
      "Compare WakeLeap and Alarmy mission-based alarm clocks: mission types, snooze control, pricing, and offline support.",
    intro: [
      "WakeLeap and Alarmy are both mission-based alarm clock apps that require a task to dismiss the alarm. WakeLeap is built by Dialed Labs Inc. for Android, with an iOS version planned. This page compares the two on mission types, snooze control, pricing, and offline behavior.",
      "WakeLeap focuses on a small set of high-intent missions: Object Hunt, Physical Exercise, Photo Mission, Make Your Bed, and Read a Bible Verse. WakeLeap also offers a configurable snooze with count limits and the option to disable snooze entirely.",
    ],
    rows: [
      ["Mission types", "5+ at launch", "Many (photo, math, shake, etc.)"],
      ["Disable snooze entirely", "Yes", "Limited"],
      ["Streak counter", "Yes", "Yes"],
      ["Offline core alarm", "Yes", "Partial"],
      ["Free tier", "Yes", "Yes"],
      ["Annual price", "free", "Subscription (varies)"],
      ["Platform", "Android + iOS planned", "Android + iOS"],
    ],
    verdict:
      "WakeLeap suits users who want a focused mission set, strong snooze control, and a simple price. Alarmy suits users who want a large library of mission types.",
    faqs: [
      {
        q: "Is WakeLeap better than Alarmy?",
        a: "WakeLeap and Alarmy both require a task to dismiss the alarm. WakeLeap offers five focused mission types, configurable snooze with a disable option. The better choice depends on which mission types you prefer.",
      },
      {
        q: "Does WakeLeap have as many missions as Alarmy?",
        a: "WakeLeap launches with five mission types and uses a plugin pattern so more can be added. Alarmy offers a larger mission library today.",
      },
    ],
  },
  {
    slug: "wakeleap-vs-sleep-as-android",
    title: "WakeLeap vs Sleep as Android",
    h1: "WakeLeap vs Sleep as Android: alarm clock comparison",
    description:
      "Compare WakeLeap and Sleep as Android on mission alarms, sleep tracking, pricing, and platform support.",
    intro: [
      "WakeLeap is a mission-based alarm clock app. Sleep as Android is a sleep-tracking alarm app with smart wake-up and mission dismissal. This page compares the two on core purpose, mission types, and pricing.",
      "WakeLeap is built around the wake-up moment: an alarm that cannot be silenced without completing a Mission. Sleep as Android is built around sleep tracking and smart alarms, with missions as one feature.",
    ],
    rows: [
      ["Primary focus", "Mission-based wake-up", "Sleep tracking + smart alarm"],
      ["Mission types", "5+ at launch", "Several (math, QR, NFC, etc.)"],
      ["Sleep tracking", "No", "Yes"],
      ["Disable snooze", "Yes", "Yes"],
      ["Offline core alarm", "Yes", "Yes"],
      ["Price", "Free", "Free"],
      ["Platform", "Android + iOS planned", "Android only"],
    ],
    verdict:
      "Choose WakeLeap if you want a focused mission alarm with a simple price and iOS support planned. Choose Sleep as Android if you want deep sleep tracking on Android.",
    faqs: [
      {
        q: "Does WakeLeap track sleep?",
        a: "No. WakeLeap focuses on the wake-up moment and mission-based dismissal. Sleep tracking is a possible future enhancement.",
      },
      {
        q: "Is Sleep as Android available on iOS?",
        a: "Sleep as Android is Android only. WakeLeap supports Android with an iOS version planned.",
      },
    ],
  },
  {
    slug: "wakeleap-vs-default-alarm",
    title: "WakeLeap vs Default Alarm Clock",
    h1: "WakeLeap vs the default alarm clock on your phone",
    description:
      "Compare WakeLeap mission alarm clock with the default alarm clock on Android and iOS.",
    intro: [
      "The default alarm clock on your phone lets you silence the alarm with one tap. WakeLeap is a mission-based alarm clock that requires a task before the alarm stops.",
      "For heavy snoozers, the default alarm is the problem: the tap is too easy while half asleep. WakeLeap removes that path and replaces it with a Mission.",
    ],
    rows: [
      ["Dismiss by tapping", "No", "Yes"],
      ["Mission required", "Yes", "No"],
      ["Snooze control", "Configurable / disable", "Always on"],
      ["Streak tracking", "Yes", "No"],
      ["Built-in sounds", "Yes", "Yes"],
      ["Price", "Free", "Free"],
      ["Platform", "Android + iOS planned", "Built into OS"],
    ],
    verdict:
      "The default alarm is free and simple. WakeLeap is for people who snooze through the default alarm and need a Mission to get out of bed.",
    faqs: [
      {
        q: "Why replace the default alarm with WakeLeap?",
        a: "The default alarm can be dismissed with one tap, which heavy snoozers do while half asleep. WakeLeap requires a Mission, so you must get up and complete a task before the alarm stops.",
      },
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((c) => c.slug === slug);
}