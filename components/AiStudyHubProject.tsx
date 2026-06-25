"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import StudyHubThumbnail from "@/public/thumbnail/AI-study-hub.png";

/* ---------------- PROJECT DATA ---------------- */

const AI_STUDY_HUB_PROJECT = {
  hero: {
    title: "AI Study Hub",
    descriptor:
      "An exam-oriented AI platform that transforms raw academic material into structured study kits, flashcards, and viva preparation tools.",
    status: "In Progress · Production-Grade Backend",
    thumbnail: StudyHubThumbnail,
  },

  overview: {
    what:
      "AI Study Hub is a learning-focused AI platform that converts PDFs, PPTs, and raw notes into exam-ready study kits using multi-agent AI pipelines.",
    why:
      "Students struggle to convert large volumes of study material into concise, exam-oriented notes. Existing AI tools generate generic summaries that lack academic structure and reliability.",
    problem:
      "Manual note preparation is time-consuming, inconsistent, and inefficient especially when preparing for theory-heavy exams requiring structured answers, definitions, and viva readiness.",
  },

  capabilities: [
    {
      title: "Study Kit Generator",
      description:
        "Automatically generates summaries, key topics, flashcards, and definitions aligned with exam patterns.",
      icon: "📘",
    },
    {
      title: "Exam-Oriented Answers",
      description:
        "Produces structured 2-mark, 5-mark, and 10-mark answers with academic tone and hierarchy.",
      icon: "📝",
    },
    {
      title: "Speaker Notes & Viva Prep",
      description:
        "Transforms PPT content into speaker notes, viva questions, and presentation tips.",
      icon: "🎤",
    },
    {
      title: "Multi-Agent AI Pipeline",
      description:
        "Uses modular AI agents for content analysis, answer generation, quality gating, and fallback handling.",
      icon: "🧠",
    },
    {
      title: "Multi-LLM Fallback",
      description:
        "Automatically switches between OpenAI and Gemini to ensure reliability under quota or rate limits.",
      icon: "🔁",
    },
    {
      title: "Persistent Learning Data",
      description:
        "All generated study kits are saved and reusable, turning AI output into long-term learning assets.",
      icon: "💾",
    },
  ],

  architecture: {
    frontend: {
      title: "Frontend",
      description:
        "Student-focused React UI with animated progress indicators and clear learning states.",
      components: ["React", "TypeScript", "Next.js", "Framer Motion"],
    },
    backend: {
      title: "Backend API",
      description:
        "Centralized backend handling authentication, persistence, orchestration, and validation.",
      components: ["Node.js", "Express", "Prisma", "PostgreSQL"],
    },
    mcp: {
      title: "MCP Orchestration Layer",
      description:
        "Manages AI workflows, tool routing, retries, and provider fallback logic.",
      components: ["Multi-Agent Pipelines", "Quality Gates", "Retry Logic"],
    },
    ai: {
      title: "AI Layer",
      description:
        "LLM-agnostic architecture supporting OpenAI and Gemini with strict JSON enforcement.",
      components: ["OpenAI", "Gemini", "Prompt Engineering", "JSON Repair"],
    },
  },

  challenges: [
    {
      title: "LLM Reliability",
      problem:
        "LLMs often returned invalid JSON or failed under quota limits.",
      solution:
        "Implemented provider-agnostic LLM abstraction with automatic Gemini fallback and JSON extraction.",
      learning:
        "Production AI systems must be resilient to model failures and unpredictable outputs.",
    },
    {
      title: "Academic Output Quality",
      problem:
        "Early outputs were generic and unsuitable for exams.",
      solution:
        "Introduced topic normalization, exam-oriented prompts, and quality gates.",
      learning:
        "AI usefulness depends more on structure and validation than raw intelligence.",
    },
    {
      title: "Performance at Scale",
      problem:
        "Large documents caused long processing times.",
      solution:
        "Designed chunk-based pipelines and progressive frontend feedback.",
      learning:
        "Perceived performance is critical for user trust in AI products.",
    },
  ],

  outcome: {
    achievements: [
      "Stable multi-agent AI backend with persistence",
      "Exam-ready outputs with structured answers",
      "Reliable fallback across multiple LLM providers",
      "Clear separation of frontend, backend, and AI orchestration",
    ],
    skills: [
      "Designing production-grade AI pipelines",
      "Multi-LLM orchestration and fallback strategies",
      "Academic prompt engineering",
      "Full-stack system architecture",
    ],
    significance:
      "AI Study Hub demonstrates the ability to design reliable, exam-centric AI systems that go beyond generic summarization, focusing on correctness, structure, and real student needs.",
  },
};

