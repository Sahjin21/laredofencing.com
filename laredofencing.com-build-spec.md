# Lead-Gen Site Builder Prompt: laredofencing.com

You are building a production lead-generation website for **fencing contractor** in
**Laredo, Texas** on **laredofencing.com**.

## Starting point and repository shape

- Create a new, dedicated Git repository and local working directory for
  `laredofencing.com`. Every generated site uses its own repository and its own domain
- The full template is embedded in the **Template source** appendix at the end of this
  document — create each listed file with its exact contents at the corresponding path
  in the new repository root (`astro.config.mjs` at the repo root, `src/...` under
  `src/`, and so on). Do not copy an existing site's structure, search the filesystem
  for `lead-gen-sites/_template/`, or try to `git clone` it — none of that is available
  to you, and the appendix is complete and authoritative on its own
- The finished repository must be a flat Astro project: `package.json`,
  `astro.config.mjs`, `vercel.json`, `src/`, and `public/` live directly at the Git
  repository root. There must be no `lead-gen-sites/sites/laredofencing.com/` wrapper,
  monorepo workspace, or second project directory inside the repository
- Use Astro + Tailwind, fully static, with no React or server runtime
- Deploy to Vercel project `laredofencing-com`
- In Vercel, leave **Root Directory** unset or set it to `.`. The repository root is
  the application root, and no per-site nested-directory configuration is required
- Production domain: `laredofencing.com`
- Set `SITE_URL=https://laredofencing.com` for the build and replace the example URL in
  `astro.config.mjs`
- Keep the reusable components, responsive layout, keyboard navigation, and visible
  focus states provided by the template

## Required configuration

Fill every placeholder in `src/lib/config.ts`, `astro.config.mjs`, `public/robots.txt`,
`public/llms.txt`, privacy, and terms. Use these known values:

- niche: `fencing contractor`
- geo: `Laredo, Texas`
- domain: `laredofencing.com`
- primary keyword: `fencing contractor Laredo, Texas`
- site brand: create and confirm a distinctive local consumer brand using the naming
  rules below; the brand must not look like a generic directory
- legal site operator: `Kurtz & Boon LLC`. Keep this separate from the consumer-facing
  site brand and from every listed provider. Show the operator identity in privacy,
  terms, and an appropriate footer disclosure
- phone and phoneHref: use each listed provider's real confirmed number. Phone CTAs are
  ordinary `tel:` links that open the visitor's phone application
- operator privacy email and mailing address: obtain and confirm real Kurtz & Boon LLC
  contact values before launch; do not substitute a provider's identity
- service areas: `Laredo, Texas` plus only nearby communities the business truly serves
- services: typically four high-intent services, each with an original introduction,
  three concrete benefits, and a three-step process. Use three to six when the
  competitor research below genuinely supports a different natural count for this
  niche — see "Site structure" below
- FAQs: five to ten questions based on real customer search intent
- GA4 setup is an operator handoff: ask the operator to create the GA4 property/web stream and provide both the numeric property ID and its `G-XXXXXXXXXX` measurement ID or approved Google tag snippet
- Search Console operator handoff: create and verify the Domain property `sc-domain:laredofencing.com` and save that exact property identifier in the dashboard site record
- analytics implementation record: create or update `ANALYTICS_SETUP.md` with the GA4
  account/property owner, numeric property ID, web stream ID, measurement ID or supplied
  snippet, installation date, and verification result; also record the Search Console
  property identifier, property URL, verification method/date, and verified owner
- leadTrackerUrl: `https://sahjin.dev` (the dashboard API origin; every call tap and
  form submission is reported there so lead counts are provable to future tenants)
