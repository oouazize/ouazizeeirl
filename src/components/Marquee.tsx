import { Fragment } from "react";

const ITEMS = [
  "On-device AI", "Privacy-first", "No accounts", "iCloud sync",
  "Universal apps", "Made in Lisbon", "Independent", "Since 2024",
  "On-device AI", "Privacy-first", "No accounts", "iCloud sync",
];

export function Marquee() {
  return (
    <section style={{
      borderTop: "1px solid var(--rule)",
      borderBottom: "1px solid var(--rule)",
      overflow: "hidden",
      padding: "16px 0",
      background: "var(--paper-warm)",
    }}>
      <div style={{
        display: "flex", gap: 32, whiteSpace: "nowrap",
        animation: "marq 50s linear infinite",
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted)",
      }}>
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <Fragment key={i}>
            <span>{t}</span>
            <span>·</span>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