/* ---------------- SECTIONS ---------------- */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl font-bold text-white/90 mb-12">{children}</h2>
  );
}

export default function AiStudyHubProject() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#050505] overflow-hidden">
      <div className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* HERO */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8">
              <span className="text-white/60 text-sm uppercase tracking-wider">
                {AI_STUDY_HUB_PROJECT.hero.status}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white/90 mb-6">
              {AI_STUDY_HUB_PROJECT.hero.title}
            </h1>

            <p className="text-2xl text-white/70 max-w-4xl mx-auto mb-12">
              {AI_STUDY_HUB_PROJECT.hero.descriptor}
            </p>

            <div className="relative w-full h-[360px] rounded-lg overflow-hidden border border-white/10">
              <Image
                src={AI_STUDY_HUB_PROJECT.hero.thumbnail}
                alt="AI Study Hub preview"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.section>

          {/* OVERVIEW */}
          <motion.section className="mb-20">
            <SectionTitle>Project Overview</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(AI_STUDY_HUB_PROJECT.overview).map(([key, value]) => (
                <div key={key} className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <h3 className="text-xl font-semibold text-white/80 mb-4 capitalize">
                    {key}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CAPABILITIES */}
          <motion.section className="mb-20">
            <SectionTitle>Core Capabilities</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AI_STUDY_HUB_PROJECT.capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 p-6 rounded-lg border border-white/10"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="text-3xl mb-4">{cap.icon}</div>
                  <h3 className="text-xl text-white/80 font-semibold mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-white/60">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ARCHITECTURE */}
          <motion.section className="mb-20">
            <SectionTitle>System Architecture</SectionTitle>
            <div className="space-y-6">
              {Object.values(AI_STUDY_HUB_PROJECT.architecture).map((layer) => (
                <div key={layer.title} className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <h3 className="text-2xl text-white/80 font-semibold mb-3">
                    {layer.title}
                  </h3>
                  <p className="text-white/60 mb-4">{layer.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.components.map((c, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/70">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* OUTCOME */}
          <motion.section className="mb-20">
            <SectionTitle>Outcome & Impact</SectionTitle>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-green-500/5 p-8 rounded-lg border border-green-500/20">
                  <h3 className="text-2xl text-green-400 font-semibold mb-4">Achievements</h3>
                  <ul className="space-y-2">
                    {AI_STUDY_HUB_PROJECT.outcome.achievements.map((a, i) => (
                      <li key={i} className="text-white/70">✓ {a}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <h3 className="text-2xl text-white/80 font-semibold mb-4">Skills Gained</h3>
                  <ul className="space-y-2">
                    {AI_STUDY_HUB_PROJECT.outcome.skills.map((s, i) => (
                      <li key={i} className="text-white/70">→ {s}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-purple-500/5 p-8 rounded-lg border border-purple-500/20">
                <h3 className="text-2xl text-purple-400 font-semibold mb-4">Why This Matters</h3>
                <p className="text-purple-300 leading-relaxed text-lg">
                  {AI_STUDY_HUB_PROJECT.outcome.significance}
                </p>
              </div>
            </div>
          </motion.section>

          {/* EXIT */}
          <div className="text-center">
            <button
              onClick={() => router.push("/#projects")}
              className="px-8 py-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              ← Back to Projects
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
