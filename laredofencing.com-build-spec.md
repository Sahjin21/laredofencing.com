# Lead-Gen Site Builder Prompt: laredofencing.com

You are building a production lead-generation website for **fencing contractor** in
**Laredo, Texas** on **laredofencing.com**.

## Starting point and repository shape

- Create a new, dedicated Git repository and local working directory for
  `laredofencing.com`. Every generated site uses its own repository and its own domain
- `lead-gen-sites/_template/` lives in the operator's private dashboard monorepo, not in
  this new site's repository. Check for it locally first, since builder and dashboard
  usually run on the same machine: `C:/Users/shawn/Documents/VSCode/SahjinDev/lead-gen-sites/_template`
  (or search the filesystem for a `lead-gen-sites/_template` directory if that exact path
  is gone). Only if no local copy exists anywhere, fetch it from
  `https://github.com/Sahjin21/SahjinDev` (private repo — requires the operator's GitHub
  access):
  `git clone --depth 1 --filter=blob:none --sparse https://github.com/Sahjin21/SahjinDev.git _sahjindev_template_src`
  then `cd _sahjindev_template_src && git sparse-checkout set lead-gen-sites/_template`.
  If neither works, ask the operator for the template contents directly rather than
  improvising a structure from another site — the template is the source of truth for
  shared components and layout
- Copy the **contents** of `lead-gen-sites/_template/` into the new repository root;
  do not copy the `_template` directory as a nested folder. Delete
  `_sahjindev_template_src` (or wherever the template was fetched to) once the copy is
  done — it must not be committed into this site's repository
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
