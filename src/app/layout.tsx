import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { DEVELOPER_NAME } from "@/lib/apps";

export const metadata: Metadata = {
  title: {
    default: "DevApps — iOS Apps by Oussama Ouazize",
    template: "%s · DevApps",
  },
  description:
    "Home of iOS apps by Oussama Ouazize. Privacy policies, support, and app info — all in one place.",
  metadataBase: new URL("https://devapps.example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grain min-h-screen font-sans">
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_60%)]" />
          </div>
          <span className="text-base font-semibold tracking-tight text-white/90 group-hover:text-white">
            DevApps
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-white/60">
          <Link href="/#apps" className="hover:text-white">Apps</Link>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <a
            href={`mailto:bahimzabir@gmail.com`}
            className="hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 text-center text-sm text-white/40">
      <div className="mx-auto max-w-6xl px-6">
        <p>
          © {new Date().getFullYear()} {DEVELOPER_NAME}. All rights reserved.
        </p>
        <p className="mt-2">
          <Link href="/privacy" className="hover:text-white/70">Privacy</Link>
          <span className="mx-2">·</span>
          <Link href="/terms" className="hover:text-white/70">Terms</Link>
          <span className="mx-2">·</span>
          <a href="mailto:bahimzabir@gmail.com" className="hover:text-white/70">
            bahimzabir@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
