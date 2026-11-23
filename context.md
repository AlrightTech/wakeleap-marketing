# WakeLeap — Product Context (from SRD v1.0, May 2026)

## Product Overview

- **App name:** WakeLeap (Alarm Clock to Wake Up)
- **Developer:** Dialed Labs Inc. (Product Owner & Developer)
- **Type:** Mission-based alarm clock mobile app
- **Core differentiator:** Users must complete a pre-configured physical or cognitive task ("Mission") before the alarm is silenced, addressing habitual snoozing and promoting purposeful morning routines.
- **Platforms:** Android (Google Play) live; iOS planned (iOS 15+).
- **Android support:** Android 8.0 (API 26) and above.
- **Store URLs:**
  - Google Play: https://play.google.com/store/apps/details?id=com.alrighttech.wayk
  - App Store: https://apps.apple.com/us/app/wake-up-alarm-clock-missions/id6817215800

## Target Audience

- Heavy snoozers who struggle to get out of bed
- Individuals seeking consistent morning routines
- Fitness-conscious users wanting movement at wake-up
- Users with religious/mindfulness morning practices
- General users seeking accountability in morning schedules

## User Personas

1. **The Heavy Snoozer** — hits snooze 3–5 times; needs external accountability; values simple mission setup before bed.
2. **The Habit Builder** — wants consistent routine; uses alarm as daily productivity trigger; interested in streaks/progress.
3. **The Fitness-Motivated Riser** — wants movement (push-ups) immediately upon waking; values physical challenges as missions.
4. **The Purposeful Starter** — motivated by spiritual/mindfulness practices (Bible verse, prayer); wants morning to start with intention.

## Functional Requirements

### Alarm Management (FR-ALM)
- FR-ALM-01: Create alarms with specified time (hours/minutes). (High)
- FR-ALM-02: Configure repeat days (Mon–Fri, weekends, custom). (High)
- FR-ALM-03: Assign label/name to each alarm. (Medium)
- FR-ALM-04: Enable/disable individual alarms without deleting. (High)
- FR-ALM-05: Delete existing alarms. (High)
- FR-ALM-06: Display list of all alarms (time, days, label, enabled status). (High)
- FR-ALM-07: Edit saved alarm configuration. (High)
- FR-ALM-08: Display time remaining until next scheduled alarm on home screen. (Medium)

### Alarm Trigger & Dismissal (FR-TRG)
- FR-TRG-01: Trigger alarm sound at configured time even when app is background/screen off. (High)
- FR-TRG-02: Display Mission screen immediately upon trigger; mission must be completed before dismissal. (High)
- FR-TRG-03: Prevent dismissal until Mission is completed. (High)
- FR-TRG-04: Continue playing alarm if Mission not completed within configurable time window. (High)
- FR-TRG-05: Configurable snooze (with count limits) as free feature. (Medium)
- FR-TRG-06: Option to disable snooze entirely (only dismissal path is Mission completion). (High)
- FR-TRG-07: Keep screen awake and alarm interface active during mission execution. (High)

### Mission System (FR-MSN) — core differentiator
Each alarm has exactly one mission. Minimum 5 mission types at launch; architecture allows future additions; plugin/strategy pattern.

- FR-MSN-01: Object Hunt — locate and photograph a specific object. (High)
- FR-MSN-02: Physical Exercise (e.g., push-ups) — specified reps tracked via sensors or manual confirmation. (High)
- FR-MSN-03: Photo mission — take a photo of specified subject (sky, face, made bed). (High)
- FR-MSN-04: Make Your Bed confirmation — photograph or confirm completed task. (Medium)
- FR-MSN-05: Read a Bible Verse — present daily verse; confirm reading before dismissal. (Medium)
- FR-MSN-06: At least 5 distinct mission types at launch; extensible architecture. (High)
- FR-MSN-07: Mission pre-selection before bed. (High)
- FR-MSN-08: (Future) Multiple missions per alarm, all must be completed. (Low)
- FR-MSN-09: Clear on-screen instructions for each mission type at trigger. (High)
- FR-MSN-10: Validate mission completion before dismissal. (High)

