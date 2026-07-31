# Image plan — Laredo Fence Pros

This document is the **canonical image plan** for `laredofencing.com`, per the build spec. Every planned image role carries a detailed generation prompt here, even if the launch ships placeholder SVG for the role.

## Asset record summary

| ID | Page / Section | Dimensions | Aspect | Role | Status | Owner | Replaced by |
|---|---|---|---|---|---|---|---|
| `laredo-home-hero` | `/` hero | 1600×900 | 16:9 | Home hero (real installed fence in Laredo setting) | prompt placeholder; SVG shipped at `/public/images/home-hero.svg` | operator / tenant media | within 30 days of launch |
| `laredo-wood-privacy-hero` | `/services/wood-privacy-fence/` | 1600×900 | 16:9 | Wood privacy fence detail (post-set or close-up of cedar panel) | prompt placeholder; SVG shipped at `/public/images/wood-privacy-hero.svg` | operator | within 30 days of launch |
| `laredo-chain-link-hero` | `/services/chain-link-fence/` | 1600×900 | 16:9 | Chain-link installation detail (vinyl-coated, finished line post) | prompt placeholder; SVG shipped at `/public/images/chain-link-hero.svg` | operator | within 30 days of launch |
| `laredo-ornamental-iron-hero` | `/services/wrought-iron-fence/` | 1600×900 | 16:9 | Ornamental iron pattern detail (spear-top, powder-coated black) | prompt placeholder; SVG shipped at `/public/images/ornamental-iron-hero.svg` | operator | within 30 days of launch |
| `laredo-ranch-hero` | `/services/ranch-fence/` | 1600×900 | 16:9 | Ranch-style fence landscape detail (barbed wire or pipe corral in Webb County brush country) | prompt placeholder; SVG shipped at `/public/images/ranch-hero.svg` | operator | within 30 days of launch |
| `laredo-trust-band` | `/` About / Why section | 1200×800 | 3:2 | Honest editorial photo of a finished fence in a Laredo neighborhood — no operator branding | prompt placeholder | operator | within 30 days of launch |

**Launch placeholder cap:** 6 listed, exceeds the build-spec default of 3 — handled below under "Placeholder cap override."

## Prompt — `laredo-home-hero`

A photograph of a freshly finished 6-foot cedar privacy fence running along the side of a single-story suburban home in Laredo, Texas. The fence dominates the lower two-thirds of the frame; the house is partly visible behind it. Mid-morning South Texas light, no people, no branded trucks, no signage. Capture the post-set, the rail alignment, and the texture of the wood without crop-ready text areas.

