import type { Metadata } from "next";
import AiStudyHubProject from "@/components/AiStudyHubProject";

export const metadata: Metadata = {
  title: "AI Study Hub",
  description:
    "Exam-oriented AI platform that converts raw notes, PDFs, and PPTs into structured study kits. Case study by Haresh Sainaath.",
  alternates: { canonical: "/ai-study-hub" },
  openGraph: {
    title: "AI Study Hub — Haresh Sainaath",
    description:
      "Exam-oriented AI platform that converts raw notes, PDFs, and PPTs into structured study kits.",
    url: "/ai-study-hub",
    images: ["/thumbnail/AI-study-hub.png"],
  },
};

export default function AiStudyHubPage() {
  return <AiStudyHubProject />;
}
