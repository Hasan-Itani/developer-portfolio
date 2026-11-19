# Hasan Itani — Developer Portfolio

A local Next.js 16 App Router portfolio built with React 19, TypeScript, React Compiler, Tailwind CSS, and GSAP. No deployment or domain changes are included.

## Development

```sh
npm install
npm run dev
```

Production verification:

```sh
npx tsc --noEmit
npx eslint .
npm run build
npm run start
```

No automated test suite was present in the starter. Browser validation is recorded in `VALIDATION.md`.

## Editing content

- `src/content/site.ts`: identity, links, education, capabilities, and unpublished items awaiting review.
- `src/content/projects.ts`: typed projects and case-study narratives. Only reviewed projects generate public routes.
- `src/content/project-media.ts`: featured captures, gallery order, captions, alt text, contributions, and capture limitations.
- `src/content/experience.ts`: internship dates, roles, contributions, and technologies.
- `src/components/sections.tsx`: home-page narrative.
- `src/components/project-visual.tsx`: real project captures rendered at their original aspect ratios through Next Image.
- `src/components/project-showcase.tsx`: manual screenshot selection on the home page, with labeled buttons, selected states, and live captions.
- `src/components/project-gallery.tsx`: six-image case-study galleries with native-dialog viewing, keyboard controls, and direct PNG links when JavaScript is unavailable.
- `src/components/motion.tsx`: GSAP entrance, scroll-linked project transforms, parallax, timeline progress, and animation cleanup on route changes.
- `src/app/globals.css`: design tokens, layouts, breakpoints, and reduced-motion fallbacks.

Fonts are local Latin variable WOFF2 files served through `next/font/local`. Their SIL Open Font Licenses are included in `src/app/fonts`.

## Content boundaries

Hotel Reservation System is **In progress**. Its public repository README and the supplied capture manifest were consulted; hotel workflow and build checks are attributed to that capture session, not independently rerun here. The gallery uses fictional demo data and identifies placeholder photography. Known booking validation and success-message issues remain disclosed. ZERO is **Pre-registration**, confirmed by the user after the original CV information. Its supplied Google Play URL returned Not Found during verification, so a public store CTA is held in `pendingContent` until the listing is accessible. Its images show a local Windows Godot development build, not an Android device. Internship contributions come from `AGENTS.md`; no employer screenshots or proprietary code are included.

The supplied email is used for the contact CTA. All email links use the centralized `gmailComposeUrl` to open Gmail compose in a new tab with the recipient prefilled. No résumé download, extra work archive, or AI-assisted engineering claims are shown without verified source material. Pending items are recorded with `needsReview` in the content module.

## Accessibility and motion

All primary content is server rendered. Navigation, case studies, and contact links work without JavaScript. GSAP uses scoped `useGSAP`, `matchMedia`, cleanup, and route-dependent reinitialization. Reduced-motion users receive no scrub, parallax, or sticky project scene. A footer control allows reducing motion during the current page session. Mobile uses a native disclosure menu enhanced with dismissal on navigation and Escape.

## SEO

Canonical URLs use `NEXT_PUBLIC_SITE_URL` when configured, otherwise Vercel's production project hostname. Local development falls back to `https://dev.itanigames.com`. This keeps the first Vercel deployment's canonical, sitemap, and social metadata on its actual address. Metadata, Person JSON-LD, a generated Open Graph image, sitemap, branded icon, and a custom 404 are included. Indexing is disabled unless `VERCEL_ENV=production`. No trackers, contact backend, or database are added.

## Vercel hosting

Import `Hasan-Itani/developer-portfolio` or deploy this directory with the Vercel CLI. Use the Next.js framework preset, the repository root, `npm run build`, and automatic output-directory detection. There are no required application secrets, databases, or paid integrations.

For the initial launch, use the generated Vercel production address. `VERCEL_PROJECT_PRODUCTION_URL` supplies its hostname to canonical and sitemap metadata. Preview deployments remain noindex. If a custom domain is connected later, set `NEXT_PUBLIC_SITE_URL` to that full HTTPS origin if needed and redeploy. Domain and DNS changes are a separate action; preserve the existing game website.

`.vercelignore` excludes local instructions and validation records from CLI deployment uploads. It does not replace `.gitignore` or affect the website's public assets.

## Project screenshots

Twelve original PNGs are stored under `public/images/projects`, split by project slug. Featured images are the hotel overview and the Signal Warden laser encounter. All captures retain their original pixels; Next Image generates responsive optimized derivatives at request time. Gallery images load lazily, while each case-study opening image is preloaded. Captions and visible capture notes distinguish implemented functionality from demo setup and limitations.

Image provenance is recorded in `ASSET_SOURCES.md`.

## Assets still needed

The résumé PDF and verified source material for any secondary project or AI-assisted workflow. Optional future additions include Android-device captures and a short gameplay recording.
