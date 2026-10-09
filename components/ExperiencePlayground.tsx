"use client";

import { motion, useReducedMotion } from "framer-motion";
import React, { useMemo, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface SystemState {
  complexity: number;
  performance: number;
  scale: number;
  experience: number;
}

type ProfileKey = keyof typeof profileThemes;

const profileThemes = {
  highScale: { primary: "#ef4444", secondary: "#fca5a5", glow: "from-red-500/40" },
  userFirst: { primary: "#10b981", secondary: "#6ee7b7", glow: "from-emerald-500/40" },
  advanced: { primary: "#8b5cf6", secondary: "#c4b5fd", glow: "from-violet-500/40" },
  balanced: { primary: "#3b82f6", secondary: "#93c5fd", glow: "from-blue-500/40" },
};

export default function SystemDial() {
  const shouldReduceMotion = useReducedMotion();
  const [state, setState] = useState<SystemState>({
    complexity: 40,
    performance: 60,
    scale: 50,
    experience: 70,
  });

  /**
   * 🧠 System Reasoning Engine
   * This is no longer a toy matcher.
   */
  const profile = useMemo(() => {
    const { complexity, performance, scale, experience } = state;

    if (performance > 80 && scale > 80 && complexity > 60) {
      return {
        key: "highScale" as ProfileKey,
        title: "Internet-Scale Distributed System",
        description:
          "Designed to survive massive traffic spikes, partial failures, and global latency. This architecture prioritizes uptime and throughput over simplicity.",
        learnings: [
          "High availability introduces coordination overhead.",
          "Debugging becomes probabilistic, not deterministic.",
          "Operational excellence matters more than clean code.",
        ],
        tradeoffs: "High infra cost, steep learning curve, slower iteration speed.",
        tech: [
          "Kubernetes + HPA",
          "Service mesh (Istio/Linkerd)",
          "Async messaging (Kafka)",
          "Distributed tracing",
          "Multi-region deployments",
        ],
      };
    }

    if (experience > 85 && complexity < 40) {
      return {
        key: "userFirst" as ProfileKey,
        title: "Experience-Optimized Frontend System",
        description:
          "Focused on perceived performance and emotional response. The system feels instant even when it isn’t.",
        learnings: [
          "Perceived latency matters more than raw speed.",
          "UX polish compounds user trust.",
          "Simple systems scale better early.",
        ],
        tradeoffs: "Limited backend flexibility and long-term scaling ceiling.",
        tech: [
          "Next.js App Router",
          "Edge rendering",
          "Optimistic UI",
          "Motion-driven feedback",
          "Aggressive caching",
        ],
      };
    }

    if (complexity > 75) {
      return {
        key: "advanced" as ProfileKey,
        title: "Highly Modular Enterprise Architecture",
        description:
          "Built for evolving requirements, multiple teams, and complex business rules. Optimizes for adaptability.",
        learnings: [
          "Abstraction has a maintenance cost.",
          "Flexibility delays hard decisions.",
          "Governance is as important as code.",
        ],
        tradeoffs: "Higher onboarding time and cognitive overhead.",
        tech: [
          "Microservices",
          "Event sourcing",
          "Schema governance",
          "Feature flags",
          "Internal developer platforms",
        ],
      };
    }

    if (performance > 65 && experience > 65) {
      return {
        key: "balanced" as ProfileKey,
        title: "Balanced Production-Ready System",
        description:
          "A pragmatic architecture that delivers speed, stability, and maintainability without over-engineering.",
        learnings: [
          "Most systems don’t need extreme solutions.",
          "Good defaults beat clever abstractions.",
          "Evolve architecture with evidence.",
        ],
        tradeoffs: "May need refactoring under extreme scale.",
        tech: [
          "React Server Components",
          "Incremental rendering",
          "Layered caching",
          "Code splitting",
        ],
      };
    }

    return {
      key: "balanced" as ProfileKey,
      title: "Early-Stage Product Architecture",
      description:
        "Optimized for learning, iteration, and fast feedback. Perfect for validating ideas quickly.",
      learnings: [
        "Speed of learning beats scalability early.",
        "Avoid premature optimization.",
        "Refactoring is cheaper than guessing.",
      ],
      tradeoffs: "Requires architectural evolution as usage grows.",
      tech: ["Monorepo", "TypeScript", "CI/CD", "Basic observability"],
    };
  }, [state]);

  const theme = profileThemes[profile.key];

  const chartData = useMemo(
    () => [
      { axis: "Comp", value: state.complexity },
      { axis: "Perf", value: state.performance },
      { axis: "Scale", value: state.scale },
      { axis: "Exp", value: state.experience },
    ],
    [state]
  );

  const axes = Object.keys(state) as Array<keyof SystemState>;

  return (
    <section className="min-h-screen bg-black text-white px-6 py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.glow} to-transparent blur-3xl opacity-60`} />
      </div>

      <div className="max-w-7xl mx-auto space-y-32">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-2">
            Interactive · Dial
          </p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium uppercase tracking-[0.03em]">
            System Design Dial
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            Move the dials and watch the architecture reshape itself.
          </p>
        </motion.div>

        {/* Mobile Layout: Interpretation First */}
        <div className="lg:hidden space-y-12">
          {/* System Interpretation Panel */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.1 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">{profile.title}</h3>
              <p className="text-white/70 text-sm sm:text-base">{profile.description}</p>

              <div>
                <p className="uppercase text-sm text-white/50 mb-2">What you learn</p>
                <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                  {profile.learnings.map((l) => (
                    <li key={l}>• {l}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="uppercase text-sm text-white/50 mb-2">Trade-offs</p>
                <p className="text-white/70 text-sm sm:text-base">{profile.tradeoffs}</p>
              </div>

              <div>
                <p className="uppercase text-sm text-white/50 mb-2">Typical Stack</p>
                <ul className="space-y-1 text-white/80 text-sm sm:text-base">
                  {profile.tech.map((t) => (
                    <li key={t}>→ {t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* System Dials */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {axes.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: 0.3 + index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-xl capitalize font-medium">{key}</span>
                  <span className="text-2xl sm:text-3xl font-bold">{state[key]}</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={state[key]}
                    onChange={(e) =>
                      setState((s) => ({ ...s, [key]: Number(e.target.value) }))
                    }
                    className="w-full h-4 sm:h-5 rounded-full appearance-none cursor-pointer touch-manipulation"
                    style={{
                      background: `linear-gradient(to right, ${theme.primary} ${state[key]}%, rgba(255,255,255,0.1) ${state[key]}%)`,
                    }}
                  />
                  {/* Custom slider thumb styling */}
                  <style jsx>{`
                    input[type="range"]::-webkit-slider-thumb {
                      appearance: none;
                      width: 24px;
                      height: 24px;
                      border-radius: 50%;
                      background: ${theme.primary};
                      cursor: pointer;
                      border: 2px solid white;
                      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                    }
                    input[type="range"]::-moz-range-thumb {
                      width: 24px;
                      height: 24px;
                      border-radius: 50%;
                      background: ${theme.primary};
                      cursor: pointer;
                      border: 2px solid white;
                      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                    }
                    input[type="range"]::-webkit-slider-thumb:hover {
                      transform: scale(1.1);
                    }
                    input[type="range"]::-moz-range-thumb:hover {
                      transform: scale(1.1);
                    }
                  `}</style>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.4 }}
            className="flex justify-center pt-8"
          >
            <div className="w-full max-w-md h-80 sm:h-96 relative">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={chartData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="axis" tick={{ fill: "#fff", fontSize: 14 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={false} />
                  <Radar
                    dataKey="value"
                    stroke={theme.primary}
                    fill={theme.primary}
                    fillOpacity={0.4}
                    strokeWidth={3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout: Original Structure */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-16 items-start">
          {/* Sliders */}
          <div className="lg:col-span-3 space-y-16">
            {axes.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: index * 0.1 }}
                className="space-y-6"
              >
                <div className="flex justify-between">
                  <span className="text-lg capitalize">{key}</span>
                  <span className="text-3xl font-bold">{state[key]}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={state[key]}
                  onChange={(e) =>
                    setState((s) => ({ ...s, [key]: Number(e.target.value) }))
                  }
                  className="w-full h-3 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, ${theme.primary} ${state[key]}%, rgba(255,255,255,0.1) ${state[key]}%)`,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Radar */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              className="w-full max-w-xl h-[520px] relative"
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2 }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={chartData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="axis" tick={{ fill: "#fff", fontSize: 16 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={false} />
                  <Radar
                    dataKey="value"
                    stroke={theme.primary}
                    fill={theme.primary}
                    fillOpacity={0.4}
                    strokeWidth={4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Profile */}
          <div className="lg:col-span-4 lg:translate-x-6">
            <motion.div
              className="bg-white/5 border border-white/10 rounded-2xl p-10 space-y-8"
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold">{profile.title}</h3>
              <p className="text-white/70">{profile.description}</p>

              <div>
                <p className="uppercase text-sm text-white/50 mb-2">What you learn</p>
                <ul className="space-y-2 text-white/80">
                  {profile.learnings.map((l) => (
                    <li key={l}>• {l}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="uppercase text-sm text-white/50 mb-2">Trade-offs</p>
                <p className="text-white/70">{profile.tradeoffs}</p>
              </div>

              <div>
                <p className="uppercase text-sm text-white/50 mb-2">Typical Stack</p>
                <ul className="space-y-1 text-white/80">
                  {profile.tech.map((t) => (
                    <li key={t}>→ {t}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        <p className="text-center text-white/40 text-sm">
          This is how real engineers reason about trade-offs - not just sliders.
        </p>
      </div>
    </section>
  );
}
