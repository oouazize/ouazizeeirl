import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { APPS, STUDIO, appById, type AppEntry } from "@/lib/apps";
import { Topbar } from "@/components/Topbar";

export function generateStaticParams() {
  return APPS.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const app = appById(slug);
  if (!app) return { title: "Not found" };
  return {
    title: `${app.name} — ${app.sub} · devapps`,
    description: app.pitch,
  };
}

export default async function AppPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = appById(slug);
  if (!app) notFound();

  const accentVar = { ["--accent" as string]: app.accent } as React.CSSProperties;

  return (
    <div style={accentVar}>
      <div className="shell">
        <Topbar
          trail={`/ ${app.name.toUpperCase()}`}
          appHref={`/apps/${app.id}`}
          appName="All apps"
          privacyHref={`/privacy/${app.id}`}
        />
        <Hero app={app} />
        <Story app={app} />
        <Features app={app} />
        <Showcase app={app} />
        <PressKit app={app} />
        <Other app={app} />
      </div>
      <FooterBlock app={app} />
    </div>
  );
}

function Hero({ app }: { app: AppEntry }) {
  return (
    <section style={{ padding: "60px 0 80px", position: "relative" }}>
      <div className="rise rise-1 mono" style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", color: "var(--muted)", marginBottom: 32 }}>
        <span>Entry · {app.number}</span>
        <span>·</span>
        <span>{app.tag}</span>
        <span>·</span>
        <span>{app.year}</span>
      </div>

      <div className="grid-detail-hero">
        <div>
          <h1 className="rise rise-2" style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(2rem, 7vw, 5rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.045em",
            margin: "0 0 20px",
          }}>
            {app.name}<span style={{ color: app.accent }}>.</span>
          </h1>
          <div className="rise rise-3" style={{
            fontSize: "clamp(1.0625rem, 1.6vw, 1.25rem)",
            lineHeight: 1.5,
            color: "var(--muted)",
            maxWidth: 560,
            marginBottom: 32,
          }}>
            {app.pitch}
          </div>

          <div className="rise rise-4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={app.appstore} target="_blank" rel="noopener" className="btn">
              Download on App Store
              <span className="btn__arrow">↗</span>
            </a>
            <a href="#features" className="btn btn--ghost">See what it does</a>
            <a href="#presskit" className="btn btn--ghost">Press kit</a>
          </div>
        </div>

        <div className="rise rise-3" style={{
          display: "grid",
          placeItems: "center",
          padding: 32,
          background: app.surface,
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--rule)",
          position: "relative",
        }}>
          <div className="mono" style={{
            position: "absolute", top: 16, left: 20,
            color: "var(--muted)",
          }}>{app.number} · {app.tag}</div>
          <div style={{ width: "min(280px, 80%)" }}>
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "9 / 19.5",
              borderRadius: 38,
              overflow: "hidden",
              background: "#1a1814",
              boxShadow: "0 30px 60px -20px rgba(26,24,20,0.4), 0 0 0 1px rgba(26,24,20,0.1)",
            }}>
              <Image
                src={app.screenshots[0]}
                alt={`${app.name} hero screenshot`}
                fill
                sizes="(max-width: 720px) 60vw, 280px"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story({ app }: { app: AppEntry }) {
  return (
    <section style={{ padding: "72px 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div className="grid-story">
        <div className="eyebrow">The pitch</div>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.25rem, 2.4vw, 1.625rem)",
          fontWeight: 500,
          lineHeight: 1.45,
          letterSpacing: "-0.015em",
          margin: 0,
          color: "var(--ink)",
          textWrap: "pretty",
        }}>{app.long}</p>
      </div>
    </section>
  );
}

