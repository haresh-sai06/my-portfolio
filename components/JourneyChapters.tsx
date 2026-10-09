"use client";

import React from "react";
import { motion } from "framer-motion";
import RevealHeading from "@/components/ui/RevealHeading";

interface Stage {
  id: string;
  title: string;
  desc: string;
  color: string;
}

const STAGES: Stage[] = [
  {
    id: "curiosity",
    title: "Curiosity",
    desc: "I wanted to understand how things worked - so I took them apart.",
    color: "#3B82F6",
  },
  {
    id: "learning",
    title: "Learning",
    desc: "I learned by breaking things and putting them back together better.",
    color: "#10B981",
  },
  {
    id: "building",
    title: "Building",
    desc: "Ideas became things people could actually use.",
    color: "#F59E0B",
  },
  {
    id: "engineering",
    title: "Engineering",
    desc: "Now I design systems, not just solutions.",
    color: "#8B5CF6",
  },
  {
    id: "present",
    title: "Present",
    desc: "Growth happens in layers, not leaps. Still shipping, still learning.",
    color: "#64748B",
  },
];

export default function JourneyChapters() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center md:mb-28">
          <p className="eyebrow mb-4">The journey</p>
          <RevealHeading
            as="h2"
            text="How I got here"
            className="font-display text-5xl font-medium uppercase tracking-[0.04em] text-white md:text-7xl"
          />
        </div>

        <div className="space-y-20 md:space-y-36">
          {STAGES.map((s, i) => {
            const right = i % 2 !== 0;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-18%" }}
                transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                className={`relative flex flex-col ${
                  right ? "md:items-end md:text-right" : "md:items-start"
                }`}
              >
                <span
                  className="pointer-events-none select-none font-display text-[24vw] font-bold leading-[0.8] text-white/[0.04] md:text-[12rem]"
                  aria-hidden
                >
                  0{i + 1}
                </span>

                <div
                  className={`-mt-[9vw] max-w-md md:-mt-28 ${
                    right ? "md:ml-auto" : ""
                  }`}
                >
                  <div
                    className={`mb-3 flex items-center gap-3 ${
                      right ? "md:justify-end" : ""
                    }`}
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: s.color }}
                      aria-hidden
                    />
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/45">
                      Chapter 0{i + 1}
                    </span>
                  </div>
                  <h3
                    className="font-display text-4xl font-medium uppercase tracking-wide text-white md:text-6xl"
                    style={{ textShadow: `0 0 55px ${s.color}33` }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-white/60">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
