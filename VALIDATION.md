# Validation log

## Gmail contact links — 19 November 2026

Replaced both shared email CTA links with a centralized Gmail compose URL derived from the portfolio email. Gmail opens in a new tab with the recipient prefilled; links include `noopener noreferrer` and accessible new-tab labels. Updated AGENTS and README to preserve the user's preference.

TypeScript, ESLint, and production build passed. Inspected the generated HTML for home and both case studies: each contains two Gmail compose links with the correct recipient and new-tab target, and no `mailto:` links. No email was sent. A signed-in Gmail compose session was not tested; this link-only change did not alter layout or motion.

## Presentation refinement and release status — 19 November 2026

Updated ZERO to **Pre-registration** following the user's correction. Updated the typed status, case-study context and results, README, and AGENTS source material. Google Play returned a Not Found page for the supplied package URL during a direct browser check. The URL is retained with `needsReview` in `src/content/site.ts`; no unverified store button is published.

Added three manually selectable screenshot views per featured project, with pressed states, descriptive alt text, and live caption updates. Enlarged project media, reduced the desktop hero size, added direct links to verified internship and education information, increased undersized supporting text, and added challenge/contribution/evidence summaries to the case studies. No dependencies were added.

- TypeScript (`npx tsc --noEmit`), ESLint (`npx eslint .`), and production build (`npm run build`) passed.
- Desktop checked at 1440 × 1000: hero, larger media, status badges, and screenshot selection. Selected the hotel's Availability view and the game's Foundry Titan view; both updated their image, caption, and selected state. Enter activated the game view control from the keyboard.
- Mobile checked at 390 × 844: selected the game's Progression view, confirmed non-sticky positioning and no horizontal overflow, and inspected the case-study summaries and corrected status.
- Tablet checked at 768 × 1024: confirmed no horizontal overflow, gallery navigation, image viewer opening, Escape dismissal, and focus behavior.
- Tested Reduce motion: reveal opacity returned to 1 and transforms to `none`. Manual screenshot selection continues to work independently of scrolling. Restored system motion preference after verification. The OS preference itself was not emulated.
- No browser warnings or errors appeared in the inspected flows.
- Read-only HTTP checks confirmed Pre-registration on both home and ZERO case-study HTML, no stale Closed testing public text, no unverified Google Play CTA, and server-rendered showcase controls and project summaries.

No Lighthouse or screen-reader certification audit was performed. A publicly accessible Google Play pre-registration listing remains needed for the direct CTA. No deployment or DNS changes were made; the temporary preview server was stopped after validation.

## Screenshot integration — 19 November 2026

Replaced both conceptual featured images with authentic project captures and added six-image galleries to each case study. Captions, alt text, contribution descriptions, and capture limitations are typed content in `src/content/project-media.ts`. The native-dialog viewer supports previous/next buttons, arrow keys, Escape, focus restoration, and original-PNG links. No new dependencies were installed.

### Checks

- `npx tsc --noEmit`, `npx eslint .`, and `npm run build` passed after the gallery implementation and loading-space fix.
- All twelve PNG dimensions match the supplied manifests, and SHA-256 hashes match the original files. Images were copied without pixel edits.
- All twelve public PNG URLs returned HTTP 200. Both case-study pages returned HTTP 200 and include gallery markup, direct PNG links, captions, and demo/development context in their server-rendered HTML.
- Inspected the desktop home showcase and hotel gallery at 1440 × 1000, game gallery at 768 × 1024, and mobile home and portrait viewer at 390 × 844. No horizontal overflow was measured in the inspected layouts. Both home featured images loaded with descriptive alt text.
- Opened the hotel review capture, advanced with ArrowRight to the mobile account capture, and closed with Escape. Focus returned to the initiating image link. Also tested the Next button, the mobile portrait capture, and the game screenshot viewer.
- Fixed an initial dialog image-loading collapse by reserving image-stage height. Verified a stable 438.875px stage at the 844px mobile viewport.
- Tested Reduce motion on the hotel case study; inspected reveal transforms returned to `none`. Existing reduced-motion media queries remain in place; the OS preference itself was not emulated.
- Browser console showed no warnings or errors in the inspected flows.

