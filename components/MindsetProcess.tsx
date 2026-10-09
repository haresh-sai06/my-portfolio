"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealHeading from "@/components/ui/RevealHeading";

interface Pattern {
  id: string;
  title: string;
  question: string;
  common: string;
  system: string;
  reasoning: string;
  shifts: string[];
}

const PATTERNS: Pattern[] = [
  {
    id: "performance",
    title: "Performance First",
    question: "How do you approach performance?",
    common: "Add caching later, if it ever becomes a problem.",
    system: "Design for performance from day one.",
    reasoning:
      "Performance is not a feature - it's a foundation. Retroactive optimization costs 10x more.",
    shifts: ["Audit at the end → Budget upfront", "Reactive fixes → Telemetry-first"],
  },
  {
    id: "scalability",
    title: "Scalability Thinking",
    question: "How do you design for growth?",
    common: "Build for the current requirements.",
    system: "Design for 10x the current load.",
    reasoning:
      "Systems either scale or break. There's no middle ground when success hits.",
    shifts: ["Single-region → Region-aware", "Sync everything → Event-driven"],
  },
  {
    id: "simplicity",
    title: "Complexity Management",
    question: "How do you handle complexity?",
    common: "More features mean more value.",
    system: "Simpler systems are better systems.",
    reasoning:
      "Every line of code is a liability. The best code is code you don't write.",
    shifts: ["Layers stacked → Layers earned", "Add deps freely → Earn every dep"],
  },
];

export default function MindsetProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.6"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="mindset" className="relative bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center md:mb-24">
          <p className="eyebrow mb-4">05 · Mindset</p>
          <RevealHeading
            as="h2"
            text="How I Think"
            className="font-display text-5xl font-medium uppercase tracking-[0.04em] text-white md:text-7xl"
          />
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
            Engineering is a series of decisions. Here&apos;s how I make them.
          </p>
        </div>

        <div ref={ref} className="relative pl-10 md:pl-16">
          {/* spine */}
          <div
            className="absolute left-3 top-2 bottom-2 w-px bg-white/10 md:left-5"
            aria-hidden
          >
            <motion.div
              className="absolute inset-x-0 top-0 h-full origin-top bg-white/70"
              style={{ scaleY }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {PATTERNS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="relative"
              >
                <span className="absolute -left-[1.85rem] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-[#050505] font-mono text-[11px] text-white/70 md:-left-[2.85rem]">
                  {i + 1}
                </span>

                <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/45">
                  {p.title}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium text-white md:text-4xl">
                  {p.question}
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-red-500/20 bg-red-500/[0.04] p-5">
                    <p className="mb-2 text-[11px] uppercase tracking-wider text-red-400/80">
                      Common approach
                    </p>
                    <p className="text-white/70">{p.common}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] p-5">
                    <p className="mb-2 text-[11px] uppercase tracking-wider text-emerald-400/80">
                      System approach
                    </p>
                    <p className="text-white/85">{p.system}</p>
                  </div>
                </div>

                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  {p.reasoning}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.shifts.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-white/65"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
