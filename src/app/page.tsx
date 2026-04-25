import { APPS, STUDIO } from "@/lib/apps";
import { Topbar } from "@/components/Topbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Catalogue } from "@/components/Catalogue";

export default function HomePage() {
  return (
    <>
      <div className="shell">
        <Topbar active="index" />
        <Hero />
      </div>
      <Marquee />
      <div className="shell">
        <Catalogue apps={APPS} />
        <About />
      </div>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section style={{ padding: "80px 0 100px" }}>
      <div className="rise rise-1 eyebrow" style={{ marginBottom: 24 }}>
        Vol. 01 · 04 apps in rotation
      </div>

      <h1 className="rise rise-2" style={{
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "clamp(2.5rem, 8vw, 6rem)",
        lineHeight: 1.02,
        letterSpacing: "-0.045em",
        margin: "0 0 28px",
      }}>
        Small tools.<br />
        Made carefully,<br />
        for the phone in your pocket.
      </h1>

      <div className="rise rise-3" style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: 60,
        alignItems: "end",
        marginTop: 48,
      }}>
        <p style={{
          fontSize: "1.0625rem",
          lineHeight: 1.55,
          margin: 0,
          maxWidth: 600,
          color: "var(--muted)",
        }}>
          {STUDIO.name} is a one-person studio building focused iOS apps. No subscriptions you forget about,
          no dark patterns, no analytics empires. Just small, useful objects you keep on your home screen.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
          <a href="#apps" className="btn">
            Browse the catalogue
            <span className="btn__arrow">→</span>
          </a>
          <div className="mono" style={{ color: "var(--muted)" }}>
            ↓ scroll · 4 entries
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats: [string, string][] = [
    ["04", "apps shipped"],
    ["100%", "on-device when possible"],
    ["0", "trackers, ever"],
  ];
  return (
    <section id="about" style={{ padding: "120px 0", borderTop: "1px solid var(--rule)" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        gap: 80,
        alignItems: "start",
      }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>The studio</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: 0,
          }}>
            One person.<br />
            Many small ideas.
          </h2>
        </div>

        <div style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--ink-soft)" }}>
          <p style={{ marginTop: 0 }}>
            {STUDIO.name} is a workshop, not a startup. Each app is built to do one thing well, ship at a fair
            one-time price, and stay out of your way.
          </p>
          <p>
            No dashboards begging for engagement. No newsletters disguised as notifications. The bar is simple:
            would I keep this on my own home screen?
          </p>

          <dl style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            marginTop: 56,
            paddingTop: 32,
            borderTop: "1px solid var(--rule)",
          }}>
            {stats.map(([n, l]) => (
              <div key={l}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "var(--ink)",
                }}>{n}</div>
                <div className="mono" style={{ color: "var(--muted)", marginTop: 10 }}>{l}</div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
