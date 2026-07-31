# Analytics and search setup

The site operator creates the Google properties and supplies the identifiers or
approved tag. Builders install and verify them; they do not create replacement
properties or guess IDs. Never store Google credentials, API secrets, or DNS
verification tokens in this repository.

## Google Analytics 4

- **Google account/property owner:** Kurtz & Boon LLC
- **Numeric GA4 property ID:** *pending operator confirmation against GA4 admin; the script is wired to the supplied measurement ID, but the numeric property ID should be filled in by the operator during GA4 handoff*
- **Web stream name and ID:** *pending operator confirmation*
- **Measurement ID:** `G-DD85F1HJ8N`
- **Tag source:** operator-supplied measurement ID
- **Installed by and date:** build operator / 2026-07-31
- **Duplicate-tag check:** *pending — run after Vercel deploys to confirm a single `googletagmanager.com/gtag/js?id=G-DD85F1HJ8N` script loads*
- **Realtime or DebugView page-view test:** *pending — open GA4 → Reports → Realtime, then load the home page; a single `page_view` event should appear within 60 seconds*
- **`call_click` event test:** *pending — once Realtime works, simulate a phone-link click in the browser and confirm a `call_click` event in DebugView (the existing `__leadTrack` JS handler also fires `gtag('event', kind, …)` for both call clicks and form submits on the same property)*

**Configuration in code:** the supplied `G-PZHLMR0JEK` is set on `siteConfig.ga4MeasurementId` in `src/lib/config.ts`. The shared `BaseLayout.astro` emits the standard Google tag (`googletagmanager.com/gtag/js?id=…`) plus the inline `dataLayer` configuration block once on every page. If a complete custom snippet is supplied later, install that exact reviewed snippet once in the shared layout and remove the generated tag path so the site never loads two Google tags.

## Google Search Console

- **Property type:** Domain
- **Property identifier:** `sc-domain:laredofencing.com`
- **Property URL in Search Console:** `https://laredofencing.com`
- **Verified owner:** *pending operator confirmation*
- **Verification method:** DNS (TXT record via the operator's domain registrar for `laredofencing.com`)
- **Verification completed:** *pending*
- **Sitemap URL:** `https://laredofencing.com/sitemap-index.xml`
- **Sitemap submitted:** *pending*
- **Sitemap accepted:** *pending — re-check after the build is on the production domain*
- **Dashboard site record updated:** *pending*
- **Access handoff notes:** *pending*

## DNS verification note (operator task)

When the operator verifies the Search Console Domain property via DNS, the TXT
record is added at the registrar of `laredofencing.com` (the parent zone, not
`www` or any subdomain). Search Console supplies the exact TXT value during the
verification flow; **do not commit that token to this repository**. Record only
the verified owner and the verification date here.

## Lead tracker (separate from analytics)

The lead tracker is **not** an analytics tag. It is operator-owned and lives at
`siteConfig.leadTrackerUrl` in `src/lib/config.ts` (currently
`https://sahjin.dev`); `BaseLayout.astro` registers `window.__leadTrack`, which:

- fires on every `tel:` link click via the `data-lead-call` attribute, sending
  `kind: "call_click"` to `https://sahjin.dev/api/v1/leads/events`, and
- fires on every lead form submission via the inline form handler, sending
  `kind: "form_submit"`.

The same handler also fires the equivalent GA4 events on the Google tag above
when GA4 is configured. Use GA4 for funnel reporting and dashboards; use the
dashboard `sahjin.dev` API for verified delivery logs and tenant-pitch evidence.
