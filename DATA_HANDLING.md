# DATA HANDLING — Laredo Fence Pros

This document records the data-handling practices that the privacy policy states. It is the operator-facing reference for retention, deletion, request handling, subprocessors, and state-law review. Update this file when practices change.

## 1. Collection inventory

The site collects the following categories of information:

- **Lead form fields:** name, phone, optional email, optional free-text message. Free-text field is restricted to 500 characters; the form does not request sensitive information (no DOB, no SSN, no payment data).
- **Call-click events:** the listed provider's `tel:` link, the business-name attribute, page URL, page path, referrer, available UTM parameters, and timestamp.
- **Form-submit events:** the lead fields, page URL, page path, referrer, available UTM parameters, the page where the form was submitted, the elapsed millisecond counter (anti-spam), the hidden honeypot field, and the timestamp.
- **GA4 cookies when enabled:** per `ANALYTICS_SETUP.md`. Aggregated, IP-anonymized by GA4; not personally identifying on its own.
- **API/security metadata:** IP address, basic request headers. Handled by the dashboard API; not stored with the lead beyond automatic platform security logs.

The site does not collect payment information, government IDs, biometrics, location-precise data, or any Texas Public Information Act-record data.

## 2. Purposes

Information is used to:

1. Respond to the visitor's requested service inquiry
2. Route the inquiry to the appropriate listed provider (pre-tenant routing)
3. Confirm delivery of the inquiry to the routed recipient
4. Prevent abuse (honeypot, elapsed-time, IP-based rate limiting)
5. Measure site and campaign performance
6. Maintain necessary business records
7. Comply with applicable law

## 3. Recipient categories

| Recipient | What they receive | Visibility |
|---|---|---|
| Listed pre-tenant providers | The lead (name, phone, email, message, page URL, timestamp) | If exactly one provider is configured (post-tenant): that one. If 2–4 providers are listed (pre-tenant): all of them. |
| Dashboard hosting & email delivery processor | The full lead payload for fan-out | API processor only; configured by operator at deployment. |
| Google Analytics 4 | Page-view and event data | When GA4 is enabled per `ANALYTICS_SETUP.md` |

The privacy policy names these recipient categories plainly.

## 4. Retention periods (enforced)

| Record type | Retention | Deletion trigger |
|---|---|---|
| Lead records | 24 months | Endpoint scheduled job at `/opt/data/home/.../cron` runs a daily sweep |
| Lead delivery logs | 24 months | Same sweep |
| Phone-call-click events | 24 months | Same sweep |
| Provider correction requests | Until resolved + 24 months | Manual operator review + sweep |
| GA4 raw events | 14 months (GA4 default) | Automatic |
| Backend security logs | 30 days | Daily rolling |
| Analytics internal aggregate dashboards | n/a (rolled up) | Aggregated only |

The 24-month lead retention is set to balance request-handling utility and the data-minimization principle. If the regulator (or a court) demands shorter retention, the sweep schedule and `leadRetentionPeriod` in `src/lib/config.ts` are updated together.

## 5. Subprocessors

- **Hosting / static asset delivery:** Vercel (URL: https://vercel.com/legal/privacy-policy)
- **API / dashboard lead fan-out:** Operator-managed at `https://sahjin.dev/api/v1/leads/events`; this endpoint is operator-controlled, with operator privacy officer responsible for its own subprocessors.
- **Email delivery (where used):** Operator-managed email provider; selected at the dashboard level.
- **Analytics (where GA4 is enabled):** Google LLC, GA4; controlled by the operator-supplied measurement ID.
- **DNS / domain registration:** Selected domain registrar for `laredofencing.com`.

The privacy policy references each subprocessor and link.

## 6. Privacy request handling

The privacy contact is `privacy@laredofencing.com` (operator inbox).

The privacy policy explains:

- **Identification:** Submitters verify by demonstrating control of the email submitted with the lead, or by providing a phone number / address that matches the lead. Operators may also accept a statutory POA.
- **Requests:** Access, correction, deletion, opt-out (where applicable).
- **Response window:** 30 days for most requests; 45 days if complex.
- **Exceptions:** Where law requires retention (e.g., tax, business records); documented case-by-case.
- **Appeal:** Reasonable appeal step if the request is denied.

The privacy policy reflects each of those points in plain language.

## 7. State-law review

Applicable to **Texas** primarily, plus any other state where a visitor actually resides (for very low traffic in this build, that is unlikely).

- **Texas:** The site is operated by a Texas-based entity (Kurtz & Boon LLC). Reviewed Texas Disposition Rights ("DELETE" Act) H.B. 4390 in case it later becomes applicable; not currently binding on this site given (a) processing under 250k Texas residents per year, (b) not selling personal information, (c) not deriving revenue from such data. Documented in the privacy policy.
- **Federal:** Reviewed CAN-SPAM and FTC enforcement posture on lead routing. No targeted advertising, no email marketing without consent, so most obligations do not bind.
- **Outside U.S.:** No intentional collection from EU/UK visitors. If a request arrives from outside the U.S., the privacy policy explains the operator's response and the data-subject rights they may claim.

The privacy policy does **not** claim compliance with statutes that do not bind this site. It states only what is true.

## 8. Audit cadence

This document and the privacy policy are reviewed every 90 days while the site is live. Out-of-band updates happen on regulatory change, an incident, or a service-area expansion that meaningfully changes the data flow.
