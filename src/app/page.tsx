import Link from "next/link";
import { apps } from "@/lib/apps";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AppsGrid />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-32">
        <div className="animate-fade-up">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Crafted for iOS
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
            <span className="text-gradient">Small apps,</span>
            <br />
            <span className="text-white/95">big delight.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
            A collection of iOS apps by Oussama Ouazize. Each one solves a
            specific problem with care, privacy, and a touch of polish.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#apps"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Browse apps
            </Link>
            <Link
              href="/privacy"
              className="glass rounded-full px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
      <DecorBlobs />
    </section>
  );
}

function DecorBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -left-20 top-10 h-72 w-72 animate-float rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 animate-float rounded-full bg-cyan-500/20 blur-3xl [animation-delay:-3s]" />
    </div>
  );
}

function AppsGrid() {
  return (
    <section id="apps" className="mx-auto max-w-6xl px-6 pb-32">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">
          Apps
        </h2>
        <p className="text-sm text-white/50">{apps.length} on the App Store</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {apps.map((app, i) => (
          <Link
            key={app.slug}
            href={`/apps/${app.slug}`}
            className="glass card-hover group relative overflow-hidden rounded-3xl p-6 sm:p-7"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div
              className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${app.accent} opacity-30 blur-3xl transition-opacity group-hover:opacity-50`}
            />
            <div className="relative flex items-start gap-5">
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${app.accent} text-2xl font-bold text-white shadow-lg`}
              >
                {app.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-lg font-semibold text-white">
                    {app.name}
                  </h3>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/60">
                    {app.category}
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/60">{app.tagline}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/55">
                  {app.description}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs">
                  <span className="text-white/80 transition group-hover:text-white">
                    View details →
                  </span>
                  <span className="text-white/40">
                    Privacy ·{" "}
                    <span className="underline-offset-2 group-hover:underline">
                      /apps/{app.slug}/privacy
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
