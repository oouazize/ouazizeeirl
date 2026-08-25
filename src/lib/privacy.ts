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
  lastUpdated: "August 25, 2026",
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
        "2.1. Most Mobile applications can be used without creating an account, and “OUSSAMA OUAZIZE” does not build profiles that identify you by name across applications. Where an application does ask for information about you, such as a first name, a photograph, or the content you create, that information is described in this Policy and is processed only for the purposes stated here.",
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
      heading: "Face data and photos of you",
      subsections: [
        {
          label: "What is collected",
          body: "Some Mobile applications ask you to provide a photograph of yourself so the application can deliver its core feature. In the compliment application this is a selfie the application writes a compliment about; in the virtual try-on application \u201cFitly\u201d these are a full-body photo used to show outfits on you and an optional head-and-shoulders photo used to show hairstyles on you, together with the outfit screenshot or haircut photo you pick for each look. Because such photographs show your face, we treat them as face data. Photos are collected only from your own device, and only when you select them from your photo library or take them with the camera yourself \u2014 the applications perform no background or automatic capture.",
        },
        {
          label: "How it is used and shared",
          body: "A photo is sent only when you request the feature that needs it, and only after you have accepted an in-app consent screen that identifies the recipients. The photo travels over an encrypted (HTTPS) connection to our processing endpoint and is forwarded to a third-party AI service \u2014 for Fitly, Google (Gemini API) and OpenAI \u2014 solely to generate the requested result (an edited image, or a short piece of written text), which is returned to your device. The photos are used for no other purpose: never for advertising, never sold, and not used by \u201cOUSSAMA OUAZIZE\u201d or, under the API terms we operate on, by the AI providers to train AI models.",
        },
        {
          label: "No biometric identification",
          body: "No facial recognition is performed by any Mobile application. No face template, faceprint, face embedding, or other biometric identifier is created, derived, stored, or used to identify or authenticate you, and none is shared with anyone.",
        },
        {
          label: "Retention and storage",
          body: "\u201cOUSSAMA OUAZIZE\u201d operates no database, object storage, or log that holds your photos: they exist in memory only for the seconds a request takes and are discarded when the response is returned. The AI providers process them transiently to fulfil the request; any short-lived retention a provider performs for abuse monitoring (up to 30 days for some services) is governed by that provider\u2019s published policies and is not used to train models. Your photos and every generated result are stored only on your own device, for as long as you keep them.",
        },
        {
          label: "Deletion and withdrawal of consent",
          body: "Deleting a saved item removes its images from your device. The application\u2019s Settings include a control (\u201cClear my data\u201d in Fitly\u2019s Settings \u2192 Privacy & data; \u201cDelete everything\u201d in the compliment application) that erases your photos, everything generated from them, and your AI processing permission. You may withdraw the AI processing permission at any time in the application\u2019s Settings, after which nothing is sent until you agree again, or by contacting \u201cOUSSAMA OUAZIZE\u201d.",
        },
      ],
    },
    {
      heading: "Third-party AI services",
      body: "Some Mobile applications may send content you voluntarily submit, such as photos or video frames, to third-party AI services, including OpenAI and Google Gemini, in order to analyze that content and return results inside the application. This content is sent only when you request the feature, is used solely to provide the requested functionality, and is not used by “OUSSAMA OUAZIZE” to train AI models. The processing of this data is subject to the respective third-party privacy policies.",
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