- providers: with a signed tenant, list exactly one entry (the tenant's business).
  Before a tenant exists, list 2-4 real local fencing contractor businesses from this
  market's discovery evidence (dashboard: Discovery -> market detail -> businesses),
  each with its real name and phone in tel: href form. Never invent businesses or
  numbers — visitors must reach a real provider and always see who they are
  contacting

## Platform lead routing strategy

The dashboard is the routing authority. The static site captures the visitor's choice
and attribution, but it must not decide recipients, send provider emails directly, or
embed routing rules that can drift out of sync with the site's tenant status.

### Marketplace lifecycle

- **Pre-tenant marketplace:** list 2-4 verified real local businesses by name. Clearly
  tell visitors that a submitted request is shared with every listed provider, then POST
  the form once to the dashboard. The dashboard distributes the lead to all listed
  businesses. A phone CTA dials the real number of the provider the visitor selects.
- **Post-tenant exclusive:** as soon as a tenant is active, replace the marketplace list
  with exactly one provider—the tenant. All form leads and phone CTAs go only to that
  business; do not leave fallback providers or former marketplace recipients active.
- **Offboarding:** when a tenant leaves, remove its exclusive configuration and return
  the site to the pre-tenant marketplace state. Re-verify 2-4 real providers before
  publishing the restored list, and resume routing submitted leads to all of them.

### Phone click tracking

- Display each provider's real, verified business number in an anchor whose `href` is a
  normalized `tel:` URL. Identify the selected provider with `data-business` and mark the
  link with `data-lead-call` so the shared JavaScript click handler can measure it.
- On every phone-link click, fire the GA4 `call_click` event and POST a `call_click` event
  to `leadTrackerUrl + /api/v1/leads/events`. Include domain, provider name, page path,
  page URL, referrer, and available UTM attribution. Tracking must be best-effort and
  must never delay or prevent the browser from opening the phone dialer.
- Version 1 measures call intent through clicks, not answered calls or call outcomes.
  Use the provider's real number directly; Twilio, number pools, forwarding numbers, and
  fabricated tracking numbers are neither required nor permitted.

### Form forwarding and delivery records

- Submit each form exactly once to the dashboard endpoint at
  `leadTrackerUrl + /api/v1/leads/events` with `kind: form_submit`. Do not fan out from
  browser JavaScript and do not POST separately to providers or third-party form inboxes.
- In pre-tenant mode, the dashboard forwards the lead by email to **all** currently
  listed verified businesses. In post-tenant mode, it forwards the lead only to the
  active tenant. The site must send the provider identifiers needed for the dashboard
  to resolve the same visible recipient set.
- The dashboard records a delivery result for every intended recipient, including the
  provider, attempted time, and delivered or failed status. A browser success message
  may appear only after the dashboard accepts the submission; failed delivery remains
  visible in dashboard operations for follow-up.
- Keep `formEndpoint` unset unless it is explicitly configured as a dashboard-owned
  compatibility endpoint. It must never bypass or duplicate the platform routing logic.

### Provider verification

Before a provider appears on the site or receives a lead, verify and record the evidence
source and date for every requirement:

- The business name matches public records or its current official listing.
- The phone number is current, verified from a recent official listing or other current
  public source. The builder must not place a verification call to a real provider.
- The business actually serves this niche, not merely a tangential category.
- The business is operational and is not permanently closed.

`PROVIDERS.md` is the repository's operational provider source of truth. Create one
record per provider with a stable internal record ID and: lifecycle status
(`candidate`, `listed`, `tenant`, `removed`, or `reverification-needed`); public
business name; public-record or official-listing URL and checked date; displayed and
normalized phone number; phone source URL, checked date, and verification method; test
operator-authorized call date, outcome, and verifier when the operator personally chose
to make a call; niche/service evidence URL and
checked date; operational-status evidence URL and checked date; confirmed service area;
verified email source and date when email delivery is enabled; first-listed,
last-verified, and removed dates; and concise dispute/correction notes.

Do not put customer lead PII in `PROVIDERS.md`, and do not expose its internal call notes
or verifier identity on the public site. `src/lib/config.ts` contains only the current
visitor-facing/routing values derived from active records. Preserve removed records for
the audit trail. Re-verify every active provider immediately before first launch, before
restoring marketplace mode after offboarding, whenever a delivery fails or a listing is
disputed, and at least every 90 days while listed. A stale or incomplete record cannot
receive leads.

### Provider rating evidence

Record each verified provider's current Google rating and review count in `PROVIDERS.md`
alongside its source URL and checked date (dashboard discovery evidence already carries
this for candidates sourced from Maps). Set the matching `rating`/`reviewCount` fields on
that provider's entry in `src/lib/config.ts` so the template's `RatingBadge` renders it
next to the provider's name — this is one of the only genuine, checkable trust signals
available in the pre-tenant marketplace model, and skipping it leaves the site looking
thinner than competitors that lead with review counts. Leave both fields unset for any
provider without a currently-verified rating; never estimate, average, or reuse a number
from a prior check.

Do not contact a provider merely to complete this checklist. A current official website,
Google Business Profile/Maps listing, public business record, and other recent consistent
sources should normally establish the phone and operating status. If the operator wants
additional confirmation, leave it as a manual operator task; the builder does not call,
email, or submit forms to the provider.

### Discovery candidates to verify

The records below are leads for research, not approved providers. Discovery data can be
stale, incomplete, or wrong. Copy a candidate into `PROVIDERS.md` only after completing
every verification field above; never infer an email address from a domain or listing.

1. **Fence World**
   - Discovery record ID: `8295`
   - Source business ID: `ChIJoRZHV34hYYYRrEO2K35gRzw`
   - Phone candidate: `(956) 796-0102`
   - Address candidate: 202 Corpus Christi St, Laredo, TX 78040
   - Google Maps/source URL: https://maps.google.com/?cid=4343546460637643692&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA
   - Website candidate: http://www.fenceworldstx.com/
   - Discovery data last updated: 2026-07-31
   - Discovery closed flag: False

2. **Maverick Fence Co**
   - Discovery record ID: `8299`
   - Source business ID: `ChIJ_wRODuwjYYYRc8dIhUs4nHM`
   - Phone candidate: `(956) 722-3125`
   - Address candidate: 904 S Zapata Hwy, Laredo, TX 78043
   - Google Maps/source URL: https://maps.google.com/?cid=8330595307738417011&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA
   - Website candidate: Not available
   - Discovery data last updated: 2026-07-31
   - Discovery closed flag: False

3. **JC Laredo Fence Builder**
   - Discovery record ID: `8294`
   - Source business ID: `ChIJh6f2RMiZhKERzhHaUBiV2QU`
   - Phone candidate: `(956) 815-3260`
   - Address candidate: Not available
   - Google Maps/source URL: https://maps.google.com/?cid=421531971804074446&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA
   - Website candidate: https://www.laredofencebuilder.com/
   - Discovery data last updated: 2026-07-31
   - Discovery closed flag: False

4. **FortiCraft Laredo Fence Builders**
   - Discovery record ID: `8297`
   - Source business ID: `ChIJnzl5l36fNiwR_4K2QQTmBMo`
   - Phone candidate: `(956) 815-3129`
   - Address candidate: Not available
   - Google Maps/source URL: https://maps.google.com/?cid=14557012801525023487&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA
   - Website candidate: https://www.laredofences.com/
   - Discovery data last updated: 2026-07-31
   - Discovery closed flag: False

5. **Martinez Ranch Fencing**
   - Discovery record ID: `8298`
   - Source business ID: `ChIJS8A5D1sjYYYRFJTc1AFvzAE`
   - Phone candidate: `(956) 285-4863`
   - Address candidate: 4225 Marcy Loop, Laredo, TX 78046
   - Google Maps/source URL: https://maps.google.com/?cid=129600542943777812&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA
   - Website candidate: Not available
   - Discovery data last updated: 2026-07-31
   - Discovery closed flag: False

6. **Laredo Fence Materials Inc**
   - Discovery record ID: `8300`
   - Source business ID: `ChIJ_wRODuwjYYYRfeK1RbO9SuI`
   - Phone candidate: `(956) 722-5281`
   - Address candidate: 904 S Zapata Hwy, Laredo, TX 78043
   - Google Maps/source URL: https://maps.google.com/?cid=16306053978514645629&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA
   - Website candidate: Not available
   - Discovery data last updated: 2026-07-31
   - Discovery closed flag: False

7. **RS Torres Services**
   - Discovery record ID: `8301`
   - Source business ID: `ChIJmy74Pns6wIkRq68BtP-1194`
   - Phone candidate: `(956) 269-4346`
   - Address candidate: Not available
   - Google Maps/source URL: https://maps.google.com/?cid=16057503106254090155&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA
   - Website candidate: Not available
   - Discovery data last updated: 2026-07-31
   - Discovery closed flag: False

8. **3C Ranch Fencing, Ltd**
   - Discovery record ID: `8296`
   - Source business ID: `ChIJ52sF4VUgYYYRxOKl19QM9pM`
   - Phone candidate: `(956) 723-7959`
   - Address candidate: 800 E Mann Rd Ste. 103, Laredo, TX 78041
   - Google Maps/source URL: https://maps.google.com/?cid=10661723276136800964&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA
   - Website candidate: http://3cranchfencing.com/
   - Discovery data last updated: 2026-07-31
   - Discovery closed flag: False

### What not to do

- Do not create fake tracking numbers before a tenant exists.
- Do not hide which businesses are listed or where submitted leads will go.
- Do not invent, infer, scrape without verification, or guess provider email addresses.
- Do not invent claims about lead volume, calls, conversion rates, or past results.

### Provider listing fallback

If discovery returns fewer than two real local businesses for the niche, expand the
research to adjacent search terms first (for example, `lawyer` after `expungement
lawyer`), then to the broader category only when the business demonstrably serves this
niche. If only one verified provider remains, show that provider with clear messaging:
`Limited providers in this market`. If no provider can be verified, the site cannot
launch; record the blocker and escalate it instead of routing leads to an invented or
irrelevant business.

Treat discovery as a candidate list, not a complete or authoritative provider roster.
Zero reviews, a thin/broken/abandoned website, a disconnected number, a permanently
closed flag, inconsistent business names or addresses, no recent public activity, or
conflicting listings are risk signals that require more research. Zero reviews or an
unattractive website alone do not prove closure, but the builder must not list the
business merely because it appeared in dashboard analysis.

When a candidate is questionable or cannot pass every verification check, search for a
replacement using multiple local discovery paths: Google organic results for
`fencing contractor Laredo, Texas` and each selected service, Google Maps, nearby-city and
neighborhood variants, broader/adjacent category terms, local trade-association or
chamber directories, and the business's own current website/profile. Search the
business name, address, and phone separately to reconcile conflicting records. Add new
candidates to `PROVIDERS.md` with their source URLs and dates, then apply the same
verification standard. Do not lower the standard just to reach two to four listings.

### Provider correction and removal requests

- Publish `/provider-corrections/` with `noindex`. Link it beside every displayed
  provider group and in the footer using clear language such as
  `Business owner? Correct or remove a listing`.
- The page must let an owner or authorized representative request removal, correction,
  or a lead-routing change and provide business name, requester name, business email,
  optional phone, request type, details/source, and an authorization attestation.
- Submit this form to the dashboard as `kind: provider_request`, never
  `form_submit`. A provider request is stored for operator review but is not counted as
  a customer lead and must never be forwarded to the tenant or marketplace providers.
- Also show the configured Kurtz & Boon LLC operator email as a fallback. Do not require
  a purchase, sales conversation, or fee to request correction or removal.
- Do not remove a listing automatically from an unauthenticated submission because a
  competitor could abuse the form. The operator verifies the requester against current
  business contact evidence. For a credible request, pause public display and lead
  routing while resolving it; record the request, verification, action, and dates in
  `PROVIDERS.md`.

Do not invent licenses, insurance, years in business, reviews, awards, pricing,
response times, addresses, or other claims. Remove or rewrite any claim that cannot be
verified. The finished repository must contain no brace-delimited placeholders.

## Local brand creation

This is a branded lead-generation site operated by Kurtz & Boon LLC, not a faceless
directory and not a fictional service company. Before design or copy, propose three
brand-name candidates and record the chosen name plus rationale in `BRAND_BRIEF.md`.

Use these naming criteria:

- Prefer two to four short, pronounceable words. Combine a recognizable local cue with
  a clear service-category cue when that produces a natural name.
- Sound useful, dependable, and approachable. Light wordplay is acceptable when it fits
  the niche, but avoid childish, crude, confusing, or overly cute names.
- Keep the name broad enough to support all selected services and future useful
  content. Do not make it sound like a ranking list or government/nonprofit program.
- Never put unverified superiority, scale, licensing, or tenure claims in the name:
  avoid `best`, `#1`, `official`, `licensed`, or similar implications.
- The domain may be keyword-forward while the visible brand is more memorable. For
  example, a domain such as `kansascitydogwasteremoval.com` may use a brand in the style
  of `KC Poo Pros` if basic conflict checks support it.
- Run basic web, state-business-registry, domain, and trademark-conflict searches before
  selection. Record possible conflicts and escalate uncertainty; this is screening, not
  legal trademark clearance.

Use the site brand consistently in navigation, titles, visual identity, and explanatory
copy. In pre-tenant mode, never use `we` to imply that the site brand performs the
service. Disclose that Kurtz & Boon LLC operates the site and connects visitors with the
real independent providers in one concise sentence, placed once — in the About section
or the footer, not both and not repeated. Do not turn this disclosure into a running
theme, an origin story, or an explanation of why the site exists in terms of provider
marketing costs, lead-generation economics, or the operator's business rationale.
Visitors do not need or want that context. Beyond the one required disclosure sentence,
write every other line of copy the way a normal, trustworthy local-service business
would — focused entirely on the customer's problem and how to get help, not on how the
site itself works.

## Mandatory competitor and visual research — complete before writing

Use two research tiers rather than treating weak local sites as design authorities.


**Tier 0 — curated references, study these first:** the operator picked these specific real sites as examples worth learning from for this build. Review each one before starting Tier 1/Tier 2 research below. Note their section order, section-composition choices, image roles, and copy tone in `COMPETITOR_RESEARCH.md` the same way as any other researched site — never copy their layout, brand, or assets directly, but let them raise the quality bar for structure and polish.

1. https://energyfencing.com/
2. https://www.nationwideconstructiongroup.com/
3. https://theamericanfencecompany.com/

**Tier 1 — local ranking reality:** search Google for both `fencing contractor Laredo, Texas` and
each selected `[service] Laredo, Texas` query. Analyze the top five relevant organic local
business sites; skip directories, lead aggregators, social profiles, and the future site
itself. Use this tier to understand local intent, offers, provider vocabulary, trust
gaps, and the competitive quality threshold. These stored organic results are the
starting references when available:

1. https://yelp.com
2. https://laredofences.com
3. https://3cranchfencing.com
4. https://facebook.com
5. https://laredofencebuilder.com

**Tier 2 — strong category models:** search the unmodified niche and each primary
service nationally and in three larger, competitive metros. Select three to five
high-ranking regional or national category sites with genuinely strong information
architecture, original media, useful tools, or deep customer education. They need not
serve `Laredo, Texas` and must not be presented as local competitors. Use this tier to set
quality standards for structure, content depth, UX, and visual roles. Search ranking is
a research signal, not proof of traffic, conversion rate, or business quality.

Create `COMPETITOR_RESEARCH.md` containing one row per competitor with: URL, pages
reviewed, research tier, query/market where found, section order, services covered,
questions answered, verified trust signals, CTA patterns, image count, image roles
(hero, team, equipment, before/after, service, location, icon, diagram), useful tools,
photographic/illustration style, and accessibility issues. Then document:

1. Questions competitors fail to answer.
2. Services or useful details they omit.
3. One or two content gaps this site will fill.
4. One defensible differentiation angle grounded in verified business facts. If none is
   verified, differentiate through clearer explanations and usability, not a fake claim.
5. A visual pattern summary: which image roles recur across multiple high-ranking sites
   and which roles genuinely help a visitor understand or choose the service.

This visual pattern summary is not a research artifact to file away — it must drive the
design decisions in "Visual system and asset requirements" below. In `BRAND_BRIEF.md` or
`COMPETITOR_RESEARCH.md`, state which section-composition primitives, which custom icon
concepts, and which image roles were chosen and why, citing the specific findings from
this summary that justify each choice. A design decision with no traceable link to the
research is not acceptable.

For the honest-differentiation item, describe a concrete visitor benefit the site itself
can deliver without claiming superiority or attributing unverified capabilities to a
provider. Acceptable examples include `explains what each type of visit includes`,
`shows which verified providers receive the request`, `answers recurring service-area
questions in one place`, and `uses a simpler request form with clear next steps`.
Unacceptable examples include `the most detailed FAQ`, `the most thorough service in
KC`, `better than other local companies`, `fastest response`, or any `best`, `#1`,
largest, cheapest, highest-rated, or guaranteed-result claim without current,
documented proof.

Interpret convergence deliberately:

- When both strong category models and multiple local ranking sites use the same
  task-helpful structure, treat it as a visitor expectation. Preserve the function and
  sensible information sequence, then beat it with clearer original content, stronger
  accessibility, and verified trust—not novelty for its own sake.
- When only low-quality local sites converge on thin copy, clutter, fake urgency, weak
  imagery, or poor UX, do not imitate them. Use their topic coverage as a minimum while
  taking structure and quality cues from the stronger category models.
- Never copy a competitor's distinctive composition. Common patterns such as a clear
  hero, service grid, process, FAQ, and final CTA may be used with an original brand,
  hierarchy, writing, and assets.

Use competitors as research, never as copy or design sources. Do not download, trace,
closely imitate, or reuse their images, logos, copy, branded graphics, or distinctive
compositions. Similarity means serving the same useful visual purpose with an original
asset and composition.

## Site structure — evidence-led, not fixed

Use the Tier 1/Tier 2 research above to decide this site's actual page count and
structure instead of defaulting to one fixed shape for every niche. Target 5-7 total
indexable pages as a floor, not a ceiling:

- Home page (required).
- One page per core service — typically four, but three to six when the research
  genuinely supports a different natural count for this niche (a niche with two core
  services should not be padded to four; a niche with six distinct in-demand services
  should not be compressed to four). Record the chosen count and why in
  `COMPETITOR_RESEARCH.md`.
- A dedicated `/services/` overview page, distinct from the homepage grid, only when
  Tier 1 or Tier 2 competitors commonly use one and it would meaningfully help visitors
  or internal linking. If competitors don't use one and the homepage grid already
  covers it well, skip it — record that decision too. A hub page, if built, needs a
  real paragraph of original content per service (not a repeat of the homepage card
  text) and must be added to primary navigation.
- Privacy and Terms (required).
- `/provider-corrections/` (required, `noindex`).

Additional pages — an "About" page, a "Service Areas" page, a genuinely useful free
tool, or a `/guide/` resource page (the template ships an opt-in starter at
`src/pages/guide/index.astro`) — are allowed only when Tier 1/Tier 2 research shows they
are a real, recurring pattern among strong competitors and the page would carry
substantial original content. A resource/guide page is not a generic "tips" filler
page: it must cover topics a strong Tier 2 category model actually covers (a pet-adjacent
niche might justify a care/wellness guide; a roofing niche might justify a maintenance
guide; many niches, such as legal services, will justify none of this) and every entry
must be genuinely useful and niche-specific, not advice that could be pasted onto any
site in any niche. If unused, delete the file rather than leaving a thin page live.
Never add a page merely to hit a page-count target, and never split thin content across
multiple URLs to appear larger. Every structural decision here must trace back to a
specific finding in the competitor research, the same way visual decisions must trace
back to the visual pattern summary under "Visual system and asset requirements."

## Writing style

- **Tone:** professional but approachable—the knowledgeable neighbor who happens to be
  an expert. Avoid corporate-speak and forced casualness.
- **Voice:** address the customer as `you`; use `we` only when describing the verified
  provider/business. Never make the lead-generation site sound like the contractor when
  multiple providers are listed.
- **Sentences:** mix short 10–15 word sentences with medium 15–25 word sentences. Rewrite
  sentences of 30 words or more unless clarity truly requires one.
- **Paragraphs:** two to four sentences maximum. Break longer ideas into useful headings,
  lists, or separate paragraphs.
- **Jargon:** use accurate industry terms when helpful and explain each on first use.
- **Calls to action:** make them specific and action-oriented, such as `Call for a free
  estimate` only when estimates are verified as free. Do not use a vague `Contact us`.
- **Avoid:** unnecessary exclamation points, all-caps copy or CSS text transformation,
  unverified `Best in [city]`
  claims, vague claims such as `quality service` or `trusted professionals`, and stock
  phrases such as `your satisfaction is our priority`.

## Home page — required structure (1,500+ useful words)

1. **Hero (above the fold):** a 50–60 character H1 following `[Primary keyword] in
   [City]`; a one- or two-sentence value proposition; a prominent click-to-call phone
   CTA; a secondary `Request service` button that links to the Final CTA section near
   the bottom of the page; and only verified trust indicators. Do not embed the
   lead-capture form fields or the full list of listed providers in the hero — both
   belong only in the Final CTA section (item 8). A first-time visitor should see a
   clear value proposition and a way to call before being asked for contact details or
   shown a roster of businesses. Omit any trust claim that cannot be proved.
2. **Trust bar:** four or five concise verified indicators in a horizontal bar. License,
   insurance, response-time, experience, and review claims require real evidence. If
   four claims cannot be verified, omit the bar rather than filling it with fiction. Mine
   every real signal before concluding none are available: a listed provider's current
   Google rating and review count (see "Provider rating evidence" below) is a genuine,
   checkable trust signal even when no site-wide claim can be made, and a specific,
   accurate service-area or process detail often reads as more credible than a vague
   claim anyway.
3. **Services grid:** one fully clickable card per service (see "Site structure" for the
   count), in a responsive desktop grid (2x2 for four; adjust columns sensibly for three
   or five-six) and a one-column mobile grid. Each has a consistent icon, title, two or
   three useful sentences, and a Learn More link to its service page.
4. **About / Why choose us:** 150–200 words, three or four evidence-backed
   differentiators, and accurate service-area context. Do not imply the lead-generation
   site itself is the service provider.
5. **Process:** three or four steps with consistent icons, titles, short explanations,
   and visible step numbers or an accessible timeline.
6. **Service area:** city prominent; five to ten real neighborhoods or nearby service
   areas only when verified. Use an embedded Google Map only for a confirmed public
   business location/service area; otherwise use a static list and no invented pin.
7. **FAQ:** five to ten accessible accordion items drawn from real niche-and-market
   search intent. Each answer is two or three useful sentences.
8. **Final CTA:** prominent phone number, Name/Phone/optional Message form, and
   `Call now for [verified value proposition]` copy.
9. **Footer:** full verified NAP, business hours, links to every page, applicable license
   numbers, copyright, and the business-owner listing correction/removal link. Any
   unknown NAP/hours/license value is a launch blocker—never invent it or publish a
   visible token.

The lead-capture form and the full list of listed providers appear only once, in item 8
(Final CTA). Do not also surface either one in the hero, in a standalone "meet our
providers" section placed higher on the page, or anywhere above the trust bar. A visitor
should see the value proposition, trust signals, and service explanation first, and only
be asked for contact details or shown the provider roster after that.

## Visitor-facing tone

- Never reference internal build artifacts in visitor-facing copy: no `PROVIDERS.md`,
  `IMAGE_PROMPTS.md`, `COMPETITOR_RESEARCH.md`, or any other repository filename; no
  internal verification cadence (`every 90 days`), audit trail, or evidence-record
  language. That operational detail lives only in `PROVIDERS.md` and, where legally
  required, in general terms in the privacy policy — never in marketing copy, the About
  section, or FAQ answers.
- The provider-sharing notice required near the form (see "Platform lead routing
  strategy" and "Form implementation") is one short, plain sentence — for example `Your
  request goes to the local provider(s) listed above.` It must not read like a
  compliance filing, a numbered count (`the 4 verified providers above`), or an internal
  audit statement.
- Apply the one-sentence operator-disclosure limit from "Local brand creation" strictly:
  do not let the marketplace mechanic (how many providers, how requests are routed, how
  often listings are checked) become a page's dominant topic. If a paragraph is
  explaining how the site's business model works rather than helping the visitor decide
  to call, rewrite or cut it.

## Each service page — required structure (800-1,200+ useful words)

1. **Hero:** `[Service] in [City]` H1, one-sentence service-specific subhead, and phone CTA.
2. **Service description:** 200–300 original words explaining what it is, who needs it,
   and when it is appropriate; no generic boilerplate or keyword-swapped duplication.
3. **What's included:** five to eight concrete deliverables, outcomes, or coverage items.
4. **Benefits:** three to five benefits with one or two explanatory sentences each.
5. **Process:** three to five steps specific to that service, each with title and explanation.
6. **Pricing factors:** explain the real factors affecting price. When public prices are
   unavailable, say pricing varies and name the factors; never fabricate a range.
7. **Service FAQ:** three to five questions addressing service-specific concerns.
8. **Related services:** contextual links to two or three of the other service pages.
9. **CTA:** click-to-call phone plus Name/Phone/optional Message form.

Keep About and Contact content folded into the home page unless a verified business
brief requires dedicated pages.

## Content growth plan after launch

The initial home page and service pages are the launch foundation, not the entire
long-term content plan. Create `CONTENT_ROADMAP.md` before launch with prioritized
topics, target query, search intent, evidence source, internal-link destination, owner,
and planned publish/review date.

- Do not add a daily-news cron or manufacture generic weekly posts. This type of site
  needs steady useful coverage, not news volume.
- During the first 90 days, plan two substantial additions or upgrades per month. Use
  Search Console queries, real sales questions, competitor gaps, and provider feedback
  to choose among service FAQs, problem/solution guides, seasonal guidance, and service
  area content.
- After the first 90 days, publish or materially improve at least one useful page per
  month and review every core service page quarterly. Change the cadence when Search
  Console evidence shows a better opportunity; do not publish merely to satisfy a date.
- Neighborhood + service pages are allowed only for real service areas and only when
  each page has distinct local intent, useful location-specific information, and enough
  original substance to stand alone. Never mass-produce keyword-swapped doorway pages.
- Build internal topic clusters: every supporting page links to the relevant service
  page, and service pages link back only where the supporting content helps a visitor.
- Every roadmap item must have a measurable reason to exist. Record impressions,
  queries, position, clicks, and lead actions before and after meaningful updates.

### Optional free tool decision

Evaluate one free-tool concept, but build it only when the niche presents a genuinely
useful, honest calculation, planner, checklist, or decision aid. A cleaning site might
offer a house-cleaning time or visit-frequency planner; a wedding site might offer an
event beverage planner. Some niches, including dog-waste removal, may have no worthwhile
tool. In that case write `No useful tool justified` in `CONTENT_ROADMAP.md` and do not
force one.

An approved tool must:

- answer a real pre-service question better than prose alone and include explanatory,
  indexable content around the interactive component;
- use transparent inputs and assumptions, work accessibly on mobile, and avoid collecting
  personal information unless that collection is disclosed and necessary;
- never quote, estimate, predict, or imply a local provider's service price, availability,
  service outcome, or binding recommendation;
- label outputs as general planning information and direct provider-specific questions
  to the listed businesses; and
- avoid thin calculator pages created only to target a keyword.

## Privacy, lead disclosure, and legal pages

These requirements are implementation instructions, not a substitute for legal advice.
Before launch, have the actual data flow and market reviewed for applicable federal and
state requirements. Do not paste a generic fifty-state rights list or claim compliance
with a law without determining that law's applicability.

### Required privacy implementation

- Identify `Kurtz & Boon LLC` as the website operator and data controller/business where
  applicable. Explain that the visible site brand is a lead-generation brand and that
  listed providers are independent businesses.
- Inventory and disclose the categories actually collected: Name, Phone, optional Email,
  Message/property details, selected provider, call-click events, page URL/path, referrer,
  UTM parameters, timestamps, IP/security metadata handled by the API, and GA4
  cookie/device/usage data when analytics is enabled.
- State the purposes: respond to and route the requested service inquiry, confirm
  delivery, prevent abuse, measure site and campaign performance, maintain necessary
  business records, and comply with law.
- Name the recipient categories and the routing rule plainly. Pre-tenant submissions go
  to every provider visibly listed with the form; post-tenant submissions go only to the
  named tenant. Also disclose the dashboard/API, hosting, analytics, and email-delivery
  processors actually used. Do not hide lead forwarding behind `service providers`.
- Do not state `we do not sell personal information` unless counsel has evaluated the
  platform's lead-sharing model under every applicable law. State the concrete practice
  instead: data is shared only as disclosed to route the visitor's requested inquiry,
  and it is not shared for unrelated third-party advertising unless that practice is
  actually introduced and separately disclosed.
- Establish a real retention schedule for lead records, delivery logs, analytics data,
  and security logs. Put the confirmed periods and deletion process in
  `DATA_HANDLING.md`, enforce them operationally, and state them accurately in the
  privacy policy. `As long as necessary` by itself is not an implementation plan.
- Provide a working Kurtz & Boon LLC privacy contact and a method to request access,
  correction, deletion, or opt-out where applicable. Document identity verification,
  request handling, exceptions, and any required appeal process.
- Put a short notice immediately beside every form submission button, linking to the
  privacy policy and naming the sharing scope: all displayed providers in pre-tenant
  mode or the one named provider in post-tenant mode. The notice must be visible before
  submission, not buried in the footer.
- Document GA4/cookie use and implement any consent or opt-out mechanism required for the
  visitor's jurisdiction and the analytics configuration.
- Minimize collection, restrict dashboard access, use TLS, and maintain a breach-response
  process. Do not request sensitive information in the free-text message.
- Review state-law thresholds and obligations based on actual traffic, revenue, data
  volume, resident geography, and whether forwarding is legally a sale/share. If a law
  applies, implement its required notice-at-collection, consumer rights, opt-out,
  processor-contract, and appeal mechanics rather than adding unsupported policy text.

### Phone contact and no-SMS boundary

- Phone CTAs use the real provider number in `href="tel:..."`. Clicking one asks the
  visitor's operating system to open its normal phone application; the site does not
  place the call itself.
- This version has no SMS feature. Do not use `sms:` links, send texts, promise text
  updates, add an SMS checkbox, or include consent language for autodialed calls or
  robotexts that the platform does not perform.
- The form notice may say that the named recipient business or businesses may respond by
  telephone or email about this specific request. It must not create consent for unrelated
  marketing.
- If SMS, prerecorded calls, autodialing, or broader marketing is added later, stop and
  implement a separate, conspicuous, unbundled consent flow reviewed for then-current
  TCPA/FCC and state requirements. Never use a prechecked box or make such consent a
  condition of receiving the requested referral.

### Terms requirements

- State that Kurtz & Boon LLC operates the information and referral website but does not
  perform the listed local services.
- Explain that providers are independent, listing is not a guarantee or endorsement, a
  form or call does not create a service contract, and any provider agreement, estimate,
  warranty, scheduling, payment, or dispute is between the visitor and provider.
- Cover acceptable use, intellectual property, third-party links/services, reasonable
  disclaimers, governing contact information, effective date, and change notice.
- If a free tool is built, state that its output is general planning information, not a
  provider quote, professional advice, guarantee, or service recommendation.

The privacy policy and terms must use confirmed Kurtz & Boon LLC contact information and
effective dates. Legal/contact placeholders, an unenforced retention promise, or a
privacy policy that contradicts the visible routing mode are launch blockers.

## Visual system and asset requirements

- Palette: one primary brand color for CTAs/links, one complementary secondary accent,
  and three or four neutral shades. Avoid neon colors, low contrast, and decorative
  color sprawl. Record tokens as CSS variables and meet WCAG AA contrast.
- Typography: bold sans-serif or modern serif headings; Inter, system-ui, or another
  clean sans-serif body; body line-height 1.5–1.7; heading line-height about 1.2; a
  responsive type scale from 14px supporting text to no more than 48px desktop H1.
- Components: filled primary, outlined secondary, and text/ghost buttons; consistent
  service cards using the template's `variant` prop (`bordered` or `elevated`) — choose
  one per site, not per card; labeled form fields with useful validation and error
  states; 44px minimum touch targets.
- Icons: use the template's bespoke duotone icon system (`src/components/Icon.astro`),
  never an imported stroke-icon library such as Lucide, Heroicons, or Feather. Design
  4-8 niche-specific icons as part of this build — tied to this niche's actual services
  and concepts, not generic symbols — by adding entries to `Icon.astro`'s `ICONS` map
  following its documented pattern. Reuse the template's general-purpose icons (check,
  phone, calendar, shield, clock, map-pin, sparkles, wrench, users, star, leaf, home)
  only where they genuinely fit; do not force a niche icon onto a mismatched concept.
- Section composition: use at least two or three of the template's composition
  primitives (`SplitSection.astro`, `FullBleedBand.astro`, `AngledDivider.astro`)
  across the home page, chosen deliberately rather than defaulting every section to a
  centered heading + paragraph + card grid. Vary section rhythm the way the visual
  pattern summary below requires.

  **Required composition for this site** — build the home page around this specific
  combination (chosen so different sites in this portfolio don't converge on the same
  layout); adapt each pattern's content to this niche's research findings, don't use it
  as filler:

- **full-bleed-trust-band** — A FullBleedBand dedicated to verified trust signals (RatingBadge, provider count, service-area list) placed directly under the hero, before the services grid.
- **diagonal-hero-transition** — AngledDivider used directly beneath the hero (not between later sections) to break up the top of the page before the services grid begins.
- **icon-rail-services** — A compact icon-led services rail (Icon + short label, no card chrome) above the fold, with the full ServiceCard grid further down the page for detail.

  **Avoid these generic-SaaS patterns** — never ship any of these regardless of what
  competitor research turns up:

- Gradient-blob or mesh-gradient hero backgrounds
- Centered icon-in-circle feature grids (three or four identical circular icon badges above a heading and one line of copy)
- Generic rounded-card-with-soft-shadow blocks used for every section, regardless of content
- Generic stock hero photography (people in suits shaking hands, isolated laptop-on-desk shots) that could belong to any SaaS product page
- Desktop CTA: the template's `StickyCtaRail.astro` desktop sticky call rail is
  standard on every site, not optional — it ships wired into `BaseLayout.astro`
  already. Do not remove it or leave it un-configured.
- Layout: 1200–1280px maximum content width, 80–120px desktop section spacing with a
  smaller responsive mobile scale, generous whitespace, and single-column mobile flow.
- Images: use only original, generated, commissioned, or properly licensed assets.
  Compress them, provide AVIF/WebP where practical, include width/height, use responsive
  `srcset`/`sizes`, lazy-load below-fold images, and write descriptive alt text. Decorative
  graphics use empty alt text.

`IMAGE_PROMPTS.md` is the canonical image plan for the site, including completed assets
and placeholders; it is not merely a fallback list. Build the plan from the competitor
visual-pattern summary—not a generic stock-photo dump. At minimum consider: one home hero
visual, one About/Why visual, one service-card visual or icon per service, one useful
process/area graphic, and one distinct hero visual for each service page. Include only roles that
improve comprehension or trust. For every role, record its status as `generated`,
`licensed`, `authentic provider media`, `prompt placeholder`, `replaced`, or `not needed`,
plus the source/license or prompt, approval, owner, and target replacement date.

Write a complete, detailed generation prompt for every role in the plan — the full home
hero, one prompt per service page hero, and one trust/differentiator image — regardless
of whether that role ships as a launch placeholder or as a generated/licensed asset. Every
role gets the same detail-level prompt described in point 3 below (niche, geo,
composition, viewpoint/style, subject, lighting, palette relationship, crop-safe text
area, realism level, exclusions); a role that ships with a real image still needs its
prompt recorded for future regeneration or a future replacement asset. This is a separate
requirement from the launch placeholder cap below: writing a prompt is mandatory for every
planned role, while only up to three roles may launch as visible prompt placeholders.

Use an available image-generation capability to create safe, original editorial or
service-context assets during the build whenever possible. If generation is unavailable
or the asset needs operator/provider input, reserve the final layout space instead of
shipping an image-free section. For every required asset that cannot be created:

1. Create a dimensionally correct SVG placeholder at its final asset path. The visible
   placeholder must be clearly labeled `Image planned`, show a short asset ID and intended
   role, and expose the complete generation prompt in a readable `<details>` disclosure
   or adjacent operator-facing prompt panel. Its `<metadata>` must contain the same prompt.
2. Add the same entry to `IMAGE_PROMPTS.md`: asset ID/path, page/section, dimensions and
   aspect ratio, visual purpose, detailed generation prompt, negative prompt, alt-text
   draft, status, approval date, replacement owner/deadline, and replacement instructions.
3. Prompts must specify `fencing contractor`, `Laredo, Texas`, composition, camera/viewpoint or
   illustration style, subject, lighting, brand-palette relationship, crop-safe area for
   text, realism level, and exclusions. Exclude text, watermarks, logos, competitor trade
   dress, unverifiable uniforms/licenses, unsafe work, distorted tools/hands, and visual
   clichés inappropriate to the service.
   A prompt describing only a generic establishing shot (an empty yard, an empty
   storefront, a stock-photo-style wide exterior with no activity or subject) is not
   acceptable — every prompt must include a specific action, tool, material, or moment
   tied to this niche's actual service (the visible activity of doing the work, a
   close-up of the relevant equipment or result, a specific interaction) so the image
   could not be mistaken for a different niche's site with the text swapped.
4. Do not generate fake employees, branded vehicles, facilities, completed customer jobs,
   or before/after evidence that could be mistaken for this business's real work. Use
   honest editorial/service-context imagery until the business supplies authentic media.

Version 1 should launch with real/generated/licensed imagery wherever the builder has the
capability. It may ship with no more than three explicitly approved prompt-placeholder
roles by default; any additional placeholder requires written operator approval recorded
in `IMAGE_PROMPTS.md`. Every launched placeholder must have a named replacement owner and
a deadline no later than 30 days after launch. Never use an empty gray box, broken image,
or generic `coming soon` tile, and never present a prompt placeholder as real business
imagery. A placeholder is approved only when its exact role, prompt, approver, approval
date, and replacement deadline are recorded—not merely because the layout compiles.

## Form implementation

- Fields are Name (required, `autocomplete="name"`), Phone (required, `type="tel"`,
  `autocomplete="tel"`), Email (optional, `type="email"`, `autocomplete="email"`), and
  Message (optional textarea, `maxlength="500"`).
- Provide client-side required, phone-format, and optional email-format validation plus
  matching server-side validation. Put a specific inline error below the relevant field,
  connect it with `aria-describedby`, and move focus to the first invalid field after submission.
- POST the form once to `leadTrackerUrl + /api/v1/leads/events`; the dashboard owns
  recipient selection, forwarding, and delivery records. Include all present UTM
  parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`),
  `document.referrer`, the full page URL, and the page path for attribution.
- On success, clear the fields and show `Thanks! We'll call you within [verified response
  window].` Keep the phone CTA visible. If no response window is verified, use neutral
  confirmation copy and do not invent minutes or hours.
- Add an off-screen honeypot that real users and assistive technology do not interact
  with, plus elapsed-time tracking. The API must reject a populated honeypot or a form
  submitted in under three seconds. Add reCAPTCHA only if measured spam makes it necessary.

## Mobile design patterns

- Above the fold, show a tap-to-call number without scrolling. The short form becomes one
  column, and the trust bar moves below the hero or into a sticky footer.
- Use a sticky mobile header with phone and CTA. After the hero leaves the viewport, show
  a sticky bottom phone bar without covering content, form controls, or consent notices.
  On desktop, the equivalent is the template's sticky CTA rail (`StickyCtaRail.astro`),
  required on every site per "Visual system and asset requirements" above — the two are
  complementary, not interchangeable, and neither replaces the other.
- Every interactive target is at least 44×44px with at least 8px between adjacent targets;
  form controls are at least 48px tall.
- Target less than 100KB per raster image while preserving acceptable visual quality.
  Lazy-load below-fold media, minimize JavaScript to the small amount needed for form
  validation/tracking and sticky behavior, and retain system-font fallbacks.

## SEO requirements

- Titles: `[Service] [City] | [Brand]`; meta descriptions: 150-160 characters with
  service and city; exactly one intent-aligned H1 per page
- Keep Organization + LocalBusiness schema globally, FAQ schema on home, and Service
  schema on service pages; validate every structured-data value against page content
- Keep canonical URLs, contextual internal links, generated `sitemap-index.xml`,
  `robots.txt`, and `llms.txt` on the production domain
- Do not create doorway pages, hidden text, fake locations, or substantially duplicate
  service content

## Analytics and search measurement handoff

- The operator manually creates the GA4 property and web stream. The builder must request
  the supplied numeric property ID plus either the `G-XXXXXXXXXX` measurement ID or the
  complete approved Google tag snippet. Do not create an unrelated GA4 property, guess an
  ID, or publish a placeholder ID.
- When a measurement ID is supplied, set `ga4MeasurementId` and let the shared layout load
  one standard Google tag on every page. If the operator supplies a complete custom
  snippet instead, install that exact reviewed snippet once in the shared `<head>` and
  remove/disable the generated tag path so two Google tags are never loaded.
- Before launch, use GA4 DebugView/Realtime to verify a page view and `call_click` event.
  Record the result and supplied identifiers in `ANALYTICS_SETUP.md`; do not store Google
  credentials, API secrets, or DNS verification tokens in the repository.
- Before launch, the operator creates a Google Search Console Domain property for
  `laredofencing.com` and completes DNS verification. The exact dashboard/API property
  identifier should be `sc-domain:laredofencing.com`. Record the Search Console property URL,
  identifier, verification method/date, verified owner, sitemap submission date, and
  access handoff in `ANALYTICS_SETUP.md`.
- Submit the production sitemap only after canonical URLs and the production domain are
  correct. Confirm Search Console accepts the sitemap. Search Console query/page data is
  then the primary evidence for prioritizing the post-launch content roadmap.

## Build and deployment

1. From the new repository root—the directory containing `package.json`—run
   `npm install`.
2. From that same repository root, run `npm run check` and `npm run build`; fix every
   error.
3. Inspect `dist/` and confirm home, every service page, privacy, terms, robots, llms,
   provider corrections, and the sitemap exist with no broken internal links.
4. Push this flat project to its own remote Git repository. Import that repository into
   the dedicated Vercel project `laredofencing-com`, keep Root Directory blank/`.`, and configure
   `laredofencing.com` in Vercel.
5. Verify form payloads, recipient-resolution rules, success/error states, and delivery
   logging with automated tests, a mocked/local endpoint, or an isolated staging
   configuration. Do not submit a live test lead, send a test email, or click through to
   call a real listed provider.
6. A live delivery smoke test is optional and operator-run only. Perform one solely when
   the operator explicitly requests it and supplies an operator-controlled test email and
   phone. Temporarily use those details in an isolated test site/configuration clearly
   marked `[test]`; never mix the test recipient with the production fan-out list. Restore
   the real production configuration afterward and confirm no `[test]` value is published.
7. Complete the operator GA4/Search Console handoff, verify analytics events, and submit
   the production sitemap before launch.

## Completion gate

- Dashboard analyzer score: 75+/100
- All Priority 1 analyzer fixes resolved
- Lighthouse Performance: 80+
- Lighthouse SEO: 95+
- No 404, redirected, placeholder, or non-canonical URLs in the sitemap
- Repository shape is flat and dedicated to this domain: `package.json` is at the Git
  root, Vercel Root Directory is blank/`.`, and no parent/monorepo folder is required
- No more than three approved prompt-placeholder roles ship by default; every placeholder
  visibly exposes its prompt and `IMAGE_PROMPTS.md` records approval plus a replacement
  owner and deadline within 30 days
- Mobile layout verified at 320px and keyboard navigation verified
- No imported stroke-icon library (Lucide, Heroicons, Feather, etc.) is present; the
  bespoke `Icon.astro` system carries 4-8 niche-specific icons tied to this site's actual
  services, and at least two or three section-composition primitives are used on the home
  page with their choice traceable to `COMPETITOR_RESEARCH.md`'s visual pattern summary
- The desktop sticky CTA rail (`StickyCtaRail.astro`) is present and functioning alongside
  the mobile sticky call bar
- `IMAGE_PROMPTS.md` records a full detail-level prompt for every planned image role (home
  hero, each service hero, trust/differentiator), not only the roles shipping as visible
  placeholders, and no prompt describes only a generic establishing shot
- Every listed provider with a currently-verified Google rating/review count has those
  values set on its `src/lib/config.ts` entry and visible via `RatingBadge`; providers
  without a verified rating correctly show no badge rather than an invented one
- `BRAND_BRIEF.md` records the selected local brand, rationale, and conflict screening
- `COMPETITOR_RESEARCH.md` records the page-count/structure decision (service count, and
  whether a `/services/` hub was built or skipped) with the specific competitor findings
  that justify it
- The hero contains only the phone CTA, the `Request service` link, and trust
  indicators — no embedded lead form and no full provider roster above the trust bar;
  both appear once, in the Final CTA section
- No visitor-facing copy names a repository file (`PROVIDERS.md`, `IMAGE_PROMPTS.md`,
  etc.), states an internal verification cadence, or explains the site's business model
  or lead-generation economics; the operator-disclosure sentence appears exactly once
- `PROVIDERS.md` contains a complete, current evidence record for every lead recipient;
  active providers were verified within 90 days and at the latest lifecycle transition
- Questionable discovery candidates were replaced through documented broader local
  research rather than listed solely because they appeared in the analysis
- `CONTENT_ROADMAP.md` contains the first six months of evidence-led additions and either
  an approved honest tool concept or `No useful tool justified`
- `ANALYTICS_SETUP.md` records the operator-supplied GA4 property/stream/tag values and a
  successful event test, plus the verified Search Console property, property URL, DNS
  verification date, and accepted sitemap
- Privacy and terms identify Kurtz & Boon LLC as operator, identify independent
  providers, and match the site's current routing behavior
- `DATA_HANDLING.md` records retention periods that are actually enforced, the privacy
  request process, subprocessors, and the applicable-state-law review
- Every form shows its provider-sharing notice before submission; no SMS or automated
  marketing-call consent language appears while those features are disabled
- `/provider-corrections/` is linked beside provider listings and in the footer; a test
  using a mock endpoint confirms `provider_request` is stored for operator review and
  never enters customer-lead counts or provider delivery fan-out
- Phone and form wiring is verified without contacting real providers: tests confirm the
  `tel:` target, analytics event payload, form payload, dashboard recipient resolution,
  success/error UI, and delivery-log behavior. A live email or phone test is not a launch
  requirement
- The visible provider list matches the dashboard's pre-tenant or post-tenant routing
  mode, and the form clearly identifies whether the request goes to one or all providers
- No unsolicited test lead, email, form submission, or phone call is sent to a real
  provider. If the operator elects to run a live smoke test, only the supplied
  operator-controlled `[test]` recipient is used and its result is recorded
- Production delivery failures remain visible in dashboard operations for manual
  follow-up when genuine customer leads begin arriving


---

## Template source (`lead-gen-sites/_template/`)

This is the complete, authoritative template — every file below, embedded exactly as
it exists in the operator's dashboard monorepo. Create each file at the path shown,
rooted at the new repository root (so `astro.config.mjs` lands at the repo root,
`src/components/CallCTA.astro` at `src/components/CallCTA.astro`, and so on). Do not
fetch the template from git, search the filesystem for it, or reconstruct it from
another site — none of that is necessary or expected; everything you need is here.
Run `npm install` afterward to generate a fresh `package-lock.json` (not included
below, since it's regenerated, not authored).

### `.gitignore`

```
node_modules/
dist/
.astro/
.vercel/

```

### `ANALYTICS_SETUP.md`

```md
# Analytics and search setup

The site operator creates the Google properties and supplies the identifiers or
approved tag. Builders install and verify them; they do not create replacement
properties or guess IDs. Never store Google credentials, API secrets, or DNS
verification tokens in this repository.

## Google Analytics 4

- Google account/property owner: [owner]
- Numeric GA4 property ID: [ID]
- Web stream name and ID: [name / ID]
- Measurement ID: [G-XXXXXXXXXX]
- Tag source: [measurement ID / operator-supplied complete snippet]
- Installed by and date: [team member / YYYY-MM-DD]
- Duplicate-tag check: [passed / date]
- Realtime or DebugView page-view test: [passed / date]
- `call_click` event test: [passed / date]

When a measurement ID is supplied, set `ga4MeasurementId` in
`src/lib/config.ts`. When the operator supplies a complete custom snippet, install
that exact reviewed snippet once in the shared layout and disable the generated tag
path so the site never loads two Google tags.

## Google Search Console

- Property type: Domain
- Property identifier: [sc-domain:example.com]
- Property URL in Search Console: [URL]
- Verified owner: [owner]
- Verification method: DNS
- Verification completed: [YYYY-MM-DD]
- Sitemap URL: [https://example.com/sitemap-index.xml]
- Sitemap submitted: [YYYY-MM-DD]
- Sitemap accepted: [yes/no / checked date]
- Dashboard site record updated: [yes/no / date]
- Access handoff notes: [team members with appropriate access]


```

### `IMAGE_PROMPTS.md`

```md
# Image plan

This is the canonical plan for every meaningful visual role, including finished
assets and prompt placeholders. It is not only a fallback list.

Prefer safe original, generated, commissioned, authentic provider, or properly
licensed imagery. Version 1 may ship with no more than three approved prompt
placeholders by default. Each launched placeholder must visibly expose its complete
prompt and be replaced within 30 days. Record written operator approval here for any
additional placeholder.

## Asset record

- Asset ID: [short stable ID]
- Final path: [public asset path]
- Page and section: [location]
- Visual role: [hero / service / process / area / other]
- Dimensions and aspect ratio: [width x height / ratio]
- Status: [generated / licensed / authentic provider media / prompt placeholder / replaced / not needed]
- Source or license: [source and usage rights, or not applicable]
- Detailed generation prompt: [complete prompt]
- Negative prompt: [exclusions]
- Alt-text draft: [meaningful alt text, or empty when decorative]
- Approved by and date: [team member / YYYY-MM-DD]
- Replacement owner: [team member]
- Replacement deadline: [YYYY-MM-DD, no later than 30 days after launch]
- Replacement instructions: [how to preserve crop, dimensions, and meaning]


```

### `PROVIDERS.md`

```md
# Provider verification log

This private repository file is the operational source of truth for every business
listed on the site or receiving leads. Keep removed providers for the audit trail. Do
not add customer lead data, private call recordings, credentials, or secrets.

Only records with `listed` or `tenant` status may appear in `src/lib/config.ts`.
Re-verify an active provider before first launch, before restoring marketplace mode
after tenant offboarding, after a delivery failure or listing dispute, and at least
every 90 days.

## Provider record

- Record ID: [stable internal ID]
- Lifecycle status: [candidate / listed / tenant / removed / reverification-needed]
- Public business name: [name]
- Public-record or official-listing URL: [URL]
- Business-name checked date: [YYYY-MM-DD]
- Display phone: [number]
- Normalized phone href: [tel:+number]
- Phone evidence URL: [URL]
- Phone checked date: [YYYY-MM-DD]
- Phone verification method: [recent official listing or other current public source]
- Operator-authorized call date, outcome, and verifier: [operator's manual test, or not used]
- Niche/service evidence URL: [URL]
- Niche/service checked date: [YYYY-MM-DD]
- Operational-status evidence URL: [URL]
- Operational-status checked date: [YYYY-MM-DD]
- Confirmed service area: [areas]
- Verified delivery email: [email, or not enabled]
- Email evidence/source and checked date: [source / YYYY-MM-DD]
- First listed: [YYYY-MM-DD]
- Last fully verified: [YYYY-MM-DD]
- Removed: [YYYY-MM-DD, or active]
- Dispute/correction notes: [concise factual notes, or none]

### Verification decision

- Business name matches current public evidence: [yes/no]
- Phone number is current: [yes/no]
- Business directly serves the niche: [yes/no]
- Business appears operational: [yes/no]
- Approved to receive leads by: [team member]
- Approval date: [YYYY-MM-DD]

Do not call, email, or submit a form to a real provider merely to verify this record or
test platform delivery. Any live smoke test is optional, performed by the operator, and
must use only an operator-controlled test email and phone in an isolated test
configuration.

```

### `README.md`

```md
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
```

The build emits the production site and sitemap into `dist/`. Before deployment, confirm the contact form endpoint, phone links, legal identity, canonical URLs, structured data, current provider evidence, the business-owner correction/removal path, GA4 events, the verified Search Console property, and that no `{PLACEHOLDER}` values remain. Verify lead routing with automated tests, mocks, or an isolated operator-controlled test recipient; never send unsolicited test leads or calls to a real provider.

```

### `astro.config.mjs`

```js
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://example.com",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/provider-corrections"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

```

### `package.json`

```json
{
  "name": "lead-gen-site-template",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "check": "astro check",
    "preview": "astro preview"
  },
  "dependencies": {
    "@astrojs/sitemap": "^3.7.0",
    "@tailwindcss/vite": "^4.1.18",
    "astro": "^7.0.8",
    "tailwindcss": "^4.1.18"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.6",
    "typescript": "^5.9.3"
  },
  "engines": {
    "node": ">=22.12.0"
  }
}

```

### `public/llms.txt`

```text
# {BUSINESS_NAME}

> {BUSINESS_NAME} provides {NICHE} services in {GEO} and surrounding communities.

Canonical website: https://{DOMAIN}
Primary service area: {GEO}
Contact: {PHONE}

## Main pages

- Home: https://{DOMAIN}/
- Services: https://{DOMAIN}/services/{service-1}/
- Privacy: https://{DOMAIN}/privacy/
- Terms: https://{DOMAIN}/terms/

```

### `public/robots.txt`

```text
User-agent: *
Allow: /

Sitemap: https://{DOMAIN}/sitemap-index.xml

```

### `src/components/AngledDivider.astro`

```astro
---
// Angled/clipped section transition. Drop between two <section>s to break the
// "flat horizontal band" rhythm that makes stacked Tailwind sections feel
// generic. Color the divider to match the section ABOVE it so it reads as
// that section's trailing edge.
interface Props {
  color?: string;
  flip?: boolean;
  class?: string;
}

const { color = "#f8fafc", flip = false, class: className = "" } = Astro.props;
---

<div class={`relative h-10 overflow-hidden sm:h-16 ${className}`} aria-hidden="true">
  <svg
    class={`absolute inset-0 h-full w-full ${flip ? "-scale-y-100" : ""}`}
    preserveAspectRatio="none"
    viewBox="0 0 100 20"
  >
    <polygon points="0,20 100,0 100,20" fill={color} />
  </svg>
</div>

```

### `src/components/CallCTA.astro`

```astro
---
import RatingBadge from "./RatingBadge.astro";
import { contactProviders, primaryProvider, siteConfig } from "../lib/config";

interface Props {
  heading?: string;
}

const { heading = `Ready to discuss ${siteConfig.niche.toLowerCase()} service?` } = Astro.props;
const others = contactProviders.slice(1);
---

<section class="bg-teal-800 py-16 text-white">
  <div class="container-shell">
    <div class="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
      <div>
        <p class="text-sm font-bold tracking-[0.08em] text-amber-300">Talk with a local professional</p>
        <h2 class="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">{heading}</h2>
        <p class="mt-3 text-teal-100">Call now or send a message — whichever is easier for you.</p>
      </div>
      <div class="flex flex-col items-start gap-2">
        {primaryProvider && (
          <RatingBadge rating={primaryProvider.rating} reviewCount={primaryProvider.reviewCount} class="text-teal-100! [&_span]:text-teal-300!" />
        )}
        <div class="flex flex-wrap gap-3">
          {primaryProvider && (
            <a
              class="inline-flex min-h-14 items-center rounded-xl bg-amber-400 px-7 font-black text-slate-950 no-underline hover:bg-amber-300"
              href={primaryProvider.phoneHref}
              data-lead-call
              data-business={primaryProvider.name}
            >
              Call {primaryProvider.phone}
            </a>
          )}
          <a class="inline-flex min-h-14 items-center rounded-xl border border-teal-300 px-7 font-bold text-white no-underline hover:border-white" href="/#contact">
            Send a message
          </a>
        </div>
      </div>
    </div>
    {others.length > 0 && (
      <div class="mt-8 border-t border-teal-700 pt-6">
        <p class="text-sm font-bold tracking-[0.08em] text-teal-200">More listed local providers</p>
        <ul class="mt-3 flex flex-wrap gap-x-8 gap-y-3">
          {others.map((provider) => (
            <li>
              <a class="font-bold text-white no-underline hover:text-amber-300" href={provider.phoneHref} data-lead-call data-business={provider.name}>
                {provider.name} · {provider.phone}
              </a>
              <RatingBadge rating={provider.rating} reviewCount={provider.reviewCount} class="mt-1 block text-teal-100! [&_span]:text-teal-300!" />
            </li>
          ))}
        </ul>
      </div>
    )}
    {contactProviders.length > 0 && (
      <p class="mt-5 text-sm text-teal-100">
        Own or represent a listed business? <a class="font-bold text-white underline" href="/provider-corrections/">Request a correction or removal</a>.
      </p>
    )}
  </div>
</section>

```

### `src/components/ContactForm.astro`

```astro
---
import { contactProviders, isConfigured, siteConfig } from "../lib/config";

const endpointConfigured = !siteConfig.formEndpoint.startsWith("{");
const providers = contactProviders;
const multipleProviders = providers.length > 1;
const soleProvider = providers.length === 1 ? providers[0] : null;
const providerNames = providers.map((provider) => provider.name).join(", ");
const responseTime = isConfigured(siteConfig.responseTime) ? siteConfig.responseTime : null;
---

<form
  id="lead-form"
  method="post"
  action={endpointConfigured ? siteConfig.formEndpoint : undefined}
  class="relative rounded-2xl bg-white p-6 shadow-xl sm:p-8"
  novalidate
>
  <input type="hidden" name="subject" value={`New ${siteConfig.domain} lead`} />
  <input type="hidden" name="submitted_after_ms" value="0" />
  <div class="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
    <label>
      Website
      <input name="website" tabindex="-1" autocomplete="off" />
    </label>
  </div>
  <div class="grid gap-5 sm:grid-cols-2">
    {soleProvider && <input type="hidden" name="business" value={soleProvider.name} />}
    <label class="text-sm font-bold text-slate-700">
      Name
      <input required autocomplete="name" name="name" aria-describedby="name-error" class="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 font-normal outline-none focus:border-teal-600" />
      <span id="name-error" class="mt-1 block min-h-5 text-xs font-semibold text-red-700" aria-live="polite"></span>
    </label>
    <label class="text-sm font-bold text-slate-700">
      Phone
      <input required type="tel" autocomplete="tel" inputmode="tel" name="phone" aria-describedby="phone-error" class="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 font-normal outline-none focus:border-teal-600" />
      <span id="phone-error" class="mt-1 block min-h-5 text-xs font-semibold text-red-700" aria-live="polite"></span>
    </label>
    <label class="text-sm font-bold text-slate-700 sm:col-span-2">
      Email <span class="font-normal text-slate-500">(optional)</span>
      <input type="email" autocomplete="email" inputmode="email" name="email" aria-describedby="email-error" class="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 font-normal outline-none focus:border-teal-600" />
      <span id="email-error" class="mt-1 block min-h-5 text-xs font-semibold text-red-700" aria-live="polite"></span>
    </label>
    <label class="text-sm font-bold text-slate-700 sm:col-span-2">
      Message <span class="font-normal text-slate-500">(optional)</span>
      <textarea name="message" maxlength="500" rows="5" aria-describedby="message-help" class="mt-2 w-full rounded-lg border border-slate-300 p-4 font-normal outline-none focus:border-teal-600"></textarea>
      <span id="message-help" class="mt-1 block text-xs font-normal text-slate-500">Up to 500 characters.</span>
    </label>
  </div>
  <button type="submit" class="button-primary mt-5 w-full">Request service</button>
  <p id="lead-form-status" class="mt-3 text-center text-xs text-slate-500" aria-live="polite">
    {soleProvider
      ? <>By submitting, you ask {siteConfig.legalBusinessName} to send this request to {soleProvider.name}, who may respond by phone or email about this request. <a class="font-bold text-teal-700 underline" href="/privacy/">Privacy policy</a>.</>
      : multipleProviders
        ? <>By submitting, you ask {siteConfig.legalBusinessName} to share this request with all listed providers ({providerNames}), who may respond by phone or email about this request. <a class="font-bold text-teal-700 underline" href="/privacy/">Privacy policy</a>.</>
        : <>This form is not ready to accept requests because no verified provider is configured.</>}
  </p>
  {isConfigured(siteConfig.phone) && isConfigured(siteConfig.phoneHref) && (
    <p class="mt-3 text-center text-sm text-slate-600">
      Prefer to call? <a class="font-bold text-teal-700" href={siteConfig.phoneHref} data-lead-call>{siteConfig.phone}</a>
    </p>
  )}
</form>

<script is:inline define:vars={{ formEndpoint: endpointConfigured ? siteConfig.formEndpoint : null, responseTime }}>
  var leadForm = document.getElementById("lead-form");
  if (leadForm) {
    var formStartedAt = Date.now();
    leadForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = document.getElementById("lead-form-status");
      var button = leadForm.querySelector("button[type=submit]");
      var nameInput = leadForm.querySelector("[name=name]");
      var phoneInput = leadForm.querySelector("[name=phone]");
      var emailInput = leadForm.querySelector("[name=email]");
      var nameError = document.getElementById("name-error");
      var phoneError = document.getElementById("phone-error");
      var emailError = document.getElementById("email-error");
      var name = nameInput ? nameInput.value.trim() : "";
      var phone = phoneInput ? phoneInput.value.trim() : "";
      var email = emailInput ? emailInput.value.trim() : "";
      var phoneDigits = phone.replace(/\D/g, "");
      if (nameError) nameError.textContent = "";
      if (phoneError) phoneError.textContent = "";
      if (emailError) emailError.textContent = "";
      if (nameInput) nameInput.removeAttribute("aria-invalid");
      if (phoneInput) phoneInput.removeAttribute("aria-invalid");
      if (emailInput) emailInput.removeAttribute("aria-invalid");
      if (!name) {
        if (nameError) nameError.textContent = "Enter your name.";
        if (nameInput) { nameInput.setAttribute("aria-invalid", "true"); nameInput.focus(); }
        return;
      }
      if (phoneDigits.length < 7 || phoneDigits.length > 15) {
        if (phoneError) phoneError.textContent = "Enter a valid phone number.";
        if (phoneInput) { phoneInput.setAttribute("aria-invalid", "true"); phoneInput.focus(); }
        return;
      }
      if (email && emailInput && emailInput.validity.typeMismatch) {
        if (emailError) emailError.textContent = "Enter a valid email address.";
        emailInput.setAttribute("aria-invalid", "true");
        emailInput.focus();
        return;
      }
      var data = new FormData(leadForm);
      var elapsed = Date.now() - formStartedAt;
      var business = data.get("business") || null;
      var params = new URLSearchParams(window.location.search);
      data.set("submitted_after_ms", String(elapsed));
      data.set("page_url", window.location.href);
      data.set("referrer", document.referrer || "");
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(function (key) {
        var value = params.get(key);
        if (value) data.set(key, value);
      });
      if (button) button.disabled = true;
      var attribution = {
        name: name,
        phone: phone,
        email: email || null,
        message: data.get("message") || null,
        website: data.get("website") || null,
        submitted_after_ms: elapsed,
        page_url: window.location.href,
        referrer: document.referrer || null,
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_term: params.get("utm_term"),
        utm_content: params.get("utm_content"),
      };
      var jobs = [];
      if (window.__leadTrack) jobs.push(window.__leadTrack("form_submit", business, attribution));
      if (formEndpoint) {
        jobs.push(fetch(formEndpoint, { method: "POST", body: data }).then(function (response) {
          if (!response.ok) throw new Error("Form endpoint rejected the request");
        }));
      }
      Promise.all(jobs)
        .then(function () {
          if (status) {
            status.textContent = responseTime
              ? "Thanks! We'll call you within " + responseTime + "."
              : "Thanks! Your request was sent. We'll call you as soon as possible.";
            status.className = "mt-3 text-center text-sm font-bold text-teal-700";
          }
          leadForm.reset();
          formStartedAt = Date.now();
        })
        .catch(function () {
          if (status) {
            status.textContent = "We could not send your request. Please call the number shown here.";
            status.className = "mt-3 text-center text-sm font-bold text-red-700";
          }
        })
        .finally(function () {
          if (button) button.disabled = false;
        });
    });
  }