No Lighthouse, physical Android-device, screen-reader, or full JavaScript-disabled browser test was performed. The gallery's native PNG links and captions were verified in server-rendered HTML. The hotel and Godot applications were not independently rerun in this portfolio integration; capture-session workflow and build results are attributed to the supplied reports.

Hotel images explicitly identify fictional demo data and placeholder room photography. Known validation and misleading confirmation-message issues remain disclosed. Game images identify their Windows development-build origin rather than implying Android-device captures. See `ASSET_SOURCES.md` for capture provenance and supplied repository evidence.

No deployment, DNS changes, or edits to the hotel and game projects were made. The temporary local production preview was stopped after validation.

## Original implementation — 15 November 2026

## Project verification

Confirmed `package.json`, `src/app`, `AGENTS.md`, and `CODEX_BUILD_PROMPT.md` exist. Read both instruction files completely. The original working tree was clean and the application was the Next.js starter. Preserved Next.js 16.4.6, React 19.3.0, TypeScript strict mode, React Compiler, Tailwind, ESLint, and npm.

## Checks passed

- `npx tsc --noEmit`
- `npx eslint .`
- `npm run build` — home, both statically generated case studies, metadata routes, and 404 compiled successfully.
- `npm audit --omit=dev --json` — zero production vulnerabilities at verification time. The installation reported seven moderate warnings in the full dependency tree; development dependencies were not upgraded as part of this work.

On this Windows host, commands used the explicit `C:/nvm4w/nodejs/npm.cmd` and `npx.cmd` launchers because the unqualified npm command resolved to an inaccessible launcher. Next.js builds required permission to spawn worker processes outside sandbox isolation. Fonts were changed to local files after Google Fonts network fetching failed.

## Browser verification

Used the production server and in-app Chromium browser.

- **1440 × 1000:** inspected hero, selected work, conceptual illustrations, desktop navigation, and case-study layout. Project visuals use sticky positioning with scroll-linked transforms and chapter progress.
- **390 × 844:** inspected hero, project content, mobile navigation, and ZERO case-study text. Confirmed mobile menu closes after navigation; Escape closes it and returns focus to the summary.
- **768 × 1024:** inspected experience and project layouts. Refined the project chapters to a single column and confirmed the final grid has one column and non-sticky visual positioning.
- No horizontal overflow in the measured home layouts at 390, 768, and 1440px. Mobile ZERO case-study layout also measured without overflow. Browser scrollbars account for the difference between inner width and document client width.
- Navigated from the home page to Hotel Reservation System and onward to ZERO. Confirmed case-study titles, section structure, status, canonical URL, and source/game links.
- Tested the Reduce motion control: all inspected reveal elements returned to opacity 1 and transform `none`; project stage position became `static`; animated progress was hidden. Restored motion afterward. GSAP media queries and CSS also respect the operating-system preference. The OS preference itself was reviewed in code rather than emulated.
- Browser console showed no warnings or errors during the inspected flows.
- Inspected semantic heading structure and navigation in the accessibility tree. Reviewed skip link and focus styles in source. This was not a full assistive-technology or WCAG certification audit.

## HTTP and server-rendered content

Confirmed HTTP 200 for `/`, both `/work/` case studies, `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, and `/icon.svg`. An unknown URL returned HTTP 404. Confirmed the home HTML includes both internships, case-study links, mailto contact, Person JSON-LD, and preview noindex directives before client JavaScript executes.

Full browser testing with JavaScript disabled, Lighthouse scores, Core Web Vitals, physical-device touch testing, and a screen-reader session were not performed. No automated test suite existed in the starter.

## Content and assets

Used the supplied verified internship and game information. Consulted the public hotel repository README; its project checks are explicitly described as repository-reported, not independently rerun here. Hotel remains In progress; ZERO remains Closed testing. No public game-download claim, employer screenshots, invented metrics, testimonials, GPA, availability claim, or résumé download was added.

Original CSS illustrations are explicitly labeled. Authentic screenshots/footage with publication permission and a résumé PDF remain needed. Secondary projects and AI-assisted practice examples remain unpublished with `needsReview` flags until verified.

No deployment, domain, Cloudflare, Vercel, or main game-site changes were made. The temporary production preview server was stopped after verification.
