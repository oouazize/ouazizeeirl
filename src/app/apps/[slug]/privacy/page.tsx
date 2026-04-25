import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { apps, getApp, DEVELOPER_NAME } from "@/lib/apps";

const EFFECTIVE_DATE = "April 25, 2026";

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: `Privacy Policy — ${app.name}`,
    description: `Privacy policy for ${app.name} (${app.tagline}).`,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href={`/apps/${app.slug}`}
        className="text-sm text-white/50 transition hover:text-white/80"
      >
        ← Back to {app.name}
      </Link>

      <header className="mt-6">
        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/60">
          Privacy Policy
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {app.name}
        </h1>
        <p className="mt-2 text-white/55">
          Effective date: {EFFECTIVE_DATE}
        </p>
      </header>

      <div className="prose-invert mt-10 space-y-8 text-[15px] leading-relaxed text-white/75">
        <Section title="Overview">
          <p>
            This Privacy Policy describes how {DEVELOPER_NAME} (&quot;we&quot;,
            &quot;us&quot;) collects, uses, and protects information in
            connection with the {app.name} iOS application (the
            &quot;App&quot;). We respect your privacy and are committed to
            keeping data collection minimal and transparent.
          </p>
        </Section>

        <Section title="Information we collect">
          <ul className="ml-5 list-disc space-y-2">
            {app.dataCollected.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p>
            We do <strong>not</strong> sell your personal information, and we do
            not share it with advertisers.
          </p>
        </Section>

        <Section title="How we use information">
          <ul className="ml-5 list-disc space-y-2">
            <li>Operate, maintain, and improve the App.</li>
            <li>
              Diagnose crashes and fix bugs through anonymized diagnostic
              reports.
            </li>
            <li>
              Understand aggregate usage patterns to guide product decisions.
            </li>
            <li>Respond to your support requests when you contact us.</li>
          </ul>
        </Section>

        <Section title="Third-party services">
          <p>
            The App may rely on the following third-party services. Each service
            processes data only as needed to deliver its function:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            {app.thirdParties.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Section>

        <Section title="Data storage and security">
          <p>
            Whenever possible, data is processed and stored on your device. Any
            data transmitted off-device is sent over encrypted connections
            (HTTPS/TLS). We use reasonable technical and organizational measures
            to protect data against unauthorized access, alteration, disclosure,
            or destruction.
          </p>
        </Section>

        <Section title="Children's privacy">
          <p>
            The App is not directed to children under 13, and we do not
            knowingly collect personal information from children under 13. If
            you believe a child has provided us with personal information,
            please contact us and we will delete it.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            Depending on where you live, you may have rights to access,
            correct, delete, or export your personal information, or to object
            to certain processing. To exercise any of these rights, contact us
            at{" "}
            <a
              href={`mailto:${app.contactEmail}`}
              className="text-white underline underline-offset-4"
            >
              {app.contactEmail}
            </a>
            .
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. The updated
            version will be indicated by a revised &quot;Effective date&quot;
            and will be effective once posted on this page.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            For privacy questions or requests related to {app.name}, contact:
          </p>
          <p>
            {DEVELOPER_NAME}
            <br />
            <a
              href={`mailto:${app.contactEmail}`}
              className="text-white underline underline-offset-4"
            >
              {app.contactEmail}
            </a>
          </p>
        </Section>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
