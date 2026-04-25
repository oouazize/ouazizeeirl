import Link from "next/link";
import { STUDIO } from "@/lib/apps";

interface Props {
  active?: "index" | "apps" | "about" | "privacy";
  trail?: string;
  homeHref?: string;
  privacyHref?: string;
  appHref?: string;
  appName?: string;
}

export function Topbar({ active = "index", trail, homeHref = "/", privacyHref, appHref, appName }: Props) {
  return (
    <header className="topbar">
      <div className="topbar__brand">
        <Link href={homeHref} className="topbar__brand-mark">
          dev<em>apps</em>
        </Link>
        {trail && <span className="topbar__brand-meta">{trail}</span>}
        {!trail && <span className="topbar__brand-meta">EST · 2024 · INDEPENDENT</span>}
      </div>
      <nav className="topbar__nav">
        <Link href={homeHref} className={active === "index" ? "active" : ""}>Index</Link>
        {appHref && appName ? (
          <Link href={appHref}>{appName}</Link>
        ) : (
          <Link href="/#apps" className={active === "apps" ? "active" : ""}>Apps</Link>
        )}
        {privacyHref ? (
          <Link href={privacyHref} className={active === "privacy" ? "active" : ""}>Privacy</Link>
        ) : (
          <Link href="/#about" className={active === "about" ? "active" : ""}>Studio</Link>
        )}
        <a href={`mailto:${STUDIO.contact}`}>Contact</a>
      </nav>
    </header>
  );
}
