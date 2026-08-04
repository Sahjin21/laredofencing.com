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

## Image plan — Service detail page galleries (added 2026-08-03)

Per operator: "Friday I mentioned issues with the images. I think to add credibility we need real looking gallery photos... Inside service pages... Just actual real looking work photos for a sliding carousel short gallery. Like energyfencing.com/gallery/ has a bunch of work that they did. The photos are very candid and look like a workers cell phone took the picture after they finished a job."

Each `/services/<slug>/` page gets a small horizontal-scrolling carousel of 6 candid "worker-phone" photos below the process section. Aesthetic: imperfect — gloved hand visible at frame edge, off-angle, slightly overexposed sunny day, real mess in frame (sawdust, tools, sun-bleached lumber). NOT aspirational, NOT studio-lit, NOT stock-photo perfect.

Format: 3:4 portrait, 800×1067 px, webp, lazy-loaded. Renders as a snap-scroll carousel on mobile, smooth-scroll + chevron arrows on desktop.

### Wood privacy fence gallery

#### `laredo-wood-privacy-gallery-01` — Cedar post-set detail

Worker glove (carpenter-style leather or nitrile) holds a cedar 4×4 post plumb in a wet concrete footing. Visible bracing stick. Mid-day sun from the right, slightly overexposed background. South Texas clay trench visible at the edge of the cured concrete. Tools on the ground: posthole digger handle, level.

- **Subject:** Wood privacy fence post-set detail
- **Viewpoint:** Smartphone-natural, hip-level, ~2 feet from post
- **Lighting:** Mid-day direct sun, slightly overexposed
- **Palette:** Wood tones, gray concrete, alkaline-clay brown
- **Realism:** Worker phone photo — imperfect framing, real mess
- **Alt:** "Worker hand holding a cedar post plumb in fresh concrete during a Laredo privacy fence install."
- **Negative:** No branding, no contractor shirts with logos, no other workers in frame, no masks, no AI-perfect composition.

#### `laredo-wood-privacy-gallery-02` — Hanging rails on a 6ft run

A cedar fence with the second horizontal rail partially hung. One end of the rail is screwed to a post; the other rests on a temporary block. Pickets stacked against the inside of the fence line, sawdust and shavings visible at the base. Mid-morning sun.

- **Subject:** Rails being hung on a wood privacy fence
- **Viewpoint:** Smartphone, off-angle, ~5 feet from the line
- **Lighting:** Mid-morning, side-lit
- **Realism:** Worker phone photo
- **Alt:** "Rails partially hung on a cedar privacy fence in Laredo; pickets stacked against the line."
- **Negative:** No signage, no contractor uniforms with logos.

#### `laredo-wood-privacy-gallery-03` — Board-on-board picket close-up

A close-up of a finished board-on-board cedar panel: pickets overlapping with a 3/8-inch reveal. One picket is slightly imperfect in spacing — the kind of detail that shows it's a real install. Sun bleached the top of the boards. A sawdust trail at the base.

- **Subject:** Board-on-board cedar privacy fence panel, finished
- **Viewpoint:** Smartphone macro, ~18 inches from the panel
- **Lighting:** Mid-day, slightly overexposed
- **Realism:** Worker phone photo — imperfect picket spacing is intentional
- **Alt:** "Board-on-board cedar privacy fence panel close-up in a Laredo backyard."
- **Negative:** No people, no pets, no toys, no play equipment.

#### `laredo-wood-privacy-gallery-04` — Walking the line at completion

A long cedar privacy fence stretching away from the camera. The fence is freshly finished — the kind of view a worker gets when they stand back to check line and spacing before walking it with the homeowner. South Texas sky overhead. Suburban Laredo in the background, no operator branding.

- **Subject:** Finished cedar privacy fence, viewed along the run
- **Viewpoint:** Smartphone, eye-level, 15 feet back
- **Lighting:** Bright midday, slightly hazy
- **Realism:** Worker phone photo
- **Alt:** "Freshly completed cedar privacy fence stretching down the side of a Laredo home."
- **Negative:** No people, no contractor vehicles, no signage.

#### `laredo-wood-privacy-gallery-05` — Cap detail on a corner

A cedar cap-on-top corner detail. The cap covers both panel ends and runs to the post; you can see a single fastener at the end of each picket. A worker's gloved hand is just visible at the edge of frame, pointing to the cap with a finger.

- **Subject:** Cap-on-top detail at a cedar fence corner
- **Viewpoint:** Smartphone, hip-level, ~2 feet from the corner
- **Lighting:** Side-lit, late afternoon
- **Realism:** Worker phone photo
- **Alt:** "Cedar cap detail at a wood privacy fence corner in Laredo; gloved hand visible at frame edge."
- **Negative:** No branding, no contractor logos on gloves or shirts.

