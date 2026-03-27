# Product Requirements Document
## Korea Bike Tour Guide

**Version**: 1.0
**Date**: 2026-03-27
**Status**: Active Development — Phase 1 MVP

---

## 1. Overview

### Product Vision

A definitive English-language guide for cycling Korea's long-distance trail network — built specifically for foreign cyclists who find existing Korean resources inaccessible and international platforms lacking local depth.

### Goals

- Make Korea's 4 Rivers Trail (4대강 자전거길) and national cycling network accessible to international cyclists
- Reduce the planning friction that currently causes foreign cyclists to skip Korea entirely
- Build a trusted brand in the bikepacking community before competitors discover the gap

### Target Users

Western bikepacker travelers, expats living in Korea, and Asia-circuit touring cyclists who read English, plan routes digitally, and rely on community knowledge for logistics.

---

## 2. Problem Statement

Korea has ~**1,757 km** of world-class, dedicated cycling infrastructure connecting its four major rivers — fully paved, GPS-stamped, with accommodation and convenience stores every 20–30 km. Almost no foreign cyclists know this exists.

**Why it stays undiscovered:**
- The official Korean Tourism Organization website has weak English content for cycling
- Komoot and Strava have route data but zero local knowledge (bike rental shops, passport stamp stations, overnight rules)
- Korean cycling communities are Korean-language only
- No single English resource covers: route logistics + practical foreigner tips + real-time conditions

Foreign cyclists arriving in Korea currently piece together information from scattered Reddit threads, outdated blog posts, and Google Translate. The planning process takes days and still leaves critical gaps.

---

## 3. Success Metrics

### Phase 1 (MVP — 6 months post-launch)

| Metric | Target |
|--------|--------|
| Monthly unique visitors | 2,000 |
| Avg. session duration | > 3 min |
| Routes page → Route detail conversion | > 40% |
| Return visitors (30-day) | > 20% |
| Newsletter signups | 300 |

### Phase 2 (12 months post-launch)

| Metric | Target |
|--------|--------|
| Monthly unique visitors | 10,000 |
| Affiliate click-through (bike rental, accommodation) | > 5% |
| GPX route downloads | 500/month |
| Community posts/month | 50 |

### Phase 3 (24 months post-launch)

| Metric | Target |
|--------|--------|
| Monthly unique visitors | 30,000 |
| Monthly affiliate revenue | $2,000 |
| Premium GPX subscribers | 200 |

---

## 4. User Personas

### Persona 1 — Alex, the Bikepacker (Primary)

**Background**: 34, German software engineer. Has cycled EuroVelo 6 and the Mekong River trail. Planning a 3-week Asia trip and considering Korea.

**Goals**: Find a multi-day route that's safe, scenic, and logistically straightforward. Wants GPX files, accommodation options, and to know if he needs a support vehicle.

**Pain points**: Can't read Korean. Finds Korean cycling websites unusable. Worried about language barriers at convenience stores and bike shops. Doesn't know if his passport works for the stamp certification system.

**How this product helps**: English route guides with foreigner-specific logistics, downloadable GPX, mapped bike rental shops and accommodation, passport stamp station locations.

---

### Persona 2 — Sarah, the Expat Cyclist (Secondary)

**Background**: 28, American English teacher based in Seoul. Occasional cyclist who wants to do a weekend trip on the Han River trail with friends.

**Goals**: Plan a 2-day casual ride. Find a bike rental near the subway, know where to stay overnight, understand the difficulty before committing.

**Pain points**: Has basic Korean but can't navigate cycling-specific websites. Doesn't know where the trail starts or ends. Worried about fitness level.

**How this product helps**: Easy-difficulty routes filtered view, rental shop locations near transit hubs, difficulty ratings with honest descriptions, day-trip vs multi-day breakdowns.

---

### Persona 3 — Kenji, the Asia-Circuit Tourer (Tertiary)

**Background**: 45, Japanese freelance photographer. Has cycled Taiwan's Cycling Route No. 1 and Vietnam's Ho Chi Minh Road. Korea is next on his list.

**Goals**: Complete the full 4 Rivers certification (collecting all passport stamps). Wants to document the journey. Needs to know the full route end-to-end.

**Pain points**: Passport stamp locations are poorly mapped in English. Wants to know which sections can be combined or skipped. Needs to know if he can bring his touring bike on Korean trains.

**How this product helps**: Stamp certification station map, full route itinerary planner, tips on bike transport on KTX/subway, photography-friendly route highlights.

---

## 5. Features by Phase

### Phase 1 — MVP (Current + 3 months)

**Already shipped:**
- Home page: hero, stats (1,757 km / 4 rivers / 634 stations), popular routes preview
- `/routes` — 4 Rivers route listing with difficulty, distance, duration
- `/routes/[id]` — Route detail with highlights and Tips for Foreign Cyclists
- 4 Rivers GeoJSON data (7,091 coordinate points)
- Design system: Tether & Terroir (forest green / cream / burnt sienna)
- i18n scaffold: EN/KO with next-intl

**To complete Phase 1:**

