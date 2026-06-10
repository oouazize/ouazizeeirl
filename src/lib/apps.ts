export interface AppEntry {
  id: string;
  name: string;
  sub: string;
  description: string;
  appstore: string;
  icon: string;
  screenshots: string[];
}

export const DEVELOPER_URL =
  "https://apps.apple.com/us/developer/oussama-ouazize/id1812686671";

export const APPS: AppEntry[] = [
  {
    id: "notechat",
    name: "NoteChat",
    sub: "Analytics for Notion",
    description:
      "Ask your Notion in plain English. Get instant charts and answers — no formulas, no filters, no waiting.",
    appstore: "https://apps.apple.com/us/app/notechat-analytics-for-notion/id6745519514",
    icon: "/icons/notechat.png",
    screenshots: [
      "/screenshots/notechat/1.png",
      "/screenshots/notechat/2.png",
      "/screenshots/notechat/3.png",
    ],
  },
  {
    id: "snail",
    name: "Snail Identifier",
    sub: "Shell & Slug",
    description:
      "Point your camera at any snail, slug, or seashell and get an instant AI identification with habitat notes.",
    appstore: "https://apps.apple.com/us/app/snail-identifier-shell-slug/id6746718194",
    icon: "/icons/snail.png",
    screenshots: [
      "/screenshots/snail/1.png",
      "/screenshots/snail/2.png",
      "/screenshots/snail/3.png",
    ],
  },
  {
    id: "spliter",
    name: "Spliter",
    sub: "Split Expenses Easy",
    description:
      "Split rent, dinners, trips, and groceries effortlessly. End the awkward “who owes what” conversation for good.",
    appstore: "https://apps.apple.com/us/app/spliter-split-expenses-easy/id6759180043",
    icon: "/icons/spliter.png",
    screenshots: [
      "/screenshots/spliter/1.png",
      "/screenshots/spliter/2.png",
      "/screenshots/spliter/3.png",
    ],
  },
  {
    id: "bizscan",
    name: "BizScan",
    sub: "Business Card Scanner",
    description:
      "Scan business cards in seconds. Digitize, organize, and sync clean contacts straight to your phone or CRM.",
    appstore: "https://apps.apple.com/us/app/bizscan-business-card-scanner/id6746445942",
    icon: "/icons/bizscan.png",
    screenshots: [
      "/screenshots/bizscan/1.png",
      "/screenshots/bizscan/2.png",
      "/screenshots/bizscan/3.png",
    ],
  },
  {
    id: "lastwhen",
    name: "LastWhen",
    sub: "Chore & Task Tracker",
    description:
      "Track the time since you last did something — water the plants, change the filter, call grandma. Stop guessing.",
    appstore: "https://apps.apple.com/us/app/lastwhen-chore-task-tracker/id6762074147",
    icon: "/icons/lastwhen.png",
    screenshots: [
      "/screenshots/lastwhen/1.png",
      "/screenshots/lastwhen/2.png",
      "/screenshots/lastwhen/3.png",
    ],
  },
];
