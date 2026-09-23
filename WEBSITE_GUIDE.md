# Aditya Kumar Portfolio — Editing Guide

This file explains how to update the portfolio without redesigning the site.

## Open the project

Open this folder in VS Code:

```text
D:\Potfolio
```

Install dependencies only if needed:

```bash
npm install
```

Start the local website:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:4321
```

Create a production build to check for errors:

```bash
npm run build
```

## Update your personal information

Open [`src/content.ts`](./src/content.ts).

Edit the `site` object:

- `name` — your full name
- `eyebrow` — the short role shown on the homepage
- `intro` — your short introduction
- `email` — your email address
- `location` — your location
- `socials` — GitHub, LinkedIn, and email links

Replace placeholder values such as `[EMAIL]`, `[LOCATION]`, and `[LINKEDIN URL]`.

## Add or update projects

All project information is stored in the `projects` array inside [`src/content.ts`](./src/content.ts).

Each project can contain:

```ts
{
  number: '04',
  name: 'Project name',
  description: 'A concise description of the project.',
  technologies: ['Python', 'AI'],
  year: '2026',
  github: 'https://github.com/username/project',
  accent: 'summary',
}
```

Supported `accent` values currently used by the visual system:

- `model` — text-model visualization
- `voice` — speech-recognition visualization
- `summary` — summarizer visualization

For a new project, use one of these values unless a new visual style is added in [`src/components/ProjectList.astro`](./src/components/ProjectList.astro).

The homepage and projects page automatically use the same project data, so you do not need to edit both pages.

## Automatically show ongoing GitHub projects

The homepage includes a **Currently building** section.

To add a public repository:

1. Open the repository on GitHub.
2. Add the topic `portfolio-ongoing`.
3. Run the `Sync ongoing projects` workflow from the repository Actions tab, or wait for the daily sync.

The workflow updates [`src/data/ongoing-projects.json`](./src/data/ongoing-projects.json) from repositories owned by `AdityaSharma-05`. It uses the repository name, description, primary language, update year, and GitHub URL. Forks and archived repositories are ignored.

When a project is complete, remove `portfolio-ongoing` and add `portfolio-completed` to the GitHub repository. It will automatically move into Selected Work and receive the next successive project number. Projects still in development show `WIP` rather than a number.

## Add project images

Place image files in:

```text
public/images/
```

Example:

```text
public/images/my-project.webp
```

Then add an image field to the project object and update [`src/components/ProjectList.astro`](./src/components/ProjectList.astro) if the project visual should use that image.

Use optimized `.webp` or `.avif` images where possible. Avoid very large files.

## Replace the profile photo

The current portrait is:

[`public/images/aditya-kumar.png`](./public/images/aditya-kumar.png)

To replace it, use a transparent PNG or WebP with the same filename. The homepage will continue to use it automatically.

The portrait appears in:

[`src/pages/index.astro`](./src/pages/index.astro)

## Update skills and education

In [`src/content.ts`](./src/content.ts):

- Edit the `skills` array to add or remove skills.
- Edit the `education` object to update your degree, college, and years.

The About page reads this centralized data automatically.

## Update page copy

Page-specific copy is located here:

- Homepage: [`src/pages/index.astro`](./src/pages/index.astro)
- About page: [`src/pages/about.astro`](./src/pages/about.astro)
- Projects page: [`src/pages/projects.astro`](./src/pages/projects.astro)
- Footer and navigation: [`src/layouts/Layout.astro`](./src/layouts/Layout.astro)

## Update colors and layout

The main design system is in:

[`src/styles/global.css`](./src/styles/global.css)

Main CSS variables are at the top of the file:

```css
--paper: #f5f4f0;
--ink: #111;
--red: #ff1744;
--line: #d8d6d0;
```

Keep the palette limited to paper, black, and red so the visual identity stays consistent.

## Change navigation or footer links

Edit [`src/layouts/Layout.astro`](./src/layouts/Layout.astro).

The shared layout controls:

- Header navigation
- Mobile menu
- Footer
- SEO title and description
- Custom cursor
- Scroll reveal behavior

## Useful checks before publishing

1. Run `npm run build`.
2. Check `/`, `/about`, `/projects`, and a missing route.
3. Test the mobile menu.
4. Test project and social links.
5. Check the site with reduced motion enabled.
6. Confirm placeholder text has been replaced.
7. Confirm images have meaningful `alt` text.

## Important

- Do not add backend, database, authentication, or CMS code for this static portfolio.
- Keep project content in [`src/content.ts`](./src/content.ts) instead of repeating it in page files.
- Do not commit private credentials or unpublished personal information.
