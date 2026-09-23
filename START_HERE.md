# Start Here — Aditya Kumar Portfolio

This is the exact setup guide for running the portfolio again on a Windows computer.

## 1. Install the prerequisites

Install these tools first:

- Node.js LTS from <https://nodejs.org/>
- Git from <https://git-scm.com/downloads>
- VS Code from <https://code.visualstudio.com/>

After installing Node.js, open a new PowerShell window and confirm that Node and npm are available:

```powershell
node --version
npm --version
```

Node.js LTS is recommended. The project is an Astro static site and does not need a database, backend server, environment variables, or authentication.

## 2. Get the project

To clone the GitHub repository for the first time:

```powershell
git clone https://github.com/AdityaSharma-05/Portfolio.git
Set-Location .\Portfolio
```

If the project is already on the computer:

```powershell
Set-Location D:\Potfolio
git pull origin main
```

If your folder is in a different location, replace `D:\Potfolio` with that folder.

## 3. Install dependencies

Run this once after cloning, or whenever `package.json` or `package-lock.json` changes:

```powershell
npm install
```

For a repeatable clean install in CI or when troubleshooting dependency state, use:

```powershell
Remove-Item -Recurse -Force .\node_modules
npm ci
```

Only run the cleanup command inside this project folder.

## 4. Start the development website

Run:

```powershell
npm run dev
```

Astro normally starts at:

```text
http://localhost:4321
```

If that port is busy, Astro prints another local URL in the terminal. Open the URL it prints. Keep the terminal running while you work, and press `Ctrl+C` to stop the development server.

The main pages are:

- `http://localhost:4321/`
- `http://localhost:4321/about`
- `http://localhost:4321/projects`

## 5. Make content changes

Use these files for normal edits:

- [`src/content.ts`](./src/content.ts) — profile, education, skills, social links, and curated projects
- [`src/pages/index.astro`](./src/pages/index.astro) — homepage copy and structure
- [`src/pages/about.astro`](./src/pages/about.astro) — About page copy and structure
- [`src/pages/projects.astro`](./src/pages/projects.astro) — Projects page copy and structure
- [`src/styles/global.css`](./src/styles/global.css) — layout, colors, typography, responsive behavior, and effects
- [`public/images/`](./public/images/) — local image assets

For detailed editing rules, read [`WEBSITE_GUIDE.md`](./WEBSITE_GUIDE.md).

## 6. Validate the project

Before considering a change complete, run:

```powershell
npm run build
```

The command must finish with `Complete!` and must not report build errors.

For a production-style local check:

```powershell
npm run build
npm run preview
```

Then open the preview URL shown in the terminal, usually:

```text
http://localhost:4321
```

Check the homepage, About page, Projects page, navigation, portrait images, project links, mobile layout, and a missing route before publishing.

## 7. Update ongoing GitHub projects

The homepage can display repositories marked with the `portfolio-ongoing` topic.

1. Open a public repository owned by `AdityaSharma-05`.
2. Add the GitHub topic `portfolio-ongoing`.
3. Run the **Sync ongoing projects** workflow in the Portfolio repository, or wait for its daily run.

When a project is complete, remove `portfolio-ongoing` and add `portfolio-completed`. The workflow will place it after the curated projects and generate its number.

## 8. Commit and publish a finished change

Check the changed files:

```powershell
git status --short
```

Review the diff:

```powershell
git diff
```

Stage the intended files, create a Conventional Commit, and push:

```powershell
git add <file-or-folder>
git commit -m "feat: describe the completed change"
git push origin main
```

Confirm that publishing succeeded:

```powershell
git status --short
git log --oneline -1
```

The working tree should be clean after the push. Never commit passwords, API keys, private credentials, or unpublished personal information.

## Troubleshooting

### `npm` or `node` is not recognized

Install Node.js LTS, close PowerShell, open a new PowerShell window, and run:

```powershell
node --version
npm --version
```

### Dependencies are missing or corrupted

Inside `D:\Potfolio`, run:

```powershell
Remove-Item -Recurse -Force .\node_modules
npm ci
npm run build
```

### Port 4321 is already in use

Stop the old development server with `Ctrl+C`, or start Astro on another port:

```powershell
npm run dev -- --port 4322
```

Then open `http://localhost:4322`.

### Git push is rejected

First update the local branch:

```powershell
git pull --rebase origin main
```

Resolve any conflicts carefully, run `npm run build`, then push again:

```powershell
git push origin main
```

Do not force-push.

## Project commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the static production site |
| `npm run preview` | Preview the production build locally |
| `git pull origin main` | Download the latest published changes |
| `git push origin main` | Publish committed changes |