</script>

```

### `src/components/FAQ.astro`

```astro
---
import type { FAQItem } from "../lib/config";

interface Props {
  items: FAQItem[];
}

const { items } = Astro.props;
---

<div class="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  {items.map((item) => (
    <details class="group p-6">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-6 font-bold text-slate-950">
        {item.question}
        <span class="text-2xl font-light text-teal-700 group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <p class="mt-4 max-w-3xl leading-7 text-slate-600">{item.answer}</p>
    </details>
  ))}
</div>

```

### `src/components/Footer.astro`

```astro
---
import { siteConfig } from "../lib/config";

const year = new Date().getFullYear();
---

<footer class="border-t border-slate-800 bg-slate-950 py-12 text-slate-300">
  <div class="container-shell grid gap-10 md:grid-cols-3">
    <div>
      <p class="font-display text-xl font-black text-white">{siteConfig.businessName}</p>
      <p class="mt-3 max-w-sm text-sm leading-6">Trusted {siteConfig.niche.toLowerCase()} help for {siteConfig.geo} and nearby communities.</p>
    </div>
    <div>
      <p class="text-sm font-bold tracking-wide text-white">Contact</p>
      <address class="mt-3 space-y-2 text-sm not-italic">
        <p>{siteConfig.address}</p>
        <p><a class="hover:text-white" href={siteConfig.phoneHref}>{siteConfig.phone}</a></p>
        <p><a class="hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
      </address>
    </div>
    <div>
      <p class="text-sm font-bold tracking-wide text-white">Information</p>
      <nav class="mt-3 flex flex-col gap-2 text-sm" aria-label="Footer navigation">
        <a class="hover:text-white" href="/privacy/">Privacy policy</a>
        <a class="hover:text-white" href="/terms/">Terms of service</a>
        <a class="hover:text-white" href="/provider-corrections/">Business owner? Correct or remove a listing</a>
      </nav>
    </div>
  </div>
  <div class="container-shell mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
    &copy; {year} {siteConfig.legalBusinessName}. All rights reserved.
  </div>
