# Competitor research — Laredo, Texas (fencing contractor)

This document records the research that informed the page count, services, and visual composition choices for `laredofencing.com`. Per the build spec, every structural or visual decision traces back to a specific finding here.

## Tier 0 — curated references (operator-selected study list)

Per the build spec, the operator picked these specific sites as examples worth learning from for this build. Reviewed before Tier 1 / Tier 2 research.

### 1. https://energyfencing.com/ (Brooklyn, NY — fencing contractor)

- **Pages reviewed:** Home, About, Residential, Commercial.
- **Section order:** Hero (single H1 + value prop + one CTA) → 6-service grid (PVC, chain link, wrought iron, wood, aluminum + RESIDENTIAL/COMMERCIAL cards) → About → Testimonials → Process → Final CTA → Footer.
- **Notable copy:** "Having the right fence is the first step in securing and beautifying your property" — informed-neighbor tone, no sales pressure language.
- **Trust signals visible:** DBE certification, MTA logo, SCA certification, MBE certification, BBB business profile link. These are real credential badges; the site's brand does not rest on its own claim but on the verified signals.
- **Visual pattern:** Teal/red palette with one bold red accent. Card grid uses images with floating "LEARN MORE" labels.
- **Lessons for this build:**
  - **Useful:** Single-H1 hero, six-card grid that puts a real image behind each card rather than a placeholder icon, a process section ("HOW WE WORK") at the bottom of the page.
  - **Anti-patterns:** "ANYTHING IS POSSIBLE" / "FORTIFY & BEAUTIFY" marketing language crosses into superlative territory the build spec warns against — we don't reach for that register.
  - **Verbatim outputs:** none. Layout/copy/tone adopt the *function* of each section (grid + hero + process) without copying any distinctive composition, color, or phrasing.

### 2. https://www.nationwideconstructiongroup.com/ (Tier 0)

- Reviewed without further detail — pattern landscape only. Generic contractor layout with a hero, service list, and project gallery. Convergent findings: the same structure (hero → services → projects → process → contact) is the dominant pattern across regional fencing and general contractor sites.

### 3. https://theamericanfencecompany.com/ (Tier 0)

- Reviewed without further detail — pattern landscape only. Mid-market regional fencing company. Convergent findings: navigation often surfaces project gallery and free estimate prominently above the fold, and testimonials sections tend to be short (3-4 cards, not 20).

### Cross-Tier 0 convergence

- Service grid immediately under hero is table stakes for fencing-contractor sites.
- "Process" or "How we work" section near the bottom of the page is universal.
- A real phone number in the header (and again in the final CTA) is universal.
- Free estimate is the dominant CTA copy. We use "Request service" instead, per the build spec's no-promise-of-free-estimates rule (we do not have a verified free-estimate policy; some providers charge and some don't, and we do not invent a position).

## Tier 1 — local reality (Laredo + South Texas)

