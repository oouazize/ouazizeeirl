export type AppInfo = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  appStoreId: string;
  appStoreUrl: string;
  category: string;
  icon: string;
  accent: string;
  features: string[];
  dataCollected: string[];
  thirdParties: string[];
  contactEmail: string;
};

export const CONTACT_EMAIL = "bahimzabir@gmail.com";
export const DEVELOPER_NAME = "Oussama Ouazize";

export const apps: AppInfo[] = [
  {
    slug: "notechat",
    name: "NoteChat",
    tagline: "Analytics for Notion",
    description:
      "Turn your Notion workspace into actionable insights. NoteChat surfaces trends, productivity metrics, and content analytics across your databases and pages.",
    appStoreId: "6745519514",
    appStoreUrl:
      "https://apps.apple.com/us/app/notechat-analytics-for-notion/id6745519514",
    category: "Productivity",
    icon: "NC",
    accent: "from-violet-500 to-fuchsia-500",
    features: [
      "Database & page analytics",
      "Activity tracking and trends",
      "Custom dashboards",
      "Secure OAuth with Notion",
    ],
    dataCollected: [
      "Account identifiers (Notion OAuth tokens stored on-device)",
      "Anonymous usage analytics",
      "Crash diagnostics",
    ],
    thirdParties: ["Notion API", "Apple App Analytics"],
    contactEmail: CONTACT_EMAIL,
  },
  {
    slug: "bizscan",
    name: "BizScan",
    tagline: "Business Card Scanner",
    description:
      "Snap a business card and BizScan instantly extracts contacts using on-device OCR. Save, organize, and export to your address book in one tap.",
    appStoreId: "6746445942",
    appStoreUrl:
      "https://apps.apple.com/us/app/bizscan-business-card-scanner/id6746445942",
    category: "Business",
    icon: "BS",
    accent: "from-sky-500 to-cyan-400",
    features: [
      "On-device OCR — works offline",
      "Auto-detect names, emails, phones",
      "Export to Contacts & vCard",
      "Searchable history",
    ],
    dataCollected: [
      "Card images (stored locally on your device)",
      "Anonymous usage analytics",
      "Crash diagnostics",
    ],
    thirdParties: ["Apple Vision (on-device)", "Apple App Analytics"],
    contactEmail: CONTACT_EMAIL,
  },
  {
    slug: "snail-identifier",
    name: "Snail Identifier",
    tagline: "Shell & Slug",
    description:
      "Identify snails and slugs from a single photo. Powered by a curated vision model with detailed species info, habitats, and care notes.",
    appStoreId: "6746718194",
    appStoreUrl:
      "https://apps.apple.com/us/app/snail-identifier-shell-slug/id6746718194",
    category: "Reference",
    icon: "🐌",
    accent: "from-emerald-500 to-lime-400",
    features: [
      "AI species identification",
      "Detailed species library",
      "Habitat & care info",
      "Personal sightings log",
    ],
    dataCollected: [
      "Photos you submit for identification (sent for inference, not retained)",
      "Anonymous usage analytics",
      "Crash diagnostics",
    ],
    thirdParties: ["Inference API provider", "Apple App Analytics"],
    contactEmail: CONTACT_EMAIL,
  },
  {
    slug: "spliter",
    name: "Spliter",
    tagline: "Split Expenses Easy",
    description:
      "Split bills with friends, roommates, and trips without the math. Spliter tracks who paid what and tells everyone exactly what they owe.",
    appStoreId: "6759180043",
    appStoreUrl:
      "https://apps.apple.com/us/app/spliter-split-expenses-easy/id6759180043",
    category: "Finance",
    icon: "÷",
    accent: "from-amber-400 to-rose-500",
    features: [
      "Group expense tracking",
      "Smart settle-up suggestions",
      "Multi-currency support",
      "Offline-first, iCloud sync",
    ],
    dataCollected: [
      "Group & expense data (stored on-device, synced via your iCloud)",
      "Anonymous usage analytics",
      "Crash diagnostics",
    ],
    thirdParties: ["Apple iCloud", "Apple App Analytics"],
    contactEmail: CONTACT_EMAIL,
  },
];

export function getApp(slug: string): AppInfo | undefined {
  return apps.find((a) => a.slug === slug);
}
