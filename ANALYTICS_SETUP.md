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
