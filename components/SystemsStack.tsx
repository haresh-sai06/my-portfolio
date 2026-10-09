"use client";

import React from "react";
import { motion } from "framer-motion";
import RevealHeading from "@/components/ui/RevealHeading";

interface Layer {
  id: string;
  name: string;
  tagline: string;
  tech: string[];
  appliedIn: string;
  solves: string;
  color: string;
}

const SYSTEMS: Layer[] = [
  {
    id: "frontend",
    name: "Frontend Systems",
    tagline: "Component architecture & motion design",
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "GSAP"],
    appliedIn: "Portfolio, dashboards, landing experiences",
    solves: "Motion-led interfaces that target Lighthouse 90+ and hold 60fps",
    color: "#3B82F6",
  },
  {
    id: "backend",
    name: "Backend Systems",
    tagline: "API design & data architecture",
    tech: ["Node.js", "Firebase", "PostgreSQL", "Supabase", "Prisma"],
    appliedIn: "Real-time apps, internal tools, tournament & inventory systems",
    solves: "Normalized schemas, role-aware auth, real-time data flow",
    color: "#10B981",
  },
  {
    id: "ai",
    name: "AI / LLM Systems",
    tagline: "LLM tooling, retrieval & automation",
    tech: ["Python", "LangChain", "OpenAI", "RAG", "Vector stores"],
    appliedIn: "ForgeBot, Study Hub, voice agents, family chatbot",
    solves: "Grounded retrieval and production-ready LLM workflows with safe defaults",
    color: "#8B5CF6",
  },
  {
    id: "architecture",
    name: "Architecture & Performance",
    tagline: "System design & optimization",
    tech: ["Edge runtime", "CDN", "Caching", "Observability"],
    appliedIn: "Every shipped project - landing pages to full-stack apps",
    solves: "Modular boundaries, observable hot paths, predictable scaling",
    color: "#F59E0B",
  },
];

export default function SystemsStack() {
  return (
    <section id="systems" className="relative bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center md:mb-24">
          <p className="eyebrow mb-4">03 · Capabilities</p>
          <RevealHeading
            as="h2"
            text="Ways I Create"
            className="font-display text-5xl font-medium uppercase tracking-[0.04em] text-white md:text-7xl"
          />
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
            Four layers of the same craft - stacked the way I build them.
          </p>
        </div>

        <div className="relative">
          {SYSTEMS.map((layer, i) => (
            <div
              key={layer.id}
              className="sticky pb-6"
              style={{ top: `${96 + i * 26}px` }}
            >
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="noise relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0e] p-7 md:p-12"
              >
                {/* top accent */}
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(to right, transparent, ${layer.color}, transparent)`,
                  }}
                  aria-hidden
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-white/40">
                    0{i + 1}
                  </span>
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: layer.color }}
                    aria-hidden
                  />
                </div>

                <h3 className="mt-6 font-display text-3xl font-medium uppercase tracking-wide text-white md:text-5xl">
                  {layer.name}
                </h3>
                <p className="mt-3 max-w-2xl text-base text-white/60 md:text-lg">
                  {layer.tagline}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {layer.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
                      Applied in
                    </p>
                    <p className="text-sm text-white/75">{layer.appliedIn}</p>
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
                      What it solves
                    </p>
                    <p className="text-sm text-white/75">{layer.solves}</p>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
