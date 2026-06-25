import type { Metadata } from "next";
import FamilyChatbotProject from "@/components/FamilyChatbotProject";

export const metadata: Metadata = {
  title: "Family Chatbot",
  description:
    "An emotionally intelligent AI companion that helps families stay connected, supported, and cared for through warm, daily conversations. Case study by Haresh Sainaath.",
  alternates: { canonical: "/family-chatbot" },
  openGraph: {
    title: "Family Chatbot — Haresh Sainaath",
    description:
      "Emotionally intelligent AI companion designed to keep families connected and supported.",
    url: "/family-chatbot",
  },
};

export default function Page() {
  return <FamilyChatbotProject />;
}
