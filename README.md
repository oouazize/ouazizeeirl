# DevApps

Marketing + privacy hub for iOS apps by Oussama Ouazize.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS.

## Routes

- `/` — landing page with app grid
- `/apps/[slug]` — per-app detail page
- `/apps/[slug]/privacy` — App Store-required privacy policy per app
- `/privacy` — index of all privacy policies
- `/terms` — generic terms of use

## Add a new app

Edit `src/lib/apps.ts` and add an entry to the `apps` array. Routes are
generated statically from that list.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```
