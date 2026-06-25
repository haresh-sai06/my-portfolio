"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RevealHeading from "@/components/ui/RevealHeading";

import ForgebotThumbnail from "@/public/thumbnail/Gemini_Generated_Image_x3yb9x3yb9x3yb9x.png";
import StudyHubThumbnail from "@/public/thumbnail/AI-study-hub.png";
import PodjamThumbnail from "@/public/thumbnail/podjam.png";
import FamilyChatbotThumbnail from "@/public/thumbnail/family-chatbot.png";
import EsportsThumbnail from "@/public/thumbnail/esports.png";
import TimetableThumbnail from "@/public/thumbnail/timetable.png";
import TripBharatThumbnail from "@/public/thumbnail/trip-bharat.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface Project {
  id: string;
  name: string;
  summary: string;
  thumbnail?: StaticImageData;
  color: string;
  externalUrl?: string;
  isPrivate?: boolean;
  tags?: string[];
}

const PROJECTS: Project[] = [
  {
    id: "llm-forgebot",
    name: "LLM ForgeBot",
    summary:
      "Multi-purpose AI toolkit with LLM-powered automation and analytics.",
    thumbnail: ForgebotThumbnail,
    color: "#8B5CF6",
    tags: ["LLM", "Next.js", "Automation"],
  },
  {
    id: "ai-study-hub",
    name: "AI Study Hub",
    summary:
      "Exam-oriented AI platform that turns raw notes, PDFs, and PPTs into structured study kits.",
    thumbnail: StudyHubThumbnail,
    color: "#22C55E",
    tags: ["AI", "EdTech", "RAG"],
  },
  {
    id: "podjam",
    name: "PodJam",
    summary:
      "Real-time social music streaming where friends jam together in perfect sync.",
    thumbnail: PodjamThumbnail,
    color: "#8B5CF6",
    tags: ["Real-time", "WebSockets"],
  },
  {
    id: "family-chatbot",
    name: "Family Chatbot",
    summary:
      "An emotionally intelligent AI companion that keeps families connected and supported.",
    thumbnail: FamilyChatbotThumbnail,
    color: "#EC4899",
    tags: ["LLM", "Care"],
  },
  {
    id: "esports-tournament",
    name: "Esports Tournament",
    summary:
      "Full-stack platform for large-scale Free Fire tournaments with real-time updates and an admin dashboard.",
    thumbnail: EsportsThumbnail,
    color: "#3B82F6",
    tags: ["Full-stack", "Real-time"],
  },
  {
    id: "skct-timetable",
    name: "SKCT Automated Timetable",
    summary:
      "Automated timetable generation that eliminates scheduling conflicts and optimizes resource allocation.",
    thumbnail: TimetableThumbnail,
    color: "#3B82F6",
    tags: ["Optimization", "TypeScript"],
  },
  {
    id: "trip-bharat",
    name: "Trip Bharat",
    summary:
      "Full-stack app for managing and displaying trip schedules for students and faculty.",
    thumbnail: TripBharatThumbnail,
    color: "#3B82F6",
    tags: ["Full-stack", "Travel"],
  },
  {
    id: "win-clicky",
    name: "Win-Clicky",
    summary:
      "Lightweight Windows automation utility in Rust — systems-level fluency outside the web stack.",
    color: "#F97316",
    externalUrl: "https://github.com/haresh-sai06/Win-Clicky",
    tags: ["Rust", "Devtool"],
  },
  {
    id: "hackaura",
    name: "HackAura",
    summary:
      "Hackathon project built end-to-end under time pressure. Python core, focused scope, shipped.",
    color: "#EAB308",
    externalUrl: "https://github.com/haresh-sai06/HackAura",
    tags: ["Python", "Hackathon"],
  },
  {
    id: "voice-agents",
    name: "Voice Agents",
    summary:
      "A line of conversational voice agents — including a dental clinic agent and a reusable setup pipeline.",
    color: "#06B6D4",
    isPrivate: true,
    tags: ["Voice AI", "LLM"],
  },
  {
    id: "stock-guardian",
    name: "Stock Guardian",
    summary:
      "Personal-finance guardrail tool with watchlists, alerts, and a clean reporting surface.",
    color: "#22C55E",
    isPrivate: true,
    tags: ["Finance", "TypeScript"],
  },
];