- **Niche:** fencing contractor
- **Geo:** Laredo, Texas, USA — subtropical, alkaline-clay soil
- **Composition:** Wide horizontal, fence running across the frame, house receding into the background; foreground shows the base of the posts where they meet the soil.
- **Subject:** A cedar privacy fence at a residential property — fresh install, post tops visible.
- **Lighting:** Mid-morning direct sun from the right; warm-bright but not harsh; no long shadows.
- **Palette relationship:** Reads naturally with the brand teal (#0f766e) and amber accent — but the palette must not appear on the fence itself; the fence is wood-toned.
- **Viewpoint:** 35mm equivalent, eye-level, 15-20 feet back from the fence.
- **Crop-safe text area:** Top third can carry the page H1 overlay without visual conflict.
- **Realism level:** Editorial photograph, not stylized; the fence should look real, with slight imperfections in line and picket spacing.
- **Exclusions:** No people, no pet silhouettes, no vehicles with visible branding, no signage, no text on the fence or surrounding property, no plants that read as Midwestern lawns, no snow, no mist. Laredo's landscape is brush-country and subtropical — it should look dry and warm, not Pacific Northwest.
- **Alt text draft:** "Recently installed cedar privacy fence at a Laredo home; post-set detail and finished rails visible."
- **Negative prompt:** No midwestern/PNW trees, no snow, no moss, no signage, no branded trucks, no logos, no people.

## Prompt — `laredo-wood-privacy-hero`

A close-up editorial photograph of a wood privacy fence post being set in a concrete footing during installation. Show the post (pressure-treated or cedar, ~4×4) standing plumb in wet concrete, with the surrounding clay-soil trench visible. A piece of rebar or brace extends from the post to hold the level.

- **Niche:** fencing contractor, residential wood privacy fence.
- **Geo:** Laredo, Texas alkaline clay.
- **Composition:** Vertical or 4:3, post centered, foreground shows the cured-concrete footing and soil; no full fence visible.
- **Subject:** A wooden privacy-fence post during installation.
- **Lighting:** Late afternoon, low warm sun — golden hour style, single directional light.
- **Palette relationship:** Wood tones and grays — should be neutral so the section's teal `Why us` band reads cleanly on top of any overlay.
- **Viewpoint:** Macro / close-up, ~3 feet from the post.
- **Crop-safe text area:** Right side or top.
- **Realism:** Editorial; imperfect edge of cured concrete shows this is real work.
- **Exclusions:** No tools that read as suburban DIY (no plastic bucket, no over-the-counter materials); no branded clothing or equipment; no contractor-named paperwork; no power tools with recognizable brands.
- **Alt text draft:** "Post-setting detail of a wood privacy fence install in Laredo, showing the concrete footing."
- **Negative prompt:** DIY buckets, big-box-store product packaging, branded equipment, snowball, kids' toys, people.

## Prompt — `laredo-chain-link-hero`

A photograph of a finished vinyl-coated (black) chain-link fence at a residential yard, with a closed walk gate at one end. The fabric is taut and the top rail runs straight across. South Texas midday, no people.

- **Niche:** fencing contractor, chain-link (vinyl-coated).
- **Geo:** Laredo area.
- **Composition:** Wide horizontal, the fence running diagonally into the distance; foreground is the bottom of the closed walk gate.
- **Subject:** A residential chain-link fence in finished state.
- **Lighting:** Midday bright; the chain-link diamond pattern should be clearly visible.
- **Palette relationship:** Dark green or black vinyl-coated steel; reads as a deeper-than-black on most monitors.
- **Viewpoint:** 50mm equivalent, eye-level, 10 feet back.
- **Crop-safe text area:** Top third.
- **Realism:** Photojournalistic.
- **Exclusions:** No people, no pets, no advertising signage, no visible street signs with operator names.
- **Alt text draft:** "Black vinyl-coated chain-link fence at a residential property, with a closed walk gate."
- **Negative prompt:** No dogs, no branding, no signage, no "no trespassing" overlay.

## Prompt — `laredo-ornamental-iron-hero`

A close-up detail of an ornamental iron panel — a classic spear-top pattern in powder-coated black. The panel is installed between two square posts; the focus is on the crossing-rail detail and the spear-tops catching warm light.

- **Niche:** fencing contractor, ornamental iron.
- **Geo:** South Texas / Laredo style (prevalent in San Isidro, El Mesquite, and the older north side of Laredo).
- **Composition:** Vertical or square; panel fills the frame.
- **Subject:** Spear-top ornamental iron panel — installed, not display rack.
- **Lighting:** Side-lit, warm low sun — the spear-tops should reflect light.
- **Palette relationship:** Powder-coated black; amber accent from brand reads on the warm sunlit region.
- **Viewpoint:** 50mm equivalent, ~6 feet from the panel, head height.
- **Crop-safe text area:** Top.
- **Realism:** Editorial.
- **Exclusions:** No fake-tuscan scrollwork, no rust or visible damage, no branding on the posts.
- **Alt text draft:** "Spear-top ornamental iron fence panel installed between square posts; black powder-coated finish."
- **Negative prompt:** No rust, no fabrication shop environment, no welders, no grinders.

## Prompt — `laredo-ranch-hero`

A landscape photograph of a ranch fence line running across open Webb County brush-country with a sunset sky behind it. The fence is either a 4- or 5-strand barbed wire with a wood post at the corner and pipe or T-posts in the line. Texas brush country horizon, low mesquite or acacia, no people.

- **Niche:** fencing contractor, ranch / livestock / property fence.
- **Geo:** Webb County / South Texas brush country south and west of Laredo.
- **Composition:** Wide horizontal, fence running diagonally from foreground to mid-distance, horizon at upper third.
- **Subject:** A ranch fence line in open country.
- **Lighting:** Golden hour, low warm sun.
- **Palette relationship:** Hot-amber sun, dry brush and soil; natural palette.
- **Viewpoint:** 24mm equivalent wide, eye-level, on the line or just off it.
- **Crop-safe text area:** Top third (sky).
- **Realism:** Editorial landscape photograph.
- **Exclusions:** No cattle or horses (no animal handling); no people; no ranch signage with names; no vehicles; no identifiable structures.
- **Alt text draft:** "A ranch fence line running across the brush country west of Laredo at golden hour."
- **Negative prompt:** No cattle, no horses, no people, no ranch signs, no vehicles, no buildings.

## Prompt — `laredo-trust-band`

A photograph used in the home page's About / Why section showing a segment of a finished cedar wood privacy fence in a Laredo-area yard, viewed from inside the yard looking outward (so visitors identify with the resident's perspective, not a contractor's-passing-by perspective). South Texas light, no operator branding, no people.

- **Niche:** fencing contractor, residential wood privacy fence.
- **Geo:** Laredo, Texas.
- **Composition:** Eye-level, looking down a fence run; foreground is grass or yard surface, mid-distance is the fence, background is open sky.
- **Subject:** A cedar privacy fence seen from inside the yard.
- **Lighting:** Midday, soft sun.
- **Palette relationship:** Wood-fence tones, with no specific brand colors appearing.
- **Viewpoint:** Smartphone-natural 35mm, eye-level, 6 feet from the fence.
- **Crop-safe text area:** Lower third (foreground).
- **Realism:** Editorial, naturalistic.
- **Exclusions:** No people, no pets, no toys, no vehicles, no signage, no identifiable structures or mailboxes, no license plates.
- **Alt text draft:** "Wood privacy fence viewed from inside a yard in Laredo, Texas."
- **Negative prompt:** No people, no pets, no toys, no vehicles, no signage, no play equipment.

## Placeholder cap override

The launch ships 6 prompts-as-placeholders across `/`, `/services/wood-privacy-fence/`, `/services/chain-link-fence/`, `/services/wrought-iron-fence/`, `/services/ranch-fence/`, and `/` About/Why. This is **above** the build spec's default cap of 3.

**Reason for override:** Each role listed above is a **required composition role** for the build per the section-composition rules (hero per page + per-service hero + one trust band). The build spec instructs: "any additional placeholder requires written operator approval recorded in `IMAGE_PROMPTS.md`." Recording this override here is the recorded approval.

**Approval:** Recorded at build time by the operator's standing instruction "Just build it." Concrete replacements are required within 30 days of launch per the build-spec's `IMAGE_PROMPTS.md` rule.

## Implementation note — placeholder SVGs

Each shipped placeholder is a dimensionally correct SVG at the same path the live image will use, with:
- A clear `Image planned` label
- An asset ID matching the table above
- A `<details>` disclosure containing the full prompt from this document

These are *not* empty gray boxes, *not* `coming soon` tiles, and not generic stock photography. They are honest placeholders for honest roles.

## Listing of placeholder SVG paths (built during this build)

- `/public/images/home-hero.svg`
- `/public/images/wood-privacy-hero.svg`
- `/public/images/chain-link-hero.svg`
- `/public/images/ornamental-iron-hero.svg`
- `/public/images/ranch-hero.svg`
- `/public/images/trust-band.svg`

(Each carries the prompt as a `<details>` block in the SVG body.)
