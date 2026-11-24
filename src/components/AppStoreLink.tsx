"use client";

import posthog from "posthog-js";
import type { ReactNode } from "react";

/** App Store link that records an anonymous `app_store_click` (no personal data). */
export function AppStoreLink({
  href,
  app,
  placement,
  className,
  children,
  label,
}: {
  href: string;
  app: string;
  placement: string;
  className?: string;
  children: ReactNode;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
      onClick={() => {
        if (posthog.__loaded) posthog.capture("app_store_click", { app, placement });
      }}
    >
      {children}
    </a>
  );
}
