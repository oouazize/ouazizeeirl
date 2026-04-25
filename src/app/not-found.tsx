import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-widest text-white/40">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Not found
      </h1>
      <p className="mt-3 text-white/60">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90"
      >
        Back home
      </Link>
    </div>
  );
}
