import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppStoreLink } from "@/components/AppStoreLink";
import { PAW_ARTICLES, PAW_SPECIES, speciesBySlug } from "@/lib/paw";
import { PAW_APP_STORE, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return PAW_SPECIES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sp = speciesBySlug(slug);
  if (!sp) return {};
  const title = `${sp.name} tracks: size, shape & how to identify them`;
  const description = `${sp.name} (${sp.sci}) track guide: ${sp.sizeImp} (${sp.sizeMet}), ${sp.toes} toes, ${sp.claws ? "claw marks usually visible" : "no claw marks"}, ${sp.trail.name.toLowerCase()}. To-scale drawings of front and hind prints, field marks and look-alikes.`;
  return {
    title,
    description,
    alternates: { canonical: `/paw/tracks/${sp.slug}` },
    openGraph: { title, description, url: `/paw/tracks/${sp.slug}`, type: "article" },
    twitter: { card: "summary", title, description },
  };
}

const shell = "mx-auto w-full max-w-[1080px] px-8 max-md:px-5";
const label = "font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted";

export default async function SpeciesTrackPage({ params }: Props) {
  const { slug } = await params;
  const sp = speciesBySlug(slug);
  if (!sp) notFound();
  const g = sp.guide;
  const lookAlikes = sp.confusedWith.map((s) => speciesBySlug(s)).filter((x): x is NonNullable<typeof x> => !!x);
  const comparisons = PAW_ARTICLES.filter((a) => a.category === "Look-alikes" && a.related.includes(sp.slug));
  const facts: [string, string][] = [
    ["Track size", `${sp.sizeImp} (${sp.sizeMet})`],
    ["Toes", String(sp.toes)],
    ["Claw marks", sp.claws ? "Usually visible" : "None — claws retract"],
    ["Gait", sp.gait],
    ["Stride", sp.stride],
    ["Active", sp.activity],
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${sp.name} tracks: size, shape & how to identify them`,
    about: { "@type": "Thing", name: sp.name, alternateName: sp.sci },
    image: `${SITE_URL}/tracks/${sp.slug}-front.svg`,
    author: { "@type": "Person", name: "Oussama Ouazize" },
    mainEntityOfPage: `${SITE_URL}/paw/tracks/${sp.slug}`,
  };

  return (
    <div className={shell}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className={`${label} pt-12`} aria-label="Breadcrumb">
        <Link href="/paw" className="hover:text-ink">Paw</Link> · <Link href="/paw#species" className="hover:text-ink">Track guide</Link> · {sp.group}
      </nav>

      <header className="pb-10 pt-6">
        <h1 className="m-0 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">{sp.name} tracks</h1>
        <p className="mt-2 font-display text-lg italic text-muted">{sp.sci}</p>
        <p className="mt-6 max-w-[720px] text-[1.0625rem] leading-relaxed text-ink-soft">{g?.summary ?? sp.blurb}</p>
      </header>

      <section className="grid grid-cols-2 gap-6 max-[760px]:grid-cols-1" aria-label="Track drawings">
        {(["front", "hind"] as const).map((foot, i) => (
          <figure key={foot} className="m-0 rounded-[22px] border border-rule bg-paper-warm p-6">
            <Image src={`/tracks/${sp.slug}-${foot}.svg`} alt={`${sp.name} ${sp.footLabels[i].toLowerCase()} track, drawn to scale`} width={420} height={420} className="mx-auto h-[320px] w-auto max-w-full" unoptimized />
            <figcaption className={`${label} mt-4 text-center`}>{sp.footLabels[i]} · grid = 1 cm</figcaption>
          </figure>
        ))}
      </section>

      <section className="py-12">
        <h2 className="m-0 font-display text-2xl font-semibold tracking-[-0.02em]">Field marks</h2>
        <ol className="mt-6 grid list-none gap-3 p-0">
          {sp.features.map((f) => (
            <li key={f.n} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[#c0532a] font-mono text-xs font-bold text-white">{f.n}</span>
              <span className="text-[1rem] leading-relaxed">
                {f.text}
                {f.foot === "hind" && <span className="text-muted"> (hind print)</span>}
              </span>
            </li>
          ))}
        </ol>
        {g?.trackMorphology && <p className="mt-8 max-w-[760px] text-[1rem] leading-relaxed text-ink-soft">{g.trackMorphology}</p>}
      </section>

      <section className="border-t border-rule py-12">
        <dl className="grid grid-cols-3 gap-x-8 gap-y-6 max-[760px]:grid-cols-2">
          {facts.map(([k, v]) => (
            <div key={k}>
              <dt className={label}>{k}</dt>
              <dd className="m-0 mt-1.5 font-display text-[1rem] font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-rule py-12">
        <h2 className="m-0 font-display text-2xl font-semibold tracking-[-0.02em]">Trail pattern: {sp.trail.name.toLowerCase()}</h2>
        <p className="mt-3 max-w-[720px] text-[1rem] leading-relaxed text-ink-soft">{sp.trail.how} {g?.gait ?? ""}</p>
        <figure className="m-0 mt-6 rounded-[22px] border border-rule bg-paper-warm p-6">
          <Image src={`/tracks/${sp.slug}-trail.svg`} alt={`${sp.name} trail pattern, travelling left to right`} width={960} height={240} className="h-auto max-h-[200px] w-full object-contain" unoptimized />
          <figcaption className={`${label} mt-3`}>Travel → · typical stride {sp.stride}</figcaption>
        </figure>
      </section>

      <section className="grid grid-cols-2 gap-10 border-t border-rule py-12 max-[760px]:grid-cols-1">
        <div>
          <h2 className="m-0 font-display text-2xl font-semibold tracking-[-0.02em]">How to identify it</h2>
          <ul className="mt-5 grid gap-2.5 pl-5 text-[1rem] leading-relaxed">
            {sp.idTips.map((t) => <li key={t}>{t}</li>)}
          </ul>
          {g?.substrate && (
            <>
              <h3 className="mb-0 mt-8 font-display text-lg font-semibold">In mud, snow and sand</h3>
              <p className="mt-2 text-[1rem] leading-relaxed text-ink-soft">{g.substrate}</p>
            </>
          )}
        </div>
        <div>
          <h2 className="m-0 font-display text-2xl font-semibold tracking-[-0.02em]">Where and when</h2>
          <p className="mt-5 text-[1rem] leading-relaxed text-ink-soft"><strong>Habitat:</strong> {sp.habitat}</p>
          <p className="text-[1rem] leading-relaxed text-ink-soft"><strong>Range:</strong> {sp.range}</p>
          <p className="text-[1rem] leading-relaxed text-ink-soft"><strong>Behavior:</strong> {sp.behavior}</p>
          {g?.scat && <p className="text-[1rem] leading-relaxed text-ink-soft"><strong>Other sign:</strong> {g.scat}</p>}
          <p className="text-[1rem] leading-relaxed text-ink-soft"><strong>Safety:</strong> {sp.dangerNote}</p>
        </div>
      </section>

      {(lookAlikes.length > 0 || comparisons.length > 0) && (
        <section className="border-t border-rule py-12">
          <h2 className="m-0 font-display text-2xl font-semibold tracking-[-0.02em]">Often confused with</h2>
          {g?.similar && <p className="mt-3 max-w-[760px] text-[1rem] leading-relaxed text-ink-soft">{g.similar}</p>}
          <div className="mt-6 grid grid-cols-4 gap-4 max-[760px]:grid-cols-2">
            {lookAlikes.map((s) => (
              <Link key={s.slug} href={`/paw/tracks/${s.slug}`} className="flex flex-col items-center rounded-[18px] border border-rule p-4 transition hover:-translate-y-0.5">
                <Image src={`/tracks/${s.slug}-front.svg`} alt={`${s.name} track drawing`} width={80} height={90} className="h-[80px] w-auto" unoptimized />
                <span className="mt-3 font-display text-sm font-semibold">{s.name}</span>
              </Link>
            ))}
          </div>
          {comparisons.map((a) => (
            <p key={a.slug} className="mt-6">
              <Link href={`/paw/guide/${a.slug}`} className="font-display font-semibold underline underline-offset-4">{a.title} →</Link>
            </p>
          ))}
        </section>
      )}

      {g?.photo && (
        <section className="border-t border-rule py-12">
          <figure className="m-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={g.photo.uri} alt={g.photo.alt} loading="lazy" className="max-h-[420px] w-full rounded-[22px] object-cover" />
            <figcaption className="mt-2 text-xs text-muted">
              {g.photo.alt} · {g.photo.source ? <a href={g.photo.source} className="underline" rel="noopener noreferrer" target="_blank">{g.photo.credit}</a> : g.photo.credit}
            </figcaption>
          </figure>
        </section>
      )}

      <section className="mb-24 mt-4 flex flex-col items-start gap-4 rounded-[24px] bg-ink p-9 text-white">
        <h2 className="m-0 font-display text-2xl font-semibold tracking-[-0.02em]">Think you found a {sp.name.toLowerCase()} track?</h2>
        <p className="m-0 max-w-[560px] text-[0.95rem] leading-relaxed text-white/70">Snap it with Paw and get the most likely animals, the field marks behind the match, and this guide in your pocket.</p>
        <AppStoreLink href={PAW_APP_STORE} app="paw" placement={`species_${sp.slug}`} className="rounded-lg bg-white px-5 py-3 font-display text-sm font-semibold text-ink transition hover:opacity-85">
          Download Paw on the App Store →
        </AppStoreLink>
      </section>
    </div>
  );
}