const INTERNAL_ROUTES: Record<string, string> = {
  "llm-forgebot": "/llm-forgebot",
  "ai-study-hub": "/ai-study-hub",
  "breit-med-inventory": "/pharma-project",
  podjam: "/podjam-project",
  "family-chatbot": "/family-chatbot",
  "esports-tournament": "/esports-project",
  "skct-timetable": "/timetable-project",
  "trip-bharat": "/trip-bharat",
};

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const initials = project.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <article
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project);
        }
      }}
      role="button"
      tabIndex={0}
      data-cursor={project.isPrivate ? "PRIVATE" : "VIEW"}
      className="group relative flex h-[60vh] w-[80vw] flex-shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl glass noise sm:w-[58vw] md:w-[46vw] lg:w-[34vw] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      {/* Media */}
      <div className="relative h-1/2 w-full overflow-hidden">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 80vw, 34vw"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center font-display text-5xl tracking-wide text-white/80"
            style={{
              background: `linear-gradient(135deg, ${project.color}40, ${project.color}10 55%, #0a0a0a)`,
            }}
          >
            {initials}
          </div>
        )}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-black/50 px-2.5 py-1 font-mono text-[11px] text-white/80 backdrop-blur">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.isPrivate && (
            <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/70 backdrop-blur">
              Private
            </span>
          )}
          {project.externalUrl && !project.isPrivate && (
            <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/70 backdrop-blur">
              GitHub
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-medium uppercase tracking-wide text-white">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          {project.summary}
        </p>
        <div className="mt-auto flex items-end justify-between pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.map((t) => (
              <span
                key={t}
                className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="flex items-center gap-1 text-sm text-white/70 transition-colors group-hover:text-white">
            {project.externalUrl && !project.isPrivate ? "Repo" : "View"}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsGallery() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const openProject = (project: Project) => {
    const internal = INTERNAL_ROUTES[project.id];
    if (internal) {
      router.push(internal);
      return;
    }
    if (project.externalUrl) {
      window.open(project.externalUrl, "_blank", "noopener,noreferrer");
    }
  };

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const getScroll = () =>
            Math.max(0, track.scrollWidth - window.innerWidth + 96);
          gsap.to(track, {
            x: () => -getScroll(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${getScroll()}`,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      );
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  // Late-loading thumbnails change the track width — recompute the pin so the
  // horizontal scroll length stays correct and the section doesn't "jump".
  useEffect(() => {
    if (typeof window === "undefined") return;
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const imgs = trackRef.current?.querySelectorAll("img") ?? [];
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", refresh, { once: true });
    });
    const t = window.setTimeout(refresh, 600);
    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050505]"
    >
      <div className="flex min-h-screen flex-col justify-center py-20">
        {/* Heading rail */}
        <div className="mx-auto mb-10 w-full max-w-7xl px-6 md:mb-14">
          <p className="eyebrow mb-4">04 · Selected work</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <RevealHeading
              as="h2"
              text="Things I've built"
              className="font-display text-5xl font-medium uppercase tracking-[0.03em] text-white md:text-7xl"
            />
            <p className="hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-white/50 md:flex">
              Scroll <span aria-hidden>→</span>
            </p>
          </div>
        </div>

        {/* Horizontal track (pinned on desktop, swipeable on mobile) */}
        <div className="w-full overflow-x-auto md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            ref={trackRef}
            className="flex w-max gap-5 pl-6 pr-6 md:gap-7 md:pl-12 md:pr-[38vw]"
          >
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onOpen={openProject} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
