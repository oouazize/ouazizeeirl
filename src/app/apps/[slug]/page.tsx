import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { apps, getApp } from "@/lib/apps";

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
  };
}

export default async function AppPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Link
        href="/#apps"
        className="text-sm text-white/50 transition hover:text-white/80"
      >
        ← All apps
      </Link>

      <header className="relative mt-8 overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
        <div
          className={`absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br ${app.accent} opacity-30 blur-3xl`}
        />
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div
            className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${app.accent} text-4xl font-bold text-white shadow-2xl`}
          >
            {app.icon}
          </div>
          <div>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/60">
              {app.category}
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {app.name}
            </h1>
            <p className="mt-2 text-lg text-white/60">{app.tagline}</p>
          </div>
        </div>
        <p className="relative mt-8 max-w-2xl text-base leading-relaxed text-white/75">
          {app.description}
        </p>
        <div className="relative mt-8 flex flex-wrap gap-3">
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Download on the App Store ↗
          </a>
          <Link
            href={`/apps/${app.slug}/privacy`}
            className="glass rounded-full px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            Privacy policy
          </Link>
        </div>
      </header>

      <section className="mt-12 grid gap-5 sm:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Features
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {app.features.map((f) => (
              <li key={f} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-2xl p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Support
          </h2>
          <p className="mt-4 text-sm text-white/70">
            Questions, bug reports, or feature requests? Email us anytime.
          </p>
          <a
            href={`mailto:${app.contactEmail}?subject=${encodeURIComponent(`${app.name} support`)}`}
            className="mt-4 inline-block text-sm text-white underline-offset-4 hover:underline"
          >
            {app.contactEmail}
          </a>
        </div>
      </section>
    </article>
  );
}
