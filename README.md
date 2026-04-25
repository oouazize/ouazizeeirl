# devapps

Marketing + privacy hub for iOS apps by Oussama Ouazize.

Built with Next.js 15 (App Router), TypeScript, raw CSS (Mobbin-inspired).

## Routes

- `/` — landing page with app catalogue
- `/apps/[slug]` — per-app detail page (hero, features, screenshots, press kit)
- `/privacy/[slug]` — App Store-required privacy policy per app

## Add a new app

Edit `src/lib/apps.ts` and append to the `APPS` array. Add matching entry to `src/lib/privacy.ts`. Drop screenshots in `public/screenshots/<slug>/`. Routes generated statically.

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
