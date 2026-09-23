# AI Agent Instructions — Aditya Kumar Portfolio

## Project overview

This is a static Astro portfolio for Aditya Kumar.

The site is a personal portfolio, not a SaaS product, dashboard, business site, or backend application.

Main routes:

- `/` — homepage
- `/about` — personal background, skills, education, and focus
- `/projects` — project showcase
- `/404.html` — custom not-found page

## Technology

- Astro
- TypeScript where useful
- Modern CSS
- GSAP, Three.js, and Lenis are available for future interaction work
- Lucide icons through `lucide-astro`
- Static output for Cloudflare Pages/Workers-style deployment
- No backend
- No database
- No authentication
- No CMS

## Important source files

- `src/content.ts` — centralized personal information, projects, skills, education, and social links
- `src/layouts/Layout.astro` — shared navigation, footer, metadata, cursor, and reveal behavior
- `src/pages/index.astro` — homepage content
- `src/pages/about.astro` — About page content
- `src/pages/projects.astro` — Projects page content
- `src/components/ProjectList.astro` — reusable project presentation and project visuals
- `src/components/Marquee.astro` — stationary editorial statement component
- `src/styles/global.css` — complete visual system and responsive styles
- `public/images/` — local image assets
- `public/images/aditya-kumar.png` — transparent profile portrait used in the homepage hero

## Content update rules

Project information must be updated in `src/content.ts` first.

Do not repeat project names, descriptions, technologies, or links directly in page files unless the layout genuinely requires unique supporting copy.

Unknown personal information must remain an obvious placeholder, such as:

- `[EMAIL]`
- `[LOCATION]`
- `[COLLEGE NAME]`
- `[LINKEDIN URL]`

Do not invent education, employment, achievements, statistics, clients, awards, or personal claims.

## Design system

Keep the visual identity restrained:

- Warm white/paper background
- Black text and dark sections
- Violent red accent: `#FF1744`
- Clash Display typography
- Generous whitespace
- Editorial asymmetric layouts
- Concise, understandable copy

Do not introduce random gradients, unrelated accent colors, generic card grids, stock images, or dashboard-like UI.

## Interaction rules

Interactions should feel intentional and lightweight:

- Use transforms and opacity instead of layout-heavy animation.
- Respect `prefers-reduced-motion`.
- Do not require hover for essential information or navigation.
- Keep touch devices fully usable.
- Custom cursor behavior must remain optional and desktop-only.
- Project visuals should remain decorative and must not block project links.

Existing project visual types:

- `model` — interactive generative text visualization
- `voice` — interactive speech-recognition visualization
- `summary` — interactive text-summarization visualization

If adding a new visual type, update both `ProjectList.astro` and `global.css`, and keep a graceful static fallback.

## Image rules

Use local images from `public/images/`.

Do not download or copy third-party images without permission. If a reference image is supplied from another website, create an original inspired visual instead unless the user confirms usage rights.

Use descriptive `alt` text for meaningful images. Decorative visuals should use `aria-hidden="true"` or an appropriate accessible label.

## Workflow for future changes

1. Inspect the existing files before editing.
2. Reuse the current component and content architecture.
3. Make the smallest complete change that satisfies the request.
4. Preserve responsive behavior and reduced-motion behavior.
5. Run:

   ```bash
   npm run build
   ```

6. If the change affects interaction or layout, verify it in the local browser at:

   ```text
   http://localhost:4321
   ```

7. Do not remove or overwrite unrelated user changes.

## Quality checklist

Before finishing a change, confirm:

- The requested behavior is visible.
- Desktop and mobile layouts remain usable.
- Navigation and project links still work.
- No horizontal overflow was introduced.
- Images load from valid paths.
- Accessibility labels remain meaningful.
- `npm run build` succeeds.
