"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import RevealHeading from "@/components/ui/RevealHeading";

interface Principle {
  id: string;
  statement: string;
  explanation: string;
  icon: string;
  systemVisual: string;
}

const PRINCIPLES: Principle[] = [
  {
    id: "measurable",
    statement: "If it's not measurable, it's not done.",
    explanation: "Performance metrics, user behavior, system health - everything quantified.",
    icon: "📊",
    systemVisual: "Performance graphs, monitoring dashboards, real-time metrics"
  },
  {
    id: "performance",
    statement: "Performance is UX.",
    explanation: "Slow interfaces are broken interfaces. Speed is a feature, not an afterthought.",
    icon: "⚡",
    systemVisual: "Optimized rendering, lazy loading, caching strategies"
  },
  {
    id: "systems",
    statement: "Systems scale. Hacks don't.",
    explanation: "Build for 10x current load. Design for 100x future growth.",
    icon: "🧱",
    systemVisual: "Microservices, event-driven architecture, auto-scaling"
  },
  {
    id: "simplicity",
    statement: "Complexity is the enemy of reliability.",
    explanation: "Every line of code is a liability. The best code is code you don't write.",
    icon: "✂️",
    systemVisual: "Clean architecture, minimal dependencies, clear abstractions"
  },
  {
    id: "animation",
    statement: "Animation without purpose is noise.",
    explanation: "Motion should guide, inform, or delight. Never distract.",
    icon: "🎬",
    systemVisual: "Meaningful transitions, loading states, progress feedback"
  },
  {
    id: "decisions",
    statement: "Trade-offs are explicit. Assumptions are challenged.",
    explanation: "Every technical decision documented. Every rejected approach explained.",
    icon: "⚖️",
    systemVisual: "Architecture diagrams, decision logs, constraint analysis"
  }
];

export default function Principles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="principles" ref={containerRef} className="min-h-screen relative bg-[#050505] overflow-hidden">
      <motion.div style={{ opacity }} className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
              06 · Principles
            </p>
            <RevealHeading
              as="h2"
              text="What Guides My Work"
              className="font-display text-5xl md:text-7xl font-medium uppercase tracking-[0.04em] text-white mb-5"
            />
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Strong beliefs that shape every creation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRINCIPLES.map((principle, index) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredPrinciple(principle.id)}
                onMouseLeave={() => setHoveredPrinciple(null)}
                className="relative group"
              >
                <div className={`glass noise rounded-xl p-8 transition-all duration-300 ${
                  hoveredPrinciple === principle.id ? 'bg-white/[0.06]' : ''
                }`}>
                  {/* Icon and Statement */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-3xl">{principle.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white/90 mb-2 leading-tight">
                        {principle.statement}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {principle.explanation}
                      </p>
                    </div>
                  </div>


                  {/* Cinematic mode hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg transition-opacity duration-300 ${
                    hoveredPrinciple === principle.id ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-white/90 mb-4">
                This isn&apos;t just about code quality.
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                It&apos;s about building systems that survive contact with reality.
                <br />
                Systems that scale, perform, and evolve.
                <br />
                <span className="text-white/80 font-medium">
                  Systems that work when it matters.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
