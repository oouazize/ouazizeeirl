import { DEVELOPER_NAME, CONTACT_EMAIL } from "@/lib/apps";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of use for apps by Oussama Ouazize.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/60">
        Legal
      </span>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Terms of Use
      </h1>
      <p className="mt-3 text-white/55">Effective date: April 25, 2026</p>

      <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-white/75">
        <p>
          By downloading or using any app published by {DEVELOPER_NAME}, you
          agree to these Terms of Use. If you do not agree, do not use the app.
        </p>
        <h2 className="text-lg font-semibold text-white">License</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable
          license to use the app for personal, non-commercial purposes, subject
          to these Terms and the Apple App Store Terms.
        </p>
        <h2 className="text-lg font-semibold text-white">Acceptable use</h2>
        <p>
          You agree not to reverse engineer, decompile, or attempt to extract
          source code from the app, and not to use the app to violate any
          applicable law.
        </p>
        <h2 className="text-lg font-semibold text-white">Disclaimer</h2>
        <p>
          The app is provided &quot;as is&quot; without warranties of any kind.
          To the fullest extent permitted by law, we disclaim all warranties,
          express or implied.
        </p>
        <h2 className="text-lg font-semibold text-white">Contact</h2>
        <p>
          Questions about these Terms? Email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-white underline underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