</footer>

```

### `src/components/FullBleedBand.astro`

```astro
---
// Full-bleed band: an edge-to-edge background (color, gradient, or image)
// with normal-width content inside. Use for a stat strip, trust band, or
// process/timeline section to break up sections that would otherwise all
// share the same white/light-gray card-grid treatment.
interface Props {
  tone?: "dark" | "brand" | "tint";
  class?: string;
}

const { tone = "tint", class: className = "" } = Astro.props;
const toneClass = {
  dark: "bg-slate-950 text-white",
  brand: "bg-teal-800 text-white",
  tint: "bg-teal-50 text-slate-950",
}[tone];
---

<section class={`${toneClass} py-16 sm:py-20 ${className}`}>
  <div class="container-shell">
    <slot />
  </div>
</section>

```

### `src/components/Header.astro`

```astro
---
import { siteConfig } from "../lib/config";
---

<header class="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
  <div class="container-shell flex min-h-20 items-center justify-between gap-6">
    <a href="/" class="max-w-48 font-display text-lg font-black leading-tight text-slate-950 no-underline">
      {siteConfig.businessName}
    </a>
    <nav aria-label="Primary navigation" class="hidden items-center gap-6 md:flex">
      <!--
        Points at the homepage services anchor by default. If you keep
        src/pages/services/index.astro (see its top comment — it's opt-in,
        built only when competitor research justifies a dedicated hub page),
        change this href to "/services/" instead.
      -->
      <a href="/#services" class="text-sm font-bold text-slate-600 no-underline hover:text-teal-700">Services</a>
      <a href="/#about" class="text-sm font-bold text-slate-600 no-underline hover:text-teal-700">About</a>
      <a href="/#faq" class="text-sm font-bold text-slate-600 no-underline hover:text-teal-700">FAQ</a>
    </nav>
    <a href={siteConfig.phoneHref} class="button-primary whitespace-nowrap" aria-label={`Call ${siteConfig.businessName} at ${siteConfig.phone}`}>
      Call {siteConfig.phone}
    </a>
  </div>
