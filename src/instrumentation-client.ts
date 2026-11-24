// PostHog web analytics — privacy-first configuration:
// • persistence "memory": no cookies or localStorage, so no consent banner is
//   needed; each page load is an anonymous visit.
// • no session recording, no autocapture of form fields, respects Do Not Track.
// • IPs are discarded server-side (project setting "anonymize_ips").
// Only pageviews and the explicit `app_store_click` event are sent.
import posthog from "posthog-js";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
    persistence: "memory",
    person_profiles: "identified_only",
    capture_pageview: "history_change",
    capture_pageleave: true,
    autocapture: false,
    disable_session_recording: true,
    disable_surveys: true,
    respect_dnt: true,
  });
}
