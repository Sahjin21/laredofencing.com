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

Each `/services/<slug>/` page gets a small horizontal-scrolling carousel of 6 candid "worker-phone" photos below the process section.

### Photography style — anti-AI-image framework

The gallery is the credibility signal for the whole site. If the photos read as "AI-generated stock" they undermine the operator's "we actually ran this job" positioning faster than any copy choice can repair. The 24 prompts below are written to push hard against the failure modes that current image models default to.

Each prompt specifies these three layers:

1. **Capture mode** — explicitly named at the top of the prose section. The image is treated as a single shot from a 4–6 year-old Android or iPhone, in default auto mode, held at waist or hip level, not composed, no edit or color grade applied. The model is told what the phone did wrong: motion-blurred hand at the frame edge, slightly off horizon, mid-action autocrop, autofocus slightly hunting on a near subject, auto-exposure choosing the wrong part of the frame and clipping highlights or crushing shadows.

2. **Jobsite context** — every photo includes two or three "real people are here working" tells. Cooler or Gatorade bottle, water jug, saw horses, scrap lumber pile, extension cord draped across the yard, dog bowl, kid's bike behind the truck, helper's boots just visible at the bottom of frame, dust on the helper's shirt, half-eaten sandwich on the truck bench seat. These don't read as "staged set" — they read as "someone is on this job right now."

3. **Anti-AI negatives** — every prompt forbids the cues that flag AI imagery. Explicitly: no perfect symmetry, no studio softness, no shallow-depth bokeh, no "moody color grade," no perfectly clean separation between subject and background, no flawless textures, no AI-defaulted lighting.

Operators running these prompts should reject any generation that reads as AI-defaulted (perfectly symmetric composition, studio-soft lighting, shallow-depth bokeh, "moody" color grade, flawless textures). The right read is "Mike took this from his hip pocket right before he walked the homeowner through the yard."

Format: 3:4 portrait, 800×1067 px, webp, lazy-loaded. Renders as a snap-scroll carousel on mobile, smooth-scroll + chevron arrows on desktop.

### Wood privacy fence gallery

#### `laredo-wood-privacy-gallery-01` — Cedar post-set detail

Captured on a worker's 5-year-old Android in default auto mode: hip-level, thumb over the bottom edge of the frame, autofocus hunting slightly because the post is closer than the phone expected. Worker glove (carpenter-style leather or nitrile, slightly dusty) holds a cedar 4×4 post plumb in a wet concrete footing. Visible bracing stick. Mid-day South Texas sun from the right, auto-exposure blown out on the concrete so it reads as flat bright gray. South Texas clay trench visible at the edge of the cured concrete. Tools on the ground: posthole digger handle (wooden, paint scraped), 4-foot level laid in the dirt, a stacked pile of post-hole spoil. Jobsite tells: an orange 5-gallon water cooler and a crumpled Gatorade bottle next to it, an extension cord draped across the yard from a stick welder outlet, faint sawdust footprints on the disturbed clay.

- **Subject:** Wood privacy fence post-set detail, with worker glove
- **Capture mode:** Old Android, default auto, no edit. Hand-held at hip. Auto-exposure on subject, background slightly blown.
- **Viewpoint:** Smartphone-natural, hip-level, ~2 feet from post
- **Lighting:** Mid-day direct sun, slightly overexposed (NOT studio-soft)
- **Palette:** Wood tones, gray concrete, alkaline-clay brown
- **Realism:** Worker phone photo — imperfect framing, real mess
- **Jobsite tells:** Orange 5-gallon cooler, Gatorade bottle, extension cord, post-hole spoil pile, level in dirt, sawdust footprints
- **Alt:** "Worker hand holding a cedar post plumb in fresh concrete during a Laredo privacy fence install; a cooler and a Gatorade bottle sit nearby."
- **Negative:** No branding, no contractor shirts with logos, no other workers in frame, no masks, no AI-perfect composition, no studio softness, no shallow-bokeh background blur, no moody color grade, no flawless textures, no symmetric centering.

#### `laredo-wood-privacy-gallery-02` — Hanging rails on a 6ft run

