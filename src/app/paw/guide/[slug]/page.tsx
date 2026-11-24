import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppStoreLink } from "@/components/AppStoreLink";
import { PAW_ARTICLES, articleBySlug, relatedLink } from "@/lib/paw";
import { PAW_APP_STORE, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return PAW_ARTICLES.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.summary,
    alternates: { canonical: `/paw/guide/${a.slug}` },
    openGraph: { title: a.title, description: a.summary, url: `/paw/guide/${a.slug}`, type: "article" },
    twitter: { card: "summary", title: a.title, description: a.summary },
  };
}

const shell = "mx-auto w-full max-w-[760px] px-8 max-md:px-5";
const label = "font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted";

export default async function GuideArticle({ params }: Props) {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) notFound();
  const related = a.related.map(relatedLink).filter((x): x is NonNullable<typeof x> => !!x);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.summary,
    author: { "@type": "Person", name: "Oussama Ouazize" },
    mainEntityOfPage: `${SITE_URL}/paw/guide/${a.slug}`,
  };

  return (
    <article className={shell}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className={`${label} pt-12`} aria-label="Breadcrumb">
        <Link href="/paw" className="hover:text-ink">Paw</Link> · {a.category} · {a.readMinutes} min read
      </nav>
      <h1 className="mb-0 mt-6 font-display text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em]">{a.title}</h1>
      <p className="mt-5 border-l-2 border-ink pl-5 font-display text-[1.0625rem] font-medium leading-relaxed">{a.summary}</p>

      {a.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="m-0 font-display text-xl font-semibold tracking-[-0.01em]">{s.heading}</h2>
          {s.body.split(/\n\s*\n/).map((p, i) => (
            <p key={i} className="mb-0 mt-3 text-[1.0313rem] leading-[1.75] text-ink-soft">{p}</p>
          ))}
        </section>
      ))}

      {related.length > 0 && (
        <section className="mt-14 border-t border-rule pt-8">
          <h2 className={label}>Related</h2>
          <ul className="mt-4 grid gap-2 p-0">
            {related.map((r) => (
              <li key={r.href} className="list-none">
                <Link href={r.href} className="font-display font-semibold underline underline-offset-4">{r.title} →</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-24 mt-14 flex flex-col items-start gap-4 rounded-[24px] bg-ink p-8 text-white">
        <h2 className="m-0 font-display text-xl font-semibold">Put it into practice</h2>
        <p className="m-0 text-[0.95rem] leading-relaxed text-white/70">
          Paw identifies tracks from a photo and carries to-scale plates for 22 species, plus a daily quiz to sharpen your eye.
        </p>
        <AppStoreLink href={PAW_APP_STORE} app="paw" placement={`guide_${a.slug}`} className="rounded-lg bg-white px-5 py-3 font-display text-sm font-semibold text-ink transition hover:opacity-85">
          Download Paw on the App Store →
        </AppStoreLink>
      </section>
    </article>
  );
}
