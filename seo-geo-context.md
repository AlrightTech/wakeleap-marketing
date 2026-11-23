Feed this rulebook to your AI assistant before running Prompt 1 so every file and page follows GEO/SEO standards from line one.
Site Hierarchy & URL Structure

text
://yourdomain.com                     (Home / Primary App Landing Page)
├── /features/                      (Core Feature Overview)
│   └── /features/[slug]            (High-intent use-case pages)
├── /pricing                        (Transparent Tier & Plan Table)
├── /compare/                       (Competitor Comparison Hub)
│   └── /compare/[app]-vs-[comp]    (Direct "Vs" landing pages)
├── /blog/                          (Topic Cluster Hub)
│   └── /blog/[slug]                (Pillar & supporting articles)
├── /download                       (Direct Store Links, QR & OS Specs)
├── /about                          (Developer Entity, E-E-A-T & Team)
├── /editors                        (Editorial Guidelines & Author Bios)
├── /contact                        (Support Email & Contact Form)
├── /privacy                        (Play Store & App Store Compliant)
├── /terms                          (Terms of Service)
├── /llms.txt                       (Plain-Markdown AI Crawler Index)
├── /robots.txt                     (AI Search Bot Permissions)
└── /sitemap.xml                    (Dynamic Next.js XML Sitemap)

Use code with caution.
Technical Next.js SEO & GEO Rules

• Server-Side Rendering (SSR/SSG): Render all text, comparison tables, pricing, and FAQs in server HTML. Never hide core content behind client-side JS tabs.
• JSON-LD Schema: Inject SoftwareApplication + FAQPage schema on the homepage/download page, and Article + FAQPage schema on all blog posts with accurate dateModified tags.
• Metadata: Configure Next.js Metadata API with unique titles, descriptions, canonical URLs, and OpenGraph (og:image) tags on every route.
• AI Crawler Access: Explicitly allow OAI-SearchBot, PerplexityBot, ClaudeBot, and Google-Extended in robots.txt.
Content & RAG Optimization Rules

• Direct Answers (BLUF): Start every H2 and H3 with a standalone 2–3 sentence direct answer (75–150 words).
• Entity Anchoring: Repeat the explicit [App Name] and subject names in every paragraph—avoid vague pronouns ("it", "they", "this app").
• Hard Data & Tables: Include concrete metrics, pricing numbers, and Markdown/HTML comparison tables in every major page.
• Reading Level: Write in clear, plain language (8th–10th grade level) with zero marketing fluff.

Store URLs

https://play.google.com/store/apps/details?id=com.alrighttech.wayk
https://apps.apple.com/us/app/wake-up-alarm-clock-missions/id6817215800