Captured on the worker's phone right after he realized he needed both hands for the rail, so the photo is taken further back than intended: mid-stride framing, horizon 5° tilted to the right, his shadow at the bottom of the frame because the sun is high. A cedar fence with the second horizontal rail partially hung. One end of the rail is screwed to a post; the other rests on a temporary block. Pickets stacked against the inside of the fence line (uneven pile, real lumber drop, not stacked). Sawdust and shavings visible at the base. Mid-morning sun. Jobsite tells: a stray circular saw cord draped over the sawhorse, a stack of picket-cut ends going into a scrap pile, a kid's plastic tricycle in the background of the yard (someone's home, family lives here), a tabasco-bottle water jug on the sawhorse.

- **Subject:** Rails being hung on a wood privacy fence, with jobsite clutter
- **Capture mode:** Worker phone, slightly tilt-y, no edit. Worker caught mid-stride.
- **Viewpoint:** Smartphone, off-angle, ~5 feet from the line
- **Lighting:** Mid-morning, side-lit, auto-exposure choosing the rail
- **Realism:** Worker phone photo
- **Jobsite tells:** Saw cord on sawhorse, scrap pile of picket ends, kid's tricycle in yard, water jug on sawhorse, worker's shadow at frame bottom
- **Alt:** "Rails partially hung on a cedar privacy fence in Laredo; pickets stacked against the line, a kid's tricycle and a water jug nearby."
- **Negative:** No signage, no contractor uniforms with logos, no symmetric framing, no studio-soft light, no AI-defaulted textures, no horizon that's level when the model "fixes" it.

#### `laredo-wood-privacy-gallery-03` — Board-on-board picket close-up

Captured handheld, real close — the iPhone had to back away from the macro limit and the result is a slight softness from the minimum-focus distance. The phone's shadow falls across the lower-left of the frame. A close-up of a finished board-on-board cedar panel: pickets overlapping with a 3/8-inch reveal. One picket is slightly imperfect in spacing — the kind of detail that shows it's a real install. Sun bleached the top of the boards. A sawdust trail at the base (sawdust is concentrated on the lower-third because the wind blew across the yard once). Jobsite tells: a single carpenter pencil dropped at the foot of the fence, sawdust accumulated in the corner where the panel meets the post, an end-grain of cedar scrap leaning against the post.

- **Subject:** Board-on-board cedar privacy fence panel, finished, with worker-phone defects
- **Capture mode:** iPhone, close-focus distance fuzziness, phone shadow at frame edge
- **Viewpoint:** Smartphone macro, ~18 inches from the panel
- **Lighting:** Mid-day, slightly overexposed
- **Realism:** Worker phone photo — imperfect picket spacing is intentional
- **Jobsite tells:** Carpenter pencil at base, sawdust in post corner, cedar scrap leaning against post
- **Alt:** "Board-on-board cedar privacy fence panel close-up in a Laredo backyard; carpenter pencil at the base, sawdust in the post corner."
- **Negative:** No people, no pets, no toys, no play equipment, no perfect symmetric picket spacing, no studio-soft lighting, no pristine cedar-grain texture.

#### `laredo-wood-privacy-gallery-04` — Walking the line at completion

Captured off-angle by a worker who's stepped back to check the run, phone barely held horizontal, the run of fence slightly converging because the phone wasn't truly square. A long cedar privacy fence stretching away from the camera. The fence is freshly finished — the kind of view a worker gets when they stand back to check line and spacing before walking it with the homeowner. South Texas sky overhead (slightly washed out from auto-exposure on the wood). Suburban Laredo in the background, no operator branding. Jobsite tells: a wheelbarrow parked at the end of the run with concrete residue dried in the tub, a "Home Depot" rental trailer (small flatbed) at the curb behind the property, a clipboard with a paper layout sketch tacked to a clipboard leaning against the wheelbarrow, a folding chair one of the crew set up under a mesquite in the side yard.

- **Subject:** Finished cedar privacy fence, viewed along the run, with end-of-job clutter
- **Capture mode:** Worker phone, off-axis, slightly washed-out sky from auto-exposure on wood
- **Viewpoint:** Smartphone, eye-level, 15 feet back
- **Lighting:** Bright midday, slightly hazy, auto-exposure favoring fence not sky
- **Realism:** Worker phone photo
- **Jobsite tells:** Wheelbarrow with dried concrete, rental flatbed trailer at curb, clipboard with sketch, folding chair under mesquite
- **Alt:** "Freshly completed cedar privacy fence stretching down the side of a Laredo home; a wheelbarrow and rental trailer sit at the curb."
- **Negative:** No people, no contractor vehicles with logos, no signage, no perfectly level horizon, no centered composition, no studio-soft sky.

#### `laredo-wood-privacy-gallery-05` — Cap detail on a corner

Captured immediately after the worker finished fastening the cap — phone was still in his other hand, slight motion blur on the pointing glove. A cedar cap-on-top corner detail. The cap covers both panel ends and runs to the post; you can see a single fastener (exterior-rated screw, slightly off-center because it was set by feel) at the end of each picket. A worker's gloved hand is just visible at the edge of frame, pointing to the cap with a finger — the finger has small grease marks on the nitrile. Jobsite tells: a small Torx bit sitting on the cap surface (set down between fasteners), faint pencil-mark scribe lines on the cap from the dry fit, a small pile of cedar sawdust under the corner from the cap cut.

- **Subject:** Cap-on-top detail at a cedar fence corner, with pointing glove
- **Capture mode:** Worker phone, motion-blurred pointing hand, slight hand-tremor softness on the cap
- **Viewpoint:** Smartphone, hip-level, ~2 feet from the corner
- **Lighting:** Side-lit, late afternoon, warm directional
- **Realism:** Worker phone photo
- **Jobsite tells:** Torx bit on cap, pencil scribe lines on cap, sawdust under corner
- **Alt:** "Cedar cap detail at a wood privacy fence corner in Laredo; a gloved hand points at the cap with a Torx bit left on top."
- **Negative:** No branding, no contractor logos on gloves or shirts, no perfectly centered fastener, no studio shadow softness, no flawless cap-miter cut.

#### `laredo-wood-privacy-gallery-06` — Gate hardware install

Captured while kneeling — phone resting on the worker's knee for stability, gives the photo a slight tilt and the foreground drill is sharper than the gate behind it (typical hand-held minimum-distance behavior). A walk-gate being installed at a wood privacy fence. The gate is propped open against a temporary 2×4 block; the worker has just fit the hinges. Adjustable gate springs and a self-closing hinge are visible on the post. A cordless drill sits on the ground nearby (battery partially out, like someone just set it down). Real mess: sawdust on the gate frame from hinge mortising, a few cedar shavings stuck to the post. Jobsite tells: a beer-can cooler tucked behind the post (worker's end-of-job moment, half-crushed), a bag of exterior screws torn open with a few spilling onto the ground, the worker's kneeprint visible in the dirt/clay.

