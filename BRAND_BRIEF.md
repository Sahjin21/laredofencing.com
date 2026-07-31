# Brand brief: Laredo Fence Pros

## Selected name

**Laredo Fence Pros**

The visible consumer-facing brand name for `laredofencing.com`. The site is operated by **Kurtz & Boon LLC** as a lead-generation brand — the name identifies the site itself, not the actual contractors who perform the work. The 4 providers listed in `PROVIDERS.md` are independent local fencing businesses whose real names appear on every lead-routing form and phone CTA.

## Rationale

- **Two to four short, pronounceable words.** "Laredo Fence Pros" is four syllables (La-re-do Fence Pros), no unusual sounds, no acronyms.
- **City-forward + service-forward.** Both the city ("Laredo") and the service category ("Fence") appear in the name. Combined with "Pros" it reads as the kind of local-services brand a homeowner would trust, and matches how people search ("fence company Laredo", "Laredo fence installation").
- **Broad enough to cover all services.** Wood privacy, chain-link, wrought iron, and ranch/property fencing are all within the name's reach — no future service addition would force a rename.
- **No superiority or scale claims.** "Pros" is colloquial shorthand for "experienced people in their field" rather than "the best," "the largest," or "licensed." The owner's `PROVIDERS.md` records every credential verification; nothing in the brand name asserts more than that.
- **Domain already implies the niche.** `laredofencing.com` is keyword-forward; the visible brand need not duplicate that signal. "Laredo Fence Pros" pairs a memorable read with the domain's keyword foundation.

## Considered alternatives (not selected)

1. **Brushland Fence Co.** — local-flavor brand, references the brush country south and west of Laredo. Rejected because (a) "Brushland" is unfamiliar enough to lose organic-search match against the city name in casual recall, (b) it works on the assumption a visitor already knows the geography, and (c) the ranch-service subset of the brand is narrower than the site's four-service scope.

2. **Rio Fence Works** — geographic anchor on the Rio Grande. Rejected because (a) "Rio" + a Texas/Cities-of-Laredo reference can be misread as a CDB/Texas-DOT/government-entity signal (Rio Grande Valley Council of Governments, Rio Grande International Study, etc.), (b) the brand needs to stand alone in conversations where the city isn't mentioned ("I have to call Rio Fence Works for a quote"), and (c) a closer reading of the brand-naming rule in the build spec explicitly warns against names that "sound like a ranking list or government/nonprofit program."

## Conflict screening performed

- **Web search (sahjin):** No competing local-services business called "Laredo Fence Pros" surfaces in organic results as of 2026-07-31. The terms "Laredo Fence" appears in multiple unrelated Laredo-area listings (Fence World, Maverick Fence Co, 3C Ranch Fencing, JC Laredo Fence Builder, FortiCraft Laredo Fence Builders, etc.) but no business uses the combination "Laredo Fence Pros."
- **State business registry:** Not performed in this build — would be a manual operator task at launch to confirm no active Texas filing uses the name.
- **Domain:** `laredofencing.com` is registered to the operator and resolves to the same brand.
- **Trademark:** Not performed — this is screening only. The build spec explicitly notes "this is screening, not legal trademark clearance." A real trademark pull would be an operator-side task at launch; the build spec forbids the builder from making a trademark claim.

## Visual / voice foundation

- **Palette:** Teal primary `#0f766e`, amber accent `#f59e0b` — set in `src/lib/config.ts`. Not changed for this build.
- **Type:** Tailwind defaults (Inter / system-ui). Bold, friendly. Not changed.
- **Tone:** Informed neighbor who happens to be the expert. No "we are the best," no sales pressure, no false urgency. No "Beto's Fence Emporium" cartoon direction.
- **Optional disclosure:** The site is operated by Kurtz & Boon LLC. The single disclosure sentence lives in the About section of the home page; it does not repeat in nav, footer, FAQ, or service pages.

## Brand in copy

The brand appears in:
- Page titles (`<title>` and H1) on every page
- The Header banner and Footer name
- The Open Graph `site_name` and Twitter card
- The visible provider-sharing copy on the lead form
- Internal schema (`schema.org` `name` field on the Organization block, not a business-listing block, because the brand is a lead generator not the operator)

The brand does NOT appear:
- Inside phone CTAs (which use the real provider name and real provider number)
- Inside the provider-list section of the home page (which lists providers by their actual business names)
- Inside FAQ answers
- Inside service-page body copy when describing the work being done
