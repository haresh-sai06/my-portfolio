import { writeFileSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const repositories = [];
for (let page = 1; ; page++) {
  const response = await fetch(
    `https://api.github.com/users/haresh-sai06/repos?per_page=100&sort=pushed&page=${page}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "Haresh-Portfolio-Content-Refresh",
      },
      signal: AbortSignal.timeout(20000),
    },
  );
  if (!response.ok)
    throw new Error(
      `GitHub returned ${response.status}; existing catalog and snapshot have been preserved.`,
    );
  const batch = await response.json();
  if (!Array.isArray(batch))
    throw new Error("Invalid GitHub response; existing files preserved.");
  repositories.push(...batch.filter((repository) => !repository.private));
  if (batch.length < 100) break;
}
const catalogPath = resolve(root, "data/projects.json");
const projects = JSON.parse(readFileSync(catalogPath, "utf8"));
const snapshot = repositories
  .filter((repository) => !repository.fork && !repository.archived)
  .map((repository) => ({
    name: repository.name,
    url: repository.html_url,
    updatedAt: repository.pushed_at,
    ...(repository.description?.trim()
      ? { description: repository.description.trim().replaceAll("\u2014", "-") }
      : {}),
    ...(repository.language ? { language: repository.language } : {}),
  }));
for (const project of projects) {
  const repository = snapshot.find(
    (item) => item.url === (project.repository ?? project.href),
  );
  if (repository) project.updatedAt = repository.updatedAt;
}
writeFileSync(
  resolve(root, "data/github.json"),
  `${JSON.stringify({ repositories: snapshot }, null, 2)}\n`,
);
writeFileSync(catalogPath, `${JSON.stringify(projects, null, 2)}\n`);
console.log(
  `Refreshed ${snapshot.length} original public repositories. Curated descriptions preserved; verify new projects against their READMEs before adding them.`,
);
