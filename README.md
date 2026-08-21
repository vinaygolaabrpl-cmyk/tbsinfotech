# TBS Infotech Clone — React (Vite)

A fully data-driven clone of the TBS Infotech digital marketing agency website, built with React 18 + Vite, SCSS Modules, AOS scroll animation, GSAP + ScrollTrigger heading reveals, and a dark/light theme system.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## What's real vs. placeholder

- **Text content** (services, package pricing/features, portfolio project names & live URLs, all 10 testimonials, FAQs) is copied directly from the live tbsinfotech.com site and its package/portfolio pages — no lorem ipsum.
- **Images** use `placehold.co` placeholder URLs (the real site's photography is copyrighted), each with real `alt` text describing the actual project/service. Swap the `src` fields in `src/data/*.json` for your own licensed assets, or drop files into `src/assets/images/` and repoint the JSON.
- `public/videos/banner.mp4` is not included — add your own hero video there, or the `VideoBanner` component will gracefully fall back to the poster image if the file 404s.
- The blog posts are original, on-topic placeholder articles (titles/summaries), not scraped, since the live blog wasn't part of the requested content pull.

## Editing content

Everything under `src/data/*.json` is the single source of truth. Change a package price, add a portfolio project, or edit a testimonial there — no component code needs to change. The `src/services/*Api.js` files are a thin data-access layer reading that JSON today; point them at a real API later without touching any component.

## Folder structure

Matches the spec exactly: `components/{common,layout}`, `features/{services,packages,portfolio,testimonials,blog}`, `pages`, `routes`, `hooks`, `context`, `data`, `services`, `utils`, `styles`, `config`.

## Notes

- Theme toggle persists to `localStorage` and respects `prefers-color-scheme` on first visit.
- `SectionTitle` owns all GSAP/ScrollTrigger heading animation; AOS is used everywhere else (cards, grids, images) so the two libraries never touch the same DOM node.
- `PackageComparisonTable` renders a full table on desktop and switches to stacked cards under the tablet breakpoint via pure CSS (no JS media-query listener needed).
- This sandbox has no network access, so dependencies could not be installed/build-tested here — run `npm install` locally. All imports and SCSS `@use` paths were statically verified to resolve.
