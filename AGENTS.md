# AGENTS.md — Hasan Itani | Developer Portfolio

## Mission
Build and maintain a distinctive, production-quality personal portfolio for **Hasan Itani**, a full-stack software engineer. The website must make recruiters, engineering managers, and collaborators understand (1) what he has built, (2) his exact contribution, (3) the technical reasoning behind the work, and (4) how to contact him. Aim for a bespoke, design-award-caliber experience without sacrificing clarity, accessibility, performance, or factual accuracy.

This is **not** a generic portfolio template. Do not produce a bland grid of identical cards, a list of buzzwords, gratuitous neon gradients, generic stock photos, or decorative animation that obscures the work.

## Existing project / constraints
- Existing repository: `developer-portfolio`, created with **Next.js 16 App Router**, **TypeScript**, **React Compiler**, **Tailwind CSS**, **ESLint**, and a `src/` directory. Preserve these decisions.
- Primary destination: `dev.itanigames.com`, deployed to Vercel later.
- `itanigames.com` already supports the game **ZERO: LAST DIRECTIVE** and its legal pages. **Do not modify the main site's DNS, Cloudflare records, or existing game site.** Domain setup and deployment are separate tasks; do not perform either without being explicitly asked.
- Use the existing package manager/lockfile (npm). Inspect package versions and repository structure before changes.
- Read this file before starting each task. Check installed library docs for APIs, especially if library versions differ from examples.