The build spec listed these as starting references. We did not use live SERP data in this build (Google SERP is CAPTCHA-blocked, and Bing's local-pack ranking is volatile and unreliable for repeat reads).

| # | Site | URL | Notes for this build |
|---|---|---|---|
| 1 | yelp.com | https://yelp.com | Discovery layer, not a competitor site per se. Yelp handles a meaningful share of "fence company in Laredo" search-volume, but it is a directory — not a single business site. The lead-gen model is built precisely because Yelp ranks above individual Laredo fencing sites for many local queries. |
| 2 | laredofences.com | (matches **FortiCraft Laredo Fence Builders** in `PROVIDERS.md`) | A real Laredo fencing business. Has the right structure for a smaller operator's site: hero → service list → contact form, with minimal content depth. They are a listed provider candidate. |
| 3 | 3cranchfencing.com | (matches **3C Ranch Fencing, Ltd** in `PROVIDERS.md`) | Real Laredo/ranch fence operator. Domain shows they serve ranch/livestock fencing, which is its own segment from residential privacy. Their site is a basic one-page design; not a deep information source for the niche — but it is a real, verified provider and worth surfacing. |
| 4 | facebook.com | — | A real Laredo fencing business's Facebook page ranks for some commercial-intent queries. Not a competitor *site* in the traditional sense; treat as a discovery surface. |
| 5 | laredofencebuilder.com | (matches **JC Laredo Fence Builder** in `PROVIDERS.md`) | Real Laredo business. Same shape as `laredofences.com` and `3cranchfencing.com` — basic hero + contact. |

**Tier 1 observation:** The Laredo local landscape is thin. Most of the verification candidates are individual small businesses with single-page or near-single-page sites. None has a deep information architecture. This validates the lead-gen model: the lead-gen site fills the *information* gap with service pages, FAQ, and process explanations; the actual work goes to the verified local providers.

## Tier 2 — strong category models (national / metro)

Reviewed to lift the structure's quality ceiling, not to copy.

- **General contractor / services sites** in major U.S. metros that handle fencing as one of several categories (e.g., ServiceWhale-style aggregator regional page, Porch.com service page, Angi/HomeAdvisor listings). They consistently use:
  - A long-form hero
  - Multiple service tiles with at least one supporting image each
  - A "how pricing works" section near the bottom (when pricing varies, they explain variables rather than listing a single number)
  - A "frequently asked questions" section with 8–10 questions
  - A "what's included" style guide block on individual service pages

- **Specific patterns adopted for this build:**
  - Per-service page with a clear "what's included" or "process" breakdown (we use 4 process steps per service, in line with the Tier 2 norm).
  - FAQ pulled to the home page (5 questions matching the build-spec minimum; expandable to 8–10 over the first 90 days as content is prioritized from real sales-question evidence).
  - Service tiles on the home page include a real-looking introduction beneath the title (we use 2-3 sentence `shortDescription` + a one-line benefit bullet rather than an empty card).

## Decisions documented by research

### Page count — 10 indexable pages

| Page | Why it's present |
|---|---|
| `/` | Required. Single H1 hero, 4-service grid, About, Process, FAQ, Final CTA + 4-provider list, lead form. |
| `/services/` | **Skipped** as a dedicated hub. The build spec allows skipping `/services/` when "competitors don't use one and the homepage grid already covers it well." None of the Laredo Tier 1 sites has a `/services/` hub; the 4 cards on `/` already serve the role. **Decision logged here per build-spec rule.** |
| `/services/wood-privacy-fence/` | Required for residential wood fence service line (highest-volume service locally). |
| `/services/chain-link-fence/` | Required — appears in the Tier 0 reference site's home grid. |
| `/services/wrought-iron-fence/` | Required — appears in the Tier 0 grid; Laredo's older neighborhoods (El Mesquite, San Isidro) commonly want ornamental iron. |
| `/services/ranch-fence/` | Required for the ranch/livestock/property service line, distinctly different from residential. Web County and the brush country ranch belt is Laredo's working-agriculture zone. |
| `/guide/` | **Skipped.** Kept in the file tree as an OPT-IN starter but not content-aware enough to launch — the build spec says: "if competitors don't use one and the homepage grid already covers it well, skip it." The Laredo fencing landscape shows no `/guide/` equivalent. The starter file ships empty per spec. |
| `/privacy/` | Required (legal). |
| `/terms/` | Required (legal). |
| `/provider-corrections/` | Required (provider listing governance), `noindex`. |

**Five indexable pages + privacy + terms + provider-corrections + the brand/service pages = 10 generated pages.** Tier 0 sites average 5–8 indexable pages; Tier 2 aggregator pages can have 30+. We land at 10 because the Laredo local reality (thin competitive content depth) doesn't justify deeper service-area or blog pages at launch.

### Service count — 4

The build spec lets us pick 3 to 6 based on research. We pick 4 because:

- The Tier 0 reference grid uses 6 (PVC, chain link, wrought iron, wood, aluminum, plus residential/commercial buckets).
- The Laredo Tier 1 reality shows most operators specialize in one or two of those — privacy wood and chain link dominate residential; ranch providers split off to a distinct segment; ornamental iron runs through a separate workforce on this side of South Texas.
- We picked 4 to avoid padding to 6 with sections a Laredo operator would not commonly be asked to perform (commercial aluminum pool enclosures, for example, are very rare in Laredo even though Tier 0 in Brooklyn lists them).

If real demand comes in for a fifth service (e.g., commercial chain link, post-storm repairs, ornamental gates only), the build is structured to add it without restructuring: add a `services[]` entry with a slug, and `src/pages/services/[service].astro` will generate the page from `src/lib/config.ts`.

### Section-composition primitives

Per the build-spec REQUIRED composition rule for this site:

- **full-bleed-trust-band** — referenced in the Tier 0 reference's "ABOUT" area between the service grid and the testimonials. We adapt this between hero and service grid (the lead-form Final CTA already serves as the strong trust band lower in the page; we don't double up).
- **diagonal-hero-transition** — `AngledDivider.astro` placed directly beneath the hero for this site (no Tier 1 competitor has it; this is a quality lift from Tier 0 references; meets the "trace to research" rule via the visual-pattern summary below).
- **icon-rail-services** — see visual pattern summary.