function Features({ app }: { app: AppEntry }) {
  return (
    <section id="features" style={{ padding: "120px 0" }}>
      <header className="grid-cat-header">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Features</div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 600,
            fontSize: "clamp(1.875rem, 4vw, 3rem)",
            lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0,
          }}>
            What&apos;s in the box.
          </h2>
        </div>
        <div className="mono" style={{ color: "var(--muted)", textAlign: "right" }}>
          {String(app.features.length).padStart(2, "0")} capabilities
        </div>
      </header>

      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {app.features.map((f, i) => (
          <li key={i} className="feature-row">
            <div className="mono" style={{ color: "var(--muted)" }}>{String(i + 1).padStart(2, "0")}</div>
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 600,
              fontSize: "1.125rem", letterSpacing: "-0.015em",
              margin: 0, lineHeight: 1.3,
              color: "var(--ink)",
            }}>{f[0]}</h3>
            <p style={{
              margin: 0,
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: 560,
            }}>{f[1]}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Showcase({ app }: { app: AppEntry }) {
  const shots = app.screenshots;
  return (
    <section className="showcase" style={{
      borderRadius: "var(--radius-lg)",
      background: "var(--paper-warm)",
      border: "1px solid var(--rule)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="eyebrow" style={{ marginBottom: 28, position: "relative", zIndex: 2 }}>
        Screenshots · {String(shots.length).padStart(2, "0")} captures
      </div>

      <div
        style={{
          display: "flex",
          gap: 20,
          overflowX: "auto",
          padding: "12px 4px 24px",
          scrollSnapType: "x mandatory",
          position: "relative",
          zIndex: 2,
        }}
      >
        {shots.map((src, i) => (
          <div
            key={src}
            style={{
              flex: "0 0 auto",
              width: "min(260px, 60vw)",
              aspectRatio: "9 / 19.5",
              borderRadius: 32,
              overflow: "hidden",
              background: "#1a1814",
              boxShadow: "0 30px 60px -20px rgba(26,24,20,0.4), 0 0 0 1px rgba(26,24,20,0.1)",
              transform: i % 2 === 1 ? "translateY(-20px)" : "translateY(0)",
              scrollSnapAlign: "start",
              position: "relative",
            }}
          >
            <Image
              src={src}
              alt={`${app.name} screenshot ${i + 1}`}
              fill
              sizes="(max-width: 720px) 60vw, 260px"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function PressKit({ app }: { app: AppEntry }) {
  return (
    <section id="presskit" style={{ padding: "100px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="grid-press">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Press kit</div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 600,
            fontSize: "clamp(1.625rem, 3.5vw, 2.5rem)",
            lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 14px",
          }}>
            For writers &amp; reviewers.
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 360, fontSize: "0.9375rem", lineHeight: 1.55 }}>
            Everything you need to write about {app.name}: high-resolution screenshots, app icon,
            boilerplate copy, and quick facts.
          </p>
        </div>

        <div className="grid-press-cards">
          <KitCard label="App icon · 1024px" sub="PNG · ZIP" accent={app.accent} />
          <KitCard label="Screenshots" sub={`6 × PNG · ${app.tag}`} accent={app.accent} />
          <KitCard label="Boilerplate" sub="Short / medium / long" accent={app.accent} />
          <KitCard label="Founder photo" sub="JPG · 4000px" accent={app.accent} />
          <KitCard label="App Store link" sub={app.appstore.replace("https://", "")} accent={app.accent} href={app.appstore} />
          <KitCard label="Email contact" sub={STUDIO.contact} accent={app.accent} href={`mailto:${STUDIO.contact}`} />
        </div>
      </div>
    </section>
  );
}

function KitCard({ label, sub, href = "#" }: { label: string; sub: string; accent?: string; href?: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      style={{
        display: "block",
        padding: 20,
        background: "var(--paper)",
        borderRadius: "var(--radius)",
        border: "1px solid var(--rule)",
        transition: "border-color .15s, background .15s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 12 }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 600, marginBottom: 4, color: "var(--ink)" }}>{label}</div>
          <div style={{ color: "var(--muted)", fontSize: "0.8125rem" }}>{sub}</div>
        </div>
        <span style={{
          width: 28, height: 28, borderRadius: "50%",
          border: `1px solid var(--rule)`, color: "var(--ink)",
          display: "grid", placeItems: "center", fontSize: 13,
          flexShrink: 0,
        }}>↓</span>
      </div>
    </a>
  );
}

function Other({ app }: { app: AppEntry }) {
  const others = APPS.filter((a) => a.id !== app.id);
  return (
    <section style={{ padding: "100px 0", borderTop: "1px solid var(--rule)" }}>
      <header style={{ marginBottom: 40 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Continue</div>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 600,
          fontSize: "clamp(1.625rem, 3.5vw, 2.25rem)",
          letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0,
        }}>
          Other entries in the catalogue.
        </h2>
      </header>
      <div className="grid-others">
        {others.map((o) => (
          <Link key={o.id} href={`/apps/${o.id}`} style={{
            display: "block", padding: 20,
            background: "var(--paper)",
            border: "1px solid var(--rule)",
            borderRadius: "var(--radius)",
            position: "relative", overflow: "hidden",
            minHeight: 200,
            transition: "border-color .15s",
          }}>
            <div className="mono" style={{ color: "var(--muted)", marginBottom: 14 }}>{o.number} · {o.tag}</div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: 6,
              color: "var(--ink)",
            }}>{o.name}</div>
            <div style={{
              color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.5,
            }}>{o.sub}</div>
            <div style={{
              position: "absolute", right: 16, bottom: 16,
              width: 32, height: 32, borderRadius: "50%",
              border: `1px solid var(--rule)`, color: "var(--ink)",
              display: "grid", placeItems: "center", fontSize: 13,
            }}>→</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FooterBlock({ app }: { app: AppEntry }) {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot__big">
          Get {app.name}<br />
          on the App Store.
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 64, flexWrap: "wrap" }}>
          <a href={app.appstore} target="_blank" rel="noopener" className="btn">
            Download
            <span className="btn__arrow">↗</span>
          </a>
          <Link href={`/privacy/${app.id}`} className="btn btn--ghost">Privacy policy</Link>
          <Link href="/" className="btn btn--ghost">All apps</Link>
        </div>

        <div className="foot__bottom">
          <span>© 2026 devapps · independent studio</span>
          <span>{app.name} · {app.tag} · v.1.4</span>
        </div>
      </div>
    </footer>
  );
}