</header>
<div id="mobile-call-bar" class="fixed inset-x-0 bottom-0 z-40 translate-y-full border-t border-slate-200 bg-white p-3 shadow-2xl transition-transform md:hidden" aria-hidden="true">
  <a href={siteConfig.phoneHref} class="button-primary min-h-12 w-full" data-lead-call aria-label={`Call ${siteConfig.businessName} at ${siteConfig.phone}`}>
    Call {siteConfig.phone}
  </a>
</div>

<script is:inline>
  var mobileCallBar = document.getElementById("mobile-call-bar");
  function updateMobileCallBar() {
    if (!mobileCallBar) return;
    var visible = window.scrollY > Math.min(window.innerHeight * 0.7, 560);
    mobileCallBar.classList.toggle("translate-y-full", !visible);
    mobileCallBar.setAttribute("aria-hidden", visible ? "false" : "true");
  }
  window.addEventListener("scroll", updateMobileCallBar, { passive: true });
  updateMobileCallBar();
</script>

```

### `src/components/Icon.astro`

```astro
---
// Bespoke duotone icon system — replaces generic stroke-icon libraries (Lucide,
// Heroicons, Feather, etc). Every icon is a two-layer glyph: a tinted "blob"
// backdrop plus a solid foreground shape, built from primitive SVG shapes
// rather than traced/copied third-party icon paths. This is what gives every
// site its own icon identity instead of the same stroke-icon look every
// Tailwind template on the internet uses.
//
// HOW TO ADD NICHE-SPECIFIC ICONS (do this for every site, 4-8 icons):
//   1. Pick the 4-8 concepts this niche actually needs (e.g. a tree-service
//      site needs "chainsaw", "stump", "branch" — not generic "wrench").
//   2. Add a new entry to ICONS below with a short kebab-case name and a
//      `glyph` snippet: plain SVG primitives (circle/rect/path/polygon) in a
//      0 0 24 24 viewBox, no strokes, filled shapes only — keep it legible
//      at 24px and 40px.
//   3. Use <Icon name="your-new-name" /> anywhere in the site.
//   4. Do not import an external icon library or paste a copied icon path;
//      the shape must be assembled from primitives so it stays original.
//
// The general set below (check, phone, calendar, shield, clock, map-pin,
// sparkles, wrench, users, star, leaf, home) covers common cross-niche needs.
// Most sites should still add a handful of niche-specific glyphs on top.

const ICONS: Record<string, string> = {
  check: `<circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.16" />
    <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />`,
  phone: `<rect x="2" y="1" width="20" height="22" rx="8" fill="currentColor" opacity="0.16" />
    <path d="M8.5 7.2c-.3 2.6.9 5.6 2.9 7.6 2 2 5 3.2 7.6 2.9.6-.1 1-.6.9-1.2l-.4-2.1c-.1-.5-.5-.9-1-1l-2.3-.5c-.4-.1-.9 0-1.2.4l-.7.9c-1.5-.8-2.9-2.2-3.7-3.7l.9-.7c.4-.3.5-.8.4-1.2l-.5-2.3c-.1-.5-.5-.9-1-1L8.9 6.3c-.6-.1-1.1.3-1.2.9z" fill="currentColor" />`,
  calendar: `<rect x="2" y="4" width="20" height="18" rx="4" fill="currentColor" opacity="0.16" />
    <rect x="2" y="4" width="20" height="6" rx="3" fill="currentColor" opacity="0.4" />
    <rect x="6" y="1.5" width="2.2" height="5" rx="1.1" fill="currentColor" />
    <rect x="15.8" y="1.5" width="2.2" height="5" rx="1.1" fill="currentColor" />
    <circle cx="8" cy="15" r="1.6" fill="currentColor" />
    <circle cx="13" cy="15" r="1.6" fill="currentColor" />
    <circle cx="18" cy="15" r="1.6" fill="currentColor" opacity="0.5" />`,
  shield: `<path d="M12 2l8 3v6c0 5.2-3.4 9.4-8 11-4.6-1.6-8-5.8-8-11V5z" fill="currentColor" opacity="0.16" />
    <path d="M12 4.3l6 2.25V11c0 4.1-2.6 7.5-6 8.85-3.4-1.35-6-4.75-6-8.85V6.55z" fill="currentColor" opacity="0.35" />
    <path d="M8.7 12l2.3 2.3 4.3-4.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />`,
  clock: `<circle cx="12" cy="12" r="10.5" fill="currentColor" opacity="0.16" />
    <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.6" opacity="0.5" />
    <path d="M12 6.5v6l4 2.4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />`,
  "map-pin": `<path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" fill="currentColor" opacity="0.18" />
    <path d="M12 20.2S18 13.9 18 9a6 6 0 1 0-12 0c0 4.9 6 11.2 6 11.2z" fill="currentColor" opacity="0.4" />
    <circle cx="12" cy="9" r="2.6" fill="currentColor" />`,
  sparkles: `<path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z" fill="currentColor" opacity="0.85" />
    <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" fill="currentColor" opacity="0.45" />
    <path d="M4 15l.6 1.6L6.2 17l-1.6.6L4 19.2l-.6-1.6L1.8 17l1.6-.6z" fill="currentColor" opacity="0.45" />`,
  wrench: `<circle cx="17" cy="7" r="5.5" fill="currentColor" opacity="0.16" />
    <path d="M20.3 3.7a5 5 0 0 1-6 6.5L6 18.5a2.1 2.1 0 0 1-3-3l8.3-8.3a5 5 0 0 1 6.5-6z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="5.2" cy="18.8" r="1.1" fill="currentColor" />`,
  users: `<circle cx="9" cy="8" r="3.6" fill="currentColor" opacity="0.4" />
    <circle cx="16.5" cy="9.5" r="2.8" fill="currentColor" opacity="0.22" />
    <path d="M3 20c0-3.6 2.9-6 6-6s6 2.4 6 6" fill="currentColor" opacity="0.4" />
    <path d="M13.5 14.4c2.6.2 4.7 2.3 4.7 5.1" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" />`,
  star: `<path d="M12 2.5l2.9 6 6.6.7-4.9 4.5 1.3 6.5L12 16.9 6.1 20.2l1.3-6.5-4.9-4.5 6.6-.7z" fill="currentColor" opacity="0.85" />`,
  leaf: `<path d="M20 4C10 4 4 10 4 18c0 .6.4 1 1 1 8 0 14-6 14-15 0-.4-.2-.9-.6-1z" fill="currentColor" opacity="0.4" />
    <path d="M5 19C10 15 14 11 18 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.7" />`,
  home: `<path d="M3 11.5L12 3l9 8.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" />
    <path d="M5.5 10.5V20a1 1 0 0 0 1 1H10v-5.5a2 2 0 0 1 4 0V21h3.5a1 1 0 0 0 1-1v-9.5" fill="currentColor" opacity="0.18" />
    <path d="M5.5 10.5V20a1 1 0 0 0 1 1H10v-5.5a2 2 0 0 1 4 0V21h3.5a1 1 0 0 0 1-1v-9.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />`,
};

interface Props {
  name: keyof typeof ICONS | (string & {});
  class?: string;
  label?: string;
}

const { name, class: className = "h-6 w-6", label } = Astro.props;
const glyph = ICONS[name] ?? ICONS.sparkles;
---

