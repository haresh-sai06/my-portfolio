import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const projects = JSON.parse(
  readFileSync(resolve(root, "data/projects.json"), "utf8"),
);
const issues = [];
const ids = new Set();
const categories = new Set([
  "AI & ML",
  "Full-stack",
  "Tools & Research",
  "Voice & Product",
]);
const placeholder = /\b(lorem ipsum|coming soon|to be added|todo|tbd)\b/i;
const checkText = (value, label) => {
  if (typeof value !== "string" || !value.trim() || placeholder.test(value))
    issues.push(`${label}: missing or placeholder content`);
  if (typeof value === "string" && value.includes("\u2014"))
    issues.push(`${label}: em dash in website copy`);
};
if (!projects.length) issues.push("Project catalog is empty");
for (const project of projects) {
  for (const field of [
    "id",
    "name",
    "summary",
    "category",
    "status",
    "color",
    "href",
    "thumbnail",
  ])
    checkText(project[field], `${project.id ?? "Project"}.${field}`);
  if (ids.has(project.id)) issues.push(`Duplicate project: ${project.id}`);
  ids.add(project.id);
  if (!categories.has(project.category))
    issues.push(`${project.id}: unknown filter category`);
  if (!/^#[0-9a-f]{6}$/i.test(project.color))
    issues.push(`${project.id}: invalid artwork color`);
  if (!Array.isArray(project.tags) || !project.tags.length)
    issues.push(`${project.id}: missing technologies`);
  else
    project.tags.forEach((tag, i) =>
      checkText(tag, `${project.id}.tags[${i}]`),
    );
  if (
    project.thumbnail &&
    !existsSync(resolve(root, "public", project.thumbnail.slice(1)))
  )
    issues.push(`${project.id}: missing image`);
  if (project.updatedAt && Number.isNaN(Date.parse(project.updatedAt)))
    issues.push(`${project.id}: invalid activity date`);
  if (project.href?.startsWith("/projects/")) {
    if (project.href !== `/projects/${project.id}`)
      issues.push(`${project.id}: detail route does not match id`);
    checkText(project.overview, `${project.id}.overview`);
    if (!project.highlights?.length)
      issues.push(`${project.id}: missing build details`);
    else
      project.highlights.forEach((item, i) =>
        checkText(item, `${project.id}.highlights[${i}]`),
      );
    if (
      !/^https:\/\/github\.com\/haresh-sai06\/.+/.test(project.repository ?? "")
    )
      issues.push(`${project.id}: missing public source`);
  } else if (project.href?.startsWith("/")) {
    if (!existsSync(resolve(root, "app", project.href.slice(1), "page.tsx")))
      issues.push(`${project.id}: broken local route`);
  } else if (!/^(https:\/\/|mailto:)/.test(project.href ?? ""))
    issues.push(`${project.id}: invalid destination`);
  if (project.isPrivate && !project.href?.startsWith("mailto:"))
    issues.push(`${project.id}: private work must use an enquiry link`);
}
for (let i = 1; i <= 240; i++) {
  if (
    !existsSync(
      resolve(
        root,
        `public/frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`,
      ),
    )
  )
    issues.push(`Missing intro frame ${i}`);
}
for (let i = 1; i <= 6; i++) {
  if (!existsSync(resolve(root, `public/photos/photo-${i}.jpeg`)))
    issues.push(`Missing portrait ${i}`);
}
if (!existsSync(resolve(root, "public/resume/Haresh_Sainaath_Resume.pdf")))
  issues.push("Missing resume PDF");
const profile = readFileSync(resolve(root, "lib/profile.ts"), "utf8");
const resumePath = profile.match(/href:\s*"([^"]+)"/)?.[1];
if (
  !resumePath?.startsWith("/resume/") ||
  !existsSync(resolve(root, "public", resumePath.slice(1)))
) {
  issues.push("Missing active resume download");
} else {
  const pdf = readFileSync(resolve(root, "public", resumePath.slice(1)));
  if (pdf.length < 1000 || pdf.subarray(0, 5).toString() !== "%PDF-")
    issues.push("Active resume is empty or invalid");
}
for (const directory of ["app", "components"]) {
  const visit = (path) => {
    for (const entry of readdirSync(path, { withFileTypes: true })) {
      const file = resolve(path, entry.name);
      if (entry.isDirectory()) visit(file);
      else if (/\.(tsx?|css)$/.test(entry.name)) {
        const source = readFileSync(file, "utf8");
        if (/\u2014|&mdash;|&#(?:8212|x2014);/i.test(source))
          issues.push(`${file}: em dash in website source`);
        if (/href\s*=\s*["'](?:#|)["']/.test(source))
          issues.push(`${file}: empty link destination`);
      }
    }
  };
  visit(resolve(root, directory));
}
if (issues.length) {
  console.error(issues.join("\n"));
  process.exit(1);
}
console.log(
  `Content check passed: ${projects.length} complete projects, valid routes, portraits, 240 intro frames, and resume.`,
);
