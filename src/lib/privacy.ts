export interface PrivacyBlock {
  heading: string;
  body?: string;
  items?: string[];
  subsections?: { label: string; body: string }[];
}

export interface PrivacyData {
  lastUpdated: string;
  summary: string;
  blocks: PrivacyBlock[];
  contactEmail: string;
}

const CONTACT = "oussamaouaziz123@gmail.com";

export const PRIVACY: Record<string, PrivacyData> = {
  notechat: {
    lastUpdated: "May 23, 2025",
    contactEmail: CONTACT,
    summary:
      "NoteChat reads your authorized Notion content only when you ask a question. Authentication tokens, chat history, and cached pages live on your device. Prompts pass through OpenAI for AI processing and are not retained beyond the response.",
    blocks: [
      {
        heading: "Information we collect",
        subsections: [
          { label: "Email address", body: "Used for account creation and authentication through Notion OAuth." },
          { label: "Notion workspace data", body: "Only the specific pages and databases you explicitly authorize us to access through Notion's permission system." },
          { label: "Device compatibility", body: "Device type and OS version to ensure app compatibility." },
          { label: "Authentication tokens", body: "Securely stored on your device to maintain your connection to Notion." },
          { label: "App settings", body: "Your preferences and configuration stored locally on your device." },
          { label: "Chat conversations", body: "Your conversations with our AI about your Notion content (processed by OpenAI and temporarily cached locally)." },
        ],
      },
      {
        heading: "How we use your information",
        items: [
          "Provide AI-powered chat with your authorized Notion content",
          "Securely maintain your connection to Notion",
          "Fix bugs and improve app performance",
          "Manage subscriptions through RevenueCat",
          "Comply with applicable laws and regulations",
        ],
      },
      {
        heading: "Third-party services",
        subsections: [
          { label: "Notion", body: "For accessing your authorized workspace content." },
          { label: "OpenAI", body: "For AI processing of your chat conversations." },
          { label: "RevenueCat", body: "For subscription management and payment processing." },
        ],
      },
      {
        heading: "Apple platform services",
        body: "We use Apple-provided platform services to ensure secure and reliable app operation. The Keychain stores Notion authentication tokens. App preferences and cached Notion content are stored locally using Apple's standard storage APIs. Chat history and app settings are stored using Apple's standard local storage. These services process data locally on your device and follow Apple's privacy standards.",
      },
      {
        heading: "Data retention",
        items: [
          "Authentication tokens: stored on your device until you sign out or delete the app",
          "Chat history: stored locally until you disconnect Notion or delete the app",
          "Notion content cache: stored locally until you disconnect Notion or delete the app",
          "App settings: stored locally until you delete the app",
        ],
      },
      {
        heading: "Your control",
        items: [
          "Revoke our access to your Notion workspace at any time through Notion's settings",
          "Deleting the app removes all locally stored data including authentication tokens",
          "Cancel subscriptions through your Apple ID settings",
          "Disconnect your Notion account in Settings to clear chat history and cached content",
        ],
      },
      {
        heading: "Children",
        body: "NoteChat is not directed at children under 13 and we do not knowingly collect data from them.",
      },
    ],
  },
  snail: {
    lastUpdated: "October 12, 2025",
    contactEmail: CONTACT,
    summary:
      "Snail Identifier collects only what's needed to identify snails and improve the experience. Camera, photo, and location data are accessed with permission and used to deliver identifications and habitat information. We do not sell, rent, or trade your personal information.",
    blocks: [
      {
        heading: "Information we collect",
        subsections: [
          { label: "Personal information", body: "Name and email address collected voluntarily during account creation or when contacting malacologists." },
          { label: "Usage information", body: "Device type, IP address, browser type, operating system, identification requests, and app usage patterns." },
          { label: "Camera and photos", body: "With permission, the app accesses your camera and photo library to capture snail images for AI-powered identification." },
          { label: "Location", body: "With permission, precise GPS or Wi-Fi location data may be collected to improve identification accuracy and provide habitat information." },
        ],
      },
      {
        heading: "How we use your information",
        items: [
          "Provide and improve the service",
          "Personalize the user experience",
          "Communicate updates, promotions, and news",
          "Analyze usage patterns",
          "Comply with legal obligations",
        ],
      },
      {
        heading: "Information sharing",
        body: "We do not sell, rent, or trade your personal information to third parties. Information may be shared with service providers, for legal compliance, or in connection with mergers or asset sales.",
      },
      {
        heading: "Security",
        body: "Data is encrypted during transmission and storage, though no method is entirely secure.",
      },
      {
        heading: "Your choices",
        body: "You can decline information sharing, opt out of promotional emails, and manage permissions through your device settings.",
      },
      {
        heading: "Children",
        body: "Snail Identifier is not intended for children under 13.",
      },
    ],
  },
  spliter: {
    lastUpdated: "March 11, 2026",
    contactEmail: CONTACT,
    summary:
      "Spliter helps you track and split shared expenses. Your account, expenses, and group data are stored to power the app and shared only with the people you invite. We do not sell your personal information. Receipt photos used for OCR scanning are processed but not retained.",
    blocks: [
      {
        heading: "User-provided information",
        items: [
          "Account details: name, email, password",
          "Expense records: amounts, descriptions, currencies, categories, participants",
          "Group information: names and member invitations",
          "Invitation emails for friends",
          "Receipt photos for OCR scanning (processed but not retained)",
        ],
      },
      {
        heading: "Automatically collected information",
        items: [
          "Device specifics: type, OS version, identifiers",
          "Usage metrics: features accessed, screens viewed, session length",
          "Diagnostic data: crash and error reports",
          "Push notification tokens",
        ],
      },
      {
        heading: "From third parties",
        body: "If you sign in via a third-party provider, we receive basic profile information (name, email) from that provider.",
      },
      {
        heading: "How we use your information",
        items: [
          "Operate and enhance the platform",
          "Verify identity and secure accounts",
          "Display expenses and settlements",
          "Send notifications",
          "Answer support inquiries",
          "Improve features through usage analysis",
          "Meet legal requirements",
        ],
      },
      {
        heading: "Data sharing",
        body: "We share information with other app users (expense details within your groups), service vendors (hosting, notifications, analytics), legal authorities when required, and acquiring companies in merger scenarios. We do not sell your personal information.",
      },
      {
        heading: "Data retention",
        body: "Account and expense data remain stored while your account is active. If you delete your account, we delete or anonymize your personal information within 30 days, with limited legal exceptions. Receipt images are not retained after scanning.",
      },
      {
        heading: "Security",
        items: [
          "Data encryption in transit and at rest",
          "Database row-level security",
          "Server-side credential storage",
          "Regular security audits",
        ],
      },
      {
        heading: "Your rights",
        items: [
          "Access your data",
          "Correct inaccurate information",
          "Delete your account",
          "Data portability",
          "Object to certain processing",
        ],
      },
      {
        heading: "Third-party services",
        items: [
          "Supabase — database and authentication",
          "OneSignal — notifications",
          "OpenAI — receipt processing",
          "Firebase / Google Analytics — usage data",
          "Sentry — error tracking",
        ],
      },
      {
        heading: "Children",
        body: "Spliter is not directed at children under 13. We do not knowingly collect minors' data.",
      },
    ],
  },
  lastwhen: {
    lastUpdated: "April 28, 2026",
    contactEmail: CONTACT,
    summary:
      "LastWhen helps you track irregular recurring tasks across your devices. We collect account information and task data to power sync and reminders. We do not sell your data or use it for advertising.",
    blocks: [
      {
        heading: "Information we collect",
        subsections: [
          {
            label: "You provide",
            body: "Your email address and name when you create an account or sign in via Apple or Google. Task names, cadences, tolerance windows, rooms, and completion history you create in the app.",
          },
          {
            label: "Collected automatically",
            body: "Device type, OS version, and unique device identifiers. Features used, screens visited, actions taken, and session durations. Crash and error reports. Push notification tokens to deliver task reminders.",
          },
          {
            label: "From third parties",
            body: "If you sign in via Apple or Google, we receive your name and email from that provider. When you subscribe, our payment provider receives your purchase token from the App Store or Google Play — we do not store payment card details.",
          },
        ],
      },
      {
        heading: "How we use your information",
        items: [
          "Provide, operate, and sync your task data across devices",
          "Authenticate your identity and secure your account",
          "Send reminders and notifications for due or overdue tasks",
          "Process and manage your subscription",
          "Analyze usage patterns to improve features and fix bugs",
          "Respond to support requests and comply with legal obligations",
        ],
      },
      {
        heading: "Data sharing",
        body: "We share your information only with service providers who operate our infrastructure (authentication, analytics, error tracking, push notifications, payment processing), when required by law, or in connection with a business transfer. We do not sell your personal information.",
      },
      {
        heading: "Data retention",
        body: "We retain your account and task data while your account is active. If you delete your account, we delete or anonymize your personal information within 30 days, except where retention is required by law.",
      },
      {
        heading: "Security",
        items: [
          "Data encrypted in transit and at rest",
          "Access controls so users can only access their own data",
          "Secrets and credentials stored server-side, never exposed to clients",
          "Regular security reviews and dependency updates",
        ],
      },
      {
        heading: "Your rights",
        items: [
          "Access — request a copy of your personal information",
          "Correction — request correction of inaccurate or incomplete data",
          "Deletion — delete your account in-app under Profile → Delete Account",
          "Portability — request your data in a machine-readable format",
          "Opt out of analytics — disable usage analytics in app settings",
        ],
      },
      {
        heading: "Required permissions",
        body: "LastWhen requests notification permission to deliver task reminders to your device.",
      },
      {
        heading: "Children",
        body: "LastWhen is not directed at children under 13 (or under 16 in the EU). We do not knowingly collect personal information from children.",
      },
    ],
  },
  bizscan: {
    lastUpdated: "March 2024",
    contactEmail: CONTACT,
    summary:
      "BizScan operates entirely on your device. Business card images, extracted text, app settings, and exports stay local. Nothing is uploaded to our servers.",
    blocks: [
      {
        heading: "Data storage",
        body: "All business card information, app settings, and exported data remain stored locally on your device exclusively.",
      },
      {
        heading: "Third-party services",
        subsections: [
          { label: "OpenAI", body: "Processes images for text extraction via API. Data is not retained after processing." },
          { label: "RevenueCat", body: "Handles subscription and purchase information only." },
        ],
      },
      {
        heading: "Required permissions",
        body: "The app requires camera access for scanning and storage access for saving cards and exports.",
      },
      {
        heading: "Your control",
        body: "You retain complete authority over your information. Delete data by clearing app data, uninstalling the app, or exporting in standard formats.",
      },
      {
        heading: "Children",
        body: "BizScan is not intended for children under 13.",
      },
    ],
  },
};
