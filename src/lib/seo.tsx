import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_LOGO_URL,
  DEVELOPER,
  PLAY_STORE_URL,
  APP_STORE_URL,
} from "./site";

export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage = "/og.png",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords: keywords ?? [SITE_NAME],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: DEVELOPER,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: SITE_LOGO_URL, width: 512, height: 512 },
    sameAs: [PLAY_STORE_URL, APP_STORE_URL],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en"],
    publisher: { "@type": "Organization", name: SITE_NAME },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Android 8.0+",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free to use, with all features included",
    },
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    downloadUrl: "https://play.google.com/store/apps/details?id=com.alrighttech.wayk",
    installUrl: "https://play.google.com/store/apps/details?id=com.alrighttech.wayk",
    sameAs: [
      "https://play.google.com/store/apps/details?id=com.alrighttech.wayk",
      "https://apps.apple.com/us/app/wake-up-alarm-clock-missions/id6817215800",
    ],
    author: {
      "@type": "Organization",
      name: "Dialed Labs Inc.",
    },
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  author = "Dialed Labs Editorial Team",
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    datePublished,
    dateModified,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "Dialed Labs Inc.",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}