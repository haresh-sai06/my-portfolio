"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { RESUME } from "@/lib/profile";

export default function Closure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStatement, setCurrentStatement] = useState("I make the complex feel simple.");

  useEffect(() => {
    const identityStatements = [
      "I create experiences that feel natural.",
      "I design with people in mind.",
      "I build things that matter.",
      "I make the complex feel simple."
    ];
    setCurrentStatement(
      identityStatements[Math.floor(Math.random() * identityStatements.length)]
    );
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1]);

  const contactLinks = [
    {
      label: "Resume",
      href: RESUME.href,
      description:
        "Experience, work & journey",
      icon: ResumeIcon,
      download: true
    },
    {
      label: "GitHub",
      href: "https://github.com/haresh-sai06?tab=repositories",
      description:
        "Open source & product work",
      icon: GitHubIcon
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/haresh-sainaath-159061326/",
      description:
        "Professional presence",
      icon: LinkedInIcon
    },
    {
      label: "Contact",
      href: "mailto:shareshsainaath@gmail.com",
      description:
        "Let's connect together",
      icon: MailIcon
    }
  ];

  return (
    <section
      id="closure"
      ref={containerRef}
      className="min-h-screen relative bg-[#050505] overflow-hidden"
    >
      <motion.div
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white/90 mb-6">
              {currentStatement}
            </h2>
            <p className="text-xl md:text-2xl text-white/60">
                Designing moments that leave a trace.
            </p>
          </motion.div>

          {/* Soft Invitation Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white/40 text-sm tracking-wide mb-20"
          >
            If our paths align, let&apos;s connect and build something meaningful.
          </motion.p>

          {/* Glass Contact Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                download={link.download ? RESUME.downloadName : undefined}
                target={link.download ? undefined : "_blank"}
                rel="noopener noreferrer"
                data-cursor={link.download ? "OPEN" : "VISIT"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4 flex justify-center text-white/80 group-hover:text-white transition">
                    <link.icon />
                  </div>
                  <h3 className="text-white/90 font-medium mb-1">
                    {link.label}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer Identity */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-24"
          >
            <p className="text-white/30 text-sm font-mono">
                Experience designer • Creative developer • Human-centered thinker
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- ICONS ---------------- */

function GitHubIcon() {
  return (
    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.45 7.86 10.98.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.38-3.88-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.59.24 2.76.12 3.05.74.81 1.18 1.85 1.18 3.11 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56 4.56-1.53 7.85-5.87 7.85-10.98C23.5 5.74 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.48 1c1.38 0 2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.7c0-2.07-.04-4.73-2.88-4.73-2.88 0-3.32 2.25-3.32 4.58V24h-4V8z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 13h8v2H8v-2zm0 4h8v2H8v-2zm0-8h4v2H8V9z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
