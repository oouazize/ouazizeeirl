"use client";

import { useState } from "react";
import Link from "next/link";
import type { AppEntry } from "@/lib/apps";
import { Mockup } from "./Mockup";

export function Catalogue({ apps }: { apps: AppEntry[] }) {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section id="apps" style={{ padding: "120px 0 60px" }}>
      <header style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40, alignItems: "end",
        marginBottom: 56,
        paddingBottom: 24,
        borderBottom: "1px solid var(--rule)",
      }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>The catalogue</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(1.875rem, 4vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: 0,
          }}>
            Four entries, currently shipping.
          </h2>
        </div>
        <div className="mono" style={{ color: "var(--muted)", textAlign: "right" }}>
          Last updated · Apr 2026<br />
          Sorted by · release order
        </div>
      </header>

      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {apps.map((app) => (
          <AppRow
            key={app.id}
            app={app}
            isHover={hover === app.id}
            onHover={(v) => setHover(v ? app.id : null)}
          />
        ))}
      </ol>
    </section>
  );
}

function AppRow({ app, isHover, onHover }: { app: AppEntry; isHover: boolean; onHover: (v: boolean) => void }) {
  return (
    <li
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      style={{
        position: "relative",
        borderTop: "1px solid var(--rule)",
        transition: "background 0.2s",
        background: isHover ? "var(--paper-warm)" : "transparent",
      }}
    >
      <Link href={`/apps/${app.id}`} style={{
        display: "grid",
        gridTemplateColumns: "60px 1fr 1.4fr 180px 44px",
        alignItems: "center",
        padding: "28px 4px",
        gap: 28,
        position: "relative",
      }}>
        <div className="mono" style={{
          color: "var(--muted)",
          fontSize: "0.78rem",
        }}>{app.number}</div>

        <div>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.25rem, 2.4vw, 1.625rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: 6,
            color: "var(--ink)",
          }}>{app.name}</div>
          <div style={{ color: "var(--muted)", fontSize: "0.875rem" }}>{app.sub}</div>
        </div>

        <div style={{
          fontSize: "0.9375rem",
          lineHeight: 1.5,
          color: "var(--ink-soft)",
          maxWidth: 480,
        }}>{app.pitch}</div>

        <div className="mono" style={{ color: "var(--muted)" }}>
          <div>{app.tag}</div>
          <div style={{ marginTop: 4 }}>{app.year}</div>
        </div>

        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          border: `1px solid ${isHover ? "var(--ink)" : "var(--rule)"}`,
          color: "var(--ink)",
          display: "grid", placeItems: "center",
          transition: "all .2s",
          fontSize: 14,
          background: isHover ? "var(--ink)" : "transparent",
        }}>
          <span style={{ color: isHover ? "#fff" : "var(--ink)" }}>→</span>
        </div>
      </Link>

      <div style={{
        position: "absolute",
        right: 80, top: "50%",
        transform: `translateY(-50%) ${isHover ? "scale(1) rotate(-3deg)" : "scale(0.8) rotate(0deg)"}`,
        opacity: isHover ? 1 : 0,
        width: 160,
        aspectRatio: "9 / 19.5",
        pointerEvents: "none",
        transition: "all .5s cubic-bezier(.2,.7,.2,1)",
        zIndex: 5,
      }}>
        <div className="phone" style={{ width: "100%", height: "100%" }}>
          <div className="phone__notch" />
          <div className="phone__screen">
            <Mockup kind={app.mockup} accent={app.accent} surface={app.surface} />
          </div>
        </div>
      </div>
    </li>
  );
}