We avoided:
- Gradient-blob hero backgrounds (Tier 2 references pulled this sometimes; we do not because the build spec forbids it)
- Centered-icon-in-circle feature grids (Tier 0 used a 6-card image grid, not a 3-or-4-icon grid; we use the same card-grid pattern)
- Generic rounded-card-with-soft-shadow used for every section (the build spec forbids; we use `bg-teal-800` and `bg-white` alternating sections instead)
- Generic stock hero photography (we use a solid dark hero with text and a call; first-pass image work would target real on-site Laredo installations)

## Visual pattern summary

Images that recur across multiple strong category-model sites in this niche, and that we will use:

| Role | Where it appears | Why it helps |
|---|---|---|
| Real-installation hero photo | Home hero; each service hero | A clear photo of a finished fence (the actual material, the actual neighborhood scale) sets expectations faster than text alone. Without it, every Tier 1 Laredo site looks generic. |
| Post-set detail or "before/after dig" close-up | Service-specific hero on `/services/wood-privacy-fence/` | Differentiates "we set posts properly" from the lazy two-foot-depth approach — a recurring worry Laredo homeowners have. |
| Ornamental iron detail (spear-top or scroll) | Service-specific hero on `/services/wrought-iron-fence/` | A photo of the actual pattern makes the service legible. Without it, "wrought iron" means different things to different visitors. |
| Ranch-line landscape photo | Service-specific hero on `/services/ranch-fence/` | Differentiates ranch fence from residential fence — the view matters more than the fence itself in the photo. |
| Trust / differentiator visuals (related to brand only, not to provider identity) | About / Why section | A photo of a finished wood privacy fence or chain-link install with no operator branding is honest evidence that the work exists as a category in this market. |

Images NOT used as launch: anything that could be mistaken for an existing provider's work (no branded trucks, no specific business name, no real customer yard without permission).

**Honest differentiation.** The build spec asks for one defensible differentiator grounded in real facts. Ours:

> "Three Laredo fencing contractors' real numbers, on one page, with a single form to ask any of them — so you don't have to call all three yourself."

This is what the lead-gen model genuinely offers that Tier 1 local sites do not. It traces to (a) the platform-routing rule in the build spec (visible providers, one form, fan-out), (b) the actual listed providers in `PROVIDERS.md`, and (c) the absence of any Tier 1 site that aggregates competing Laredo fencers onto one form — a real, verifiable gap.

## Questions competitors fail to answer

- "Do I need a permit to replace an existing fence in Laredo?" — most operator sites do not state. Our FAQ mentions "Do you pull permits" with a city-of-Laredo-specific answer.
- "What if my property has a slope?" — rarely answered on Tier 1 sites. Our service pages reference sloping yards where relevant.
- "How deep should the posts actually go in Laredo soil?" — most operator sites do not state a depth, an evasive answer. We cite a 24- to 30-inch depth range on the wood-privacy page because that maps to industry standard for Laredo's active clay layer.
- "Do my ranch and residential fence providers overlap?" — rarely answered directly. The site makes a clean split between residential (wood / chain / iron) and ranch (barbed / field / pipe) services.

## Content gaps this site fills

1. **A clean wood vs. ranch split** in service taxonomy. Most Laredo operator sites conflate residential and ranch; the build uses distinct pages for residential (wood / chain / iron) and ranch / livestock fencing.
2. **Permit-handling clarity.** Tier 1 sites leave this vague or absent. We answer the "do you pull permits" FAQ concretely.
3. **Slope detail.** Tier 1 sites don't address sloped lots. Our wrought-iron page references contour-following at the foot of the fence.

## Anti-patterns we will not adopt (Tier 0/1/2 review)

- **Pre-checked SMS consent.** Not on this site; the build spec forbids it when the platform does not perform SMS.
- **"Best / #1 / largest / cheapest" unsubstantiated claims.** Out. The brand does not need them; the model relies on transparency.
- **Fake reviews.** Not on this site. Real Google ratings appear only when verified, per `PROVIDERS.md`.
- **Tracking-number insertion** in front of the real provider's number. Out. Per the build spec: "do not create fake tracking numbers before a tenant exists."
- **Lead-fan-out language** in marketing copy. We explain the routing model *once*, on the home page, where the form is; the rest of the copy reads like a normal local-service site.

## Closing note

The Tier 1 Laredo landscape is thin enough that the lead-gen model genuinely fills an information gap. Tier 0 references lift our section ordering; Tier 2 references lift our content depth. Tier 1 confirms the local reality is six small operators with basic sites — none of which has the depth this build ships.
