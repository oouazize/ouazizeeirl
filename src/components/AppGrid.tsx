import Image from "next/image";
import type { AppEntry } from "@/lib/apps";

export function AppGrid({ apps }: { apps: AppEntry[] }) {
  return (
    <section id="apps" className="pb-[60px] pt-[100px]">
      <header className="mb-14 grid grid-cols-2 items-end gap-10 border-b border-rule pb-6 max-[960px]:grid-cols-1 max-[960px]:gap-8">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted before:content-[''] before:h-px before:w-4 before:bg-muted">
            The catalogue
          </div>
          <h2 className="m-0 font-display text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            {apps.length} apps, currently shipping.
          </h2>
        </div>
        <div className="text-right font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted max-[960px]:text-left">
          Available on · the App Store
          <br />
          Sorted by · release order
        </div>
      </header>

      <div className="grid grid-cols-2 gap-5 max-[960px]:grid-cols-1">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}

function AppCard({ app }: { app: AppEntry }) {
  return (
    <article className="flex flex-col gap-6 rounded-[20px] border border-rule bg-paper p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.16)] max-[480px]:p-[18px]">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <Image
          src={app.icon}
          alt={`${app.name} icon`}
          width={72}
          height={72}
          className="size-[72px] shrink-0 rounded-[16px] shadow-[0_0_0_1px_var(--color-rule)] max-[480px]:size-[60px]"
        />
        <div className="min-w-0">
          <h3 className="mb-1.5 font-display text-[1.125rem] font-semibold leading-tight tracking-[-0.01em] text-ink">
            {app.name}
          </h3>
          <p className="m-0 line-clamp-2 text-sm leading-snug text-muted">{app.description}</p>
        </div>
        <a
          href={app.appstore}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get ${app.name} on the App Store`}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-[18px] py-2 font-display text-sm font-semibold tracking-[0.01em] text-white transition hover:opacity-85 max-[480px]:px-3.5"
        >
          <AppleLogo />
          Get
        </a>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {app.screenshots.slice(0, 3).map((src, i) => (
          <div
            key={src}
            className="relative aspect-[9/19.5] overflow-hidden rounded-[14px] bg-paper-deep shadow-[0_0_0_1px_var(--color-rule)]"
          >
            <Image
              src={src}
              alt={`${app.name} screenshot ${i + 1}`}
              fill
              sizes="(max-width: 720px) 30vw, 180px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </article>
  );
}

function AppleLogo() {
  return (
    <svg width="14" height="14" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}
