import type { Metadata } from "next";
import PharmaProject from "@/components/PharmaProject";

export const metadata: Metadata = {
  title: "Breit Med Inventory",
  description:
    "Production-grade medical inventory management system with normalized APIs, secure auth, and full CRUD workflows. Case study by Haresh Sainaath.",
  alternates: { canonical: "/pharma-project" },
  openGraph: {
    title: "Breit Med Inventory - Haresh Sainaath",
    description:
      "Production-grade medical inventory management with normalized APIs and full CRUD workflows.",
    url: "/pharma-project",
    images: ["/thumbnail/generated/breit-med-inventory-cover-2026-10.webp"],
  },
};

export default function PharmaProjectPage() {
  return <PharmaProject />;
}