| Feature | Priority | Notes |
|---------|----------|-------|
| Interactive map with route overlay | P0 | Mapbox GL JS, render four-rivers.geojson |
| POI markers on map | P0 | Bike rentals, convenience stores, certification stations |
| Tips & Practical Info page | P1 | Visa, insurance, emergency contacts, bike transport on trains |
| Passport stamp station list | P1 | Static page, per-river breakdown |
| Route difficulty clarification | P1 | Add elevation profile data to route detail |
| Newsletter signup | P2 | Simple email capture, Mailchimp or Resend |
| Mobile-responsive polish | P1 | Current layout needs mobile testing |
| Basic SEO | P1 | Route pages need og:image, meta descriptions |
| EN translations complete | P1 | Extend next-intl coverage beyond home section |

### Phase 2 — Expand (Months 4–12)

| Feature | Priority | Notes |
|---------|----------|-------|
| Additional national routes | P0 | Coast Road (해안선), Jeju Olle, DMZ route |
| GPX download (free tier) | P0 | One GPX per route, gated behind email |
| Community trip reports | P1 | User-submitted route reviews with photos |
| Seasonal conditions system | P1 | "Trail status" per route — flooding, snow, closures |
| Accommodation directory | P1 | Cyclist-friendly guesthouses with affiliate links |
| Bike rental directory | P1 | Per-city listings, affiliate links where available |
| Korean language (KO) full coverage | P2 | Complete i18n for all pages |
| Mobile app (PWA) | P2 | Offline map access is the key feature |

### Phase 3 — Monetize (Months 12–24)

| Feature | Priority | Notes |
|---------|----------|-------|
| Premium GPX routes | P0 | Detailed cue sheets, elevation, turn-by-turn |
| Booking integration | P1 | Accommodation booking via affiliate API (Booking.com / Airbnb) |
| Guided tour listings | P1 | Partner with local tour operators |
| Advertising | P2 | Cycling gear, travel insurance — contextual only |
| Itinerary builder | P2 | Multi-day planner with accommodation and daily distance |

---

## 6. Technical Architecture

### Current Stack

```
korea-bike-tour/                  # Turborepo monorepo
├── apps/
│   └── web/                      # Next.js 15 (App Router)
│       ├── src/app/              # Pages + layouts
│       ├── src/data/             # Route data (TypeScript + GeoJSON)
│       └── messages/             # i18n JSON (EN, KO)
└── packages/
    ├── ui/                       # Shared component library
    └── typescript-config/        # Shared TS config
```

**Runtime**: Node.js, Next.js 15 App Router, React 19
**Styling**: Tailwind CSS 4, CSS custom properties
**i18n**: next-intl 3, cookie-based locale
**Package manager**: pnpm, Turborepo
**Fonts**: Space Grotesk (headings), Manrope (body) via Google Fonts

### Near-term Additions (Phase 1)

| Concern | Solution |
|---------|----------|
| Interactive maps | Mapbox GL JS — API key in env var |
| POI data | Static JSON files in `src/data/` to start, no DB needed |
| Email capture | Resend or Mailchimp embed — no backend required |
| Hosting | Vercel (already compatible with Next.js 15) |

### Phase 2 Additions

| Concern | Solution |
|---------|----------|
| User-generated content | Supabase (Postgres + storage + auth) |
| Image hosting | Cloudinary or Supabase storage |
| GPX file storage | Object storage (Vercel Blob or Supabase) |
| Analytics | Plausible (privacy-friendly, no cookie banner needed) |

### Data Model (Phase 1, no DB)

Route data lives in TypeScript files and GeoJSON:
- `src/data/four-rivers.ts` — route metadata (name, distance, difficulty, highlights)
- `src/data/routes/four-rivers.geojson` — LineString coordinates for map rendering
- POI data will be added as `src/data/pois.ts` — typed array of locations

---

## 7. Design Principles

Based on the **Tether & Terroir** design system.

### Color

| Role | Value | Usage |
|------|-------|-------|
| Primary | `#163328` (forest green) | Nav, headers, CTAs |
| Secondary | `#9c440f` (burnt sienna) | Highlights, accents, links |
| Background | `#fdf9f3` (warm cream) | Page background |
| Surface | `#f5f0e8` | Cards, sections |

### Typography

- **Display**: Space Grotesk, uppercase, tight tracking — evokes topographic maps
- **Body**: Manrope, 1rem, 1.6 line-height — readable at length

### Layout

- Left-heavy asymmetric grids (content left, supporting info right)
- No 1px borders — differentiate sections with background shifts
- Card shadow: `0 12px 40px rgba(28,28,24,0.06)` — subtle depth

### Voice

- Practical over poetic. Tell the user what they need to know.
- Foreigner-first: assume no Korean, no local knowledge, no support vehicle
- Never assume familiarity with Korean geography or culture

### Non-negotiables

- Every page must be useful on mobile
- Map interactions must work with one hand (mobile)
- No content hidden behind login for Phase 1

---

## 8. Out of Scope

The following are explicitly not planned:

- **Native iOS/Android app** — PWA covers Phase 2 offline needs
- **Real-time trail conditions** — requires integrations with Korean government APIs; deferred to Phase 3
- **Turn-by-turn navigation** — Komoot/Garmin do this better; link out instead
- **E-commerce / direct bike rental booking** — affiliate links are sufficient for Phase 2
- **User accounts in Phase 1** — adds auth complexity with minimal MVP benefit
- **Japanese / Chinese localization** — EN + KO covers 90% of target users for Phase 1–2
- **Offline-capable web app in Phase 1** — serviceworker complexity not worth it until content is stable
- **Elevation profiles generated from GPS data** — use static data or defer
