// Paw (Animal Track Identifier) field-guide content for the website.
// species.json / articles.json are exported from the app's own authored data by
// animal-tracks-id/scripts/export-web-tracks.mjs (same text the app ships, plus
// the track drawings in /public/tracks). COMPARISONS below are written for the
// web: side-by-side guides for the look-alikes people search for most.

import speciesData from "@/data/paw/species.json";
import articleData from "@/data/paw/articles.json";

export interface PawFeature {
  n: number;
  text: string;
  foot: "front" | "hind";
}

export interface PawPhoto {
  uri: string;
  alt: string;
  credit: string;
  license: string;
  source?: string;
}

export interface PawSpecies {
  id: string;
  slug: string;
  name: string;
  sci: string;
  group: string;
  trackType: string;
  sizeImp: string;
  sizeMet: string;
  toes: number;
  claws: boolean;
  gait: string;
  stride: string;
  danger: "low" | "moderate" | "high";
  dangerNote: string;
  habitat: string;
  range: string;
  activity: string;
  behavior: string;
  idTips: string[];
  blurb: string;
  confusedWith: string[];
  footLabels: [string, string];
  features: PawFeature[];
  trail: { kind: string; name: string; how: string };
  guide: null | {
    summary: string;
    trackMorphology: string;
    gait: string;
    measurements: { imp: string; met: string };
    scat: string;
    similar: string;
    substrate: string;
    photo: PawPhoto | null;
  };
}

export interface PawArticle {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readMinutes: number;
  sections: { heading: string; body: string }[];
  related: string[];
}

export const PAW_SPECIES = speciesData as PawSpecies[];