<svg
  class={className}
  viewBox="0 0 24 24"
  fill="none"
  role={label ? "img" : undefined}
  aria-label={label}
  aria-hidden={label ? undefined : "true"}
  set:html={glyph}
/>

```

### `src/components/RatingBadge.astro`

```astro
---
// Renders only when a provider has a currently-verified rating/review count (see
// the Provider interface in lib/config.ts). This is a real, checkable trust signal
// pulled from the provider's own listing — never invent or estimate these numbers.
import Icon from "./Icon.astro";

interface Props {
  rating?: number;
  reviewCount?: number;
  class?: string;
}

const { rating, reviewCount, class: className = "" } = Astro.props;
---

{rating != null && reviewCount != null && (
  <span class={`inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 ${className}`}>
    <Icon name="star" class="h-4 w-4 text-amber-400" />
    {rating.toFixed(1)}
    <span class="font-normal text-slate-400">({reviewCount} Google reviews)</span>
  </span>
)}

```

### `src/components/ServiceCard.astro`

```astro
---
import type { Service } from "../lib/config";
import Icon from "./Icon.astro";

interface Props {
  service: Service;
  icon?: string;
  // Card depth treatment. Pick one per site (not per card) so the site reads
  // as one system: "bordered" (flat, hairline border) or "elevated" (soft
  // shadow, no border, more depth). Elevated suits higher-trust/premium
  // niches; bordered suits utilitarian/high-frequency service niches.
  variant?: "bordered" | "elevated";
}

const { service, icon = "sparkles", variant = "bordered" } = Astro.props;
const cardClass =
  variant === "elevated"
    ? "border border-transparent bg-white shadow-[0_20px_45px_-20px_rgb(15_23_42_/_25%)] hover:-translate-y-1 hover:shadow-[0_28px_55px_-18px_rgb(15_23_42_/_32%)]"
    : "border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl";
---

<article class={`group flex h-full flex-col rounded-2xl p-6 ${cardClass}`}>
  <div class="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700" aria-hidden="true">
    <Icon name={icon} class="h-6 w-6" />
  </div>
  <h3 class="text-xl font-black text-slate-950">{service.name}</h3>
  <p class="mt-3 flex-1 leading-7 text-slate-600">{service.shortDescription}</p>
  <a href={`/services/${service.slug}/`} class="mt-6 font-bold text-teal-700 no-underline group-hover:text-teal-900">
    Explore {service.name} <span aria-hidden="true">&rarr;</span>
  </a>
</article>

```

### `src/components/SplitSection.astro`

```astro
---
// Offset image-and-text split. Use this instead of another centered
// heading+paragraph+card-grid block when a section benefits from a visual
// anchor (About, a differentiator, a service-area explainer). The media slot
// overlaps the content column slightly on desktop so it doesn't read as a
// plain two-column grid.
interface Props {
  reverse?: boolean;
  eyebrow?: string;
  heading: string;
  class?: string;
}

const { reverse = false, eyebrow, heading, class: className = "" } = Astro.props;
---

<div class={`container-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-6 ${className}`}>
  <div class={`relative ${reverse ? "lg:order-2 lg:-ml-10" : "lg:-mr-10"}`}>
    <div class="absolute -inset-4 -z-10 rounded-[2rem] bg-teal-50 sm:-inset-6" aria-hidden="true"></div>
    <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <slot name="media" />
    </div>
  </div>
  <div class={reverse ? "lg:order-1" : ""}>
    {eyebrow && <p class="eyebrow">{eyebrow}</p>}
    <h2 class="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{heading}</h2>
    <div class="prose-copy mt-5 leading-7 text-slate-600">
      <slot />
    </div>
  </div>
</div>

```

### `src/components/StickyCtaRail.astro`

```astro
---
// Desktop equivalent of the sticky mobile bottom call bar in Header.astro.
// A slim vertical rail pinned to the right edge, revealed once the hero has
// scrolled out of view. Desktop-only (md+); the mobile bottom bar already
// owns small screens, so this is hidden below md to avoid stacking two CTAs.
import { primaryProvider, siteConfig } from "../lib/config";

const cta = primaryProvider ?? {
  name: siteConfig.businessName,
  phone: siteConfig.phone,
  phoneHref: siteConfig.phoneHref,
};
---

<div
  id="desktop-cta-rail"
  class="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 translate-x-full flex-col items-end gap-2 transition-transform duration-300 md:flex"
  aria-hidden="true"
>
  <a
    href={cta.phoneHref}
    data-lead-call
    data-business={cta.name}
    class="flex items-center gap-3 rounded-l-xl bg-amber-400 py-4 pl-5 pr-4 font-black text-slate-950 no-underline shadow-2xl hover:bg-amber-300"
    aria-label={`Call ${cta.name} at ${cta.phone}`}
  >
    <span class="text-sm leading-tight">
      Call now<br /><span class="text-base">{cta.phone}</span>
    </span>
  </a>
</div>

<script is:inline>
  var ctaRail = document.getElementById("desktop-cta-rail");
  function updateCtaRail() {
    if (!ctaRail) return;
    var visible = window.scrollY > Math.min(window.innerHeight * 0.7, 560);
    ctaRail.classList.toggle("translate-x-full", !visible);
    ctaRail.setAttribute("aria-hidden", visible ? "false" : "true");
  }
  window.addEventListener("scroll", updateCtaRail, { passive: true });
  updateCtaRail();
</script>

```

### `src/layouts/BaseLayout.astro`

```astro
---
import Footer from "../components/Footer.astro";
import Header from "../components/Header.astro";
import StickyCtaRail from "../components/StickyCtaRail.astro";
import { isConfigured, siteConfig, siteUrl } from "../lib/config";
import "../styles/global.css";

const ga4Id = isConfigured(siteConfig.ga4MeasurementId) ? siteConfig.ga4MeasurementId : null;
const trackerUrl = isConfigured(siteConfig.leadTrackerUrl)
  ? siteConfig.leadTrackerUrl.replace(/\/+$/, "")
  : null;

interface Props {
  title: string;
  description: string;
  path?: string;
  schemas?: Record<string, unknown>[];
  noindex?: boolean;
}

const { title, description, path = "/", schemas = [], noindex = false } = Astro.props;
const canonical = `${siteUrl}${path === "/" ? "" : path}`;
const baseSchemas = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.businessName,
    legalName: siteConfig.legalBusinessName,
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: siteConfig.address,
    areaServed: siteConfig.serviceArea,
  },
];
const schemaJson = JSON.stringify([...baseSchemas, ...schemas]).replaceAll("<", "\\u003c");
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    {noindex && <meta name="robots" content="noindex,follow" />}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta name="twitter:card" content="summary_large_image" />
    <script is:inline type="application/ld+json" set:html={schemaJson}></script>
    {ga4Id && <script is:inline async src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}></script>}
    {ga4Id && (
      <script is:inline define:vars={{ ga4Id }}>
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        gtag("js", new Date());
        gtag("config", ga4Id);
      </script>
    )}
    <script is:inline define:vars={{ trackerUrl, siteDomain: siteConfig.domain }}>
      // Report call taps and form submissions to the dashboard so this site's
      // real lead counts are provable when pitching a tenant.
      window.__leadTrack = function (kind, business, extra) {
        if (!trackerUrl) return Promise.resolve();
        var payload = Object.assign(
          { domain: siteDomain, kind: kind, business_name: business || null, path: location.pathname },
          extra || {}
        );
        if (window.gtag) window.gtag("event", kind, { business: business || undefined });
        return fetch(trackerUrl + "/api/v1/leads/events", {
          method: "POST",
          keepalive: true,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).then(function (response) {
          if (!response.ok) throw new Error("Lead tracker rejected the event");
          return response;
        });
      };
      document.addEventListener("click", function (event) {
        var target = event.target instanceof Element ? event.target.closest("[data-lead-call]") : null;
        if (target) window.__leadTrack("call_click", target.getAttribute("data-business")).catch(function () {});
      });
    </script>
  </head>
  <body>
    <a href="#main-content" class="fixed left-3 top-3 z-50 -translate-y-24 rounded bg-white px-4 py-2 font-bold text-slate-950 focus:translate-y-0">Skip to content</a>
    <Header />
    <StickyCtaRail />
    <main id="main-content">
      <slot />
    </main>
    <Footer />
  </body>
</html>

```

### `src/lib/config.ts`

```ts
export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  introduction: string;
  benefits: string[];
  process: Array<{ title: string; description: string }>;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Provider {
  name: string;
  phone: string;
  phoneHref: string;
  email?: string;
  // Real, currently-verified Google rating/review count for this provider, sourced
  // from PROVIDERS.md verification evidence. Omit both fields entirely when not
  // currently verified — never estimate, round up, or reuse a stale number.
  rating?: number;
  reviewCount?: number;
}

export const siteConfig = {
  niche: "{NICHE}",
  geo: "{GEO}",
  domain: "{DOMAIN}",
  businessName: "{BUSINESS_NAME}",
  phone: "{PHONE}",
  phoneHref: "{PHONE_HREF}",
  email: "{EMAIL}",
  address: "{ADDRESS}",
  serviceArea: ["{GEO}", "{NEARBY_AREA_1}", "{NEARBY_AREA_2}"],
  primaryKeyword: "{PRIMARY_KEYWORD}",
  formEndpoint: "{FORM_ENDPOINT}",
  // The lead-generation platform operator. This is separate from the visible
  // site brand and from every independent provider listed below.
  legalBusinessName: "Kurtz & Boon LLC",
  operatorPrivacyEmail: "{OPERATOR_PRIVACY_EMAIL}",
  operatorMailingAddress: "{OPERATOR_MAILING_ADDRESS}",
  // Confirm this against the dashboard's enforced deletion schedule before launch.
  leadRetentionPeriod: "{LEAD_RETENTION_PERIOD}",
  // Use only a verified response window, such as "2 business hours". When left
  // unconfigured, the form uses neutral confirmation copy.
  responseTime: "{RESPONSE_TIME}",
  // The operator manually creates GA4 and supplies this web-stream measurement ID.
  // Record the numeric property ID and verification in ANALYTICS_SETUP.md. Leave the
  // placeholder to skip analytics; never put a numeric property ID in this field.
  ga4MeasurementId: "{GA4_MEASUREMENT_ID}",
  // Dashboard API origin (e.g. https://api.example.com). Every call tap and form
  // submission is reported there so the site's real lead counts are provable.
  leadTrackerUrl: "{LEAD_TRACKER_URL}",
  // Public values derived from active, current records in repository-level
  // PROVIDERS.md. Do not put internal verification notes in this browser bundle.
  // Businesses a visitor can contact through this site. With a renter in place,
  // list exactly one (the tenant). Before a renter exists, list 2-4 real local
  // businesses from the market research so calls and requests reach a real
  // provider — the visitor always sees exactly who they are contacting.
  providers: [
    {
      name: "{PROVIDER_1_NAME}",
      phone: "{PROVIDER_1_PHONE}",
      phoneHref: "{PROVIDER_1_PHONE_HREF}",
      email: "{PROVIDER_1_EMAIL}",
      // Add rating + reviewCount here only once verified against the provider's
      // current Google Business Profile/Maps listing; delete both lines otherwise.
      // rating: 4.8,
      // reviewCount: 126,
    },
  ] satisfies Provider[],
  brand: {
    primary: "#0f766e",
    accent: "#f59e0b",
  },
  services: [
    {
      slug: "{service-1}",
      name: "{Service 1}",
      shortDescription: "{A concise, customer-focused description of service 1.}",
      introduction: "{Write an original overview explaining this service, who needs it, and the local problem it solves.}",
      benefits: ["{Benefit one}", "{Benefit two}", "{Benefit three}"],
      process: [
        { title: "Consultation", description: "{Explain the first conversation and assessment.}" },
        { title: "Clear recommendation", description: "{Explain options, pricing, and expectations.}" },
        { title: "Professional service", description: "{Explain delivery, cleanup, and follow-through.}" },
      ],
    },
    {
      slug: "{service-2}",
      name: "{Service 2}",
      shortDescription: "{A concise, customer-focused description of service 2.}",
      introduction: "{Write an original overview explaining this service, who needs it, and the local problem it solves.}",
      benefits: ["{Benefit one}", "{Benefit two}", "{Benefit three}"],
      process: [
        { title: "Consultation", description: "{Explain the first conversation and assessment.}" },
        { title: "Clear recommendation", description: "{Explain options, pricing, and expectations.}" },
        { title: "Professional service", description: "{Explain delivery, cleanup, and follow-through.}" },
      ],
    },
    {
      slug: "{service-3}",
      name: "{Service 3}",
      shortDescription: "{A concise, customer-focused description of service 3.}",
      introduction: "{Write an original overview explaining this service, who needs it, and the local problem it solves.}",
      benefits: ["{Benefit one}", "{Benefit two}", "{Benefit three}"],
      process: [
        { title: "Consultation", description: "{Explain the first conversation and assessment.}" },
        { title: "Clear recommendation", description: "{Explain options, pricing, and expectations.}" },
        { title: "Professional service", description: "{Explain delivery, cleanup, and follow-through.}" },
      ],
    },
    {
      slug: "{service-4}",
      name: "{Service 4}",
      shortDescription: "{A concise, customer-focused description of service 4.}",
      introduction: "{Write an original overview explaining this service, who needs it, and the local problem it solves.}",
      benefits: ["{Benefit one}", "{Benefit two}", "{Benefit three}"],
      process: [
        { title: "Consultation", description: "{Explain the first conversation and assessment.}" },
        { title: "Clear recommendation", description: "{Explain options, pricing, and expectations.}" },
        { title: "Professional service", description: "{Explain delivery, cleanup, and follow-through.}" },
      ],
    },
  ] satisfies Service[],
  faqs: [
    { question: "How quickly can you help in {GEO}?", answer: "{Give a truthful response-time and scheduling answer.}" },
    { question: "Do you provide estimates?", answer: "{Explain the estimate or consultation process.}" },
    { question: "Which areas do you serve?", answer: "{Describe the real service boundary and nearby communities.}" },
    { question: "Are you licensed and insured?", answer: "{State only credentials the servicing business can verify.}" },
    { question: "What should I expect when I call?", answer: "{Describe the next steps and set a clear expectation.}" },
  ] satisfies FAQItem[],
};

export const siteUrl = `https://${siteConfig.domain}`;

export function isConfigured(value: string | undefined): value is string {
  return Boolean(value) && !value!.startsWith("{");
}

// Providers with real values filled in; falls back to the site's own contact
// details so a single-tenant site needs no duplicate configuration.
export const contactProviders: Provider[] = (() => {
  const filled = siteConfig.providers.filter(
    (provider) => isConfigured(provider.name) && isConfigured(provider.phoneHref),
  );
  if (filled.length) return filled;
  if (isConfigured(siteConfig.phone) && isConfigured(siteConfig.phoneHref)) {
    return [
      {
        name: siteConfig.businessName,
        phone: siteConfig.phone,
        phoneHref: siteConfig.phoneHref,
        email: isConfigured(siteConfig.email) ? siteConfig.email : undefined,
      },
    ];
  }
  return [];
})();

export const primaryProvider: Provider | undefined = contactProviders[0];

export function pageTitle(subject?: string): string {
  return subject
    ? `${subject} ${siteConfig.geo} | ${siteConfig.businessName}`
    : `${siteConfig.primaryKeyword} | ${siteConfig.businessName}`;
}

```

### `src/pages/guide/index.astro`

```astro
---
// OPT-IN page. The build spec's "Site structure" section allows a resource/guide
// page only when Tier 2 category-model competitors commonly carry genuinely useful
// educational content in this niche, AND real, original, niche-specific material can
// be written here — not generic filler. Pet Butler's "Wellness Guide" is one example
// for a pet-adjacent niche; plenty of niches (e.g. legal, appeals) have no natural
// equivalent at all.
//
// If that isn't the case for this niche, DELETE this file and any nav/footer link to
// it. Do not ship this page with thin or generic tips just to add a URL — every entry
// below must be genuinely useful, niche-specific, and original, the same bar as the
// rest of the site.
import Icon from "../../components/Icon.astro";
import BaseLayout from "../../layouts/BaseLayout.astro";
import { pageTitle, siteConfig } from "../../lib/config";

// Replace with 4-8 real, niche-specific, genuinely useful entries (150-250 original
// words each). Pick an `icon` name from src/components/Icon.astro, adding a new
// niche-specific one if none of the general set fits.
const guideEntries = [
  {
    title: "{Specific, useful guide topic 1}",
    icon: "sparkles",
    body: "{150-250 original words of genuinely useful, niche-specific guidance. Not a rephrased FAQ answer.}",
  },
  {
    title: "{Specific, useful guide topic 2}",
    icon: "sparkles",
    body: "{150-250 original words of genuinely useful, niche-specific guidance.}",
  },
  {
    title: "{Specific, useful guide topic 3}",
    icon: "sparkles",
    body: "{150-250 original words of genuinely useful, niche-specific guidance.}",
  },
  {
    title: "{Specific, useful guide topic 4}",
    icon: "sparkles",
    body: "{150-250 original words of genuinely useful, niche-specific guidance.}",
  },
];

const guideTitle = "{Guide title, e.g. \"The KC Dog Owner's Yard Care Guide\"}";
const guideIntro = "{One or two sentences on who this guide helps and why it exists.}";
const description = `Practical ${siteConfig.niche.toLowerCase()} guidance for ${siteConfig.geo} residents.`;
---

<BaseLayout title={pageTitle("Guide")} description={description} path="/guide/">
  <section class="bg-slate-950 py-20 text-white sm:py-28">
    <div class="container-shell">
      <nav aria-label="Breadcrumb" class="text-sm text-slate-400"><a class="hover:text-white" href="/">Home</a><span class="mx-2">/</span><span>Guide</span></nav>
      <h1 class="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">{guideTitle}</h1>
      <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{guideIntro}</p>
    </div>
  </section>

  <section class="py-20 sm:py-28">
    <div class="container-shell grid gap-10 md:grid-cols-2">
      {guideEntries.map((entry) => (
        <article class="rounded-2xl border border-slate-200 bg-white p-7">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700" aria-hidden="true">
            <Icon name={entry.icon} class="h-6 w-6" />
          </div>
          <h2 class="mt-4 text-xl font-black text-slate-950">{entry.title}</h2>
          <p class="mt-3 leading-7 text-slate-600">{entry.body}</p>
        </article>
      ))}
    </div>
  </section>

  <section class="border-t border-slate-200 bg-slate-100 py-16 text-center">
    <div class="container-shell">
      <h2 class="text-2xl font-black text-slate-950">Need hands-on help?</h2>
      <p class="mx-auto mt-3 max-w-xl leading-7 text-slate-600">Call and we'll connect you with a local provider.</p>
      <a class="button-primary mt-6" href={siteConfig.phoneHref} data-lead-call data-business={siteConfig.businessName}>Call {siteConfig.phone}</a>
    </div>
  </section>
</BaseLayout>

```

### `src/pages/index.astro`

```astro
---
import AngledDivider from "../components/AngledDivider.astro";
import ContactForm from "../components/ContactForm.astro";
import FAQ from "../components/FAQ.astro";
import FullBleedBand from "../components/FullBleedBand.astro";
import Icon from "../components/Icon.astro";
import RatingBadge from "../components/RatingBadge.astro";
import ServiceCard from "../components/ServiceCard.astro";
import SplitSection from "../components/SplitSection.astro";
import BaseLayout from "../layouts/BaseLayout.astro";
import { contactProviders, pageTitle, primaryProvider, siteConfig } from "../lib/config";

const heroPhone = primaryProvider ?? {
  name: siteConfig.businessName,
  phone: siteConfig.phone,
  phoneHref: siteConfig.phoneHref,
};

// Service count varies by niche (see the build spec's "Site structure" guidance) — pick
// a desktop column count that lays out cleanly instead of assuming exactly four.
const servicesGridClass = siteConfig.services.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

const description = `${siteConfig.businessName} provides dependable ${siteConfig.niche.toLowerCase()} services in ${siteConfig.geo}. Call ${siteConfig.phone} to discuss your project.`;
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};
---

