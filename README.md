# {BUSINESS_NAME}

Static Astro + Tailwind lead-generation site for `{NICHE}` in `{GEO}`.

This template becomes the root of one dedicated repository for one production
domain. Keep `package.json`, `astro.config.mjs`, `src/`, and `public/` at the Git
root. In Vercel, leave Root Directory blank or set it to `.`.

## Configure

Replace every placeholder in `src/lib/config.ts`, `astro.config.mjs`, `public/robots.txt`, and `public/llms.txt`. Complete `PROVIDERS.md`, `IMAGE_PROMPTS.md`, and `ANALYTICS_SETUP.md` as operational launch records. Supply original, locally relevant copy and compressed images or explicitly approved prompt placeholders before launch.

## Visual system components

- `src/components/Icon.astro` — bespoke duotone icon system (filled shapes, not
  a stroke-icon library). Design 4-8 niche-specific icons per site by adding
  entries to the `ICONS` map; see the doc comment at the top of the file for
  the pattern.
- `src/components/SplitSection.astro`, `src/components/FullBleedBand.astro`,
  `src/components/AngledDivider.astro` — section-composition primitives. Use
  at least 2-3 of them per site, chosen deliberately from the competitor
  visual-pattern summary in `COMPETITOR_RESEARCH.md`, so the page doesn't
  default to "centered heading + card grid" top to bottom.
- `src/components/StickyCtaRail.astro` — desktop sticky call rail, the
  desktop equivalent of the mobile bottom call bar in `Header.astro`. Already
  wired into `BaseLayout.astro`; no per-site setup required.
- `ServiceCard.astro` accepts a `variant` prop (`"bordered"` | `"elevated"`).
  Pick one per site, not per card.

## Verify

```sh
npm install
npm run check
npm run build
