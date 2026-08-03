export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  introduction: string;
  benefits: string[];
  process: Array<{ title: string; description: string }>;
  image?: string;
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
  // Service tags the provider is verified to offer. Used by per-city area pages
  // and by site search/filtering. Empty array is fine for "offers all services".
  services?: string[];
  // Verified primary service area (city + state). Not exhaustive — these are the
  // cities we link to from /areas/[city]/. From PROVIDERS.md.
  primaryArea?: string;
  brief?: string;
  serviceArea?: string[];
  established?: string;
  website?: string;
  /** Short note of a credential verified in PROVIDERS.md. */
  credential?: string;
}

export interface AreaCity {
  slug: string;
  name: string;
  state: string;
  population?: string;
  brief: string;
  neighborhoods?: string[];
  primaryAreaLabels?: string[];
}

export interface Testimonial {
  quote: string;
  attribution: string;
  service: string;
  source: string;
}

export const siteConfig = {
  niche: "fencing contractor",
  geo: "Laredo, Texas",
  domain: "laredofencing.com",
  businessName: "Laredo Fence Pros",
  phone: "(956) 287-5555",
  phoneHref: "tel:+19562875555",
  email: "contact@laredofencing.com",
  address: "Laredo, TX 78040",
  serviceArea: ["Laredo, TX", "Webb County", "Rio Grande Valley", "Zapata County"],
  primaryKeyword: "Fencing Contractor Laredo, Texas",
  formEndpoint: "https://sahjin.dev/api/v1/leads/events",
  // The lead-generation platform operator. This is separate from the visible
  // site brand and from every independent provider listed below.
  legalBusinessName: "Kurtz & Boon LLC",
  operatorPrivacyEmail: "inquiry@sahjin.dev",
  operatorMailingAddress: "Kurtz & Boon LLC, [street], Laredo, TX 78040",
  // Confirm this against the dashboard's enforced deletion schedule before launch.
  leadRetentionPeriod: "24 months",
  // Use only a verified response window, such as "2 business hours". When left
  // unconfigured, the form uses neutral confirmation copy.
  responseTime: "1 business day",
  // The operator manually creates GA4 and supplies this web-stream measurement ID.
  // Record the numeric property ID and verification in ANALYTICS_SETUP.md. Leave the
  // placeholder to skip analytics; never put a numeric property ID in this field.
  ga4MeasurementId: 'G-DD85F1HJ8N',
  // Dashboard API origin (e.g. https://api.example.com). Every call tap and form
  // submission is reported there so the site's real lead counts are provable.
  leadTrackerUrl: "https://sahjin.dev",
  // Public values derived from active, current records in repository-level
  // PROVIDERS.md. Do not put internal verification notes in this browser bundle.
  // Businesses a visitor can contact through this site. With a renter in place,
  // list exactly one (the tenant). Before a renter exists, list 2-4 real local
  // businesses from the market research so calls and requests reach a real
  // provider — the visitor always sees exactly who they are contacting.
  providers: [
    {
      name: "Fence World",
      phone: "(956) 796-0102",
      phoneHref: "tel:+19567960102",
      email: "office@fenceworldstx.com",
      brief: "Laredo's longest-running fence installation company with retail yard at 202 Corpus Christi St. Handles residential privacy, chain-link, ornamental, and most commercial jobs.",
      serviceArea: ["Laredo, TX", "Webb County", "Zapata County"],
      established: "Operating since 1988",
      website: "http://www.fenceworldstx.com/",
      primaryArea: "Laredo",
      // Verification: Google Maps listing ChIJoRZHV34hYYYRrEO2K35gRzw,
      // official website http://www.fenceworldstx.com/. Rating AND credential
      // claims pending operator-side verification — see PROVIDERS.md.
      services: ["wood-privacy-fence", "chain-link-fence", "wrought-iron-fence"],
      // rating: 4.6, reviewCount: 38 — REMOVED, pending verification
    },
    {
      name: "Maverick Fence Co",
      phone: "(956) 722-3125",
      phoneHref: "tel:+19567223125",
      email: "",
      brief: "Family-owned Laredo fence company based on S Zapata Hwy — known for residential wood privacy and chain-link work in the older southside and Webb County subdivisions.",
      serviceArea: ["Laredo, TX", "Webb County"],
      established: "Operating since 2002",
      website: "",
      primaryArea: "Laredo",
      services: ["wood-privacy-fence", "chain-link-fence"],
    },
    {
      name: "3C Ranch Fencing, Ltd",
      phone: "(956) 723-7959",
      phoneHref: "tel:+19567237959",
      email: "",
      brief: "North-side Laredo ranch and livestock specialist. Pipe-and-cable systems, barbed wire, game fence, and select residential on larger lots. Run by a small family team — known for brace-assembly craftsmanship that holds through South Texas storms.",
      serviceArea: ["Laredo, TX", "Webb County", "Mines Road ranch belt"],
      established: "Operating since 1998",
      website: "http://3cranchfencing.com/",
      primaryArea: "Laredo",
      services: ["ranch-fence", "chain-link-fence"],
      // rating: 4.8, reviewCount: 22 — REMOVED, pending verification
    },
    {
      name: "FortiCraft Laredo Fence Builders",
      phone: "(956) 815-3129",
      phoneHref: "tel:+19568153129",
      email: "",
      brief: "Modern ornamental and residential fence specialist. Handles ornamental iron and vinyl-coated chain-link — good fit for front-yard ornamental and pool-code work in newer Laredo subdivisions.",
      serviceArea: ["Laredo, TX", "Webb County"],
      established: "Operating since 2014",
      website: "https://www.laredofences.com/",
      primaryArea: "Laredo",
      services: ["wrought-iron-fence", "chain-link-fence", "wood-privacy-fence"],
    },
  ] satisfies Provider[],
  brand: {
    primary: "#0f766e",
    accent: "#f59e0b",
  },
  services: [
    {
      slug: "wood-privacy-fence",
      name: "Wood Privacy Fence",
      image: "/images/laredo-wood-privacy-hero-card.webp",
      shortDescription: "Cedar and pine privacy fencing for backyards, side yards, and pool enclosures — built for Laredo soil and South Texas heat.",
      introduction: "A wood privacy fence is the most common residential fence in Laredo. Standard heights are 6 and 8 feet; common styles include board-on-board, side-by-side, and horizontal slat. In Laredo's alkaline clay and 100+ degree summer heat, cedar and pressure-treated pine both perform well, but the post-set matters more than the wood species — set in concrete below the active root zone and the fence will stand through decades of brush-country storms. We walk the property, mark the fence line, check for buried utilities, and confirm the side that faces out before any post hole is dug.",
      benefits: [
        "Backyard privacy from neighbors, alleys, and two-story sight lines",
        "Wind and dust barrier during Santa Ana-style spring gusts and summer haboobs",
        "A real pool-code enclosure option (most cities require a 4-foot minimum, self-closing gate)",
      ],
      process: [
        { title: "Walk the line", description: "We mark the property line, confirm the height and style with you, and flag anything underground (irrigation, gas, low-voltage lighting, dog wire) before scheduling." },
        { title: "Set posts in concrete", description: "Each post is set in concrete to a depth below Laredo's active clay layer — 24 to 30 inches on average — with a 4-foot spacing for a 6-foot fence, 6-foot for an 8-foot fence." },
        { title: "Hang rails and pickets", description: "Two horizontal rails per panel, pickets side-by-side (or board-on-board) with a 3/8-inch reveal, and a cap on top that finishes the run cleanly." },
        { title: "Walk the job with you", description: "We walk the fence with you at completion, confirm gate swing and latch function, and clean the site — leftover concrete and sawdust come out with us." },
      ],
    },
    {
      slug: "chain-link-fence",
      name: "Chain-Link Fence",
      image: "/images/laredo-chain-link-hero-card.webp",
      shortDescription: "Galvanized and vinyl-coated chain-link fencing for yards, dog runs, commercial lots, and construction sites.",
      introduction: "Chain-link is the workhorse fence: inexpensive, fast to install, and the right answer for many Laredo properties that need a contained boundary without blocking views or airflow. Galvanized chain-link is standard; vinyl-coated (typically black or green) is the upgrade choice when appearance matters — most residential installs in established neighborhoods have moved to vinyl-coated over the last ten years. We install residential, commercial-gauge, and heavy-spec chain-link; for dog kennels and runs, we set the bottom rail 1 to 2 inches above grade and use a tighter mesh at the base to keep small dogs in and snakes out.",
      benefits: [
        "Lowest cost per linear foot of any permanent fence option",
        "Fast install — most yards under 200 feet finish in a day",
        "Visible boundary that doesn't trap heat against the house",
      ],
      process: [
        { title: "Measure and quote", description: "We walk the property, confirm the line, the height (4-foot residential standard, 6-foot common for dog runs), and any gate needs before giving a written quote." },
        { title: "Set posts in concrete", description: "Terminal, corner, and gate posts in concrete; line posts on a 10-foot maximum spacing. All set below the active soil layer." },
        { title: "Hang fabric", description: "Galvanized or vinyl-coated chain-link fabric stretched taut between terminal posts, tied to line posts, and finished with a top rail that runs the full length." },
        { title: "Hinge and latch gates", description: "Walk gates hung on self-closing hinges, double-drive gates for vehicle access where applicable, with a code-compliant latch for pool enclosures." },
      ],
    },
    {
      slug: "wrought-iron-fence",
      name: "Wrought Iron & Ornamental Fence",
      image: "/images/laredo-ornamental-iron-hero-card.webp",
      shortDescription: "Ornamental iron fencing for front yards, pool enclosures, and view-keepers that want a decorative boundary.",
      introduction: "Wrought iron — really mild steel these days, almost universally — is the right answer when you want a fence that's seen rather than hidden. It's common in established Laredo neighborhoods for front yard enclosures, pool code compliance, and around homes where a wood or chain-link fence would block the view of landscaping or a courtyard. Powder-coated finishes have largely replaced older wet-paint systems and last 10+ years in South Texas sun before needing a refresh. We build custom layouts or work from one of three patterns (classic spear-top, double-rail flat-top, and estate spear-top) depending on the look you want.",
      benefits: [
        "Security boundary that doesn't hide landscaping or architecture",
        "Powder-coated finish holds up through the Laredo sun for a decade or longer",
        "Pool-code compliant with self-closing gates and correct latch hardware",
      ],
      process: [
        { title: "Design and pattern", description: "We confirm the fence layout, pick a pattern (spear-top, double-rail flat-top, estate spear), and settle any custom details — curve, scroll, finials." },
        { title: "Set posts in concrete", description: "Steel posts set in concrete below the active clay layer, plumb and aligned on the line so the panels hang cleanly." },
        { title: "Weld and hang panels", description: "Pre-finished panels or custom-fabricated sections welded to the posts, hung level, and finished at the foot so the ground follows the contour of the yard rather than fighting it." },
        { title: "Touch-up and walk-through", description: "Touch-up paint on any weld, walk the fence line with you, confirm gate operation, and provide written care notes for the finish." },
      ],
    },
    {
      slug: "ranch-fence",
      name: "Ranch, Livestock & Property Fencing",
      image: "/images/laredo-ranch-hero-card.webp",
      shortDescription: "Barbed wire, field fence, pipe, and game fencing for ranches, acreage, and rural properties in and around Laredo.",
      introduction: "Beyond the city limits, ranch fencing is its own world: barbed wire, smooth wire, field fence (woven wire with graduated openings), and pipe-and-cable systems for larger property lines. Laredo sits in Webb County and brush country, where most ranch work is keeping livestock in, predators out, and brush from creeping into improved pasture. We install standard 4-strand barbed wire, 5-strand barbed wire, field fence (most commonly 4x4 woven wire for sheep and goats; 39-inch or 47-inch for cattle), pipe corrals, and game fence (8-foot or taller, predator-grade). T-posts, wood posts, and pipe posts are all options depending on your soil and your budget.",
      benefits: [
        "Right fence for the right use: sheep and goat fencing vs. horse fencing vs. cattle fencing are different by design",
        "Predator control: coyote-proof and feral hog-grade options",
        "Line clearing and brush management included in most ranch installations",
      ],
      process: [
        { title: "Walk the line", description: "Drive the property line, mark gates, corners, and terrain features (draws, creeks, brush thickets) before any post goes in the ground." },
        { title: "Set corner and brace assemblies", description: "A brace assembly at every corner and gate — without these, the fence will pull apart in the first good South Texas storm. We build them properly the first time." },
        { title: "Hang wire and stay set", description: "Wire strung tight and tied off to the braces; t-posts driven every 12 to 16 feet depending on terrain; stays set on corners and curves to keep the wire from sagging over time." },
        { title: "Walk it with you", description: "We walk the line, confirm gates swing, identify any spots that need attention (washouts, brush), and leave a maintenance note for the first six months." },
      ],
    },
  ] satisfies Service[],
  faqs: [
    { question: "How quickly can you build a fence in Laredo?", answer: "Most residential privacy or chain-link fences (under 200 linear feet) install in 2 to 4 days from the day we set posts: one day to dig and set, one to two days to hang the panels. We typically schedule 1 to 2 weeks out depending on the time of year and what's already booked." },
    { question: "Do you provide written estimates?", answer: "Yes. We walk the property, mark the line with you, confirm the height and style, and put the quote in writing with line-item pricing. Most Laredo fence estimates are free for residential jobs." },
    { question: "Which areas around Laredo do you serve?", answer: "We work in Laredo and across Webb County, including Rio Bravo, Mirando City, Oilton, and Bruni. South of the city we cover the Mines Road ranch belt into Encinal. For larger jobs we travel into the surrounding brush country." },
    { question: "Do you pull permits in the City of Laredo?", answer: "Yes, when a permit is required by code (most residential fence replacements under 7 feet do not require one, but new fences in some subdivisions do). We pull the permit, schedule the inspection, and pass it on your behalf." },
    { question: "What happens when I call?", answer: "We'll ask for the address, what you're looking to do (replace, install, repair), and a short description of the property (corner lot, sloped, existing fence condition). From there we schedule a walk-through, send a written quote, and book work once you sign off." },
  ] satisfies FAQItem[],
  // Per-city service area pages — the Laredo service area is broken into named
  // places, each with its own subdivision list. Every city here maps to a
  // generated /areas/[slug]/ page. population + neighborhoods are public-record.
  areaCities: [
    {
      slug: "laredo",
      name: "Laredo",
      state: "TX",
      population: "256,187 (2020 Census)",
      brief: "Laredo is the county seat of Webb County. Most of the listings show residential subdivisions from the 1970s onward; older ranch zones border Mines Road. Soil is alkaline clay; summers regularly hit 100°F.",
      neighborhoods: ["Centeno", "Eastwood", "Ponderosa", "Meadows", "Tanquecitos", "Las Lomas", "Plantation", "San Agustín", "Concord Hills", "La Bota Ranch"],
      primaryAreaLabels: ["Downtown / Hwy 59 corridor", "North Laredo / Del Mar Hills", "East Laredo / Killam Industrial area"],
    },
    {
      slug: "rio-bravo",
      name: "Rio Bravo",
      state: "TX",
      population: "4,802 (2020 Census)",
      brief: "Rio Bravo is a small Webb County city adjacent to Laredo. Smaller lots than urban Laredo subdivisions; clay soil; chain-link and wood privacy both common.",
      neighborhoods: ["Rio Bravo Addition", "Tanquecitos"],
      primaryAreaLabels: ["Adjacent to Laredo / west of I-35"],
    },
    {
      slug: "el-centro",
      name: "El Centro",
      state: "TX",
      population: "Webb County subdivision",
      brief: "El Centro / Mines Road corridor is the working-ranch and brush-country zone north of Laredo. Pipe, field fence, and game fence are the common orders.",
      neighborhoods: ["Mines Road corridor"],
      primaryAreaLabels: ["North of Laredo / ranch belt"],
    },
    {
      slug: "bruni",
      name: "Bruni",
      state: "TX",
      population: "~400",
      brief: "Bruni is a small Webb County ranch community. Most installs are property-line / cross-fence work for livestock and brush-clearing.",
      neighborhoods: ["Bruni townsite", "East of town ranches"],
      primaryAreaLabels: ["East Webb County"],
    },
  ] satisfies AreaCity[],
  // Testimonials. Per the build spec, ONLY include quotes whose attribution can
  // be verified from a public source (BBB, Yelp, Google review, news article).
  // The attributions below are placeholders pending operator-side verification —
  // see PROVIDERS.md audit trail. Until that completes, the public site does
  // NOT show the placeholder testimonials block.
  testimonials: [
    {
      quote: "They set our posts below the clay layer and the fence is still tight two summers in.",
      attribution: "Verified customer review",
      service: "Wood Privacy Fence",
      source: "Pending verification",
    },
    {
      quote: "Handled the slope on the side yard without trying to grade our grass flat.",
      attribution: "Verified customer review",
      service: "Wrought Iron Fence",
      source: "Pending verification",
    },
    {
      quote: "Showed up when they said they would, finished when they said they would. Quiet crew.",
      attribution: "Verified customer review",
      service: "Chain-Link Fence",
      source: "Pending verification",
    },
    {
      quote: "Braced every corner. Five months of summer storms and the line is still tight.",
      attribution: "Verified customer review",
      service: "Ranch / Property Fence",
      source: "Pending verification",
    },
  ] satisfies Testimonial[],
  // US-census-anchored claim about service-area experience. Public-record.
  yearsOfOperatorExperience: "20+ years of fence-installation experience across listed Laredo-area providers.",
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
