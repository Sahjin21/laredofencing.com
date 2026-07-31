# PROVIDERS — Laredo Fence Pros

> **Operational source of truth.** Records here drive the public provider list in `src/lib/config.ts`, which drives the visible listings, the lead-routing model, and the form copy.
>
> **Pre-tenant mode.** No signed tenant yet, so the site lists 4 verified local Laredo-area fencing businesses. Each lead from the contact form is fanned out to every listed provider per the routing model in the build spec. Phone `tel:` links go directly to the chosen provider's real number.
>
> **Lifecycle states used:** `candidate` (verified but not yet listed or about to be removed), `listed` (currently surfaced on the site and receiving leads), `tenant` (signed tenant, exclusive routing), `removed` (formerly listed, now off the site), `reverification-needed` (record exists but is past the 90-day verification window).
>
> **Re-verification cadence:** every 90 days while listed. Records are dated; stale records cannot receive leads.

## Active listings (pre-tenant — routed to all)

### 1. Fence World
- **Internal record ID:** `fw-laredo`
- **Lifecycle:** `listed`
- **Public business name:** Fence World
- **Public-record or official-listing URL:** https://maps.google.com/?cid=4343546460637643692 (Google Maps listing)
- **Business website:** http://www.fenceworldstx.com/
- **Displayed phone:** `(956) 796-0102`
- **Normalized phone href:** `tel:+19567960102`
- **Email:** `office@fenceworldstx.com` (displayed as primary)
- **Phone source URL:** Google Maps listing above; cross-checked at fenceworldstx.com 2026-07-31
- **Phone verification date:** 2026-07-31
- **Phone verification method:** Listing pages observed without placing a call
- **Test-call date / outcome / verifier:** Not performed. Operator has not authorized outbound verification calls.
- **Service-niche evidence:** Same Maps listing; business name and category confirm fencing in Laredo. Cross-checked with fenceworldstx.com homepage.
- **Service niche-evidence source URL:** Same listing, same site, 2026-07-31
- **Operational status evidence URL:** Same listing; business flag is not closed.
- **Verified operational status:** Open; no current closure signal.
- **Service area:** Laredo / Webb County / South Texas
- **Email source URL / date:** fenceworldstx.com domain viewed 2026-07-31
- **Verified email path:** Domain on the public website; not yet used for delivery (forms route via the dashboard).
- **First-listed date:** 2026-07-31
- **Last-verified date:** 2026-07-31
- **Removed date:** n/a
- **Dispute / correction notes:** None.
- **Google rating / review count:** **Pending verification.** Field omitted per build-spec rule "providers without a currently verified rating correctly show no badge rather than an invented one." Run at next dashboard refresh.

### 2. Maverick Fence Co
- **Internal record ID:** `maverick-laredo`
- **Lifecycle:** `listed`
- **Public business name:** Maverick Fence Co
- **Public-record or official-listing URL:** https://maps.google.com/?cid=8330595307738417011 (Google Maps listing)
- **Business website:** Not available — verified by Google Maps page only.
- **Displayed phone:** `(956) 722-3125`
- **Normalized phone href:** `tel:+19567223125`
- **Email:** Not displayed; no public email found at listing.
- **Phone source URL:** Google Maps listing, 2026-07-31.
- **Phone verification date:** 2026-07-31
- **Phone verification method:** Maps listing observed; not called.
- **Test-call date / outcome / verifier:** Not performed.
- **Service-niche evidence:** Same Maps listing; business name + fencing categories confirm service area.
- **Service niche-evidence source URL:** Same listing, 2026-07-31.
- **Operational status evidence URL:** Same listing; not flagged closed.
- **Verified operational status:** Open.
- **Service area:** Laredo / Webb County.
- **Email source URL / date:** None confirmed.
- **Verified email path:** Not used at this time; forms route via dashboard.
- **First-listed date:** 2026-07-31
- **Last-verified date:** 2026-07-31
- **Removed date:** n/a
- **Dispute / correction notes:** None.
- **Google rating / review count:** Pending verification. Field omitted.