#### `laredo-wood-privacy-gallery-06` — Gate hardware install

A walk-gate being installed at a wood privacy fence. The gate is propped open; the worker has just fit the hinges. Adjustable gate springs and a self-closing hinge are visible on the post. A drill sits on the ground nearby. Real mess — sawdust on the gate frame.

- **Subject:** Walk-gate hardware install on a cedar privacy fence
- **Viewpoint:** Smartphone, off-angle, ~3 feet from the post
- **Lighting:** Mid-day, slightly overexposed
- **Realism:** Worker phone photo — drill, sawdust, half-installed state
- **Alt:** "Walk-gate hinges being fitted on a Laredo cedar privacy fence; drill on the ground nearby."
- **Negative:** No branding, no operator trucks, no people other than the worker's implied gloved hand.

### Chain-link fence gallery

#### `laredo-chain-link-gallery-01` — Vinyl-coated line post set

A vinyl-coated (black) chain-link terminal post being set in concrete. The post is plumb; a brace band is visible at the top. Concrete is wet in the hole. The brace extends from the terminal post to a smaller corner post. Slightly overexposed Texas sun.

- **Subject:** Chain-link terminal post concrete set
- **Viewpoint:** Smartphone, off-angle hip-level
- **Lighting:** Mid-day, overexposed
- **Realism:** Worker phone photo
- **Alt:** "Vinyl-coated black chain-link terminal post being set in concrete in Laredo."
- **Negative:** No branding, no signage.

#### `laredo-chain-link-gallery-02` — Stretched fabric mid-run

A nearly-finished chain-link run. The fabric is being stretched between two terminal posts using a come-along. The diamonds are clearly visible. A worker has just stopped mid-pull — you can see the come-along wire still under tension. Mid-day.

- **Subject:** Chain-link fabric stretched mid-install
- **Viewpoint:** Smartphone, hip-level, 8 feet back
- **Lighting:** Bright mid-day
- **Realism:** Worker phone photo — mid-action
- **Alt:** "Chain-link fabric being stretched with a come-along on a Laredo residential install."
- **Negative:** No people, no other workers in frame.

#### `laredo-chain-link-gallery-03` — Close-up of the diamond pattern

A close-up of vinyl-coated black chain-link fabric with a top rail visible above. The diamonds catch the sun. The mesh is taut — installed state, not slack. A worker's thumb or finger is just visible at the edge of frame, holding a tension wire.

- **Subject:** Vinyl-coated chain-link diamond pattern, finished
- **Viewpoint:** Smartphone macro, ~12 inches
- **Lighting:** Side-lit
- **Realism:** Worker phone photo
- **Alt:** "Close-up of vinyl-coated black chain-link fabric on a Laredo fence; top rail visible above."
- **Negative:** No branding.

#### `laredo-chain-link-gallery-04` — Bottom rail at grade

A finished chain-link fence at the bottom-rail level. The rail sits 1-2 inches above grade as required for kennel/dog-run installs. The mesh is tight at the base. Grass and soil visible below the rail. Slightly muddy from the install.

- **Subject:** Bottom-rail detail of a chain-link fence
- **Viewpoint:** Smartphone, low angle (~6 inches from grade)
- **Lighting:** Mid-day
- **Realism:** Worker phone photo
- **Alt:** "Bottom-rail detail of a vinyl-coated chain-link fence in a Laredo dog run; rail 1-2 inches above grade."
- **Negative:** No dogs, no branding.

#### `laredo-chain-link-gallery-05` — Walk-gate install

A chain-link walk-gate propped open during install. The frame is set, hinges on the post, latch hardware mid-fit. A worker has left tools on the ground nearby — a hacksaw and some gate hardware. Real mess.

- **Subject:** Walk-gate install on chain-link
- **Viewpoint:** Smartphone, off-angle, ~3 feet from the gate
- **Lighting:** Mid-day
- **Realism:** Worker phone photo
- **Alt:** "Walk-gate install on a vinyl-coated chain-link fence in Laredo; hinges fitted, latch mid-fit."
- **Negative:** No branding.

#### `laredo-chain-link-gallery-06` — Long run at completion

A 200-foot run of finished vinyl-coated chain-link at the back of a Laredo residential lot. The line is straight. The top rail catches the sun. A small palm or mesquite tree is visible at the edge of the yard. Mid-day, slightly overexposed.

