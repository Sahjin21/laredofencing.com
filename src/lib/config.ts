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
  niche: "fencing contractor",
  geo: "Laredo, Texas",
  domain: "laredofencing.com",
  businessName: "Laredo Fence Pros",
  phone: "(956) 287-5555",
  phoneHref: "tel:+19562875555",
  email: "contact@laredofencing.com",
  address: "Laredo, TX 78040",
  serviceArea: ["Laredo, TX", "Rio Grande Valley", "Webb County"],
  primaryKeyword: "fencing contractor Laredo, Texas",
  formEndpoint: "https://sahjin.dev/api/v1/leads/events",
  // The lead-generation platform operator. This is separate from the visible
  // site brand and from every independent provider listed below.
  legalBusinessName: "Kurtz & Boon LLC",
  operatorPrivacyEmail: "privacy@laredofencing.com",
  operatorMailingAddress: "Kurtz & Boon LLC, [street], Laredo, TX 78040",
  // Confirm this against the dashboard's enforced deletion schedule before launch.
  leadRetentionPeriod: "24 months",
  // Use only a verified response window, such as "2 business hours". When left
  // unconfigured, the form uses neutral confirmation copy.
  responseTime: "1 business day",
  // The operator manually creates GA4 and supplies this web-stream measurement ID.
  // Record the numeric property ID and verification in ANALYTICS_SETUP.md. Leave the
  // placeholder to skip analytics; never put a numeric property ID in this field.
  ga4MeasurementId: 'G-PZHLMR0JEK',
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
      // Verification: Google Maps listing ChIJoRZHV34hYYYRrEO2K35gRzw,
      // official website http://www.fenceworldstx.com/. Rating pending
      // verification before launch — see PROVIDERS.md for status and date.
    },
    {
      name: "Maverick Fence Co",
      phone: "(956) 722-3125",
      phoneHref: "tel:+19567223125",
      email: "",
    },
    {
      name: "3C Ranch Fencing, Ltd",
      phone: "(956) 723-7959",
      phoneHref: "tel:+19567237959",
      email: "",
    },
    {
      name: "FortiCraft Laredo Fence Builders",
      phone: "(956) 815-3129",
      phoneHref: "tel:+19568153129",
      email: "",
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
