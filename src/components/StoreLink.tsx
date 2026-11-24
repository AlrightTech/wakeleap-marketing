"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { PLAY_STORE_URL, APP_STORE_URL } from "@/lib/site";

/**
 * Link to the WakeLeap app on the right store. iOS devices go to the App
 * Store listing; everything else goes to Google Play. The href is the Google
 * Play URL by default so the markup works for crawlers and non-JavaScript
 * browsers, and is corrected after hydration when the visitor is on iOS.
 */
export default function StoreLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (
      ref.current &&
      /(iPhone|iPad|iPod)/i.test(window.navigator.userAgent)
    ) {
      ref.current.href = APP_STORE_URL;
    }
  }, []);
  return (
    <a
      ref={ref}
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