<BaseLayout title={pageTitle()} description={description} schemas={[faqSchema]}>
  <section class="overflow-hidden border-b border-slate-200 bg-slate-950 py-20 text-white sm:py-28">
    <div class="container-shell grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p class="text-sm font-black tracking-[0.08em] text-amber-300">Serving {siteConfig.geo}</p>
        <h1 class="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">{siteConfig.primaryKeyword}</h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Tell us what you need, where you are located, and when you would like help. Your request goes to the local provider shown on this page.</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a class="inline-flex min-h-14 items-center rounded-xl bg-amber-400 px-7 font-black text-slate-950 no-underline hover:bg-amber-300" href={heroPhone.phoneHref} data-lead-call data-business={heroPhone.name}>Call {heroPhone.phone}</a>
          <a class="inline-flex min-h-14 items-center rounded-xl border border-slate-600 px-7 font-bold text-white no-underline hover:border-white" href="#contact">Request service</a>
        </div>
      </div>
      <div class="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        <p class="eyebrow !text-amber-300">Before you request service</p>
        <ul class="mt-6 space-y-5">
          <li class="flex gap-4"><span class="text-amber-300" aria-hidden="true">&#10003;</span><span><strong class="block text-white">Describe the need</strong><span class="text-sm text-slate-400">Share the service, location, and timing that matter to you.</span></span></li>
          <li class="flex gap-4"><span class="text-amber-300" aria-hidden="true">&#10003;</span><span><strong class="block text-white">Review the provider</strong><span class="text-sm text-slate-400">See which local business will receive your request before you submit it.</span></span></li>
          <li class="flex gap-4"><span class="text-amber-300" aria-hidden="true">&#10003;</span><span><strong class="block text-white">Keep the phone option</strong><span class="text-sm text-slate-400">Call the listed number whenever you prefer a direct conversation.</span></span></li>
        </ul>
      </div>
    </div>
  </section>

  <AngledDivider color="#f8fafc" />

  <section id="services" class="py-4 sm:py-8">
    <div class="container-shell">
      <p class="eyebrow">How we can help</p>
      <div class="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 class="max-w-2xl text-3xl font-black text-slate-950 sm:text-5xl">{siteConfig.niche} options in {siteConfig.geo}</h2>
        <p class="max-w-xl leading-7 text-slate-600">Choose the service that fits your situation. Each visit starts with listening, evaluating the work, and explaining practical options.</p>
      </div>
      <div class={`mt-10 grid gap-6 md:grid-cols-2 ${servicesGridClass}`}>
        {siteConfig.services.map((service) => <ServiceCard service={service} />)}
      </div>
    </div>
  </section>

  <section id="about" class="border-y border-slate-200 bg-white py-20 sm:py-28">
    <!--
      Section-composition primitive: offset image/text split (SplitSection),
      used instead of another centered heading + paragraph block. Replace the
      media slot below with a real/generated image or an IMAGE_PROMPTS.md
      placeholder per the visual-system requirements — this Icon block is a
      structural placeholder only.
    -->
    <SplitSection eyebrow="Local expertise, useful answers" heading={`A better service experience for ${siteConfig.geo}`}>
      <p>When something at your home or business needs attention, you should not have to chase callbacks or decode a vague recommendation. {siteConfig.businessName} helps customers understand the condition, the available solutions, and the next practical step.</p>
      <p>Our service area includes {siteConfig.serviceArea.join(", ")}. That local focus helps us plan realistic scheduling and recommend work appropriate for the properties, climate, and common concerns in the area.</p>
      <p>Every project begins with your goals. We ask questions, assess the situation, and explain the proposed scope before work moves forward. If there are alternatives, you will hear them. If something is outside our services, we will say so.</p>
      <p>Use the form below or call {siteConfig.phone}. Share what you have noticed, when the issue began, and any timing concerns. We will help you determine the right next step.</p>
      <div slot="media" class="flex aspect-4/3 items-center justify-center bg-linear-to-br from-teal-50 to-white">
        <Icon name="shield" class="h-24 w-24 text-teal-700" label={`Trustworthy ${siteConfig.niche.toLowerCase()} service`} />
      </div>
    </SplitSection>
  </section>

  <!--
    Section-composition primitive: full-bleed band, used to break up the
    stacked white/light-gray sections above and below with an edge-to-edge
    tinted band instead of another bordered card grid.
  -->
  <FullBleedBand tone="tint">
    <div class="mx-auto max-w-3xl text-center">
      <p class="eyebrow">A simple process</p>
      <h2 class="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">From your first call to a completed job</h2>
    </div>
    <ol class="mt-12 grid gap-6 md:grid-cols-3">
      <li class="rounded-2xl border border-slate-200 bg-white p-7">
        <div class="flex items-center gap-3"><Icon name="phone" class="h-8 w-8 text-teal-700" /><span class="text-3xl font-black text-teal-200">01</span></div>
        <h3 class="mt-4 text-xl font-black">Tell us what is happening</h3>
        <p class="mt-3 leading-7 text-slate-600">Call or send a request with the service you need, the property location, and the best way to reach you.</p>
      </li>
      <li class="rounded-2xl border border-slate-200 bg-white p-7">
        <div class="flex items-center gap-3"><Icon name="calendar" class="h-8 w-8 text-teal-700" /><span class="text-3xl font-black text-teal-200">02</span></div>
        <h3 class="mt-4 text-xl font-black">Review clear options</h3>
        <p class="mt-3 leading-7 text-slate-600">We assess the work, answer questions, and outline the recommended scope so you can make an informed choice.</p>
      </li>
      <li class="rounded-2xl border border-slate-200 bg-white p-7">
        <div class="flex items-center gap-3"><Icon name="check" class="h-8 w-8 text-teal-700" /><span class="text-3xl font-black text-teal-200">03</span></div>
        <h3 class="mt-4 text-xl font-black">Get the work completed</h3>
        <p class="mt-3 leading-7 text-slate-600">Your service is scheduled and completed with attention to communication, safety, and respect for the property.</p>
      </li>
    </ol>
  </FullBleedBand>

  <section id="faq" class="border-y border-slate-200 bg-slate-100 py-20 sm:py-28">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
      <div><p class="eyebrow">Common questions</p><h2 class="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Before you schedule</h2><p class="mt-5 leading-7 text-slate-600">These are a few questions customers often ask. Call us if your situation is different or you need an immediate answer.</p></div>
      <FAQ items={siteConfig.faqs} />
    </div>
  </section>

  <section id="contact" class="bg-slate-900 py-20 text-white sm:py-28">
    <div class="container-shell grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <p class="eyebrow !text-amber-300">Request service</p>
        <h2 class="mt-3 text-3xl font-black sm:text-5xl">Tell us how we can help</h2>
        <p class="mt-6 max-w-xl text-lg leading-8 text-slate-300">Send a few details and the provider you choose will follow up. For the fastest response, call <a class="font-bold text-amber-300" href={heroPhone.phoneHref} data-lead-call data-business={heroPhone.name}>{heroPhone.phone}</a>.</p>
        {contactProviders.length > 1 && (
          <div class="mt-8">
            <p class="text-sm font-bold tracking-[0.08em] text-slate-400">Listed local providers</p>
            <ul class="mt-3 space-y-3">
              {contactProviders.map((provider) => (
                <li>
                  <a class="font-bold text-white no-underline hover:text-amber-300" href={provider.phoneHref} data-lead-call data-business={provider.name}>
                    {provider.name} · {provider.phone}
                  </a>
                  <RatingBadge rating={provider.rating} reviewCount={provider.reviewCount} class="mt-1 block text-slate-300! [&_span]:text-slate-500!" />
                </li>
              ))}
            </ul>
          </div>
        )}
        {contactProviders.length > 0 && (
          <p class="mt-5 text-sm text-slate-400">
            Own or represent a listed business? <a class="font-bold text-teal-200" href="/provider-corrections/">Request a correction, removal, or routing change</a>.
          </p>
        )}
        <p class="mt-8 text-sm text-slate-400">Serving {siteConfig.serviceArea.join(", ")}</p>
      </div>
      <ContactForm />
    </div>
  </section>
</BaseLayout>

```

### `src/pages/privacy.astro`

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { pageTitle, siteConfig } from "../lib/config";

const providerNames = siteConfig.providers.map((provider) => provider.name).join(", ");
---

<BaseLayout title={pageTitle("Privacy Policy")} description={`Privacy policy for ${siteConfig.businessName}.`} path="/privacy/">
  <article class="container-shell max-w-3xl py-16 sm:py-24">
    <p class="eyebrow">Legal</p><h1 class="mt-3 text-4xl font-black text-slate-950">Privacy policy</h1><p class="mt-4 text-sm text-slate-500">Last updated: {`{LAST_UPDATED}`}</p>
    <div class="prose-copy mt-10 leading-8 text-slate-600">
      <p>{siteConfig.legalBusinessName} operates this lead-generation website. The visible site brand is not the local service provider. The businesses listed on this site are independent providers.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">Information collected</h2><p>We collect information you submit, including your name, phone number, optional email address, property or service details, and message. We also record call-link clicks, the provider involved, page and referral information, campaign parameters, submission time, and security metadata. When analytics is enabled, Google Analytics may collect device, cookie, and website-usage information.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">How information is used</h2><p>We use information to route and respond to your requested service inquiry, confirm delivery, prevent abuse, measure website and campaign performance, maintain necessary records, and comply with law.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">Who receives an inquiry</h2><p>Submitted inquiries are shared with the provider or providers identified beside the form so they can respond about the requested service. The currently configured providers are {providerNames}. We also use vendors for hosting, analytics, email delivery, and dashboard operations. We do not share inquiry information for unrelated third-party advertising unless this policy and the collection notice are updated first.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">Provider listing requests</h2><p>A business owner or authorized representative may submit identifying and contact information to request a listing correction, removal, or routing change. These requests go only to {siteConfig.legalBusinessName} for manual review and are not forwarded as customer leads to listed providers.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">Retention and security</h2><p>Lead and delivery records are retained for {siteConfig.leadRetentionPeriod}, subject to legal and security exceptions, and then deleted under our documented retention process. We minimize collection, limit dashboard access, and use reasonable safeguards, but no internet system can be guaranteed completely secure.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">Your choices</h2><p>You may request access, correction, or deletion, or exercise another applicable privacy right, by emailing <a class="font-bold text-teal-700" href={`mailto:${siteConfig.operatorPrivacyEmail}`}>{siteConfig.operatorPrivacyEmail}</a>. We may need to verify your identity, and legal or recordkeeping obligations may limit some requests.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">Contact</h2><p>Privacy questions may be sent to {siteConfig.operatorPrivacyEmail} or {siteConfig.operatorMailingAddress}.</p>
    </div>
  </article>
</BaseLayout>

```

### `src/pages/provider-corrections.astro`

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { contactProviders, isConfigured, pageTitle, siteConfig } from "../lib/config";

const trackerEndpoint = isConfigured(siteConfig.leadTrackerUrl)
  ? `${siteConfig.leadTrackerUrl.replace(/\/+$/, "")}/api/v1/leads/events`
  : null;
---

<BaseLayout
  title={pageTitle("Business Listing Corrections")}
  description={`Request a correction or removal of a business listing on ${siteConfig.businessName}.`}
  path="/provider-corrections/"
  noindex
