import type { Metadata } from "next";
import PodjamProject from "@/components/PodjamProject";

export const metadata: Metadata = {
  title: "PodJam",
  description:
    "Real-time social music streaming app where friends jam together with perfect sync, live chat, and shareable room links. Case study by Haresh Sainaath.",
  alternates: { canonical: "/podjam-project" },
  openGraph: {
    title: "PodJam — Haresh Sainaath",
    description:
      "Real-time social music streaming with perfect sync, live chat, and shareable rooms.",
    url: "/podjam-project",
    images: ["/thumbnail/podjam.png"],
  },
};

export default function PodjamProjectPage() {
  return <PodjamProject />;
}
