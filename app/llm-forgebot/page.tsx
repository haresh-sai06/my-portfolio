import type { Metadata } from "next";
import ForgeBotProject from "@/components/ForgeBotProject";

export const metadata: Metadata = {
  title: "LLM ForgeBot",
  description:
    "Multi-purpose AI toolkit with LLM-powered automation and analytics. Case study by Haresh Sainaath.",
  alternates: { canonical: "/llm-forgebot" },
  openGraph: {
    title: "LLM ForgeBot - Haresh Sainaath",
    description:
      "Multi-purpose AI toolkit with LLM-powered automation and analytics.",
    url: "/llm-forgebot",
    images: ["/thumbnail/generated/llm-forgebot-cover-2026-10.webp"],
  },
};

export default function LLMForgeBotPage() {
  return <ForgeBotProject />;
}