>
  <section class="container-shell max-w-3xl py-16 sm:py-24">
    <p class="eyebrow">Business owners</p>
    <h1 class="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">Request a listing correction or removal</h1>
    <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
      If you own or represent a business listed on this site, use this form to request a correction, removal, or routing change. Requests go only to {siteConfig.legalBusinessName} for manual review. They are never forwarded to the other listed businesses.
    </p>

    <form id="provider-request-form" class="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8" novalidate>
      <input type="hidden" name="submitted_after_ms" value="0" />
      <div class="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>Website <input name="website" tabindex="-1" autocomplete="off" /></label>
      </div>
      <div class="grid gap-5 sm:grid-cols-2">
        <label class="text-sm font-bold text-slate-700 sm:col-span-2">
          Business name
          <input required name="business_name" list="listed-businesses" class="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 font-normal outline-none focus:border-teal-600" />
          <datalist id="listed-businesses">
            {contactProviders.map((provider) => <option value={provider.name} />)}
          </datalist>
        </label>
        <label class="text-sm font-bold text-slate-700">
          Your name
          <input required autocomplete="name" name="name" class="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 font-normal outline-none focus:border-teal-600" />
        </label>
        <label class="text-sm font-bold text-slate-700">
          Business email
          <input required type="email" autocomplete="email" name="email" class="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 font-normal outline-none focus:border-teal-600" />
        </label>
        <label class="text-sm font-bold text-slate-700">
          Business phone <span class="font-normal text-slate-500">(optional)</span>
          <input type="tel" autocomplete="tel" name="phone" class="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 font-normal outline-none focus:border-teal-600" />
        </label>
        <label class="text-sm font-bold text-slate-700">
          Request
          <select required name="request_type" class="mt-2 h-12 w-full rounded-lg border border-slate-300 bg-white px-4 font-normal outline-none focus:border-teal-600">
            <option value="">Choose one</option>
            <option value="Remove the listing and stop lead routing">Remove listing and stop leads</option>
            <option value="Correct listing information">Correct listing information</option>
            <option value="Stop lead routing only">Stop lead routing only</option>
            <option value="Other provider request">Other</option>
          </select>
        </label>
        <label class="text-sm font-bold text-slate-700 sm:col-span-2">
          Details
          <textarea required name="details" maxlength="500" rows="5" class="mt-2 w-full rounded-lg border border-slate-300 p-4 font-normal outline-none focus:border-teal-600"></textarea>
          <span class="mt-1 block text-xs font-normal text-slate-500">Describe what should change and the best public source for confirming it.</span>
        </label>
        <label class="flex min-h-11 items-start gap-3 text-sm leading-6 text-slate-700 sm:col-span-2">
          <input required type="checkbox" name="authorized" class="mt-1 h-5 w-5 shrink-0 accent-teal-700" />
          <span>I confirm that I own this business or am authorized to make this request for it.</span>
        </label>
      </div>
      <button type="submit" class="button-primary mt-6 w-full">Submit provider request</button>
      <p id="provider-request-status" class="mt-4 text-sm text-slate-600" aria-live="polite">
        We review requests before changing a listing so one business cannot remove another business improperly.
      </p>
      <p class="mt-3 text-sm text-slate-600">
        You may also email <a class="font-bold text-teal-700" href={`mailto:${siteConfig.operatorPrivacyEmail}?subject=${encodeURIComponent(`Business listing request for ${siteConfig.domain}`)}`}>{siteConfig.operatorPrivacyEmail}</a>.
      </p>
    </form>
  </section>
</BaseLayout>

<script is:inline define:vars={{ trackerEndpoint, siteDomain: siteConfig.domain }}>
  var providerRequestForm = document.getElementById("provider-request-form");
  if (providerRequestForm) {
    var providerRequestStartedAt = Date.now();
    providerRequestForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = document.getElementById("provider-request-status");
      var button = providerRequestForm.querySelector("button[type=submit]");
      if (!providerRequestForm.reportValidity()) return;
      if (!trackerEndpoint) {
        if (status) {
          status.textContent = "Online requests are not configured yet. Please use the operator email shown below.";
          status.className = "mt-4 text-sm font-bold text-red-700";
        }
        return;
      }
      var data = new FormData(providerRequestForm);
      var requestType = String(data.get("request_type") || "");
      var details = String(data.get("details") || "");
      if (button) button.disabled = true;
      fetch(trackerEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          domain: siteDomain,
          kind: "provider_request",
          business_name: String(data.get("business_name") || ""),
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          phone: String(data.get("phone") || "") || null,
          message: requestType + ": " + details,
          path: window.location.pathname,
          page_url: window.location.href,
          referrer: document.referrer || null,
          submitted_after_ms: Date.now() - providerRequestStartedAt,
          website: String(data.get("website") || "") || null,
        }),
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Provider request rejected");
          if (status) {
            status.textContent = "Your request was received for manual review. No customer lead was sent.";
            status.className = "mt-4 text-sm font-bold text-teal-700";
          }
          providerRequestForm.reset();
          providerRequestStartedAt = Date.now();
        })
        .catch(function () {
          if (status) {
            status.textContent = "We could not submit the request. Please use the operator email shown below.";
            status.className = "mt-4 text-sm font-bold text-red-700";
          }
        })
        .finally(function () {
          if (button) button.disabled = false;
        });
    });
  }
</script>


```

### `src/pages/services/[service].astro`

```astro
---
import CallCTA from "../../components/CallCTA.astro";
import ServiceCard from "../../components/ServiceCard.astro";
import BaseLayout from "../../layouts/BaseLayout.astro";
import { pageTitle, siteConfig, siteUrl, type Service } from "../../lib/config";

export function getStaticPaths() {
  return siteConfig.services.map((service) => ({ params: { service: service.slug }, props: { service } }));
}

interface Props {
  service: Service;
}

const { service } = Astro.props;
const path = `/services/${service.slug}/`;
const description = `${service.name} in ${siteConfig.geo} from ${siteConfig.businessName}. Learn what to expect and call ${siteConfig.phone} to request service.`;
const relatedServices = siteConfig.services.filter((item) => item.slug !== service.slug);
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.shortDescription,
  url: `${siteUrl}${path}`,
  areaServed: siteConfig.serviceArea,
  provider: { "@type": "LocalBusiness", name: siteConfig.businessName, url: siteUrl },
};
---

<BaseLayout title={pageTitle(service.name)} description={description} path={path} schemas={[serviceSchema]}>
  <section class="bg-slate-950 py-20 text-white sm:py-28">
    <div class="container-shell">
      <nav aria-label="Breadcrumb" class="text-sm text-slate-400"><a class="hover:text-white" href="/">Home</a><span class="mx-2">/</span><span>{service.name}</span></nav>
      <p class="mt-10 text-sm font-black tracking-[0.08em] text-amber-300">{siteConfig.geo}</p>
      <h1 class="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">{service.name} in {siteConfig.geo}</h1>
      <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{service.introduction}</p>
      <a class="mt-8 inline-flex min-h-14 items-center rounded-xl bg-amber-400 px-7 font-black text-slate-950 no-underline hover:bg-amber-300" href={siteConfig.phoneHref}>Call {siteConfig.phone}</a>
    </div>
  </section>

  <section class="py-20 sm:py-28">
    <div class="container-shell grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
      <article class="prose-copy leading-8 text-slate-600">
        <p class="eyebrow">Service overview</p>
        <h2 class="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Practical {service.name.toLowerCase()} solutions</h2>
        <p class="mt-6">{service.introduction}</p>
        <p>Properties in {siteConfig.geo} can have different needs based on age, design, exposure, maintenance history, and how the space is used. A useful recommendation starts with understanding those details instead of assuming the same answer fits every property.</p>
        <p>When you contact {siteConfig.businessName}, describe what you have observed and what outcome matters most. We will help you understand whether {service.name.toLowerCase()} is the appropriate next step and what information is needed to plan the work.</p>
        <h2 class="mt-10 text-2xl font-black text-slate-950">What a professional assessment should cover</h2>
        <p>A careful assessment considers the visible concern, related systems or materials, access, safety, and the conditions that may have contributed to the problem. You should receive a clear explanation of the proposed work and any choices that affect timing, scope, or cost.</p>
        <p>Our goal is to make that conversation useful. We explain what we find in plain language, identify priorities, and set realistic expectations. Before authorizing work, ask questions until you understand the recommendation and what completion will look like.</p>
        <h2 class="mt-10 text-2xl font-black text-slate-950">Planning your service</h2>
        <p>Before the appointment, gather any relevant history, photographs, previous reports, or product information. Let us know about access restrictions, pets, tenants, parking, business hours, or time-sensitive concerns. Those details make scheduling smoother and help the visit stay focused.</p>
        <p>After the work, keep any documentation and follow the care or maintenance guidance provided. If conditions change or you have a question, contact the team promptly. Good follow-through protects the work and helps small concerns get addressed before they become larger ones.</p>
      </article>
      <aside class="h-fit rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h2 class="text-xl font-black text-slate-950">Benefits</h2>
        <ul class="mt-5 space-y-4">
          {service.benefits.map((benefit) => <li class="flex gap-3 text-slate-600"><span class="font-black text-teal-700" aria-hidden="true">&#10003;</span><span>{benefit}</span></li>)}
        </ul>
        <div class="mt-7 border-t border-slate-200 pt-7"><p class="text-sm font-bold text-slate-950">Need help deciding?</p><p class="mt-2 text-sm leading-6 text-slate-600">Call and describe your situation. We will help you identify the right next step.</p><a class="button-primary mt-5 w-full" href={siteConfig.phoneHref}>{siteConfig.phone}</a></div>
      </aside>
    </div>
  </section>

  <section class="border-y border-slate-200 bg-white py-20">
    <div class="container-shell"><p class="eyebrow">What to expect</p><h2 class="mt-3 text-3xl font-black text-slate-950">Our {service.name.toLowerCase()} process</h2><div class="mt-10 grid gap-6 md:grid-cols-3">{service.process.map((step, index) => <div class="rounded-2xl bg-slate-50 p-7"><span class="text-sm font-black text-teal-700">STEP {index + 1}</span><h3 class="mt-3 text-xl font-black">{step.title}</h3><p class="mt-3 leading-7 text-slate-600">{step.description}</p></div>)}</div></div>
  </section>

  <section class="py-20"><div class="container-shell"><h2 class="text-3xl font-black text-slate-950">Other services in {siteConfig.geo}</h2><div class="mt-8 grid gap-6 md:grid-cols-3">{relatedServices.map((item) => <ServiceCard service={item} />)}</div></div></section>
  <CallCTA heading={`Talk with us about ${service.name.toLowerCase()} in ${siteConfig.geo}`} />
</BaseLayout>

```

### `src/pages/services/index.astro`

```astro
---
// OPT-IN page. The build spec's "Site structure" section requires a dedicated
// services hub only when the Tier 1/Tier 2 competitor research shows it's a
// genuine, recurring pattern worth following AND you'll write real original
// content per service here (not a repeat of the homepage card blurbs).
//
// If that isn't the case for this niche, DELETE this file and remove the nav
// link to it in Header.astro — the homepage services grid is the hub. Do not
// keep this page live with thin/duplicate content just to add a URL.
import Icon from "../../components/Icon.astro";
import BaseLayout from "../../layouts/BaseLayout.astro";
import { pageTitle, siteConfig } from "../../lib/config";

const description = `Compare every ${siteConfig.niche.toLowerCase()} option available in ${siteConfig.geo} and find the right next step.`;
---

<BaseLayout title={pageTitle("Services")} description={description} path="/services/">
  <section class="bg-slate-950 py-20 text-white sm:py-28">
    <div class="container-shell">
      <nav aria-label="Breadcrumb" class="text-sm text-slate-400"><a class="hover:text-white" href="/">Home</a><span class="mx-2">/</span><span>Services</span></nav>
      <h1 class="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">{siteConfig.niche} services in {siteConfig.geo}</h1>
      <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Every option we cover, explained in plain language so you can pick the right one before you call.</p>
    </div>
  </section>

  <section class="py-20 sm:py-28">
    <div class="container-shell space-y-14">
      {siteConfig.services.map((service) => (
        <article id={service.slug} class="grid gap-8 border-b border-slate-200 pb-14 last:border-0 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700" aria-hidden="true">
            <Icon name="sparkles" class="h-8 w-8" />
          </div>
          <div>
            <h2 class="text-2xl font-black text-slate-950">{service.name}</h2>
            <p class="prose-copy mt-4 leading-7 text-slate-600">{service.introduction}</p>
            <a href={`/services/${service.slug}/`} class="mt-4 inline-flex font-bold text-teal-700 no-underline hover:text-teal-900">
              Full details on {service.name} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>

  <section class="border-t border-slate-200 bg-slate-100 py-16 text-center">
    <div class="container-shell">
      <h2 class="text-2xl font-black text-slate-950">Not sure which service you need?</h2>
      <p class="mx-auto mt-3 max-w-xl leading-7 text-slate-600">Call and describe what you're seeing. We'll help you figure out the right next step.</p>
      <a class="button-primary mt-6" href={siteConfig.phoneHref} data-lead-call data-business={siteConfig.businessName}>Call {siteConfig.phone}</a>
    </div>
  </section>
</BaseLayout>

```

### `src/pages/terms.astro`

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { pageTitle, siteConfig } from "../lib/config";
---

<BaseLayout title={pageTitle("Terms of Service")} description={`Website terms for ${siteConfig.businessName}.`} path="/terms/">
  <article class="container-shell max-w-3xl py-16 sm:py-24">
    <p class="eyebrow">Legal</p><h1 class="mt-3 text-4xl font-black text-slate-950">Terms of service</h1><p class="mt-4 text-sm text-slate-500">Last updated: {`{LAST_UPDATED}`}</p>
    <div class="prose-copy mt-10 leading-8 text-slate-600">
      <p>{siteConfig.legalBusinessName} operates this information and referral website. It does not perform the local services described here. By using the website, you agree to these terms.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">Website information</h2><p>Website content and any interactive tool output are general planning information. They are not a provider quote, guarantee, professional advice, binding recommendation, or substitute for a provider's assessment.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">Independent providers</h2><p>Listed providers are independent businesses. A listing is not a guarantee or endorsement. Submitting a form or calling does not create a service agreement. Any estimate, scheduling, payment, warranty, work, or dispute is between you and the provider under the terms you accept with that provider.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">Acceptable use</h2><p>You may not misuse the website, attempt unauthorized access, interfere with its operation, submit unlawful material, or use its content in a way that violates applicable law.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">Third-party services</h2><p>The website may use or link to third-party services. {siteConfig.legalBusinessName} is not responsible for third-party content, availability, or practices.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">Limitation of liability</h2><p>To the extent permitted by law, {siteConfig.legalBusinessName} is not liable for indirect, incidental, or consequential losses arising from use of this website.</p>
      <h2 class="mt-8 text-2xl font-black text-slate-950">Contact</h2><p>Questions about these terms may be sent to <a class="font-bold text-teal-700" href={`mailto:${siteConfig.operatorPrivacyEmail}`}>{siteConfig.operatorPrivacyEmail}</a> or {siteConfig.operatorMailingAddress}.</p>
    </div>
  </article>
</BaseLayout>

```

### `src/styles/global.css`

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", "Segoe UI", system-ui, sans-serif;
  --font-display: "Manrope", "Segoe UI", system-ui, sans-serif;
}

:root {
  color-scheme: light;
  font-family: var(--font-sans);
  color: #17202a;
  background: #f8fafc;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at 95% 0%, rgb(13 148 136 / 10%), transparent 30rem),
    #f8fafc;
}

@media (max-width: 767px) {
  body {
    padding-bottom: 4.75rem;
  }
}

h1,
h2,
h3 {
  font-family: var(--font-display);
  text-wrap: balance;
}

p {
  text-wrap: pretty;
}

a,
button,
input,
textarea {
  transition: border-color 160ms ease, background-color 160ms ease, color 160ms ease, transform 160ms ease;
}

:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}

.container-shell {
  width: min(100% - 2rem, 72rem);
  margin-inline: auto;
}

.eyebrow {
  color: #0f766e;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.button-primary {
  display: inline-flex;
  min-height: 3rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  background: #0f766e;
  padding: 0.75rem 1.25rem;
  color: white;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 12px 30px rgb(15 118 110 / 20%);
}

.button-primary:hover {
  background: #115e59;
  transform: translateY(-1px);
}

.prose-copy p + p {
  margin-top: 1rem;
}

```

### `tailwind.config.cjs`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

### `tsconfig.json`

```json
{
  "extends": "astro/tsconfigs/strict"
}

```

### `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}

```