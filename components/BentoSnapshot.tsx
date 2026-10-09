"use client";

import { motion } from "framer-motion";
import React from "react";
import RevealHeading from "@/components/ui/RevealHeading";
import Parallax from "@/components/ui/Parallax";
import { PROJECTS } from "@/lib/projects";

const JOURNEY = [
  { phase: "Curiosity", note: "Understanding how things actually work" },
  { phase: "Learning", note: "Breaking things, then rebuilding them better" },
  { phase: "Building", note: "Ideas became products people could use" },
  { phase: "Engineering", note: "Designing systems, not just solutions" },
  { phase: "Present", note: "Shipping AI-driven products end to end" },
];

const STACK_TOP = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "GSAP",
  "Node.js",
];
const STACK_BOTTOM = [
  "Python",
  "LangChain",
  "Rust",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "Prisma",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-white/60">
      <span aria-hidden>✦</span>
      <span className="text-[11px] uppercase tracking-[0.22em] font-mono">
        {children}
      </span>
    </div>
  );
}

function StackRow({
  items,
  dir,
}: {
  items: string[];
  dir: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max gap-2 ${
          dir === "left" ? "bento-marquee-left" : "bento-marquee-right"
        }`}
      >
        {doubled.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="whitespace-nowrap rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/70"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BentoSnapshot() {
  return (
    <section
      id="snapshot"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      {/* GSAP parallax depth layer - drifts slower than the content */}
      <Parallax
        speed={0.5}
        className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center"
      >
        <div
          className="h-[520px] w-[760px] max-w-none rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,255,96,0.07), rgba(168,255,96,0) 70%)",
          }}
        />
      </Parallax>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <p className="eyebrow mb-4">At a glance</p>
          <RevealHeading
            as="h2"
            text="The snapshot"
            className="font-display text-5xl md:text-7xl font-medium uppercase tracking-[0.04em] text-white"
          />
          <p className="mt-4 text-lg text-white/55 max-w-2xl mx-auto">
            Everything that matters, on one screen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[210px]">
          {/* Journey - tall */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="glass noise rounded-2xl p-6 md:p-7 lg:col-start-1 lg:row-start-1 lg:row-span-2 flex flex-col"
          >
            <SectionLabel>The journey</SectionLabel>
            <ul className="mt-6 flex-1 flex flex-col justify-between">
              {JOURNEY.map((j, i) => (
                <li key={j.phase} className="relative pl-6">
                  <span
                    className="absolute left-0 top-1.5 h-2 w-2 rounded-full"
                    style={{
                      background:
                        i === JOURNEY.length - 1
                          ? "rgb(168 255 96)"
                          : "rgba(255,255,255,0.4)",
                    }}
                  />
                  <p className="text-white/90 text-sm font-medium">{j.phase}</p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {j.note}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech stack - wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="glass noise rounded-2xl p-6 md:p-7 lg:col-start-2 lg:col-span-2 lg:row-start-1 flex flex-col"
          >
            <SectionLabel>Daily stack</SectionLabel>
            <div className="mt-4 space-y-3">
              <StackRow items={STACK_TOP} dir="left" />
              <StackRow items={STACK_BOTTOM} dir="right" />
            </div>
          </motion.div>

          {/* Stat - repos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass noise rounded-2xl p-6 md:p-7 lg:col-start-2 lg:row-start-2 flex flex-col justify-between"
          >
            <SectionLabel>Selected work</SectionLabel>
            <div>
              <p className="font-display text-6xl md:text-7xl font-medium leading-none text-white">
                {PROJECTS.length}
              </p>
              <p className="mt-2 text-white/55 text-sm">
                Products, prototypes & experiments
              </p>
            </div>
          </motion.div>

          {/* Principle quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass noise rounded-2xl p-6 md:p-7 lg:col-start-3 lg:row-start-2 flex flex-col justify-between"
          >
            <SectionLabel>Operating principle</SectionLabel>
            <p className="font-display text-2xl md:text-3xl leading-tight text-white/90 mt-6">
              Systems scale.
              <br />
              Hacks don&apos;t.
            </p>
          </motion.div>

          {/* Reach me - full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass noise rounded-2xl p-6 md:p-7 lg:col-start-1 lg:col-span-3 lg:row-start-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          >
            <div>
              <SectionLabel>Reach me</SectionLabel>
              <p className="mt-4 text-white/90 text-lg">
                Based in India, open to building globally.
              </p>
            </div>
            <a
              href="mailto:shareshsainaath@gmail.com"
              data-cursor="EMAIL"
              className="group inline-flex items-center gap-3 self-start rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm uppercase tracking-[0.15em] text-white/85 transition-colors hover:bg-white hover:text-black"
            >
              Start a conversation
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
