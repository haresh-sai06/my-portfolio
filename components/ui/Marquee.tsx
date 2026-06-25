"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface MarqueeProps {
  text: string;
  speed?: number;
  reverse?: boolean;
}

export default function Marquee({
  text,
  speed = 35,
  reverse = false,
}: MarqueeProps) {
  const reduce = useReducedMotion();
  const repeats = Array.from({ length: 6 }, (_, i) => i);
  const from = reverse ? "-50%" : "0%";
  const to = reverse ? "0%" : "-50%";

  return (
    <section
      aria-hidden
      className="relative overflow-hidden bg-[#050505] border-y border-white/5 py-8 md:py-10"
    >
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={reduce ? undefined : { x: [from, to] }}
        transition={
          reduce
            ? undefined
            : { duration: speed, repeat: Infinity, ease: "linear" }
        }
      >
        {repeats.map((i) => (
          <span
            key={i}
            className="inline-flex items-center text-4xl md:text-6xl font-semibold uppercase tracking-[0.18em] text-white/85 px-6 font-display"
          >
            {text}
            <span className="px-8 text-white/25" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
