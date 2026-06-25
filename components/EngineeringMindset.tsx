"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useState, useRef } from "react";
import RevealHeading from "@/components/ui/RevealHeading";

interface ThinkingPattern {
  id: string;
  title: string;
  question: string;
  bad: string;
  good: string;
  reasoning: string;
  metrics: { before: string; after: string; label: string }[];
}

const THINKING_PATTERNS: ThinkingPattern[] = [
  {
    id: "performance",
    title: "Performance First",
    question: "How do you approach performance?",
    bad: "Add caching later if needed",
    good: "Design for performance from day one",
    reasoning: "Performance is not a feature — it's a foundation. Retroactive optimization costs 10x more.",
    metrics: [
      { before: "Audit at the end", after: "Budget upfront", label: "Approach" },
      { before: "Reactive fixes", after: "Telemetry-first", label: "Optimization" }
    ]
  },
  {
    id: "scalability",
    title: "Scalability Thinking",
    question: "How do you design for growth?",
    bad: "Build for current requirements",
    good: "Design for 10x current load",
    reasoning: "Systems either scale or break. There's no middle ground when success hits.",
    metrics: [
      { before: "Single-region", after: "Region-aware", label: "Footprint" },
      { before: "Sync everything", after: "Event-driven", label: "Coupling" }
    ]
  },
  {
    id: "simplicity",
    title: "Complexity Management",
    question: "How do you handle complexity?",
    bad: "More features = more value",
    good: "Simpler systems = better systems",
    reasoning: "Every line of code is a liability. The best code is code you don't write.",
    metrics: [
      { before: "Layers stacked", after: "Layers earned", label: "Architecture" },
      { before: "Add deps freely", after: "Earn every dep", label: "Surface area" }
    ]
  }
];

export default function EngineeringMindset() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPattern, setSelectedPattern] = useState<string>("performance");
  const [showComparison, setShowComparison] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const currentPattern = THINKING_PATTERNS.find(p => p.id === selectedPattern);

  return (
    <section id="mindset" ref={containerRef} className="min-h-screen relative bg-[#050505] overflow-hidden">
      <motion.div style={{ opacity }} className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
              05 · Mindset
            </p>
            <RevealHeading
              as="h2"
              text="How I Think"
              className="font-display text-5xl md:text-7xl font-medium uppercase tracking-[0.04em] text-white mb-5"
            />
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Engineering is about decisions. Here&apos;s how I make them.
            </p>
          </motion.div>

          {/* Pattern Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/5 rounded-lg p-1 border border-white/10">
              {THINKING_PATTERNS.map((pattern) => (
                <button
                  key={pattern.id}
                  type="button"
                  onClick={() => {
                    setSelectedPattern(pattern.id);
                    setShowComparison(false);
                  }}
                  className={`px-6 py-3 rounded-md transition-all duration-300 ${
                    selectedPattern === pattern.id
                      ? 'bg-white text-black'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                  suppressHydrationWarning={true}
                >
                  {pattern.title}
                </button>
              ))}
            </div>
          </div>

          {/* Current Pattern Display */}
          {currentPattern && (
            <motion.div
              key={selectedPattern}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {/* Question */}
              <div className="text-center mb-12">
                <h3 className="text-3xl font-semibold text-white/90 mb-4">
                  {currentPattern.question}
                </h3>
              </div>

              {/* Comparison Toggle */}
              <div className="text-center mb-8">
                <button
                  type="button"
                  onClick={() => setShowComparison(!showComparison)}
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white/80 hover:bg-white/20 transition-colors"
                  suppressHydrationWarning={true}
                >
                  {showComparison ? 'Hide' : 'Show'} Decision Process
                </button>
              </div>

              {/* Comparison View */}
              {showComparison && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                >
                  {/* Bad Approach */}
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <h4 className="text-xl font-medium text-red-400">Common Approach</h4>
                    </div>
                    <p className="text-red-300 text-lg mb-4">{currentPattern.bad}</p>
                    <div className="space-y-2">
                      <p className="text-red-400/60 text-sm">❌ Short-term thinking</p>
                      <p className="text-red-400/60 text-sm">❌ Technical debt accumulation</p>
                      <p className="text-red-400/60 text-sm">❌ Future rework required</p>
                    </div>
                  </div>

                  {/* Good Approach */}
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <h4 className="text-xl font-medium text-green-400">System Approach</h4>
                    </div>
                    <p className="text-green-300 text-lg mb-4">{currentPattern.good}</p>
                    <div className="space-y-2">
                      <p className="text-green-400/60 text-sm">✅ Long-term thinking</p>
                      <p className="text-green-400/60 text-sm">✅ Sustainable architecture</p>
                      <p className="text-green-400/60 text-sm">✅ Future-proof design</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Reasoning */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-12">
                <h4 className="text-xl font-medium text-white/90 mb-4">Why This Matters</h4>
                <p className="text-white/70 text-lg leading-relaxed">
                  {currentPattern.reasoning}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentPattern.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-lg p-6"
                  >
                    <p className="text-white/40 text-sm uppercase tracking-wider mb-3">
                      {metric.label}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/50 text-sm line-through">{metric.before}</p>
                        <p className="text-white/90 text-2xl font-bold">{metric.after}</p>
                      </div>
                      <div className="text-green-400">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Decision Principles */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-8">Core Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white/60 text-2xl">1</span>
                </div>
                <h4 className="text-white/90 font-medium mb-2">Measure Everything</h4>
                <p className="text-white/50 text-sm">If you can&apos;t measure it, you can&apos;t improve it.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white/60 text-2xl">2</span>
                </div>
                <h4 className="text-white/90 font-medium mb-2">Simplify Relentlessly</h4>
                <p className="text-white/50 text-sm">Complexity is the enemy of reliability.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white/60 text-2xl">3</span>
                </div>
                <h4 className="text-white/90 font-medium mb-2">Think in Systems</h4>
                <p className="text-white/50 text-sm">Every component affects the whole.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