### Sound & Ringtone (FR-SND)
- FR-SND-01: Library of built-in sounds: standard tones, nature sounds, high-intensity (airhorn). (High)
- FR-SND-02: Preview each sound before selecting. (Medium)
- FR-SND-03: Alarm volume independent of media volume. (High)
- FR-SND-04: Gradual volume increase (crescendo/fade-in). (Medium)
- FR-SND-05: Select device ringtones/music as alarm sound (subject to OS permissions). (Medium)
- FR-SND-06: Trigger at full volume even in silent/vibrate mode, with disclosed override. (High)
- FR-SND-07: Vibration alongside or instead of audio. (Medium)

### Pricing (FR-PRC)
- FR-PRC-01: WakeLeap is free to use, with all features included at no cost. (High)
- FR-PRC-02: No subscription, no trial, and no paid tier in WakeLeap. (High)
- FR-PRC-03: All WakeLeap features (missions, snooze control, sounds) available free. (High)
- FR-PRC-04: Restore settings on reinstall/new device via account sync. (High)

### User Profile & Settings (FR-USR)
- FR-USR-01: Account creation via email/password or social sign-in (Google, Apple). (Medium)
- FR-USR-02: Guest mode with limited features. (Medium)
- FR-USR-03: Configure morning routine goal (target wake-up time, days/week). (Medium)
- FR-USR-04: Streak counter for consecutive successful mission completions. (Medium)
- FR-USR-05: Notification preferences including pre-alarm reminders. (Low)
- FR-USR-06: Theme preference (light/dark/system). (Low)
- FR-USR-07: Data deletion requests per privacy regulations. (High)

### Notifications & Reminders (FR-NOT)
- FR-NOT-01: Optional pre-alarm reminder (e.g., 30 min before) prompting mission selection if not configured. (Medium)
- FR-NOT-02: Motivational notification on successful mission completion (opt-in). (Low)
- FR-NOT-03: Request OS notification/alarm permissions during onboarding with rationale. (High)
- FR-NOT-04: Graceful handling when permissions denied; guide user to enable. (High)

### Onboarding & First-Run (FR-ONB)
- FR-ONB-01: First-run onboarding explaining mission-based alarm concept. (High)
- FR-ONB-02: Walk user through creating first alarm + mission during onboarding. (High)
- FR-ONB-03: Request required permissions (alarm scheduling, camera, notifications) during onboarding with rationale. (High)
- FR-ONB-04: Allow skipping onboarding; accessible again from settings. (Low)

## Non-Functional Requirements

### Performance (NFR-PER)
- NFR-PER-01: Alarm triggers within ±2 seconds of configured time. (High)
- NFR-PER-02: Mission screen renders and interactive within 1 second of trigger. (High)
- NFR-PER-03: Cold start ≤ 3 seconds on mid-range devices (3 GB RAM, Android 10+). (High)
- NFR-PER-04: Mission validation completes within 5 seconds on standard network. (Medium)
- NFR-PER-05: Alarm functions with <500 MB free RAM. (High)

### Reliability & Availability (NFR-REL)
- NFR-REL-01: Core alarm works fully offline. (High)
- NFR-REL-02: Scheduler survives device restarts; alarms re-registered on boot. (High)
- NFR-REL-03: No missed alarms due to OS battery optimization; request exemption during setup. (High)
- NFR-REL-04: Backend services target 99.5% monthly uptime. (Medium)
- NFR-REL-05: Alarm + mission system continue locally during backend outage. (High)

### Security & Privacy (NFR-SEC)
- NFR-SEC-01: TLS 1.2+ for all app–backend data transmission. (High)
- NFR-SEC-02: Passwords hashed with bcrypt/Argon2; never plaintext. (High)
- NFR-SEC-03: Comply with Google Play Data Safety requirements. (High)
- NFR-SEC-04: Comply with GDPR (EU) and CCPA (California). (High)
- NFR-SEC-05: Camera/mic permissions requested only when required by active mission. (High)
- NFR-SEC-06: Payment data handled exclusively via Play Billing/App Store IAP; never stored on Dialed Labs servers. (High)
- NFR-SEC-07: Complete data deletion within 30 days of request. (High)

### Usability & Accessibility (NFR-USA)
- NFR-USA-01: Mission dismissal UI operable by groggy user; large, high-contrast, minimal fine motor skill. (High)
- NFR-USA-02: Support system font size scaling without layout breakage. (Medium)
- NFR-USA-03: Light and dark mode. (Medium)
- NFR-USA-04: WCAG 2.1 AA contrast (4.5:1 min for normal text). (Medium)
- NFR-USA-05: Onboarding completable without account creation. (Medium)
- NFR-USA-06: Android TalkBack support for primary navigation. (Low)
- NFR-USA-07: Mission selection UI operable within 3 taps from home screen. (Medium)

