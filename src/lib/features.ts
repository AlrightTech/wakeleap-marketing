

export type Feature = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  body: string[];
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export const features: Feature[] = [
  {
    slug: "mission-alarm-clock",
    title: "Mission Alarm Clock",
    h1: "Mission Alarm Clock: wake up by completing a task",
    description:
      "A mission alarm clock from WakeLeap requires you to finish a physical or cognitive task before the alarm stops. No tap-to-dismiss.",
    body: [
      "A mission alarm clock is an alarm clock where silencing the alarm requires completing a task. WakeLeap is a mission alarm clock app built by Dialed Labs Inc. for Android, with an iOS version planned. In WakeLeap, every alarm has exactly one Mission attached to it, and the alarm sound does not stop until that Mission is completed.",
      "Standard alarm clocks let you tap a button to dismiss the sound. That tap is easy to do while half asleep, which is why many people snooze three to five times every morning. WakeLeap removes the tap-to-dismiss path. The alarm keeps playing, the screen stays awake, and the only way to silence WakeLeap is to finish the Mission.",
      "WakeLeap offers five mission types at launch: Object Hunt, Physical Exercise, Photo Mission, Make Your Bed, and Read a Bible Verse. The mission engine in WakeLeap uses a plugin pattern, so more mission types can be added without changing core alarm logic.",
    ],
    bullets: [
      "Alarm sound does not stop until the Mission is done",
      "Screen stays awake during Mission execution",
      "Five mission types at launch, more planned",
      "Works fully offline for the core alarm",
      "Streak counter tracks consecutive successful wake-ups",
    ],
    faqs: [
      {
        q: "What is a mission alarm clock?",
        a: "A mission alarm clock is an alarm clock that requires you to complete a task before the alarm stops. WakeLeap is a mission alarm clock app where each alarm has one Mission, and the alarm sound continues until that Mission is finished.",
      },
      {
        q: "Can I snooze a mission alarm in WakeLeap?",
        a: "WakeLeap supports configurable snooze with count limits as a free feature. You can also disable snooze entirely so the only way to silence the alarm is completing the Mission.",
      },
    ],
  },
  {
    slug: "object-hunt",
    title: "Object Hunt Alarm",
    h1: "Object Hunt alarm: find an object to stop the alarm",
    description:
      "WakeLeap Object Hunt makes you locate and photograph a specific object, such as your shoes or coffee mug, before the alarm stops.",
    body: [
      "The Object Hunt mission in WakeLeap requires you to find and photograph a specific object before the alarm is silenced. You configure the target object when you set the alarm, for example your shoes, your coffee mug, or your keys.",
      "When the WakeLeap alarm triggers, the alarm sound plays and the Mission screen shows the object you must find. You walk to the object, take a photo, and WakeLeap validates the photo. Only after validation does the alarm stop.",
      "Object Hunt works well for heavy snoozers because it forces you out of bed and across the room. The camera permission in WakeLeap is requested only when a photo-based mission is active.",
    ],
    bullets: [
      "Configure the target object before bed",
      "Take a photo to validate completion",
      "Forces you out of bed and moving",
      "Camera permission requested only when needed",
      "Works on devices with rear camera fallback",
    ],
    faqs: [
      {
        q: "How does the Object Hunt mission work in WakeLeap?",
        a: "In WakeLeap, you choose an object when setting the alarm. When the alarm triggers, WakeLeap shows the object on screen and you must photograph it. The alarm stops only after WakeLeap validates the photo.",
      },
      {
        q: "Does Object Hunt need internet?",
        a: "No. The core alarm and Mission validation in WakeLeap work offline. Internet is only needed for account sync.",
      },
    ],
  },
  {
    slug: "push-ups",
    title: "Push-Up Alarm",
    h1: "Push-up alarm: do reps to silence the alarm",
    description:
      "WakeLeap push-up alarm requires a set number of push-ups, confirmed manually or tracked with sensors, before the alarm stops.",
    body: [
      "The Physical Exercise mission in WakeLeap requires you to complete a set number of repetitions, such as push-ups, before the alarm is silenced. You choose the exercise type and rep count when you set the alarm.",
      "At launch, WakeLeap uses manual confirmation for exercise counting. Automated motion-sensor counting, such as push-up detection via accelerometer or camera, is planned as a future enhancement after a feasibility study.",
      "The push-up alarm in WakeLeap suits fitness-motivated risers who want movement immediately upon waking. The Mission UI uses large, high-contrast controls operable by a groggy user.",
    ],
    bullets: [
      "Set the exercise type and rep count before bed",
      "Manual confirmation at launch",
      "Automated sensor counting planned",
      "Large, high-contrast Mission UI",
      "Streak counter rewards consistency",
    ],
    faqs: [
      {
        q: "Does WakeLeap count push-ups automatically?",
        a: "At launch, WakeLeap uses manual confirmation for exercise missions. Automated push-up detection via sensors is a planned future enhancement.",
      },
      {
        q: "Is the push-up alarm suitable for beginners?",
        a: "Yes. You choose the rep count in WakeLeap, so you can start with a low number and increase it over time as your fitness improves.",
      },
    ],
  },
  {
    slug: "photo-mission",
    title: "Photo Mission Alarm",
    h1: "Photo mission alarm: take a photo to stop the alarm",
    description:
      "WakeLeap photo mission requires a photo of a subject like the sky, your face, or your made bed before the alarm stops.",
    body: [
      "The Photo mission in WakeLeap requires you to take a photo of a specified subject before the alarm is silenced. Common subjects include the sky, your face, or your made bed.",
      "You configure the photo subject when you set the alarm. When the WakeLeap alarm triggers, the alarm sound plays and the Mission screen tells you what to photograph. You take the photo, WakeLeap validates it, and then the alarm stops.",
      "Photo missions in WakeLeap are a light cognitive task that gets you looking at something real in the morning, which helps break the snooze habit without heavy physical effort.",
    ],
    bullets: [
      "Subjects: sky, face, made bed, and more",
      "Photo validation before dismissal",
      "Light cognitive wake-up task",
      "Camera permission only when active",
      "Rear camera fallback supported",
    ],
    faqs: [
      {
        q: "What subjects can a WakeLeap photo mission use?",
        a: "WakeLeap supports photo subjects such as the sky, your face, and your made bed. More subjects can be added because the mission engine uses a plugin pattern.",
      },
    ],
  },
  {
    slug: "make-your-bed",
    title: "Make Your Bed Alarm",
    h1: "Make your bed alarm: confirm a tidy bed to stop the alarm",
    description:
      "WakeLeap make-your-bed mission requires you to photograph or confirm a completed task before the alarm stops.",
    body: [
      "The Make Your Bed mission in WakeLeap requires you to photograph or confirm that you made your bed before the alarm is silenced. It turns the first task of the day into the price of stopping the alarm.",
      "When the WakeLeap alarm triggers, you make your bed, take a photo or confirm completion, and WakeLeap validates it. The alarm stops only after validation.",
      "Making your bed first thing is a small win that sets the tone for the day. WakeLeap ties that habit to the alarm so it becomes automatic.",
    ],
    bullets: [
      "Photo or confirmation validation",
      "Builds a daily tidy-bed habit",
      "Pairs well with the streak counter",
      "Works offline",
      "Accessible Mission UI",
    ],
    faqs: [
      {
        q: "How does WakeLeap verify I made my bed?",
        a: "WakeLeap verifies the Make Your Bed mission by photo or task confirmation, depending on how you configure it when setting the alarm.",
      },
    ],
  },
  {
    slug: "bible-verse",
    title: "Bible Verse Alarm",
    h1: "Bible verse alarm: read a verse to stop the alarm",
    description:
      "WakeLeap Bible verse mission presents a daily verse and requires you to confirm reading it before the alarm stops.",
    body: [
      "The Read a Bible Verse mission in WakeLeap presents a daily Bible verse and requires you to confirm you read it before the alarm is silenced. It suits users who want their morning to start with intention and meaning.",
      "When the WakeLeap alarm triggers, the alarm sound plays and the Mission screen shows the verse. You read it and confirm, and only then does the alarm stop.",
      "WakeLeap presents a different verse each day so the Mission stays fresh. The mission type is one of five available in WakeLeap at launch.",
    ],
    bullets: [
      "Daily Bible verse presented at alarm",
      "Confirm reading to dismiss",
      "Mindful, purposeful wake-up",
      "Works offline for the core alarm",
      "Part of the five mission types at launch",
    ],
    faqs: [
      {
        q: "Does the Bible verse mission need internet?",
        a: "The core alarm and mission system in WakeLeap work offline. Internet is only needed for account sync.",
      },
    ],
  },
  {
    slug: "snooze-blocker",
    title: "Snooze Blocker",
    h1: "Snooze blocker: disable snooze so the only way out is the Mission",
    description:
      "WakeLeap can disable snooze entirely so the only dismissal path is completing the Mission.",
    body: [
      "A snooze blocker removes the ability to snooze an alarm. WakeLeap includes a snooze blocker option: you can disable snooze entirely so the only way to silence the alarm is completing the Mission.",
      "Standard alarms make snoozing one tap away. WakeLeap makes snoozing a free, configurable feature with count limits, and lets you turn it off completely.",
      "The snooze blocker in WakeLeap is a high-priority feature because habitual snoozing is the problem WakeLeap is built to solve.",
    ],
    bullets: [
      "Disable snooze entirely",
      "Configurable snooze with count limits (free)",
      "Mission completion is the only dismissal path",
      "Helps heavy snoozers break the habit",
      "Available on Android and iOS",
    ],
    faqs: [
      {
        q: "Can I turn off snooze in WakeLeap?",
        a: "Yes. WakeLeap lets you disable snooze entirely so the only way to silence the alarm is completing the Mission.",
      },
    ],
  },
];

export function getFeature(slug: string) {
  return features.find((f) => f.slug === slug);
}