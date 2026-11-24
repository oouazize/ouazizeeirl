import type { MetadataRoute } from "next";
import { PAW_ARTICLES, PAW_SPECIES } from "@/lib/paw";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/paw`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...PAW_SPECIES.map((s) => ({ url: `${SITE_URL}/paw/tracks/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...PAW_ARTICLES.map((a) => ({ url: `${SITE_URL}/paw/guide/${a.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
