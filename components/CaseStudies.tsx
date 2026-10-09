"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import RevealHeading from "@/components/ui/RevealHeading";
import Image, { StaticImageData } from "next/image";

import ForgebotThumbnail from "@/public/thumbnail/generated/llm-forgebot-cover-2026-10.webp";
import StudyHubThumbnail from "@/public/thumbnail/AI-study-hub.png";
import PodjamThumbnail from "@/public/thumbnail/podjam.png";
import FamilyChatbotThumbnail from "@/public/thumbnail/family-chatbot.png";
import EsportsThumbnail from "@/public/thumbnail/esports.png"; 
import TimetableThumbnail from "@/public/thumbnail/generated/skct-timetable-cover-2026-10.webp";
import TripBharatThumbnail from "@/public/thumbnail/trip-bharat.png";


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
    summary: "Multi-purpose AI toolkit with LLM-powered automation and analytics",
    thumbnail: ForgebotThumbnail,
    color: "#8B5CF6",
  },
  {
    id: "ai-study-hub",
    name: "AI Study Hub",
    summary:
      "Exam-oriented AI platform that converts raw notes, PDFs, and PPTs into structured study kits",
    thumbnail: StudyHubThumbnail,
    color: "#22C55E",
  },
  // {
  //   id: "breit-med-inventory",
  //   name: "Breit Med Inventory",
  //   summary:
  //     "Production-grade medical inventory management system with normalized APIs, secure authentication, and full CRUD workflows",
  //   thumbnail: MedicalInventoryThumbnail,
  //   color: "#3B82F6",
  // },
  {
  id: "podjam",
  name: "PodJam",
  summary:
    "Real-time social music streaming app where friends jam together with perfect sync, live chat, and instant shareable room links",
  thumbnail: PodjamThumbnail,
  color: "#8B5CF6",
  },
  {
  id: "family-chatbot",
  name: "Family-Chatbot",
  summary:
    "An emotionally intelligent AI companion that helps families stay connected, supported, and cared for through warm, compassionate conversations and daily assistance.",
  thumbnail: FamilyChatbotThumbnail, // Import your image: import FamilyChatbotThumbnail from "@/public/thumbnail/family-chatbot-preview.jpg";
  color: "#EC4899", // Beautiful pink   matches your hero gradient (feel free to change to #6366F1 for indigo)
  },
  {
  id: "esports-tournament",
  name: "Esports Tournament",
  summary:
    "A full-stack web application for hosting and managing large-scale Free Fire esports tournaments with seamless team registration, real-time updates, and admin dashboard.",
  thumbnail: EsportsThumbnail, // Import your image: import EsportsThumbnail from "@/public/thumbnail/esports-tournament-preview.jpg";
  color: "#3B82F6", // Blue   matches your hero gradient (feel free to change to #6366F1 for indigo)
  },
  {
  id: "skct-timetable",
  name: "SKCT Automated Timetable",
  summary:
    "An automated timetable generation system for SKCT that eliminates manual scheduling conflicts and ensures optimal resource allocation.",
  thumbnail: TimetableThumbnail, // Import your image: import TimetableThumbnail from "@/public/thumbnail/timetable-preview.jpg";
  color: "#3B82F6", // Blue   matches your hero gradient (feel free to change to #6366F1 for indigo)
  },
  {
    id: "trip-bharat",
    name: "Trip Bharat",
    summary:
      "A full-stack web application for managing and displaying trip schedules for students and faculty at Trip Bharat.",
    thumbnail: TripBharatThumbnail,
    color: "#3B82F6",
  },
  {
    id: "win-clicky",
    name: "Win-Clicky",
    summary:
      "Lightweight Windows automation utility written in Rust. Practical devtool work that proves systems-level fluency outside the web stack.",
    color: "#F97316",
    externalUrl: "https://github.com/haresh-sai06/Win-Clicky",
    tags: ["Rust", "Windows", "Devtool"],
  },
  {
    id: "hackaura",
    name: "HackAura",
    summary:
      "Hackathon project - built end-to-end under time pressure. Python core, focused scope, shipped.",
    color: "#EAB308",
    externalUrl: "https://github.com/haresh-sai06/HackAura",
    tags: ["Python", "Hackathon"],
  },
  {
    id: "voice-agents",
    name: "Voice Agents",
    summary:
      "A line of conversational voice agents - including a dental clinic agent and a reusable setup pipeline. LLM + speech, deployed end-to-end.",
    color: "#06B6D4",
    isPrivate: true,
    tags: ["Voice AI", "LLM", "Python"],
  },
  {
    id: "stock-guardian",
    name: "Stock Guardian",
    summary:
      "Personal-finance / portfolio guardrail tool. Watchlists, alerts, and a clean reporting surface - built to learn the finance domain.",
    color: "#22C55E",
    isPrivate: true,
    tags: ["Finance", "TypeScript"],
  },
];

