import type { Metadata } from "next";
import ForgeBotProject from "@/components/ForgeBotProject";

export const metadata: Metadata = {
  title: "LLM ForgeBot",
  description:
    "An AI builder prototype with locally validated document ingestion and experimental model tooling. Case study by Haresh Sainaath S.",
  alternates: { canonical: "/llm-forgebot" },
  openGraph: {
    title: "LLM ForgeBot - Haresh Sainaath",
    description:
      "An AI builder prototype with locally validated document ingestion and experimental model tooling.",
    url: "/llm-forgebot",
    images: ["/thumbnail/generated/llm-forgebot-cover-2026-10.webp"],
  },
};

export default function LLMForgeBotPage() {
  return <ForgeBotProject />;
}
