import type { Metadata } from "next";
import EsportsTournamentProject from "@/components/EsportsTournamentProject";

export const metadata: Metadata = {
  title: "Esports Tournament Platform",
  description:
    "Full-stack web app for hosting and managing large-scale Free Fire esports tournaments with team registration, real-time updates, and an admin dashboard. Case study by Haresh Sainaath.",
  alternates: { canonical: "/esports-project" },
  openGraph: {
    title: "Esports Tournament Platform — Haresh Sainaath",
    description:
      "Full-stack platform for large-scale esports tournaments with real-time updates and admin tooling.",
    url: "/esports-project",
  },
};

export default function EsportsTournamentProjectPage() {
  return <EsportsTournamentProject />;
}
