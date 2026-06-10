import type { Metadata } from "next";
import { DEVELOPER, UNIVERSAL_PRIVACY } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "One privacy policy covering every application, current and future.",
};

const shell = "mx-auto w-full max-w-[1280px] px-8 max-md:px-5";

export default function PrivacyPage() {
  const data = UNIVERSAL_PRIVACY;

  return (
    <div className={shell}>
      <div className="pb-24 pt-[80px]">
        <article className="mx-auto max-w-[720px] text-base leading-[1.7] text-ink-soft">
          <div className="mb-8 flex animate-rise flex-wrap gap-5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted">
            <span>All applications</span>
            <span>·</span>
            <span>Last updated · {data.lastUpdated}</span>
          </div>

          <h1 className="m-0 mb-3 animate-rise font-display text-[clamp(2.25rem,6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink [animation-delay:80ms]">
            Privacy policy.
          </h1>

          <p className="mb-14 mt-7 animate-rise border-l-2 border-ink pl-5 font-display text-[1.0625rem] font-medium leading-relaxed tracking-[-0.005em] text-ink [animation-delay:140ms]">
            {data.summary}
          </p>

          <hr className="my-10 border-0 border-t border-rule" />

          {data.blocks.map((block, i) => (
            <div key={i}>
              <h2 className="mb-3 mt-12 font-display text-[1.375rem] font-semibold uppercase tracking-[-0.015em] text-ink">
                {block.heading}
              </h2>
              {block.body && <p className="mb-3.5">{block.body}</p>}
              {block.paragraphs && block.paragraphs.map((p, j) => <p key={j} className="mb-3.5">{p}</p>)}
              {block.items && (
                <ul className="mb-3.5 list-disc pl-[18px]">
                  {block.items.map((it, j) => <li key={j} className="mb-1.5">{it}</li>)}
                </ul>
              )}
              {block.subsections && block.subsections.map((s, j) => (
                <div key={j}>
                  <h3 className="mb-1.5 mt-6 font-display text-[0.9375rem] font-semibold tracking-[-0.005em] text-ink">{s.label}</h3>
                  <p className="mb-3.5">{s.body}</p>
                </div>
              ))}
            </div>
          ))}

          <hr className="my-10 border-0 border-t border-rule" />

          <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.04em] text-muted">
            {DEVELOPER}
            <br />
            Email: <a href={`mailto:${data.contactEmail}`} className="border-b border-ink text-ink">{data.contactEmail}</a>
            <br />
            Current Policy version: {data.lastUpdated}
          </p>
        </article>
      </div>
    </div>
  );
}
