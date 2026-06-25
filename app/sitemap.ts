import type { MetadataRoute } from "next";

const BASE_URL = "https://haresh-sainaath.vercel.app";

const ROUTES = [
  "",
  "/llm-forgebot",
  "/ai-study-hub",
  "/pharma-project",
  "/podjam-project",
  "/family-chatbot",
  "/esports-project",
  "/timetable-project",
  "/trip-bharat",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
