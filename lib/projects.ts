import catalog from "@/data/projects.json";

export interface Project {
  id: string;
  name: string;
  summary: string;
  category: string;
  status: string;
  color: string;
  tags: string[];
  href: string;
  thumbnail?: string;
  repository?: string;
  updatedAt?: string;
  overview?: string;
  highlights?: string[];
  featured?: boolean;
  isPrivate?: boolean;
}

export const PROJECTS: Project[] = catalog;
export const CATEGORIES = [
  "All work",
  "AI & ML",
  "Full-stack",
  "Tools & Research",
  "Voice & Product",
];

export function formatProjectDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(date));
}