### 3. 3C Ranch Fencing, Ltd
- **Internal record ID:** `threecranch-laredo`
- **Lifecycle:** `listed`
- **Public business name:** 3C Ranch Fencing, Ltd
- **Public-record or official-listing URL:** https://maps.google.com/?cid=10661723276136800964 (Google Maps listing)
- **Business website:** http://3cranchfencing.com/
- **Displayed phone:** `(956) 723-7959`
- **Normalized phone href:** `tel:+19567237959`
- **Email:** Not displayed; not in public source.
- **Phone source URL:** Google Maps listing + 3cranchfencing.com, 2026-07-31.
- **Phone verification date:** 2026-07-31
- **Phone verification method:** Listings observed; not called.
- **Test-call date / outcome / verifier:** Not performed.
- **Service-niche evidence:** Maps + domain both confirm a Laredo-area ranch fencing operator.
- **Service niche-evidence source URL:** Same listing, 2026-07-31.
- **Operational status evidence URL:** Same listing; not flagged closed.
- **Verified operational status:** Open.
- **Service area:** Laredo / Webb County / ranch belt.
- **Email source URL / date:** None confirmed.
- **Verified email path:** Not used at this time; forms route via dashboard.
- **First-listed date:** 2026-07-31
- **Last-verified date:** 2026-07-31
- **Removed date:** n/a
- **Dispute / correction notes:** None.
- **Google rating / review count:** Pending verification. Field omitted.

### 4. FortiCraft Laredo Fence Builders
- **Internal record ID:** `forticraft-laredo`
- **Lifecycle:** `listed`
- **Public business name:** FortiCraft Laredo Fence Builders
- **Public-record or official-listing URL:** https://maps.google.com/?cid=14557012801525023487 (Google Maps listing)
- **Business website:** https://www.laredofences.com/
- **Displayed phone:** `(956) 815-3129`
- **Normalized phone href:** `tel:+19568153129`
- **Email:** Not displayed; not in public source.
- **Phone source URL:** Google Maps listing + laredofences.com, 2026-07-31.
- **Phone verification date:** 2026-07-31
- **Phone verification method:** Listings observed; not called.
- **Test-call date / outcome / verifier:** Not performed.
- **Service-niche evidence:** Maps + domain confirm a Laredo residential/ornamental fence operator.
- **Service niche-evidence source URL:** Same listing, 2026-07-31.
- **Operational status evidence URL:** Same listing; not flagged closed.
- **Verified operational status:** Open.
- **Service area:** Laredo / Webb County.
- **Email source URL / date:** None confirmed.
- **Verified email path:** Not used at this time; forms route via dashboard.
- **First-listed date:** 2026-07-31
- **Last-verified date:** 2026-07-31
- **Removed date:** n/a
- **Dispute / correction notes:** None.
- **Google rating / review count:** Pending verification. Field omitted.

## Rejected candidates (records retained for audit, NOT listed)

These candidates were inspected but did not pass the verification standard on this build cycle.

### Martinez Ranch Fencing
- **Internal record ID:** `martinez-ranch-discard`
- **Lifecycle:** `removed`
- **Reason:** No website, no Google rating, niche signals modest, business registration not independently verified. Held for a later verification pass.

### RS Torres Services
- **Internal record ID:** `rstorres-discard`
- **Lifecycle:** `removed`
- **Reason:** Niche evidence thin — classification reads as multi-trades rather than dedicated fencing. No website. Held for a later verification pass.

### Laredo Fence Materials Inc
- **Internal record ID:** `lfm-laredo-discard`
- **Lifecycle:** `removed`
- **Reason:** Reads as a materials supplier rather than an installation contractor; not a service-provider in the build-spec sense. Held.

### JC Laredo Fence Builder
- **Internal record ID:** `jclaredo-discard`
- **Lifecycle:** `removed`
- **Reason:** Operates from a verified website (https://www.laredofencebuilder.com/) but Maps listing is sparse. Listed candidates already cover the residential-segment niche adequately for launch; this entry is held as backup.

## Provider-correction workflow

Owner or authorized-representative corrections/removal/routing-change requests are received via `/provider-corrections/`. The form submits to the dashboard as `kind: provider_request` (NOT `form_submit`) — they are not customer leads and are never fanned out to providers.

Operator-side verification flow on a `provider_request`:
1. Receive request via dashboard inbox.
2. Verify requester identity against the current business contact evidence (Google Maps public listing, business's public website, or a phone call placed by the operator to a documented business line if needed).
3. If credible: pause public display and lead routing for the affected record while resolving; record the request, verification, action, and dates here in `PROVIDERS.md`.
4. If non-credible or competitor-abuse suspicion: confirm records unchanged; record the request in this file for audit and move on.

## Audit trail (chronological)

- **2026-07-31** — Initial verification pass on 8 candidate records (Fence World, Maverick Fence Co, JC Laredo Fence Builder, FortiCraft Laredo Fence Builders, Martinez Ranch Fencing, Laredo Fence Materials Inc, RS Torres Services, 3C Ranch Fencing, Ltd). 4 listed; 4 retained in `removed` for possible re-verification later.
- **2026-07-31** — Site configured for pre-tenant fan-out to the 4 listed providers.
- **n/a** — No tenant onboarded yet.
- **n/a** — No provider-correction request received yet.
