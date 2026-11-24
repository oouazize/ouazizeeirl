import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppStoreLink } from "@/components/AppStoreLink";
import { GROUP_ORDER, PAW_ARTICLES, PAW_SPECIES } from "@/lib/paw";
import { PAW_APP_ID, PAW_APP_STORE, SITE_URL } from "@/lib/site";

const TITLE = "Paw — Animal Track Identifier for iPhone";
const DESC =
  "Identify animal tracks from a photo, then learn to read them yourself: to-scale track plates for 22 North American species, trail patterns, look-alike guides, a daily track quiz and a field log.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/paw" },
  openGraph: { title: TITLE, description: DESC, url: "/paw", type: "website", images: ["/paw/02-scan-result.jpg"] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/paw/02-scan-result.jpg"] },
  other: { "apple-itunes-app": `app-id=${PAW_APP_ID}` },
};

const shell = "mx-auto w-full max-w-[1280px] px-8 max-md:px-5";
const eyebrow =
  "inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted before:content-[''] before:h-px before:w-4 before:bg-muted";

const FEATURES: [string, string][] = [
  ["Identify from a photo", "Photograph a footprint in mud, snow or sand. Paw names the most likely animals — wild or domestic — with a confidence score and the field marks behind the match."],
  ["To-scale track plates", "Every guided species has front and hind prints drawn to real size on a 1 cm grid, with numbered field marks that settle the ID."],
  ["Trail patterns", "See how each animal moves — trot, bound, hop, pace — with prints spaced at a true stride, so you can read a whole trail, not just one print."],
  ["Look-alike guides", "Coyote or dog? Deer or hog? Each species lists the tracks it's confused with and how to tell them apart."],
  ["Daily track quiz", "Five prints a day. Name them, keep your streak, and master all 22 species between trips outdoors."],
  ["Field Log", "Every sighting you save builds a collection, a tracker rank and a weekly challenge — all stored on your phone."],
];

export default function PawPage() {
  const groups = GROUP_ORDER.map((g) => ({ g, items: PAW_SPECIES.filter((s) => s.group === g) })).filter((x) => x.items.length);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Animal Track Identifier: Paw",
    operatingSystem: "iOS",
    applicationCategory: "EducationalApplication",
    description: DESC,
    url: `${SITE_URL}/paw`,
    installUrl: PAW_APP_STORE,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free download, in-app subscription" },
  };

  return (
    <div className={shell}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="grid grid-cols-[1.15fr_1fr] items-center gap-16 pb-20 pt-20 max-[960px]:grid-cols-1 max-[960px]:gap-10">
        <div>
          <div className={`${eyebrow} mb-6`}>iPhone · Field guide</div>
          <h1 className="m-0 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            Who walked here?
          </h1>
          <p className="mt-6 max-w-[560px] text-[1.0625rem] leading-relaxed text-muted">
            Paw identifies animal tracks from a photo — then teaches you to read them yourself, with to-scale track plates,
            trail patterns and look-alike guides for 22 North American species.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <AppStoreLink
              href={PAW_APP_STORE}
              app="paw"
              placement="paw_hero"
              label="Download Paw on the App Store"
              className="inline-flex items-center gap-2 rounded-lg border border-ink bg-ink px-5 py-3 font-display text-sm font-semibold text-white transition hover:opacity-85"
            >
              Download on the App Store →
            </AppStoreLink>
            <Link href="#species" className="font-display text-sm font-medium text-ink underline-offset-4 hover:underline">
              Browse the track guide
            </Link>
          </div>
          <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.04em] text-muted">
            Tracks only · Free download · Photo ID with a subscription · Field guide included
          </p>
        </div>
        <div className="flex justify-center gap-4">
          {["02-scan-result", "03-species-detail"].map((s, i) => (
            <Image
              key={s}
              src={`/paw/${s}.jpg`}
              alt={i === 0 ? "Paw scan result naming a bobcat track" : "Paw species page with track details"}
              width={253}
              height={550}
              priority={i === 0}
              className={`h-auto w-[45%] max-w-[253px] rounded-[28px] shadow-[0_0_0_1px_var(--color-rule),0_24px_48px_-24px_rgba(0,0,0,0.35)] ${i === 1 ? "mt-12" : ""}`}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-rule py-20">
        <div className={`${eyebrow} mb-10`}>What it does</div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-12 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1">
          {FEATURES.map(([h, b]) => (
            <div key={h}>
              <h2 className="m-0 font-display text-lg font-semibold tracking-[-0.01em]">{h}</h2>
              <p className="mb-0 mt-2.5 text-[0.95rem] leading-relaxed text-muted">{b}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-[720px] text-[0.95rem] leading-relaxed text-ink-soft">
          <strong>Privacy:</strong> your journal, photos and places stay on your phone. A photo is sent only when you ask
          for an identification, and location is optional and rounded to about 1 km. See the{" "}
          <Link href="/privacy" className="underline underline-offset-4">privacy policy</Link>.
        </p>
      </section>

      <section id="species" className="border-t border-rule py-20">
        <div className={`${eyebrow} mb-4`}>Track guide</div>
        <h2 className="m-0 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em]">
          22 species, drawn to scale.
        </h2>
        <div className="mt-12 grid gap-12">
          {groups.map(({ g, items }) => (
            <div key={g}>
              <h3 className="mb-5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted">{g === "Other" ? "Hand-like & webbed" : g}</h3>
              <div className="grid grid-cols-4 gap-4 max-[960px]:grid-cols-3 max-[600px]:grid-cols-2">
                {items.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/paw/tracks/${s.slug}`}
                    className="group flex flex-col items-center rounded-[18px] border border-rule bg-paper p-5 transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.16)]"
                  >
                    <Image src={`/tracks/${s.slug}-front.svg`} alt={`${s.name} track drawing`} width={96} height={110} className="h-[96px] w-auto" unoptimized />
                    <div className="mt-4 text-center font-display text-[0.95rem] font-semibold">{s.name}</div>
                    <div className="text-center text-xs italic text-muted">{s.sci}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-rule py-20">
        <div className={`${eyebrow} mb-4`}>Learn to read tracks</div>
        <h2 className="m-0 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em]">Guides & look-alikes</h2>
        <div className="mt-10 grid grid-cols-2 gap-5 max-[960px]:grid-cols-1">
          {PAW_ARTICLES.map((a) => (
            <Link key={a.slug} href={`/paw/guide/${a.slug}`} className="rounded-[18px] border border-rule bg-paper p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.16)]">
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.04em] text-muted">{a.category} · {a.readMinutes} min</div>
              <div className="mt-2 font-display text-lg font-semibold leading-snug tracking-[-0.01em]">{a.title}</div>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-muted">{a.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-24 flex flex-col items-start gap-5 rounded-[24px] bg-ink p-10 text-white max-[600px]:p-7">
        <h2 className="m-0 font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.02em]">Found a print? Ask Paw.</h2>
        <p className="m-0 max-w-[560px] text-[0.95rem] leading-relaxed text-white/70">
          Point your camera at a track, add a coin for scale, and get the most likely animals with the reasoning behind each one.
        </p>
        <AppStoreLink href={PAW_APP_STORE} app="paw" placement="paw_footer" className="rounded-lg bg-white px-5 py-3 font-display text-sm font-semibold text-ink transition hover:opacity-85">
          Download on the App Store →
        </AppStoreLink>
      </section>
    </div>
  );
}
