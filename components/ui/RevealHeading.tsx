"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import React from "react";

interface RevealHeadingProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}

export default function RevealHeading({
  text,
  className,
  as = "h2",
  delay = 0,
}: RevealHeadingProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const Container =
    as === "h1" ? motion.h1 : as === "h3" ? motion.h3 : motion.h2;

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: {
      opacity: 0,
      y: "0.45em",
      filter: reduce ? "blur(0px)" : "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  return (
    <Container
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12%" }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} style={{ display: "inline-block" }}>
          <motion.span
            variants={word}
            style={{ display: "inline-block", willChange: "transform, filter, opacity" }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Container>
  );
}
