import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Input is the built-in ImageGen output paths, project ids, and exact prompts.
let input = "";
for await (const chunk of process.stdin) input += chunk;
const assets = JSON.parse(input);
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = resolve(root, "data/projects.json");
const catalog = JSON.parse(readFileSync(catalogPath, "utf8"));
const preserved = new Set([
  "esports-tournament",
  "trip-bharat",
  "family-chatbot",
  "podjam",
  "ai-study-hub",
]);
const output = resolve(root, "public/thumbnail/generated");
mkdirSync(output, { recursive: true });
const manifestPath = resolve(root, "docs/cover-generation.json");
let manifest;
try {
  manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
} catch {
  manifest = {
    method: "Built-in ImageGen",
    preservedProjects: [...preserved],
    covers: [],
  };
}
for (const asset of assets) {
  const project = catalog.find((item) => item.id === asset.id);
  if (!project || preserved.has(asset.id))
    throw new Error(`Not authorized to replace ${asset.id}`);
  if (!asset.source || !asset.prompt)
    throw new Error(`Missing generated image or prompt: ${asset.id}`);
  const filename = `${asset.id}-cover-2026-10.webp`;
  const destination = resolve(output, filename);
  // Format compression only: preserve the complete generated composition and pixel dimensions.
  const metadata = await sharp(asset.source).metadata();
  await sharp(asset.source).webp({ quality: 88 }).toFile(destination);
  project.thumbnail = `/thumbnail/generated/${filename}`;
  const record = {
    project: asset.id,
    cover: project.thumbnail,
    original: basename(asset.source),
    width: metadata.width,
    height: metadata.height,
    prompt: asset.prompt,
  };
  manifest.covers = manifest.covers.filter((item) => item.project !== asset.id);
  manifest.covers.push(record);
  console.log(`Installed ${project.name}: ${filename}`);
}
writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