const COMPARISONS: PawArticle[] = [
  {
    slug: "coyote-vs-dog-vs-fox-tracks",
    category: "Look-alikes",
    title: "Coyote vs dog vs fox tracks: how to tell them apart",
    summary:
      "Three four-toed canine prints with claws. Size helps, but the shape of the toes, the heel pad and the line of the trail settle it.",
    readMinutes: 5,
    related: ["coyote", "domestic-dog", "red-fox", "gray-wolf"],
    sections: [
      {
        heading: "Start with what they share",
        body:
          "All three leave four toes in front of a single heel pad, and claw marks usually show. That rules out cats (no claws, round print) but not much else. To separate them, look at three things in order: overall shape, how the outer toes sit, and the trail.",
      },
      {
        heading: "Red fox: small, furry, and ruler-straight",
        body:
          "A fox front print is about 2 in long and 1.6 in wide (5 × 4 cm). The feet are so hairy that the pads look small and widely spaced, and the heel pad often prints only as a thin chevron-shaped bar. Fox trails are the straightest of the three: a single line of prints that looks drawn with a ruler, because the hind foot lands exactly in the front print.",
      },
      {
        heading: "Coyote: a compact oval with an X",
        body:
          "A coyote front print runs about 2.5 × 1.9 in (6.4 × 4.8 cm) — clearly longer than wide. The two outer toes tuck in behind the two middle toes, which leaves an open X-shaped space between toes and heel pad. Claw marks are sharpest on the two middle toes and point forward. The heel pad is small, about a third of the print. On the move, coyotes trot in a tidy, purposeful line.",
      },
      {
        heading: "Domestic dog: round, splayed, and wandering",
        body:
          "Dog prints vary from 1.5 to over 4 in depending on the breed, so size alone is a poor test. Shape is better: dog prints are rounder, the outer toes sit level with the inner toes (so there is no clean X), the heel pad is large — half the print or more — and the blunt claws splay outward. The trail is the giveaway: dogs zig-zag, stop, double back and visit everything, while wild canids travel with purpose.",
      },
      {
        heading: "Quick checklist",
        body:
          "Longer than wide with an X and a straight trail → coyote. Small, blurry, thin chevron heel, ruler-straight trail → red fox. Round, splayed toes, big heel pad, wandering trail → dog. Over 4 in long with a long straight trail in wolf country → consider gray wolf. Measure several prints, not one: a single print in soft mud can spread by 20% or more.",
      },
    ],
  },
  {
    slug: "bobcat-vs-house-cat-vs-mountain-lion-tracks",
    category: "Look-alikes",
    title: "Bobcat vs house cat vs mountain lion tracks",
    summary:
      "Cat prints share the same design — no claws, a leading toe, a three-lobed heel pad. Size is what separates the three.",
    readMinutes: 4,
    related: ["bobcat", "house-cat", "mountain-lion"],
    sections: [
      {
        heading: "How to know it's a cat at all",
        body:
          "Cats walk with their claws pulled in, so a clean cat print shows four round toes and no claw marks. The print is about as wide as it is long. One of the two middle toes sits a little ahead of the other — like the middle finger on a hand — so the print is slightly asymmetric. The heel pad is large compared with the toes and has two lobes on its front edge and three on its back edge. A canine heel pad has only one lobe in front.",
      },
      {
        heading: "House cat: about 1.2 inches",
        body:
          "A domestic cat print is roughly 1.2 × 1.2 in (3 × 3 cm). It appears near homes, farms and gardens, often along fences and walls. Like all cats, it walks in a direct-register line: the hind foot lands in the front print.",
      },
      {
        heading: "Bobcat: about 1.8 inches",
        body:
          "A bobcat print is around 1.8 × 1.8 in (4.6 × 4.6 cm) — clearly larger than a house cat, but well under half the size of a mountain lion. Look for a small notch on the leading edge of the heel pad. Bobcats use edges: field margins, logs, ledges and the sides of trails.",
      },
      {
        heading: "Mountain lion: 3 to 4 inches",
        body:
          "Cougar prints run 3–4 in (7.5–10 cm) and are often wider than long. The heel pad is huge relative to the toes. In mud the tail can leave a drag line. Their range is mostly the West, Florida and parts of Canada, so location matters: a 3.5 in round, clawless print in Montana is a very different finding from one in Ohio.",
      },
      {
        heading: "When it looks like a cat but has claws",
        body:
          "Running cats sometimes show claws, and dogs sometimes don't. Use more than one print, and check the heel pad: two lobes in front means cat, one means dog.",
      },
    ],
  },
  {
    slug: "deer-vs-hog-vs-elk-vs-moose-tracks",
    category: "Look-alikes",
    title: "Deer vs feral hog vs elk vs moose tracks",
    summary:
      "All four leave split hooves. The tips, the overall outline and — for hogs — where the dewclaws land tell them apart.",
    readMinutes: 4,
    related: ["white-tailed-deer", "feral-hog", "elk", "moose"],
    sections: [
      {
        heading: "Split hooves at a glance",
        body:
          "Deer, elk, moose and wild pigs all walk on two hoof halves (cleaves), so the print looks like two crescents with a gap between them. The two small toes higher on the leg — the dewclaws — usually only print in deep mud or snow, or when the animal is moving fast.",
      },
      {
        heading: "White-tailed deer: a slim heart, 2.5–3.5 in",
        body:
          "Deer prints are narrow and heart-shaped with pointed tips. When dewclaws print, they sit directly behind the hoof, in line with it.",
      },
      {
        heading: "Feral hog: blunt tips and wide dewclaws",
        body:
          "Hog prints are 2–2.5 in long with rounded, blunt tips and a squarer outline. The key mark is the dewclaws: on a hog they are set wide, outside the line of the hoof edges, and they print often — even on firm ground. Rooted-up soil and wallows nearby are strong supporting signs.",
      },
      {
        heading: "Elk: big and rounded, 4–4.75 in",
        body:
          "Elk prints are much larger than deer and noticeably rounder, with broad, blunt tips — the overall outline can look almost circular.",
      },
      {
        heading: "Moose: the largest, 5–6.5 in",
        body:
          "Moose prints are long with pointed tips that often spread into a V. Dewclaws commonly register in soft ground. A long stride of 40 in or more fits only a moose.",
      },
    ],
  },
  {
    slug: "black-bear-vs-grizzly-tracks",
    category: "Look-alikes",
    title: "Black bear vs grizzly bear tracks",
    summary: "Both leave five toes and a big palm. The toe arc and the length of the claws decide it.",
    readMinutes: 3,
    related: ["black-bear", "grizzly-bear"],
    sections: [
      {
        heading: "Look at the arc of the toes",
        body:
          "On a black bear the five toes sit in a strongly curved arc, and the smallest (inner) toe is often faint. On a grizzly the toes form a much straighter row and sit close together.",
      },
      {
        heading: "The toe-line test",
        body:
          "On a front print, lay a straight edge from the bottom of the big outer toe across the top of the palm pad. If the small inner toe sits mostly below that line, it points to a black bear; if all the toes sit above it, it points to a grizzly. Use it together with claw length, not alone.",
      },
      {
        heading: "Claw length and distance",
        body:
          "Grizzly front claws are long — often 2–4 in — and print well ahead of the toes. Black bear claws are short, curved and close to the toes, and often don't print at all.",
      },
      {
        heading: "Stay safe",
        body:
          "Fresh bear tracks mean a bear may be close. Make noise, keep dogs leashed, carry bear spray where grizzlies live, and back away from cubs or a carcass.",
      },
    ],
  },
  {
    slug: "how-to-measure-animal-tracks",
    category: "Field Skills",
    title: "How to measure an animal track and its stride",
    summary:
      "Three measurements — print size, stride and trail width — turn a guess into a confident ID.",
    readMinutes: 4,
    related: ["reading-gaits", "reading-the-substrate"],
    sections: [
      {
        heading: "Measure the clearest front print",
        body:
          "Front feet usually carry more weight and print more clearly. Measure length from the front of the leading toe to the back of the heel pad, and width across the widest point. Most field guides measure without the claws. Note whether yours includes them, because claws can add a centimetre or more.",
      },
      {
        heading: "Measure the stride",
        body:
          "Stride is the distance from a point on one print to the same point on the next print made by the same foot. Measure three or four and take the middle value: one step is rarely typical. In a direct-register trot, front and hind overlap, so measure from one print cluster to the next.",
      },
      {
        heading: "Measure the trail width",
        body:
          "Trail width (straddle) is the distance between the outer edges of the left and right prints. Wide-bodied animals such as bears and beavers leave wide trails. Foxes and cats place their feet almost in a single line.",
      },
      {
        heading: "Add scale to every photo",
        body:
          "A coin, a ruler or your boot in the frame makes a photo useful later. Shoot straight down from above with low side light, which makes shallow prints readable. That's also how to get the best result from a track identifier app.",
      },
    ],
  },
];

export const PAW_ARTICLES: PawArticle[] = [...COMPARISONS, ...(articleData as PawArticle[])];

export function speciesBySlug(slug: string): PawSpecies | undefined {
  return PAW_SPECIES.find((s) => s.slug === slug);
}

export function articleBySlug(slug: string): PawArticle | undefined {
  return PAW_ARTICLES.find((a) => a.slug === slug);
}

/** Resolve a related slug to a link (species page or article). */
export function relatedLink(slug: string): { href: string; title: string } | null {
  const sp = speciesBySlug(slug);
  if (sp) return { href: `/paw/tracks/${sp.slug}`, title: `${sp.name} tracks` };
  // learn-base species slugs differ for a few animals
  const alias: Record<string, string> = { cougar: "mountain-lion", "american-black-bear": "black-bear", "brown-bear": "grizzly-bear", "wild-boar": "feral-hog" };
  if (alias[slug]) return relatedLink(alias[slug]);
  const a = articleBySlug(slug);
  if (a) return { href: `/paw/guide/${a.slug}`, title: a.title };
  return null;
}

export const GROUP_ORDER = ["Canine", "Feline", "Hoofed", "Bear", "Other", "Rodent", "Rabbit", "Bird"];
