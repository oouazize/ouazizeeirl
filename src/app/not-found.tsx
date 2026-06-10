import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-8 py-[120px] text-center max-md:px-5">
      <div className="mb-6 inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted before:content-[''] before:h-px before:w-4 before:bg-muted">
        404
      </div>
      <h1 className="mb-8 font-display text-[clamp(3rem,10vw,7rem)] font-normal leading-[0.95] tracking-[-0.04em]">
        Not <em className="not-italic text-ink">here.</em>
      </h1>
      <p className="mb-10 font-display text-2xl italic text-ink-soft">
        That page never made it to the catalogue.
      </p>
      <Link
        href="/"
        className="group inline-flex items-center gap-2 rounded-lg border border-ink bg-ink px-4 py-2.5 font-display text-sm font-medium text-white transition hover:opacity-85"
      >
        Back to index
        <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
      </Link>
    </div>
  );
}
