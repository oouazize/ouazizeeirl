// Dynamic App Store data layer.
// Lists every app under the developer ID and scrapes each app's first 3
// iPhone screenshots from its public App Store page. New apps published to
// the developer account appear automatically — no code changes needed.

export interface AppEntry {
  id: string;
  name: string;
  sub: string;
  description: string;
  appstore: string;
  icon: string;
  screenshots: string[];
}

const DEVELOPER_ID = "1812686671";
const REVALIDATE = 86400; // refresh once a day
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15";

interface LookupResult {
  wrapperType?: string;
  trackId?: number;
  trackName?: string;
  description?: string;
  artworkUrl512?: string;
  artworkUrl100?: string;
  trackViewUrl?: string;
}

function splitName(trackName: string): { name: string; sub: string } {
  const parts = trackName.split(/\s*[:–—-]\s+/);
  const name = (parts[0] ?? trackName).trim();
  const sub = parts.slice(1).join(" · ").trim();
  return { name, sub };
}

function shortDescription(raw: string): string {
  const firstLine = raw
    .split("\n")
    .map((l) => l.trim())
    .find(Boolean);
  if (!firstLine) return "";
  const firstSentence = firstLine.split(/(?<=[.!?])\s+/)[0];
  return firstSentence.length >= 12 ? firstSentence : firstLine;
}

async function fetchScreenshots(appStoreUrl: string): Promise<string[]> {
  try {
    const res = await fetch(appStoreUrl, {
      headers: { "User-Agent": UA },
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return [];
    const html = await res.text();
    // Numbered screenshot assets ("1.png", "2.png", …) are server-rendered
    // into the page; the filename number is their display order.
    const re = /https:\/\/is\d-ssl\.mzstatic\.com\/image\/thumb\/PurpleSource[^"]*?\/(\d+)\.png/g;
    const byIndex = new Map<number, string>();
    for (const m of html.matchAll(re)) {
      const n = Number(m[1]);
      if (!byIndex.has(n)) byIndex.set(n, m[0]);
    }
    return [...byIndex.entries()]
      .sort((a, b) => a[0] - b[0])
      .slice(0, 3)
      .map(([, base]) => `${base}/600x0w.png`);
  } catch {
    return [];
  }
}

export async function getApps(): Promise<AppEntry[]> {
  const lookup = `https://itunes.apple.com/lookup?id=${DEVELOPER_ID}&entity=software&country=us&limit=100`;
  const res = await fetch(lookup, { next: { revalidate: REVALIDATE } });
  if (!res.ok) return [];

  const data: { results?: LookupResult[] } = await res.json();
  const software = (data.results ?? []).filter(
    (r): r is Required<Pick<LookupResult, "trackId" | "trackName" | "trackViewUrl">> & LookupResult =>
      r.wrapperType === "software" && !!r.trackId && !!r.trackName && !!r.trackViewUrl
  );

  return Promise.all(
    software.map(async (r) => {
      const { name, sub } = splitName(r.trackName);
      return {
        id: String(r.trackId),
        name,
        sub,
        description: shortDescription(r.description ?? ""),
        appstore: r.trackViewUrl,
        icon: r.artworkUrl512 ?? r.artworkUrl100 ?? "",
        screenshots: await fetchScreenshots(r.trackViewUrl),
      };
    })
  );
}
