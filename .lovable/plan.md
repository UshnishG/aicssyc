
# AICSSYC 2026 — Editorial Redesign Plan

Goal: lift the site from "template" to flagship-conference editorial (TED / Stripe Sessions / Slush register) while preserving identity, branding, dates, venue, speakers, tickets, IEEE affiliation, and the dark-gold aesthetic.

## 1. Design system refinements (`src/styles.css`)

- Introduce a true editorial display face for headings (Fraunces or Instrument Serif as a secondary display) alongside the existing Playfair, and tighten the type scale.
- Add new utility tokens:
  - `--font-editorial` (secondary serif for pull-quotes / oversize numerals)
  - `--measure-prose` (max 62ch) and `--measure-narrow` (42ch) helpers
  - Tighter eyebrow style + a new "kicker-rule" treatment (used sparingly)
  - Larger rhythm scale: section padding `py-32 md:py-44`
- Add a `display-xl` utility for oversized editorial numerals/letters used as background type.
- Reduce border usage; introduce subtle gold hairlines + soft shadow tokens for depth instead.

## 2. Section-by-section rework

Each section gets one purpose, one layout archetype, and reduced kicker usage.

| Section | Archetype | Key changes |
|---|---|---|
| Hero | Centered editorial + orbit | Keep network canvas. Strengthen H1 hierarchy, drop redundant secondary copy, tighten CTAs. Stats strip becomes lighter. |
| About | Split editorial w/ oversized numeral "01" | One tight paragraph (≤2 sentences) + 3 marker stats. Remove kicker. |
| Themes | Large background typography "PROGRAM" | Grid of tracks as minimal text rows with hover reveal, no nested cards. |
| Speakers | Magazine layout — featured speaker hero left, roster right | Reduce card chrome; portraits + name/role only. "More speakers" line moves to caption. |
| Agenda | Timeline-focused vertical rail | Clean day tabs at top, vertical timeline below, generous spacing, no scrollbar UI. |
| Why Attend | Statistic-led with 6 distinct benefits | Each benefit a single icon-less line item with number, no overlap with Themes. |
| Tickets | Comparison-led, minimal | 3 columns, single border, clear pricing hierarchy. |
| Sponsors | Quiet section: heading + CTA only (no roster yet) | Stripe-like restraint. |
| FAQ | Editorial Q&A — questions as oversized serif | Cull to ~7 genuinely useful questions (registration, eligibility, travel, certs, refund). |
| Contact | Two-column: minimal directory + map intent | Drop kicker. |
| CTA | Single full-bleed editorial moment | Replace nested grid with one giant date + Register button. Theme tagline appears here as final note. |
| Footer | Compact: nav, contact, social, © | Strip long descriptions; dates appear once. |

## 3. Content audit (de-duplication)

- "Where Agents Meet Humans" tagline: appears **once** (hero orbit) and **once** (CTA closer). Removed from About/CTA copy, Footer.
- Dates/venue: prominent in Hero + CTA + Footer only.
- IEEE CS framing: stated in Hero eyebrow + once in About; removed elsewhere.
- Theme description: only in Themes.
- Pass benefits: only in Tickets section.
- FAQ: trim to logistical questions only.

## 4. Motion & polish

- Replace scattered framer-motion entrances with a unified `Reveal` rhythm (already in place — tighten timings).
- Add subtle scroll-progress hairline at top of viewport.
- Hover states on speaker portraits: image dim + gold underline on name.

## 5. Files touched

- `src/styles.css` — tokens, type, spacing utilities
- `src/components/site/Hero.tsx`
- `src/components/site/About.tsx`
- `src/components/site/Themes.tsx`
- `src/components/site/Speakers.tsx`
- `src/components/site/Agenda.tsx`
- `src/components/site/WhyAttend.tsx`
- `src/components/site/Tickets.tsx`
- `src/components/site/Sponsors.tsx`
- `src/components/site/FAQ.tsx`
- `src/components/site/Contact.tsx`
- `src/components/site/CallToAction.tsx`
- `src/components/site/Footer.tsx`
- `src/routes/__root.tsx` (font link for new display face)

No changes to: routing, data files (`speakers.json`, `timeline.json`), registration URL, IEEE branding, color palette intent.

## 6. Out of scope

- New backend, auth, or DB work
- Speaker data changes
- Ticket price/structure changes
- New routes/pages

Ready to implement on approval.