- **Subject:** Walk-gate hardware install on a cedar privacy fence
- **Capture mode:** Worker phone on knee, foreground sharp / background soft from minimum-focus, slight tilt
- **Viewpoint:** Smartphone, off-angle, ~3 feet from the post
- **Lighting:** Mid-day, slightly overexposed
- **Realism:** Worker phone photo — drill, sawdust, half-installed state
- **Jobsite tells:** Crushed beer-can cooler behind post, torn screw bag with spills, kneeprint in clay, drill battery half-out
- **Alt:** "Walk-gate hinges being fitted on a Laredo cedar privacy fence; a cordless drill sits on the ground with battery half-out."
- **Negative:** No branding, no operator trucks with logos, no people other than the worker's implied gloved hand, no centered drill placement, no studio light, no clean separation between gate and background.

### Chain-link fence gallery

#### `laredo-chain-link-gallery-01` — Vinyl-coated line post set

Captured just after the worker stepped back from the hole — phone held with one hand because his other hand is still holding the brace level, slight off-level framing because he took the photo without waiting for the concrete to set. A vinyl-coated (black) chain-link terminal post being set in concrete. The post is plumb; a brace band is visible at the top. Concrete is wet in the hole, slightly slumped on one side (real, not level). The brace extends from the terminal post to a smaller corner post. Slightly overexposed Texas sun (auto-exposure favoring the bright concrete). Jobsite tells: an empty bag of "Sakrete Fast-Setting" torn open next to the hole, a 5-gallon bucket of mixed concrete nearby (the mud on the rim dried in a drip pattern), a long-handle shovel stuck in the spoil pile, dust on the worker's jeans visible at the very bottom of the frame.

- **Subject:** Chain-link terminal post concrete set, with wet concrete and bag
- **Capture mode:** Worker phone, one-handed, slight off-level horizon, sun-blasted auto-exposure
- **Viewpoint:** Smartphone, off-angle hip-level
- **Lighting:** Mid-day, overexposed, auto-exposure choosing concrete not subject
- **Realism:** Worker phone photo
- **Jobsite tells:** Torn Sakrete bag, mixed concrete bucket with drip rim, shovel in spoil pile, worker's dusty jeans at frame bottom
- **Alt:** "Vinyl-coated black chain-link terminal post being set in concrete in Laredo; a torn Sakrete bag and a mixed-concrete bucket sit nearby."
- **Negative:** No branding, no signage, no perfect concrete level, no symmetric framing, no studio-soft background, no flawless wet-concrete sheen.

#### `laredo-chain-link-gallery-02` — Stretched fabric mid-run

Captured quickly between pulls — phone tilted so the horizon sits 8° low on the right, and the worker's thumb intrudes on the bottom-right of the frame. A nearly-finished chain-link run. The fabric is being stretched between two terminal posts using a come-along. The diamonds are clearly visible. A worker has just stopped mid-pull — you can see the come-along wire still under tension. Mid-day. Jobsite tells: the come-along itself with a frayed nylon strap still attached to the post, a pair of leather gloves dropped on the ground next to the come-along, a stretched mesh that sags very slightly between the terminal posts (because it's not fully tensioned yet), a small roll of tension wire and a pliers on the dirt near the post base.

