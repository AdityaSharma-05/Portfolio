import { mkdir, readFile, writeFile } from 'node:fs/promises';

const username = 'AdityaSharma-05';
const endpoint = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`;
const response = await fetch(endpoint, { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'aditya-portfolio-sync' } });

if (!response.ok) {
  throw new Error(`GitHub repository request failed: ${response.status} ${response.statusText}`);
}

const repositories = await response.json();
const ongoing = repositories
  .filter((repo) => !repo.fork && !repo.archived && repo.topics?.includes('portfolio-ongoing'))
  .slice(0, 6)
  .map((repo) => ({
    name: repo.name.replaceAll('-', ' '),
    description: repo.description || 'An active project in progress.',
    technologies: repo.language ? [repo.language] : ['In progress'],
    year: new Date(repo.updated_at).getFullYear().toString(),
    html_url: repo.html_url,
  }));

const completed = repositories
  .filter((repo) => !repo.fork && !repo.archived && repo.topics?.includes('portfolio-completed'))
  .slice(0, 12)
  .map((repo) => ({
    name: repo.name.replaceAll('-', ' '),
    description: repo.description || 'A completed project by Aditya Kumar.',
    technologies: repo.language ? [repo.language] : ['Completed'],
    year: new Date(repo.updated_at).getFullYear().toString(),
    github: repo.html_url,
    accent: 'default',
  }));

const fallback = [{
  name: 'Your next project',
  description: 'Add the portfolio-ongoing topic to a public GitHub repository and it will appear here automatically.',
  technologies: ['In progress'],
  year: new Date().getFullYear().toString(),
  html_url: `https://github.com/${username}`,
}];

await mkdir('src/data', { recursive: true });
const target = 'src/data/ongoing-projects.json';
const previous = await readFile(target, 'utf8').catch(() => '');
const next = `${JSON.stringify(ongoing.length ? ongoing : fallback, null, 2)}\n`;
if (previous !== next) await writeFile(target, next);

const completedTarget = 'src/data/completed-projects.json';
const previousCompleted = await readFile(completedTarget, 'utf8').catch(() => '');
const nextCompleted = `${JSON.stringify(completed, null, 2)}\n`;
if (previousCompleted !== nextCompleted) await writeFile(completedTarget, nextCompleted);
