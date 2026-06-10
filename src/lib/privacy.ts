export interface PrivacyBlock {
  heading: string;
  body?: string;
  paragraphs?: string[];
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

export const DEVELOPER = "OUSSAMA OUAZIZE";

export const UNIVERSAL_PRIVACY: PrivacyData = {
  lastUpdated: "June 10, 2026",
  contactEmail: CONTACT,
  summary:
    "This document, referred to as the “Privacy Policy” (hereinafter referred to as the “Policy”), outlines the terms governing the collection and utilization of Personal Information from Users (referred to as “You”) by “OUSSAMA OUAZIZE” (referred to as “OUSSAMA OUAZIZE”) during the download, installation, and use of the mobile applications published by “OUSSAMA OUAZIZE” (hereinafter referred to as the “Mobile applications”).",
  blocks: [
    {
      heading: "Consent of the user",
      body: "By downloading, installing, and using the Mobile applications, you (also referred to as the “User”) voluntarily provide written consent for the processing of your Personal Information as specified in this Policy.",
    },
    {
      heading: "General terms",
      paragraphs: [
        "1.1. This Policy constitutes an integral part of the End User License Agreement (EULA) for the Mobile applications. By downloading and utilizing the Mobile applications, you fully accept the terms outlined in this Policy.",
        "1.2. The methods for processing Personal Information include actions such as collection, recording, systematization, storage, updating, extraction, use, transfer, depersonalization, blocking, deletion, and destruction, with or without automated facilities.",
        "1.3. Terms from the EULA and other agreements with the User are applicable unless explicitly stated otherwise in this Policy.",
      ],
    },
    {
      heading: "Personal information",
      paragraphs: [
        "2.1. When using the Mobile application, the User does not actively provide personal information, and “OUSSAMA OUAZIZE” does not collect and store data that enables User identification.",
        "2.2. Personal Information, as defined in this Policy, includes the name and email address you provide when creating an account or signing in via Apple or Google, together with the content you create inside the application. Personal Information also includes the User's email address provided during product surveys or support requests.",
        "2.3. The Mobile applications may with your permission, access your camera or photo library, your location, or send you notifications. These permissions are optional and can be revoked at any time in your device settings.",
        "2.4. The User acknowledges the use of third-party software in the Mobile application, which may collect and transmit depersonalized data.",
      ],
    },
    {
      heading: "Third-party software",
      body: "Third-party software may encompass analytic systems such as “Sentry” and “Firebase.” The collected data may include device information, query data, and other details of user activity. The collection and use of this data are subject to the respective third-party privacy policies.",
    },
    {
      heading: "Children's privacy",
      body: "“OUSSAMA OUAZIZE” does not intentionally collect personal data from children under 16. If such information is inadvertently obtained, it will be promptly deleted upon discovery.",
    },
    {
      heading: "Purposes of personal information processing",
      body: "“OUSSAMA OUAZIZE” may use Personal Information for communication, marketing, statistical research, and targeting advertising based on depersonalized data.",
    },
    {
      heading: "User's rights",
      body: "The User has rights to be informed, access, correct, restrict, object, withdraw consent, delete personal data, and receive data for portability. These rights can be exercised by contacting “OUSSAMA OUAZIZE”.",
    },
    {
      heading: "Data retention",
      body: "Personal Information will be stored for as long as necessary or permitted by law. “OUSSAMA OUAZIZE” periodically reviews data processing systems for relevance.",
    },
    {
      heading: "Data protection",
      body: "“OUSSAMA OUAZIZE” stores and protects Personal Information against unauthorized access according to internal terms and regulations.",
    },
    {
      heading: "Transfer of personal information",
      body: "“OUSSAMA OUAZIZE” may transfer Personal Information to third parties with User consent, for Mobile application functionality, third-party service providers, or asset transfers.",
    },
    {
      heading: "Amendments and deletion",
      body: `For questions, amendments, or deletion requests regarding Personal Information, users can contact “OUSSAMA OUAZIZE” at ${CONTACT}.`,
    },
    {
      heading: "Amendments to privacy policy",
      body: "“OUSSAMA OUAZIZE” may unilaterally amend or terminate this Policy without prior notice. Users are advised to regularly check the current version.",
    },
  ],
};