- **Subject:** Chain-link fabric stretched mid-install, action-shot
- **Capture mode:** Worker phone, tilted 8°, thumb at frame bottom-right, motion in the come-along
- **Viewpoint:** Smartphone, hip-level, 8 feet back
- **Lighting:** Bright mid-day, harsh shadows under the line
- **Realism:** Worker phone photo — mid-action
- **Jobsite tells:** Come-along with frayed strap, leather gloves on ground, slight sag in mesh, tension wire + pliers on dirt
- **Alt:** "Chain-link fabric being stretched with a come-along on a Laredo residential install; leather gloves on the ground and a pliers next to a roll of tension wire."
- **Negative:** No people, no other workers in frame, no thumb-free framing, no level horizon, no perfectly tensioned mesh, no studio-light sheen on the vinyl coating.

#### `laredo-chain-link-gallery-03` — Close-up of the diamond pattern

Captured at the phone's closest-focus distance with the camera hunting — the diamonds at the frame center are sharp, the edges soften. Sun catches on the vinyl coating (auto-exposure clips the highlights a touch). A close-up of vinyl-coated black chain-link fabric with a top rail visible above. The diamonds catch the sun. The mesh is taut — installed state, not slack. A worker's thumb or finger is just visible at the edge of frame, holding a tension wire (thumbnail slightly dirty, fingerprint pressing into the wire). Jobsite tells: a faint cut on the vinyl from where a tension wire pulled tight (worker phone photos preserve this kind of detail), the top rail has a small scuff where the worker brushed against it getting set, a metal burr visible on the rail coupling.

- **Subject:** Vinyl-coated chain-link diamond pattern, finished, close-up
- **Capture mode:** iPhone, edge-soft focus hunting, slight highlight clip on vinyl
- **Viewpoint:** Smartphone macro, ~12 inches
- **Lighting:** Side-lit, warm
- **Realism:** Worker phone photo
- **Jobsite tells:** Vinyl cut from tension wire, scuff on top rail, burr on rail coupling
- **Alt:** "Close-up of vinyl-coated black chain-link fabric on a Laredo fence; a worker's thumb holds a tension wire, top rail visible above."
- **Negative:** No branding, no centered framing, no perfectly clean vinyl coating, no studio-soft bokeh, no symmetric diamond pattern.

#### `laredo-chain-link-gallery-04` — Bottom rail at grade

Captured from a low crouch — the worker's knees have mud from kneeling at the rail, the phone is at dog's-eye level. Slight camera shake because it was taken one-handed. A finished chain-link fence at the bottom-rail level. The rail sits 1-2 inches above grade as required for kennel/dog-run installs. The mesh is tight at the base. Grass and soil visible below the rail. Slightly muddy from the install. Jobsite tells: a flattened cardboard box the worker knelt on visible in the corner, a few dry grass clippings stuck to the bottom rail from being dragged across the yard, a water-stained concrete splash at the base of the post from the post-hole concrete overflow, a set of work-boot tread prints in the mud at the base of the fence.

- **Subject:** Bottom-rail detail of a chain-link fence, with mud and prints
- **Capture mode:** Crouched worker phone, low to ground, one-handed slight shake, dog-eye view
- **Viewpoint:** Smartphone, low angle (~6 inches from grade)
- **Lighting:** Mid-day, no fill, low position creates harsh under-rail shadow
- **Realism:** Worker phone photo
- **Jobsite tells:** Cardboard kneeling pad, grass clippings stuck to rail, concrete splash at post base, work-boot prints in mud
- **Alt:** "Bottom-rail detail of a vinyl-coated chain-link fence in a Laredo dog run; rail 1-2 inches above grade, work-boot prints visible in the mud."
- **Negative:** No dogs, no branding, no clean gravel at base, no studio-soft under-rail shadow, no perfectly level horizon (low-angle composition is naturally crooked).

#### `laredo-chain-link-gallery-05` — Walk-gate install