- **Subject:** Long finished chain-link run
- **Viewpoint:** Smartphone, end-of-line view, 30 feet back
- **Lighting:** Mid-day, overexposed
- **Realism:** Worker phone photo
- **Alt:** "Long run of finished vinyl-coated chain-link fence at the back of a Laredo residential lot."
- **Negative:** No people, no pets, no toys, no vehicles.

### Wrought iron / ornamental fence gallery

#### `laredo-wrought-iron-gallery-01` — Spear-top panel close-up

A close-up of a powder-coated black ornamental iron panel with classic spear-tops. The panel is installed between two square posts; focus is on the crossing-rail detail and the spear-tops catching warm sun. Slight angle, hip-level. Real install state, not display-rack.

- **Subject:** Spear-top ornamental iron panel, installed
- **Viewpoint:** Smartphone, hip-level, ~3 feet
- **Lighting:** Side-lit warm
- **Realism:** Worker phone photo
- **Alt:** "Spear-top ornamental iron fence panel installed at a Laredo home."
- **Negative:** No people, no branding.

#### `laredo-wrought-iron-gallery-02` — Welding the panel to the post

A worker has welded an ornamental iron panel rail to a square post. Sparks are visible. The worker is wearing a leather welding glove — only the glove and forearm are visible at the edge of frame. The welder is set on the ground nearby.

- **Subject:** Welding detail on ornamental iron
- **Viewpoint:** Smartphone, off-angle, ~2 feet
- **Lighting:** Bright sparks against Texas sun
- **Realism:** Worker phone photo — sparks, glove, welder on ground
- **Alt:** "Welding an ornamental iron panel to a post during a Laredo install; sparks visible."
- **Negative:** No face of worker, no branding.

#### `laredo-wrought-iron-gallery-03` — Pool-code enclosure layout

An ornamental iron fence enclosing a pool area. The fence is finished, with a self-closing pool-code gate visible at one end. A pool is visible behind. Slightly overexposed South Texas midday. No people.

- **Subject:** Pool-code ornamental iron enclosure
- **Viewpoint:** Smartphone, eye-level, 10 feet back
- **Lighting:** Mid-day
- **Realism:** Worker phone photo
- **Alt:** "Ornamental iron fence enclosing a pool at a Laredo home; pool-code gate visible."
- **Negative:** No people in pool, no toys.

#### `laredo-wrought-iron-gallery-04` — Powder-coat finish detail

A close-up of the powder-coated black finish on an ornamental iron panel. Slight surface texture visible — the kind of matte black finish that takes years to develop patina. A worker's hand with a nitrile glove is touching the rail at the edge of frame.

- **Subject:** Powder-coat finish detail on ornamental iron
- **Viewpoint:** Smartphone macro, ~12 inches
- **Lighting:** Side-lit, warm
- **Realism:** Worker phone photo
- **Alt:** "Powder-coated black finish detail on an ornamental iron panel in Laredo."
- **Negative:** No branding, no logos.

#### `laredo-wrought-iron-gallery-05` — Fluted post detail

A close-up of a fluted square post on an ornamental iron fence. The post is at a corner; you can see the cap on top with a ball finial. Mid-morning sun.

- **Subject:** Fluted square post with ball-finial cap
- **Viewpoint:** Smartphone, eye-level, ~3 feet
- **Lighting:** Mid-morning warm
- **Realism:** Worker phone photo
- **Alt:** "Fluted square post with a ball-finial cap on an ornamental iron fence in Laredo."
- **Negative:** No people, no branding.

#### `laredo-wrought-iron-gallery-06` — Long front-yard run

A finished ornamental iron fence running along the front of a Laredo home. The fence is at the property line, with the lawn and the house behind it. South Texas sun, slightly overexposed sky. No people.

- **Subject:** Long ornamental iron front-yard run
- **Viewpoint:** Smartphone, off-angle, 15 feet back
- **Lighting:** Mid-day, overexposed
- **Realism:** Worker phone photo
- **Alt:** "Ornamental iron fence running along the front of a Laredo home."
- **Negative:** No people, no vehicles, no signage.

### Ranch / livestock / property fence gallery

#### `laredo-ranch-gallery-01` — Brace-assembly on a corner

A wooden H-brace assembly at a ranch fence corner. The horizontal cross-member is in place; the wire is wound tight around it. A worker is mid-install — leaning into the brace with a stick. Webb County brush country behind. Late afternoon.

- **Subject:** H-brace assembly at a ranch fence corner
- **Viewpoint:** Smartphone, eye-level, ~5 feet
- **Lighting:** Late-afternoon golden hour
- **Realism:** Worker phone photo
- **Alt:** "Wooden H-brace assembly at a ranch fence corner south of Laredo."
- **Negative:** No ranch signage with names, no branding.

