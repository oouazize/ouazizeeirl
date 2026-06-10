import { APPS } from "@/lib/apps";
import { Marquee } from "@/components/Marquee";
import { AppGrid } from "@/components/AppGrid";

const shell = "mx-auto w-full max-w-[1280px] px-8 max-md:px-5";

export default function HomePage() {
  return (
    <>
      <div className={shell}>
        <Hero />
      </div>
      <Marquee />
      <div className={shell}>
        <AppGrid apps={APPS} />
        <About />
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="pb-[100px] pt-20">
      <div className="mb-6 inline-flex animate-rise items-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted before:content-[''] before:h-px before:w-4 before:bg-muted">
        05 apps · iOS
      </div>

      <h1 className="mb-7 animate-rise font-display text-[clamp(2rem,8vw,6rem)] font-semibold leading-[1.02] tracking-[-0.045em] [animation-delay:80ms]">
        Small tools.
        <br />
        Made carefully,
        <br />
        for the phone in your pocket.
      </h1>

      <div className="mt-12 grid animate-rise grid-cols-[1.2fr_1fr] items-end gap-[60px] [animation-delay:140ms] max-[960px]:grid-cols-1 max-[960px]:items-start max-[960px]:gap-8">
        <p className="m-0 max-w-[600px] text-[1.0625rem] leading-relaxed text-muted">
          A one-person workshop building focused iOS apps. No subscriptions you forget about,
          no dark patterns, no analytics empires — just small, useful objects you keep on your home screen.
        </p>

        <div className="flex flex-col items-start gap-3.5">
          <a
            href="#apps"
            className="group inline-flex items-center gap-2 rounded-lg border border-ink bg-ink px-4 py-2.5 font-display text-sm font-medium text-white transition hover:opacity-85"
          >
            Browse the apps
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <div className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted">
            ↓ scroll · 5 entries
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats: [string, string][] = [
    ["05", "apps shipped"],
    ["100%", "on-device when possible"],
    ["0", "trackers, ever"],
  ];
  return (
    <section id="about" className="border-t border-rule py-[120px]">
      <div className="grid grid-cols-[1fr_1.4fr] items-start gap-20 max-[960px]:grid-cols-1 max-[960px]:gap-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted before:content-[''] before:h-px before:w-4 before:bg-muted">
            The workshop
          </div>
          <h2 className="m-0 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            One person.
            <br />
            Many small ideas.
          </h2>
        </div>

        <div className="text-[1.0625rem] leading-relaxed text-ink-soft">
          <p className="mt-0">
            A workshop, not a startup. Each app is built to do one thing well, ship at a fair
            one-time price, and stay out of your way.
          </p>
          <p>
            No dashboards begging for engagement. No newsletters disguised as notifications. The bar is simple:
            would I keep this on my own home screen?
          </p>

          <dl className="mt-14 grid grid-cols-3 gap-8 border-t border-rule pt-8 max-[600px]:grid-cols-1 max-[600px]:gap-5">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-[2.5rem] font-semibold leading-none tracking-[-0.03em] text-ink">{n}</div>
                <div className="mt-2.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted">{l}</div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