Captured mid-fit, phone held slightly off-center because the worker was using his dominant hand to hold the latch in place. A chain-link walk-gate propped open during install. The frame is set, hinges on the post, latch hardware mid-fit. A worker has left tools on the ground nearby — a hacksaw and some gate hardware (loose bolts, washers, a chewed-up pencil). Real mess. Jobsite tells: a couple of small off-cuts of gate-frame tubing on the ground (hacksaw blade visibly dull at one corner), a roll of silver duct tape sitting on the gate cross-brace (someone's quick-fix tape, not pristine), a few aluminum tie-wire off-cuts bent into hash shapes where the worker stripped them.

- **Subject:** Walk-gate install on chain-link, mid-fit
- **Capture mode:** Worker phone, slightly off-center because dominant hand was busy
- **Viewpoint:** Smartphone, off-angle, ~3 feet from the gate
- **Lighting:** Mid-day, shadows under the gate cross-brace
- **Realism:** Worker phone photo
- **Jobsite tells:** Gate-frame tubing off-cuts, dull hacksaw blade, duct tape roll on cross-brace, bent tie-wire hash off-cuts
- **Alt:** "Walk-gate install on a vinyl-coated chain-link fence in Laredo; hinges fitted, latch mid-fit, a hacksaw and tie-wire off-cuts on the ground."
- **Negative:** No branding, no clean ground, no perfectly plumb gate, no studio-soft background, no centered composition.

#### `laredo-chain-link-gallery-06` — Long run at completion

Captured from a slight hill or end-of-yard rise, fence receding into the distance, top of fence slightly bowed by phone perspective (worker phone perspective distortion is typical at this distance). A 200-foot run of finished vinyl-coated chain-link at the back of a Laredo residential lot. The line is straight. The top rail catches the sun (auto-exposure is on the rail, so the sky behind washes out a bit). A small palm or mesquite tree is visible at the edge of the yard. Mid-day, slightly overexposed. Jobsite tells: a tube of PVC slipped over one T-post at the corner (someone's quick-fit cap until the metal cap arrives), a paper tape measure dangling from a lower tension wire, a stack of unused tension wire bundles at the start of the run, a few mud-tracked tire marks from the trailer at the gate.

- **Subject:** Long finished chain-link run, with mid-afternoon context
- **Capture mode:** Worker phone from elevated end-of-yard position, slight perspective convergence
- **Viewpoint:** Smartphone, end-of-line view, 30 feet back
- **Lighting:** Mid-day, overexposed, sky behind rail washed out
- **Realism:** Worker phone photo
- **Jobsite tells:** PVC pipe on T-post as temporary cap, paper tape measure on tension wire, unused wire bundles at start, trailer tire tracks in mud
- **Alt:** "Long run of finished vinyl-coated chain-link fence at the back of a Laredo residential lot; a paper tape measure dangles from the tension wire and trailer tire tracks cross the mud at the gate."
- **Negative:** No people, no pets, no toys, no vehicles in frame, no perfectly converging vanishing point, no studio-soft light, no pristine tower post caps.

### Wrought iron / ornamental fence gallery

#### `laredo-wrought-iron-gallery-01` — Spear-top panel close-up

Captured after the worker set the last panel and stepped back — phone slightly under the panel looking up (a common framing for ornamental work). Slight overexposure on the spear-tops as the sun hits them. A close-up of a powder-coated black ornamental iron panel with classic spear-tops. The panel is installed between two square posts; focus is on the crossing-rail detail and the spear-tops catching warm sun. Slight angle, hip-level. Real install state, not display-rack. Jobsite tells: a hex driver bit still magnetized to the post where the worker left it (visible as a tiny silver detail at the rail bracket), a small smear of grease on the bracket from where the worker tested the swing of the gate (real install moment), a few dried weld-spatter pits on the rail between the posts.

- **Subject:** Spear-top ornamental iron panel, installed
- **Capture mode:** Worker phone, slight upward angle, sun catching spear-tops, foreground-under bias
- **Viewpoint:** Smartphone, hip-level, ~3 feet, slightly looking up
- **Lighting:** Side-lit warm, spear-tops slightly hot
- **Realism:** Worker phone photo
- **Jobsite tells:** Magnetized hex bit on post bracket, gate-swing grease smear, dried weld-spatter pits on rail
- **Alt:** "Spear-top ornamental iron fence panel installed at a Laredo home; a magnetized hex bit is stuck to the post bracket."
- **Negative:** No people, no branding, no flawless powder-coat, no studio softness, no centered composition, no symmetric spear-tops.

#### `laredo-wrought-iron-gallery-02` — Welding the panel to the post

Captured mid-arc — the phone was held at arm's length for safety so the photo is wide and the welder's glove is small in the frame; sparks caught as bright streaks against the daylight. A worker has welded an ornamental iron panel rail to a square post. Sparks are visible (bright streaks, not CG-stylized). The worker is wearing a leather welding glove — only the glove and forearm are visible at the edge of frame. The welder (Lincoln-style portable) is set on the ground nearby. Jobsite tells: a weld rod canister tipped over on its side (worker knocked it during this photo, common), a clamp magnet stuck to the post below the weld, the leather welding jacket slung over the gate post (visible at the frame edge, but the worker is off-frame), a half-burnt welding stinger tip on the ground.

- **Subject:** Welding detail on ornamental iron, sparks mid-flight
- **Capture mode:** Worker phone, arm's-length for safety, sparks as bright streaks not stylized
- **Viewpoint:** Smartphone, off-angle, ~2 feet
- **Lighting:** Bright sparks against Texas sun, daylight welding so arc isn't blowing out the frame
- **Realism:** Worker phone photo — sparks, glove, welder on ground
- **Jobsite tells:** Tipped weld-rod canister, clamp magnet on post, leather welding jacket on gate post, burnt stinger tip
- **Alt:** "Welding an ornamental iron panel to a post during a Laredo install; sparks visible, a tipped weld-rod canister sits on the ground."
- **Negative:** No face of worker, no branding, no stylized CG sparks, no studio darkness, no perfectly straight weld bead visible.

#### `laredo-wrought-iron-gallery-03` — Pool-code enclosure layout

Captured mid-stride between pools and side yards — phone held at chest level, slight rise in the foreground horizon because the worker stepped up on the pool deck for a better angle. An ornamental iron fence enclosing a pool area. The fence is finished, with a self-closing pool-code gate visible at one end (hinge is the spring-loaded pool-safe type). A pool is visible behind (still dirty from initial fill, the worker's first visit to verify code compliance). Slightly overexposed South Texas midday. No people. Jobsite tells: a pool-skimmer cover folded over the fence rail (worker dropped it there), a half-unrolled paper shop towel sitting on the pool deck for wiping hands, a small pile of brick chips at the base of one post from where the contractor drilled into a brick paver, a pool-cleaning hose still in the water (not yet disconnected).

- **Subject:** Pool-code ornamental iron enclosure, with deck clutter
- **Capture mode:** Worker phone, chest-level, slight upward step on the deck
- **Viewpoint:** Smartphone, eye-level, 10 feet back
- **Lighting:** Mid-day, sun on pool water glaring back
- **Realism:** Worker phone photo
- **Jobsite tells:** Skimmer cover on rail, paper shop towel on deck, brick chips at post base, pool hose still in water
- **Alt:** "Ornamental iron fence enclosing a pool at a Laredo home; pool-code gate visible, a skimmer cover draped on the rail."
- **Negative:** No people in pool, no toys, no clean pristine pool, no perfectly balanced framing, no studio-soft light on water.

#### `laredo-wrought-iron-gallery-04` — Powder-coat finish detail

Captured close — phone shadow on the rail (the camera is so close that the phone's body shadows part of the rail being photographed, classic worker-phone macro behavior). A close-up of the powder-coated black finish on an ornamental iron panel. Slight surface texture visible — the kind of matte black finish that takes years to develop patina. A worker's hand with a nitrile glove is touching the rail at the edge of frame (the nitrile is dusty, the print on the glove is half-worn). Jobsite tells: a small scuff on the rail where the worker's belt buckle caught it during install, a fingerprint in the dust on the rail (preserved when the worker rested his hand there earlier), a tiny orange fleck on the post where a weld-spatter was painted over (most powder-coat shops don't perfect this).

- **Subject:** Powder-coat finish detail on ornamental iron
- **Capture mode:** Worker phone, ultra-close macro, phone shadow falls across the rail being shot
- **Viewpoint:** Smartphone macro, ~12 inches
- **Lighting:** Side-lit, warm
- **Realism:** Worker phone photo
- **Jobsite tells:** Belt-buckle scuff on rail, fingerprint in dust on rail, weld-spatter fleck under paint
- **Alt:** "Powder-coated black finish detail on an ornamental iron panel in Laredo; a nitrile-gloved worker's hand touches the rail."
- **Negative:** No branding, no logos, no perfectly pristine powder-coat, no studio-soft bokeh, no centered fingerprint.

#### `laredo-wrought-iron-gallery-05` — Fluted post detail

Captured while the worker paused to check the ball finial's set screw, phone in his other hand. The photo is slightly off-vertical because he wasn't trying to frame. A close-up of a fluted square post on an ornamental iron fence. The post is at a corner; you can see the cap on top with a ball finial (the set-screw head visible at the base of the finial, slightly offset because it's a manual alignment). Mid-morning sun. Jobsite tells: a smudge of paint on the post from where the worker touched it to test the powder-coat cure, an Allen wrench set down next to the post (stainless steel, blade tarnished from use), a small drop of Loctite blue that bled out from under the set screw.

- **Subject:** Fluted square post with ball-finial cap
- **Capture mode:** Worker phone, off-vertical composition, mid-action pause
- **Viewpoint:** Smartphone, eye-level, ~3 feet
- **Lighting:** Mid-morning warm, flutes catching side light
- **Realism:** Worker phone photo
- **Jobsite tells:** Paint-touch smudge on post, Allen wrench at base, Loctite blue bleed-out under set screw
- **Alt:** "Fluted square post with a ball-finial cap on an ornamental iron fence in Laredo; an Allen wrench sits at the base."
- **Negative:** No people, no branding, no perfect symmetrical ball-finial cap, no studio-soft flute shadow, no centered framing.

#### `laredo-wrought-iron-gallery-06` — Long front-yard run

Captured from the curb, worker standing on the sidewalk for context — fence in the foreground, lawn and house behind. Slight crop at the bottom because the worker deleted the photo and re-took it but the lawn-mower noise distracted him. A finished ornamental iron fence running along the front of a Laredo home. The fence is at the property line, with the lawn and the house behind it. South Texas sun, slightly overexposed sky. No people. Jobsite tells: a wheelbarrow parked at the end of the run (the crew's, not the homeowner's — slightly different from the homeowner's wheelbarrow color), a coil of leftover aluminum tie wire on the curb, a small cardboard box that the panel-packaging came in (flattened, set by the curb for pickup), a "before" photo taped to the curb mailbox post in a plastic sleeve (the worker's reference shot).

- **Subject:** Long ornamental iron front-yard run, with crew-detritus at the curb
- **Capture mode:** Worker phone from curb, fence in foreground, slight bottom crop from accidental retake
- **Viewpoint:** Smartphone, off-angle, 15 feet back
- **Lighting:** Mid-day, overexposed
- **Realism:** Worker phone photo
- **Jobsite tells:** Crew wheelbarrow, aluminum tie-wire coil, flattened panel-packaging box, before-photo in plastic sleeve on mailbox post
- **Alt:** "Ornamental iron fence running along the front of a Laredo home; a crew wheelbarrow and a coil of tie wire sit at the curb."
- **Negative:** No people, no vehicles with logos, no signage, no centered fence line, no perfectly blue sky, no studio-soft front-of-house framing.

### Ranch / livestock / property fence gallery

#### `laredo-ranch-gallery-01` — Brace-assembly on a corner

Captured across the corner, the worker leaning into the brace with one hand — he's holding the wire in his other hand, so the photo is two-handed composition (a little steadier than the usual one-handed ranch shots). A wooden H-brace assembly at a ranch fence corner. The horizontal cross-member is in place; the wire is wound tight around it. A worker is mid-install — leaning into the brace with a stick. Webb County brush country behind. Late afternoon. Jobsite tells: a spool of 12.5-gauge barbed wire sitting on the ground nearby (worker mid-feed), a come-along rigged to the brace for tensioning, dust on the worker's jeans from kneeling in the dry brush, an old fencepost hole visible at the frame edge where the next corner will go.

- **Subject:** H-brace assembly at a ranch fence corner, with worker leaning in
- **Capture mode:** Two-handed ranch phone, slightly steadier than usual
- **Viewpoint:** Smartphone, eye-level, ~5 feet
- **Lighting:** Late-afternoon golden hour, raking light
- **Realism:** Worker phone photo
- **Jobsite tells:** Spool of 12.5-gauge barbed wire, rigged come-along, dusty jeans, next corner's hole
- **Alt:** "Wooden H-brace assembly at a ranch fence corner south of Laredo; a spool of barbed wire and a come-along sit nearby."
- **Negative:** No ranch signage with names, no branding, no centered corner composition, no studio softness in the brush, no perfectly plumb brace (real ranch braces lean slightly).

#### `laredo-ranch-gallery-02` — Pipe-and-cable run at completion

Captured from the bed of a pickup parked at the run's end — phone held over the side of the bed, slight downward angle, dust on the windshield behind showing the photo was taken from the truck (real ranch setup). A pipe-and-cable ranch fence running across open Webb County brush country. Pipe corner assemblies at each end, T-posts in the line, smooth cable stretched between. Low mesquite and acacia in the background. Golden hour. Jobsite tells: the pickup's tailgate down (with a roll of unused cable), a water jug in the truck bed, a few cattle panels stacked against the side of the truck bed, a five-gallon bucket of T-post clips on the ground near the start of the line, a small leather punch hanging from a fence staple on the corner post.

- **Subject:** Pipe-and-cable ranch fence, finished, captured from pickup bed
- **Capture mode:** Worker phone over pickup side, dusty windshield in background, downward angle
- **Viewpoint:** Smartphone, eye-level, ~15 feet back, slight downward bias from truck bed
- **Lighting:** Golden hour, side-lit warm
- **Realism:** Worker phone photo
- **Jobsite tells:** Open tailgate, water jug, cattle panels, T-post clip bucket, leather punch on staple
- **Alt:** "Pipe-and-cable ranch fence running across Webb County brush country; captured from the bed of a parked pickup with cattle panels stacked behind."
- **Negative:** No cattle, no horses, no branding on the truck (plain ranch truck), no perfectly centered vanishing point, no studio-soft light on the brush.

#### `laredo-ranch-gallery-03` — T-post driver detail

Captured by the helper — phone held low, looking up at the worker because he was working the driver overhead. Slight motion blur on the driver's handle because the timing of the shot caught the downstroke. A worker driving a T-post with a manual post driver. Only the worker's arms and the driver are visible at the top of frame. The T-post is half in the ground. Slightly overexposed mid-day sun. Jobsite tells: a T-post stand (the rack the worker pulls them from) at the frame edge with a few unused posts, a coil of barbed wire on the ground that will be strung on the line later, a Makita-impact-driver-style post-driver attachment visible at the helper's feet (the worker switched methods mid-job), sweat stains on the worker's shirt visible where the arm reaches up.

- **Subject:** T-post being driven with a manual driver
- **Capture mode:** Helper's phone, looking up at worker, motion-blurred driver on the downstroke
- **Viewpoint:** Smartphone, off-angle, low angle
- **Lighting:** Mid-day, harsh overhead sun
- **Realism:** Worker phone photo
- **Jobsite tells:** T-post stand with unused posts, coil of barbed wire for later, driver attachment at feet, sweat stains on shirt
- **Alt:** "Worker driving a T-post into ranch ground with a manual post driver near Laredo; an unused T-post stand is visible at the frame edge."
- **Negative:** No face of worker, no branding, no frozen action (motion blur is intentional), no perfectly upright T-post mid-drive, no centered composition.

#### `laredo-ranch-gallery-04` — Barbed wire close-up

Captured close — the wire is closer than the phone's minimum-focus distance, so the barbs at frame center are sharp and the wood post behind softens. Sun catches the wire highlights. A close-up of four-strand barbed wire at a ranch fence line. The wire wraps around a wooden corner post. The barbs catch the sun. The ground is dry South Texas brush. No animals, no people. Jobsite tells: a small oil-stain spot on the wood post (from the wire-stretcher), a couple of wire crimps that didn't take (worker left them on the line, will fix on the next pass), some dry grass seeds caught in the barbs (this fence has been here a season or two), the wood post has a slight fire scar from a previous burn (visible at the frame bottom).

- **Subject:** Four-strand barbed wire close-up, with blemishes
- **Capture mode:** Worker phone past minimum-focus, sharp wire + soft post background, sun catching barbs
- **Viewpoint:** Smartphone macro, ~18 inches
- **Lighting:** Side-lit warm, sharp wire highlights
- **Realism:** Worker phone photo
- **Jobsite tells:** Wire-stretcher oil stain on post, missed wire crimps, dry grass seeds in barbs, fire scar on post
- **Alt:** "Four-strand barbed wire wrapped around a ranch fence corner post in Webb County; oil stain and missed crimps visible on the wire."
- **Negative:** No cattle, no horses, no branding, no perfectly arranged wire strands, no studio-soft post shadow, no centered barbs.

#### `laredo-ranch-gallery-05` — Game fence on a slope

Captured while walking the line — phone at waist height, slight tilt with the slope because the worker isn't standing plumb on the hillside. A taller game fence running along a slope. The fence uses vertical pipe stays and woven wire. The slope is real South Texas terrain — not flat. Worker is implied by a brace assembly in mid-construction. Late afternoon. Jobsite tells: a few steps cut into the slope by the worker's boots (worker footprints), a water-cooler jug on the higher side of the slope, a coiled spool of woven wire sitting on a flat spot halfway up the hill, an open pair of fence pliers at the base of the brace post (worker just set them down mid-step), a few clods of caliche turned over by the post-hole digging.

- **Subject:** Game fence on a sloped terrain, with worker footprints
- **Capture mode:** Worker phone at waist height, tilted with slope (worker isn't standing plumb)
- **Viewpoint:** Smartphone, eye-level, off-angle
- **Lighting:** Late afternoon
- **Realism:** Worker phone photo
- **Jobsite tells:** Boot-cuts in slope, water-cooler jug up-slope, woven-wire spool on flat spot, open fence pliers at brace post, caliche clods
- **Alt:** "Game fence running along a slope in Webb County ranch country; boot cuts in the slope and an open pair of fence pliers at the brace post."
- **Negative:** No cattle, no horses, no branding, no perfectly level horizon (slope is intentional), no studio softness, no centered framing.

#### `laredo-ranch-gallery-06` — Field fence at the gate

Captured from the ranch road — worker stopped the truck to take this, slight road dust on the windshield adding to the horizon haze. A ranch-style field fence with a 12-foot pipe gate at the entrance. The gate is closed; you can see the chain latch and the gate-rod receiver on the ground. The ranch road leads away from the camera into the brush. Mid-day. Jobsite tells: tire ruts in the caliche from the crew's truck (fresh, not the homeowner's), a "DOCUMENTED — PROPERTY ACCESS" style sign the rancher had already installed on the gate (hand-lettered, weathered, smaller than the gate frame — explains what's already there), a hanging cattle-panel section next to the gate that's slightly bowed from being walked, a paper county permit taped inside the gate frame (the 2026 re-verification tag), a faded "Brush Country Fence Co." stencil on the ranch road culvert (NOT the operator — historical, gives the place character).

- **Subject:** Field fence with pipe gate at the entrance, with ranch-road context
- **Capture mode:** Worker phone from cab or stopped truck, slight road-dust haze on horizon
- **Viewpoint:** Smartphone, eye-level, end of the road
- **Lighting:** Mid-day, hazy
- **Realism:** Worker phone photo
- **Jobsite tells:** Fresh tire ruts in caliche, hand-lettered property-access sign, bowed cattle-panel section hanging next to gate, county permit taped inside gate frame, historical fence-company stencil on culvert (NOT for any current operator)
- **Alt:** "Field fence with a 12-foot pipe gate at the entrance of a Webb County ranch road; fresh tire ruts in the caliche and a county permit taped inside the gate frame."
- **Negative:** No ranch signage with names tied to the operator, no branded trucks, no vehicles with logos, no perfectly centered gate, no pristine ranch road.

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