interface FolderCardProps {
  project: Project;
  onClick: () => void;
}

function FolderCard({ project, onClick }: FolderCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      data-cursor={project.isPrivate ? "PRIVATE" : "VIEW"}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="relative bg-[#0a0a0a] rounded-lg border border-white/10 overflow-hidden">
        <div className="absolute top-0 left-8 w-20 h-6 bg-[#1a1a1a] border-t border-l border-r border-white/10 rounded-t-lg -translate-y-1 z-10" />

        <div className="relative p-8 pt-12">
          <motion.div
            className="mb-6 flex justify-center"
            animate={{
              rotateY: isHovered ? 15 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative">
              <motion.div
                className="w-24 h-20 rounded-lg border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]"
                animate={{
                  boxShadow: isHovered
                    ? `0 20px 40px ${project.color}40`
                    : "0 10px 20px rgba(0,0,0,0.5)",
                }}
              />

              <motion.div
                className="absolute top-0 left-0 w-24 h-20 rounded-lg border border-white/10 bg-gradient-to-br from-[#3a3a3a] to-[#2a2a2a] origin-left"
                animate={{
                  rotateY: isHovered ? -45 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              <motion.div
                className="absolute top-2 left-2 w-20 h-16 rounded overflow-hidden border border-white/20"
                animate={{
                  y: isHovered ? -8 : 0,
                  opacity: isHovered ? 1 : 0.85,
                }}
              >
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center text-white/70 text-xs font-mono tracking-wider"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}55, ${project.color}11 60%, #0a0a0a)`,
                    }}
                  >
                    {project.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 3)
                      .toUpperCase()}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-white/90">
                {project.name}
              </h3>
              {project.isPrivate && (
                <span className="text-[10px] uppercase tracking-wider text-white/50 border border-white/15 rounded-full px-2 py-0.5">
                  Private
                </span>
              )}
              {project.externalUrl && !project.isPrivate && (
                <span className="text-[10px] uppercase tracking-wider text-white/50 border border-white/15 rounded-full px-2 py-0.5">
                  GitHub
                </span>
              )}
            </div>
            <p className="text-sm text-white/60">{project.summary}</p>
            {project.tags && project.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] text-white/50 bg-white/5 border border-white/10 rounded px-1.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <motion.div
            className="absolute bottom-4 right-4 w-2 h-2 rounded-full"
            style={{ backgroundColor: project.color }}
            animate={{
              scale: isHovered ? 1.5 : 1,
              opacity: isHovered ? 1 : 0.5,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const router = useRouter();

  const internalRouteMap: Record<string, string> = {
    "llm-forgebot": "/llm-forgebot",
    "ai-study-hub": "/ai-study-hub",
    "breit-med-inventory": "/pharma-project",
    "podjam": "/podjam-project",
    "family-chatbot": "/family-chatbot",
    "esports-tournament": "/esports-project",
    "skct-timetable": "/timetable-project",
    "trip-bharat": "/trip-bharat",
  };

  const handleProjectClick = (project: Project) => {
    const internal = internalRouteMap[project.id];
    if (internal) {
      router.push(internal);
      return;
    }
    if (project.externalUrl) {
      window.open(project.externalUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-[#050505]">
      <div className="py-20 max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-20">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
            04 · Work
          </p>
          <RevealHeading
            as="h1"
            text="Projects"
            className="font-display text-6xl md:text-8xl font-medium uppercase tracking-[0.03em] text-white mb-5"
          />
          <p className="text-lg md:text-xl text-white/60">
            Choose a folder to inspect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FolderCard
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center text-sm text-white/40">
          Click any folder to view detailed implementation or jump to the repo.
        </div>
      </div>
    </section>
  );
}