## Design brief — the intended experience
Visual concept: **cinematic editorial design meets deliberate software engineering**.
- Art direction: nearly-black ink (#0A0C10), warm off-white (#F3F1EA), muted slate (#9CA6B4), and **one** controlled electric-lime accent (#BDF47B). Use restrained gradients; prioritize typography, visual rhythm, whitespace, lines, and compelling media.
- Typography: expressive display sans (e.g. Space Grotesk) for hero headings, readable sans (e.g. Geist/Inter) for body, and minimal mono for labels/technical metadata. Use `next/font`.
- Layout: premium asymmetric editorial grid; fluid type using `clamp`; intentional negative space; occasional full-bleed project scenes. A consistent 12-column desktop grid is a useful basis. Mobile must feel designed, not merely collapsed.
- Finish: sticky minimal navbar; generous section spacing; tasteful microinteractions, deliberate hover/focus states, a visible scroll progress cue, crisp visual hierarchy, and smooth but non-intrusive transitions.
- Refer to visual inspiration only for *quality and interaction patterns*; do not copy another site's layout, artwork, text, or branding.

## Motion system: scroll-driven storytelling
Use motion to help tell the work's story. Specific requested techniques: **scroll-triggered animation**, **scroll-linked animation**, **parallax**, **sticky/pinned sections**, **scrubbed transitions**, and **kinetic typography**.

Recommended implementation:
- For complex orchestrated scenes: `gsap`, `ScrollTrigger`, and `@gsap/react` with correct client-only boundaries and `useGSAP` cleanup. Register plugins correctly; use GSAP `matchMedia` for desktop/mobile and `prefers-reduced-motion` fallbacks.
- For simple reveals/hover states prefer CSS or lightweight Motion for React **only if** it adds meaningful value. Do not redundantly use GSAP and Motion to animate the same properties/element.
- Default to native browser scrolling. Do not install scroll-hijacking libraries or Lenis unless a concrete design/performance case is made and accessibility is preserved.
- Animate `transform` and `opacity` where possible; avoid scroll-event-driven React state updates, huge blurs, expensive layout changes, or always-on canvases.
- Images must have explicit aspect ratios/sizes to prevent layout shift. Manage `ScrollTrigger.refresh()` only when needed after media/layout changes.

Required signature interactions:
1. **Hero**: typographic entrance with staggered reveal; subtle geometric/engineering visual that responds to scroll or pointer without stealing focus; prominent intro and clear calls to action.
2. **Featured work**: a polished desktop scroll-story section where project media and explanatory text transform as the reader advances. Use sticky/pinned behavior judiciously, with progress cues. On narrow screens use a beautiful standard vertical layout; never force cramped horizontal scrolling.
3. **Experience**: a vertical timeline with a line/progress treatment tied to scrolling and crisp individual role reveals. Each role must foreground specific contributions, not just a job title.
4. **Case-study detail pages**: section transitions, a large opening visual, and useful before/after or architecture visuals **only if supported by real project assets**.
5. **Microinteractions**: meaningful hover states, link underline movement, subtle magnetic/tilt effects only when tasteful and pointer-safe.

Motion is *progressive enhancement*: reading and navigation must fully work with JavaScript constrained, with reduced motion, and on low-powered devices. Respect `prefers-reduced-motion: reduce`: do not pin, scrub, auto-slide, or parallax in that mode; content remains visible. Never trap scrolling or break browser back/forward behavior.

## Information architecture
Implement a compelling single-page narrative plus individual case studies.

Home page recommended order:
1. **Hero** — name, truthful role, positioning statement (“I build thoughtful web products and interactive experiences”), GitHub / résumé / contact CTAs, tasteful availability label only when confirmed.
2. **Selected Work** — 2 strong featured case studies first; then other verified projects. Explain problem, role, main technical decisions, tech stack, outcomes/status, and links.
3. **Experience** — internships at Fekrat Al Youm Technologies and Techryt with date ranges, actual deliverables, responsibilities, and technologies.
4. **Capabilities** — frontend, backend, data, interactive/game development, and AI-assisted engineering, each backed by examples instead of an arbitrary wall of icons.
5. **About / Education** — concise narrative and verified education.
6. **Contact** — clear, tasteful closing scene with direct email, GitHub, and LinkedIn links.

Case-study routes: `/work/[slug]` for verified work (for example `/work/hotel-reservation-system` and `/work/zero-last-directive`). Use static content and `generateStaticParams` when suitable. Structure each case study as **Context → Problem → My role → Approach/Architecture → Challenges and decisions → Result/status → Technology → Links**. Include visuals/diagrams with captions where justified. No fake business KPIs or fake client quotes.

## Verified content — treat as source material, not marketing fiction
The following details are from the user's previously supplied CV and project discussion. Preserve exact date ranges and statuses. Edit/add details only with clear supporting information. Create centralized typed content files so the user can add more work and internships easily.

### Identity & contact
- Name: **Hasan Itani**.
- Professional description: **Full-Stack Software Engineer** (also a game developer).
- Location: Lebanon. Avoid publishing residential locality, personal phone number, or other unnecessary private information.
- GitHub: `https://github.com/Hasan-Itani`.
- LinkedIn: `https://www.linkedin.com/in/hasan-itani-6bb203268/`.
- Email (from CV; ask user before making it public if uncertain): `itanihasan64@gmail.com`.
- Education: Bachelor of Science in Computer Science, Lebanese International University, graduated **February 2025**. GPA **3.64** appears on CV but grading scale is not established; omit GPA unless verified/desired.

### Professional experience
**Fekrat Al Youm Technologies — Full-Stack Developer Intern, May–July 2026**
- Built full-stack features with Next.js, React, TypeScript, Tailwind CSS, NestJS, PostgreSQL, Prisma, and Supabase.
- Developed responsive customer, admin, restaurant-owner, and yacht-provider dashboards with role-based access control.
- Worked on reservation, review, customer feedback, profile, notification, and user-management workflows.
- Integrated backend APIs and authentication; worked on Prisma schema/migrations; resolved merge conflicts, improved media handling, and validated builds before deployment.
- Do **not** imply sole ownership or disclose proprietary employer source code/screenshots without authorization.

**Techryt — Frontend Developer Intern, August 2025–January 2026**
- Built and maintained responsive, reusable React / Next.js / Tailwind CSS components.
- Implemented interactive “spin-and-win” interface features with state handling and user feedback.
- Contributed to feature delivery, debugging, usability, and responsive layout refinements.
- No invented metrics, business outcomes, customer names, or confidential implementation details.

### Featured project 1
**Hotel Reservation System — Full-Stack Web Application — In progress**
- Stack: Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Prisma.
- CV describes sign-up/login, email verification, password reset, account lockout, secure sessions, room search/booking, and guest dashboards; admin workflows include room, reservation, guest, payment, inquiry, staff, and audit-log management. Security-related work includes rate limiting and concurrency safeguards; transactional emails are also described.
- Repository: `https://github.com/Hasan-Itani/hotel-reservation-system`.
- Label prominently **In progress**. Verify implemented features against repository before treating them as completed; if features are incomplete, describe as “in development” or “planned” accurately.

### Featured project 2
**ZERO: LAST DIRECTIVE — Android Action Game — Closed testing**
- Built with Godot 4 / GDScript.
- 2D action game featuring 40 missions across five chapters, enemy AI, four difficulty levels, upgrades, and save systems.
- Worked on gameplay regression testing, frame-rate and CPU-time profiling, debugging, and fixes from testers' feedback.
- In closed testing through Google Play Console as described in CV; public release planned, not established as completed.
- `itanigames.com` is associated with the game / its legal pages. Do not claim that a public download, playable web demo, or public store listing is available unless confirmed.

### Other work to validate and potentially include
- **Apples & Worms** — browser-based manual/auto game with configurable grids, rounds, wagers, prize mechanics, and custom UI. Known from prior collaboration, but inspect project/repository before asserting exact feature completion or making a public demo link.
- **Earlier PHP/MySQL hotel prototype** — guest/room/reservation flow with availability checks, authentication, and checkout. Distinguish this from the newer Next.js/PostgreSQL Hotel Reservation System; do not present as a separate production product if it was only a prototype.
- The GitHub account may contain other repositories; **do not guess their purpose from their names**. Ask for/source README, code, screenshots, or summaries before adding them.
- All additional internships, freelance work, client work, or achievements require evidence/user confirmation; use a clear `needsReview` content flag rather than inventing data.

## Writing rules
- Tell compelling, specific engineering stories. Use first person where appropriate, e.g. “I implemented ...” only when evidence supports it; otherwise “I contributed to ...”.
- Be confident but accurate. Do not call the owner a senior engineer, claim employer conversion metrics, or add fictitious clients, badges, awards, numbers, testimonials, employment dates, degrees, or code links.
- For unfinished projects, distinguish built vs in progress vs planned. Do not fabricate screenshot images or portray abstract illustration as a real product screenshot.
- Each work item should answer: **What was the challenge? What exactly did I do? What tools were involved? How was the result verified?**
- Prefer short, punchy headings with readable detailed case studies. No Lorem Ipsum anywhere in a finished page.

## Technical architecture
- App Router + TypeScript strict mode; use Server Components by default, Client Components only around interactions/animations.
- Organize e.g. `src/app`, `src/components/{layout,sections,motion,ui}`, `src/content/{projects,experience,site}.ts`, `src/lib`, `src/styles` as needed. Do not create folders merely for ceremony.
- Define typed `Project` and `Experience` records with fields such as `slug`, `title`, `role`, `period`, `status`, `summary`, `contributions`, `tech`, `media`, `links`, `featured`, `needsReview`, and `caseStudy` where appropriate. Keep all copy editable in data modules, not scattered through JSX.
- Use semantic HTML, responsive Tailwind utilities, CSS custom properties/design tokens, and stable component APIs. Prefer small focused components over one giant `page.tsx`.
- Use Next `Image` for real images and `next/font` for self-hosted fonts. Use local image assets under `public` with descriptive names, proper attribution/rights and alt text. Until the user provides screenshots, create truthful CSS/SVG/typographic *illustrations*, clearly not presented as product screenshots.
- Integrate metadata, canonical URL (`https://dev.itanigames.com` after deployment), sitemap, robots directives, Open Graph image, useful page titles/descriptions, and appropriate `Person` JSON-LD without oversharing private info. Avoid indexing preview/staging deployments where applicable.
- Prefer a direct `mailto:` contact CTA; avoid building an unnecessary API/database or collecting messages unless requested. Never expose credentials/secrets.
- Do not introduce unnecessary UI libraries, giant component kits, WebGL/Three.js, trackers, or dependencies without a clear need. Prefer thoughtful custom visual components.
- Preserve compatibility with React Compiler; avoid impure rendering and unnecessary escape hatches.

## Responsiveness / accessibility / performance
- Test mobile around 375–390px, tablet around 768px, desktop at 1280–1440px, and wide screens; check touch and keyboard inputs.
- Aim for WCAG 2.2 AA: semantic landmarks/headings, meaningful alt text, visible focus, proper contrast, usable interactive targets, readable long-form text, correct tab order, and skip-to-content link.
- Respect reduced motion and avoid automated audio/video. No custom cursor that hides the actual pointer or makes touch navigation confusing.
- Avoid horizontal overflow and inaccessible sticky layers. Sticky/pinned scroll scenes must degrade gracefully on mobile and if JavaScript is unavailable.
- Optimize fonts, imagery, code splitting, and client bundle size. Use dynamic imports if a heavy effect is below the fold. Aim for high Lighthouse scores and good Core Web Vitals, but never pretend benchmark results without measuring them.

## Development process: mandatory for coding agents
1. Inspect existing files (`package.json`, `src/app`, `AGENTS.md`, git state), use installed versions, and make a succinct plan before significant changes.
2. Implement a cohesive **complete** vertical slice, not a disconnected visual demo. Use realistic, verified content.
3. First get a readable polished responsive site; then add the cinematic motion system; then refine case studies/SEO/performance.
4. Do not silently delete or rewrite previous functional code. Avoid broad refactors unrelated to the task.
5. Run appropriate checks before reporting done: `npx tsc --noEmit`, `npx eslint .` (or configured lint command), and `npm run build`. Run available tests. Investigate and fix errors; do not suppress them with `any`, lint disables, or broad casts.
6. Audit at least the main desktop/mobile layout and reduced-motion behavior; report what was actually tested versus not tested.
7. End each implementation phase with a concise summary of files changed, commands/tests run, remaining factual assets/details needed, and any tradeoffs. Do not fabricate a successful build or test.

## Definition of done
A visitor can immediately understand the owner; see the two real internships and their contributions; browse at least two substantive verified project case studies; reach GitHub, LinkedIn, and contact; navigate comfortably on mobile and desktop; experience purposeful scrolling effects when motion is enabled; access all content with reduced motion; and see no fake details or broken links. The repo passes TypeScript, lint, and production build checks.
