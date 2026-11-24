"use client";

import { useEffect } from "react";

/**
 * Lightweight Google Tag Manager / GA4 analytics loader.
 *
 * Activate only if you have a container or property ID — set the
 * NEXT_PUBLIC_ANALYTICS_ID environment variable (e.g. GTM-XXXXXXX or the
 * GA4 Measurement ID). When unset (the default), the component renders
 * nothing and no analytics are sent.
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  if (!id) return null;

  useEffect(() => {
    const gtag: Array<string | object> = ((window as any).dataLayer || []);
    gtag.push(["js", new Date()]);
    gtag.push(["config", id]);
    (window as any).dataLayer = gtag;

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
