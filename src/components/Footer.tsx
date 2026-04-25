import Link from "next/link";
import { APPS, STUDIO } from "@/lib/apps";

export function Footer() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot__big">
          Built quietly,<br />
          shipped weekly.
        </div>

        <div className="foot__grid">
          <div className="foot__col">
            <h4>devapps</h4>
            <p style={{ margin: 0, color: "var(--muted)", maxWidth: 320, fontSize: "0.9375rem", lineHeight: 1.55 }}>
              A small studio shipping focused iOS tools. Independently owned. Ad-free, forever.
            </p>
          </div>
          <div className="foot__col">
            <h4>Apps</h4>
            <ul>
              {APPS.map((a) => (
                <li key={a.id}><Link href={`/apps/${a.id}`}>{a.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="foot__col">
            <h4>Privacy</h4>
            <ul>
              {APPS.map((a) => (
                <li key={a.id}><Link href={`/privacy/${a.id}`}>{a.name} policy</Link></li>
              ))}
            </ul>
          </div>
          <div className="foot__col">
            <h4>Elsewhere</h4>
            <ul>
              <li><a href={`mailto:${STUDIO.contact}`}>Email</a></li>
              <li><a href="#">App Store</a></li>
              <li><a href="#">Mastodon</a></li>
              <li><a href="#">RSS</a></li>
            </ul>
          </div>
        </div>

        <div className="foot__bottom">
          <span>© 2026 devapps · independent studio</span>
          <span>Set in Instrument Serif &amp; Geist · 38.7°N 9.1°W</span>
        </div>
      </div>
    </footer>
  );
}
