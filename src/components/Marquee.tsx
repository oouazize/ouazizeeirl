import { Fragment } from "react";

const ITEMS = [
  "On-device AI", "Privacy-first", "No accounts", "iCloud sync",
  "Universal apps", "Made in Lisbon", "Independent", "Since 2024",
  "On-device AI", "Privacy-first", "No accounts", "iCloud sync",
];

export function Marquee() {
  return (
    <section className="overflow-hidden border-y border-rule bg-paper-warm py-4">
      <div className="flex animate-marquee gap-8 whitespace-nowrap font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted">
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
