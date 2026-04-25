import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { APPS, STUDIO, appById } from "@/lib/apps";
import { PRIVACY } from "@/lib/privacy";
import { Topbar } from "@/components/Topbar";

export function generateStaticParams() {
  return APPS.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const app = appById(slug);
  if (!app) return { title: "Not found" };
  return {
    title: `${app.name} — Privacy Policy · devapps`,
    description: `Privacy policy for ${app.name}.`,
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = appById(slug);
  const data = app ? PRIVACY[app.id] : undefined;
  if (!app || !data) notFound();

  const accentVar = { ["--accent" as string]: app.accent } as React.CSSProperties;

  return (
    <div style={accentVar}>
      <div className="shell">
        <Topbar
          trail={`/ ${app.name.toUpperCase()} / PRIVACY`}
          appHref={`/apps/${app.id}`}
          appName={app.name}
          privacyHref={`/privacy/${app.id}`}
          active="privacy"
        />

        <div style={{ padding: "60px 0 40px" }}>
          <div className="prose">
            <div className="rise rise-1 mono" style={{ color: "var(--muted)", marginBottom: 32, display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span>{app.name} · {app.tag}</span>
              <span>·</span>
              <span>Last updated · {data.lastUpdated}</span>
            </div>

            <h1 className="rise rise-2">Privacy policy.</h1>

            <p className="rise rise-3" style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.125rem",
              fontWeight: 500,
              lineHeight: 1.55,
              letterSpacing: "-0.005em",
              color: "var(--ink)",
              marginTop: 28,
              marginBottom: 56,
              borderLeft: `2px solid var(--ink)`,
              paddingLeft: 20,
            }}>
              {data.summary}
            </p>

            <hr />

            {data.blocks.map((block, i) => (
              <div key={i}>
                <h2>{block.heading}</h2>
                {block.body && <p>{block.body}</p>}
                {block.items && (
                  <ul>
                    {block.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ul>
                )}
                {block.subsections && block.subsections.map((s, j) => (
                  <div key={j}>
                    <h3>{s.label}</h3>
                    <p>{s.body}</p>
                  </div>
                ))}
              </div>
            ))}

            <h2>Contact</h2>
            <p>
              Questions or requests? Write to&nbsp;
              <a href={`mailto:${data.contactEmail}`}>{data.contactEmail}</a>.
              For studio inquiries, contact <a href={`mailto:${STUDIO.contact}`}>{STUDIO.contact}</a>.
            </p>

            <h2>Changes</h2>
            <p>
              If we change anything material, we&apos;ll update the date above and post a note in the app.
              See the <Link href="/">studio page</Link> for all current policies.
            </p>

            <hr />

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 40 }}>
              <Link href={`/apps/${app.id}`} className="btn btn--ghost">← Back to {app.name}</Link>
              <Link href="/" className="btn btn--ghost">All apps</Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="foot">
        <div className="shell">
          <div className="foot__bottom" style={{ paddingTop: 0, marginTop: 60 }}>
            <span>© 2026 devapps · independent studio</span>
            <span>{app.name} privacy · {data.lastUpdated}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
