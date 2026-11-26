"use client";

import Script from "next/script";

const GTM_ID = "GTM-M4FZBCGP";

/**
 * Google Tag Manager loader for WakeLeap.
 */
export default function Analytics() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtm-init" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
        `.trim()}
      </Script>
    </>
  );
}