### Compatibility & Portability (NFR-CMP)
- NFR-CMP-01: Android 8.0 (API 26)+. (High)
- NFR-CMP-02: iOS 15+ when released. (High)
- NFR-CMP-03: Screen sizes 4.7"–7" (phones and small tablets). (High)
- NFR-CMP-04: Portrait and landscape on tablets. (Low)
- NFR-CMP-05: Support devices without physical home button (gesture nav). (High)

### Maintainability & Scalability (NFR-MNT)
- NFR-MNT-01: Mission engine follows plugin/strategy pattern. (High)
- NFR-MNT-02: ≥70% unit test coverage for core alarm scheduling and mission validation. (Medium)
- NFR-MNT-03: Backend scales horizontally to 500,000 concurrent registered users. (Medium)
- NFR-MNT-04: Config values (pricing, trial duration, mission list) remotely configurable via feature flags without app update. (Medium)

### Localization & Internationalization (NFR-L10)
- NFR-L10-01: UI strings externalized in resource files. (Medium)
- NFR-L10-02: 12-hour (AM/PM) and 24-hour time formats based on device locale. (High)
- NFR-L10-03: RTL layout for Arabic/Hebrew in future release. (Low)

## Constraints & Assumptions

### Technical Constraints
- Android battery optimization (Doze) may restrict background alarms on certain OEMs (Xiaomi, Huawei); app must guide users to whitelist.
- Exact alarm scheduling on Android 12+ requires SCHEDULE_EXACT_ALARM or USE_EXACT_ALARM permission.
- Camera-based mission validation must work on devices without front camera (rear camera fallback).
- IAP logic governed by Google Play Billing / Apple StoreKit; server-side receipt validation required.

### Business Constraints
- WakeLeap is free to use; all features included at no cost.
- No subscription price; WakeLeap is free.
- Must adhere to App Store review guidelines (permissions, disclosures).

### Assumptions
- Users grant camera permissions for photo missions; app degrades gracefully if denied.
- Reliable internet available during purchase/account ops; not required for core alarm.
- Exercise counting initially uses manual confirmation; automated motion-sensor counting is future enhancement.

## Key Use Cases

- **UC-01 Set an Alarm with Mission:** Tap 'New Alarm' → set time → select repeat days → Mission selection (choose type, configure params) → save. Result: alarm scheduled with mission linked.
- **UC-02 Dismiss Alarm via Mission Completion:** Alarm triggers (sound + Mission screen) → user reads instructions → performs mission → system validates → on success alarm stops + success feedback; streak incremented. Alternative: failure within time window → volume escalates + re-prompt.
- **UC-03 Download and use WakeLeap for free:** Download WakeLeap, create an alarm with a Mission, and use all features at no cost.

## Open Issues (v1.0)

- Multi-mission per alarm requested but not implemented; architecture should accommodate.
- Pricing is free; no subscription sensitivity.
- Automated exercise repetition counting (push-up detection) needs feasibility study.
- iOS availability pending; use cross-platform abstractions.

## Future Enhancements (Out of Scope v1.0)

- Social/accountability features (share wake-up streak with friends).
- Integration with health platforms (Apple Health, Google Fit) to log morning activity.
- AI-generated mission suggestions based on user history/goals.
- Wearable support (WearOS, watchOS) to trigger missions from smartwatch.
- RTL language support and full multilingual localization.
- Adaptive alarm volume based on ambient noise detection.

## App Entity & Brand Facts (for SEO/GEO)

- **App name:** WakeLeap (also referred to as "Wake Up Alarm Clock Missions" on the App Store).
- **Developer entity:** Dialed Labs Inc.
- **Category:** Alarm clock / productivity / morning routine app.
- **Key feature terms:** mission-based alarm, mission alarm clock, wake up alarm, snooze blocker, Object Hunt, push-up alarm, photo mission, Bible verse mission, make your bed mission.
- **Pricing:** Free, all features included.
- **Free:** All features included at no cost.
- **Platforms:** Android (Google Play) and iOS (App Store).
- **Differentiator vs standard alarm clocks:** Cannot dismiss by tapping; must complete a Mission.