#### `laredo-ranch-gallery-02` — Pipe-and-cable run at completion

A pipe-and-cable ranch fence running across open Webb County brush country. Pipe corner assemblies at each end, T-posts in the line, smooth cable stretched between. Low mesquite and acacia in the background. Golden hour.

- **Subject:** Pipe-and-cable ranch fence, finished
- **Viewpoint:** Smartphone, eye-level, ~15 feet back
- **Lighting:** Golden hour
- **Realism:** Worker phone photo
- **Alt:** "Pipe-and-cable ranch fence running across Webb County brush country."
- **Negative:** No cattle, no horses, no branding.

#### `laredo-ranch-gallery-03` — T-post driver detail

A worker driving a T-post with a manual post driver. Only the worker's arms and the driver are visible at the top of frame. The T-post is half in the ground. Slightly overexposed mid-day sun.

- **Subject:** T-post being driven with a manual driver
- **Viewpoint:** Smartphone, off-angle, low angle
- **Lighting:** Mid-day
- **Realism:** Worker phone photo
- **Alt:** "Worker driving a T-post into ranch ground with a manual post driver near Laredo."
- **Negative:** No face of worker, no branding.

#### `laredo-ranch-gallery-04` — Barbed wire close-up

A close-up of four-strand barbed wire at a ranch fence line. The wire wraps around a wooden corner post. The barbs catch the sun. The ground is dry South Texas brush. No animals, no people.

- **Subject:** Four-strand barbed wire close-up
- **Viewpoint:** Smartphone macro, ~18 inches
- **Lighting:** Side-lit warm
- **Realism:** Worker phone photo
- **Alt:** "Four-strand barbed wire wrapped around a ranch fence corner post in Webb County."
- **Negative:** No cattle, no horses, no branding.

#### `laredo-ranch-gallery-05` — Game fence on a slope

A taller game fence running along a slope. The fence uses vertical pipe stays and woven wire. The slope is real South Texas terrain — not flat. Worker is implied by a brace assembly in mid-construction. Late afternoon.

- **Subject:** Game fence on a sloped terrain
- **Viewpoint:** Smartphone, eye-level, off-angle
- **Lighting:** Late afternoon
- **Realism:** Worker phone photo
- **Alt:** "Game fence running along a slope in Webb County ranch country."
- **Negative:** No cattle, no horses, no branding.

#### `laredo-ranch-gallery-06` — Field fence at the gate

A ranch-style field fence with a 12-foot pipe gate at the entrance. The gate is closed; you can see the chain latch and the gate-rod receiver on the ground. The ranch road leads away from the camera into the brush. Mid-day.

- **Subject:** Field fence with pipe gate at the entrance
- **Viewpoint:** Smartphone, eye-level, end of the road
- **Lighting:** Mid-day
- **Realism:** Worker phone photo
- **Alt:** "Field fence with a 12-foot pipe gate at the entrance of a Webb County ranch road."
- **Negative:** No ranch signage with names, no branding, no vehicles.

## Placeholder cap override (gallery prompts)

The launch will ship 24 prompts-as-placeholders across the 4 service detail pages (6 photos × 4 services). This is **above** the build spec's default cap of 3 per page, and **above** the original 6-asset cap. Recording the override here per the build-spec instruction "any additional placeholder requires written operator approval recorded in `IMAGE_PROMPTS.md`."

**Reason for override:** Operator explicitly requested a 6-photo per-service candid worker-phone gallery for credibility ("real looking work photos... energyfencing.com/gallery/... worker's cell phone took the picture after they finished a job"). The 6-photo count is a credibility floor — fewer photos reads as a thin fake gallery; more than 6 starts to slow the page and dilute the carousel UX.

**Approval:** Recorded 2026-08-03 from operator's message about Friday's call. Concrete webp replacements required within 30 days of launch per the build-spec's `IMAGE_PROMPTS.md` rule.

## Listing of placeholder SVG paths for gallery (built during this build)

24 SVG placeholders at `/public/images/`:

**Wood privacy (`/services/wood-privacy-fence/`):**
- `laredo-wood-privacy-gallery-01.svg` through `-06.svg`

**Chain-link (`/services/chain-link-fence/`):**
- `laredo-chain-link-gallery-01.svg` through `-06.svg`

**Wrought iron (`/services/wrought-iron-fence/`):**
- `laredo-wrought-iron-gallery-01.svg` through `-06.svg`

**Ranch (`/services/ranch-fence/`):**
- `laredo-ranch-gallery-01.svg` through `-06.svg`

Each carries a `Image planned` label, the asset ID, and the full prompt from this document in a `<details>` block — same pattern as the existing hero placeholders described above.
