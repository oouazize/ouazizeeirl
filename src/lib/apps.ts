export type MockupKind = "chat" | "snail" | "split" | "scan" | "lastwhen";

export interface AppEntry {
  id: string;
  number: string;
  name: string;
  sub: string;
  tag: string;
  year: string;
  pitch: string;
  long: string;
  features: [string, string][];
  accent: string;
  surface: string;
  surfaceDeep: string;
  appstore: string;
  glyph: string;
  mockup: MockupKind;
  screenshots: string[];
}

export const STUDIO = {
  name: "devapps",
  tagline: "A small studio shipping focused iOS tools.",
  location: "Independent · iOS · 2024—",
  contact: "hello@devapps.studio",
};

export const APPS: AppEntry[] = [
  {
    id: "notechat",
    number: "01",
    name: "NoteChat",
    sub: "Analytics for Notion",
    tag: "Productivity",
    year: "2025",
    pitch: "Chat with your Notion workspace. Ask anything, get answers grounded in your own pages and databases.",
    long: "NoteChat connects securely to your Notion workspace and turns it into a queryable knowledge base. Ask questions across pages and databases in plain English, surface forgotten notes, and generate summaries — all without leaving your phone.",
    features: [
      ["Natural language search", "Ask questions across your entire workspace and get answers cited to the exact page."],
      ["Database analytics", "Roll up tasks, habits, finances, or any database into instant charts."],
      ["Private by default", "Your Notion data is never used to train models. Read-only access, revoke any time."],
      ["Daily digests", "Wake up to a hand-picked summary of what changed across your workspace overnight."],
    ],
    accent: "#b8704a",
    surface: "#f0e8d8",
    surfaceDeep: "#d9c9a8",
    appstore: "https://apps.apple.com/us/app/notechat-analytics-for-notion/id6745519514",
    glyph: "N",
    mockup: "chat",
    screenshots: [
      "/screenshots/notechat/1.png",
      "/screenshots/notechat/2.png",
      "/screenshots/notechat/3.png",
      "/screenshots/notechat/4.png",
    ],
  },
  {
    id: "snail",
    number: "02",
    name: "Snail Identifier",
    sub: "Shell & Slug",
    tag: "Nature · Reference",
    year: "2025",
    pitch: "Point your camera at a snail or slug. Get its species, habitat, and a tiny field journal entry — instantly.",
    long: "A pocket malacologist. Snail Identifier uses on-device vision to recognize land and freshwater gastropods, then opens a beautifully illustrated reference card with range maps, ecological notes, and a personal sighting log.",
    features: [
      ["On-device identification", "Recognize over 600 species of snails and slugs without sending photos to a server."],
      ["Field journal", "Every sighting saves location, weather, and your own notes. Build a year of observations."],
      ["Illustrated reference", "Hand-drawn plates and habitat maps for each species, curated from open natural history sources."],
      ["Citizen science export", "One tap to share sightings with iNaturalist or export as CSV."],
    ],
    accent: "#6b8e4e",
    surface: "#e6e9d8",
    surfaceDeep: "#c5cda8",
    appstore: "https://apps.apple.com/us/app/snail-identifier-shell-slug/id6746718194",
    glyph: "S",
    mockup: "snail",
    screenshots: [
      "/screenshots/snail/1.png",
      "/screenshots/snail/2.png",
      "/screenshots/snail/3.png",
      "/screenshots/snail/4.png",
      "/screenshots/snail/5.png",
    ],
  },
  {
    id: "spliter",
    number: "03",
    name: "Spliter",
    sub: "Split Expenses Easy",
    tag: "Finance · Social",
    year: "2025",
    pitch: "Bills, trips, roommates, dinners. Split anything in three taps. Settle up without the spreadsheet.",
    long: "Spliter is the calmest expense splitter on iOS. No accounts, no friends list — start a group, drop in expenses, and the math takes care of itself. Multi-currency, recurring bills, and clean monthly summaries included.",
    features: [
      ["Three-tap entries", "Amount, who paid, who's in. Done. Optional categories and notes for the obsessive."],
      ["Smart settle-up", "Minimizes the number of payments needed. One person doesn't end up owing five others."],
      ["Multi-currency", "Live conversion at the day's rate. Trips across borders just work."],
      ["No login required", "Groups live on your device and sync via iCloud. No marketing emails ever."],
    ],
    accent: "#4a6fa5",
    surface: "#dde4ee",
    surfaceDeep: "#b6c5d8",
    appstore: "https://apps.apple.com/us/app/spliter-split-expenses-easy/id6759180043",
    glyph: "÷",
    mockup: "split",
    screenshots: [
      "/screenshots/spliter/1.png",
      "/screenshots/spliter/2.png",
      "/screenshots/spliter/3.png",
      "/screenshots/spliter/4.png",
      "/screenshots/spliter/5.png",
    ],
  },
  {
    id: "bizscan",
    number: "04",
    name: "BizScan",
    sub: "Business Card Scanner",
    tag: "Productivity",
    year: "2025",
    pitch: "Scan a stack of business cards in seconds. Clean contacts, straight to your phonebook or CRM.",
    long: "BizScan turns a paper stack into a clean address book. On-device OCR reads names, titles, phones and emails with high accuracy, lets you edit before saving, and pushes everything to Contacts, HubSpot, or a CSV.",
    features: [
      ["Burst scanning", "Drop card after card under your camera. BizScan auto-captures and queues each one."],
      ["On-device OCR", "Cards never leave your phone. Works offline at conferences and on planes."],
      ["Contact + CRM sync", "Push to Apple Contacts, HubSpot, Pipedrive, or export as a tidy CSV / vCard."],
      ["Smart deduplication", "Already met them? BizScan flags duplicates and offers to merge fields."],
    ],
    accent: "#8a4a8a",
    surface: "#e8dde6",
    surfaceDeep: "#cdb1cc",
    appstore: "https://apps.apple.com/us/app/bizscan-business-card-scanner/id6746445942",
    glyph: "B",
    mockup: "scan",
    screenshots: [
      "/screenshots/bizscan/1.png",
      "/screenshots/bizscan/2.png",
      "/screenshots/bizscan/3.png",
      "/screenshots/bizscan/4.png",
      "/screenshots/bizscan/5.png",
    ],
  },
  {
    id: "lastwhen",
    number: "05",
    name: "LastWhen",
    sub: "Recurring Chores",
    tag: "Productivity · Lifestyle",
    year: "2026",
    pitch: "When did I last water the plants? Change the filter? Call grandma? LastWhen tracks the irregular chores your brain can't hold.",
    long: "LastWhen replaces sticky notes, calendar pings, and patched-together reminders with one place for every recurring ritual. Forgiving cadence with tolerance windows turns \"when did I last do this?\" into a clear list of what's fresh, due, and overdue — built for irregular real life, not rigid daily streaks.",
    features: [
      ["Forgiving cadence", "Every task gets a repeat interval and a tolerance window. Miss a watering by 2 days? Absorbed. No guilt alarms."],
      ["Status engine", "Tasks flow fresh → due → overdue → critical based on when you last did them, so escalation is honest."],
      ["Tide visualization", "A wavy chart of your routine health, plus a 12-month heat strip and streak counter on every ritual."],
      ["Today widget", "Most-overdue ritual on your home screen. One tap to mark done."],
    ],
    accent: "#c97b4a",
    surface: "#f1e4d4",
    surfaceDeep: "#e0c5a4",
    appstore: "https://apps.apple.com/us/app/lastwhen-recurring-chores/id6762074147",
    glyph: "L",
    mockup: "lastwhen",
    screenshots: [
      "/screenshots/lastwhen/1.png",
      "/screenshots/lastwhen/2.png",
      "/screenshots/lastwhen/3.png",
      "/screenshots/lastwhen/4.png",
      "/screenshots/lastwhen/5.png",
    ],
  },
];

export function appById(id: string): AppEntry | undefined {
  return APPS.find((a) => a.id === id);
}
