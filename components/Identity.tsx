"use client";

import { motion } from "framer-motion";
import React from "react";

interface JourneyStage {
  id: string;
  title: string;
  description: string;
  color: string;
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "curiosity",
    title: "Curiosity",
    description: "I wanted to understand how things worked.",
    color: "#3B82F6",
  },
  {
    id: "learning",
    title: "Learning",
    description: "I learned by breaking things and putting them back together.",
    color: "#10B981",
  },
  {
    id: "building",
    title: "Building",
    description: "Ideas became things people could actually use.",
    color: "#F59E0B",
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Now I design systems, not just solutions.",
    color: "#8B5CF6",
  },
  {
    id: "present",
    title: "Present",
    description: "Growth happens in layers, not leaps.",
    color: "#64748B",
  },
];

export default function Story() {
  return (
    <section
      id="story"
      className="relative bg-[#050505] text-white overflow-hidden"
    >
      {/* Sticky Container Boundary */}
      <div className="relative min-h-screen">
        {/* Sticky Title (Scoped Correctly) */}
        <div className="sticky top-20 z-10 text-center pointer-events-none">
          <h1 className="text-3xl md:text-4xl font-light text-white/40 tracking-widest">
            THE JOURNEY
          </h1>
        </div>

        {/* Story Sections */}
        <div className="mt-32 space-y-40 pb-40">
          {JOURNEY_STAGES.map((stage) => (
            <motion.section
              key={stage.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden"
            >
              {/* Background Glow */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at center, ${stage.color} 0%, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative max-w-3xl text-center z-10">
                <div
                  className="w-32 h-1 mx-auto mb-12 rounded-full"
                  style={{ backgroundColor: stage.color }}
                />

                <h2
                  className="text-6xl md:text-8xl font-light text-white/90 mb-10 tracking-wide"
                  style={{
                    textShadow: `0 0 40px ${stage.color}40`,
                  }}
                >
                  {stage.title}
                </h2>

                <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-xl mx-auto font-light">
                  {stage.description}
                </p>

                {/* Subtle glow card */}
                <div
                  className="absolute inset-0 -z-10 rounded-3xl blur-3xl opacity-30"
                  style={{ backgroundColor: stage.color }}
                />
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer Hint */}
        <div className="pb-24 text-center text-white/30 text-sm font-light tracking-wide">
          Scroll to continue ↓
        </div>
      </div>
    </section>
  );
}
