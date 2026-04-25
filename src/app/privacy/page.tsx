import Link from "next/link";
import { apps } from "@/lib/apps";

export const metadata = {
  title: "Privacy Policies",
  description: "Privacy policies for all apps by Oussama Ouazize.",
};

export default function PrivacyIndex() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/60">
        Privacy
      </span>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Privacy policies
      </h1>
      <p className="mt-3 text-white/60">
        Each app has its own privacy policy. Pick an app below to view the full
        policy.
      </p>

      <ul className="mt-10 space-y-3">
        {apps.map((app) => (
          <li key={app.slug}>
            <Link
              href={`/apps/${app.slug}/privacy`}
              className="glass card-hover flex items-center justify-between rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${app.accent} text-sm font-bold text-white`}
                >
                  {app.icon}
                </div>
                <div>
                  <p className="text-white">{app.name}</p>
                  <p className="text-xs text-white/50">{app.tagline}</p>
                </div>
              </div>
              <span className="text-sm text-white/50">View →</span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
