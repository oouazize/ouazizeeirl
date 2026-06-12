import Link from "next/link";

const shell = "mx-auto w-full max-w-[1280px] px-8 max-md:px-5";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className={shell}>
        <div className="flex items-center justify-between gap-4 py-7 font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-3">
          <Link href="/" className="transition hover:text-ink">
            Home
          </Link>
          <Link href="/privacy" className="transition hover:text-ink">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
