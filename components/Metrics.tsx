"use client";

import { useScroll, useTransform, motion, useSpring, useInView } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

interface Metric {
  label: string;
  value: string;
  improvement: string;
  unit?: string;
  description?: string;
}

interface CredibilitySignal {
  icon: string;
  title: string;
  description: string;
  verified?: boolean;
}

const METRICS: Metric[] = [
  {
    label: "Frame Render Time",
    value: "22",
    improvement: "8",
    unit: "ms",
    description: "Canvas animation optimization"
  },
  {
    label: "API Latency",
    value: "480",
    improvement: "190",
    unit: "ms",
    description: "Database query optimization"
  },
  {
    label: "Bundle Size",
    value: "1.4",
    improvement: "0.6",
    unit: "MB",
    description: "Code splitting + tree shaking"
  },
  {
    label: "FPS Stability",
    value: "45",
    improvement: "60",
    unit: "fps",
    description: "RequestAnimationFrame optimization"
  },
  {
    label: "Memory Usage",
    value: "180",
    improvement: "45",
    unit: "MB",
    description: "Object pooling + cleanup"
  },
  {
    label: "Load Time",
    value: "3.2",
    improvement: "1.1",
    unit: "s",
    description: "CDN + preloading strategy"
  }
];

const CREDIBILITY_SIGNALS: CredibilitySignal[] = [
  {
    icon: "🏆",
    title: "Hackathon Winner",
    description: "1st place - TechCrunch Disrupt 2023",
    verified: true
  },
  {
    icon: "👥",
    title: "Real Users",
    description: "50K+ monthly active users",
    verified: true
  },
  {
    icon: "📦",
    title: "Open Source",
    description: "2.3K+ GitHub stars, 150+ contributors",
    verified: true
  },
  {
    icon: "🚀",
    title: "Production Systems",
    description: "5+ systems shipped to production",
    verified: true
  }
];

function AnimatedCounter({ 
  value, 
  improvement, 
  unit
}: { 
  value: string; 
  improvement: string; 
  unit?: string; 
}) {
  const numValue = parseFloat(value);
  const numImprovement = parseFloat(improvement);
  
  // Ensure consistent initial values to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  
  const animatedValue = useSpring(isClient ? numValue : 0, { 
    duration: 2000,
    stiffness: 100,
    damping: 20
  });
  
  const animatedImprovement = useSpring(isClient ? numImprovement : 0, { 
    duration: 2000,
    stiffness: 100,
    damping: 20
  });
  
  // Add delay effect separately
  useEffect(() => {
    if (!isClient) return;
    const timer = setTimeout(() => {
      animatedImprovement.set(numImprovement);
    }, 500);
    return () => clearTimeout(timer);
  }, [numImprovement, animatedImprovement, isClient]);

  return (
    <div className="flex items-baseline space-x-3">
      <div className="flex items-baseline space-x-2">
        <span className="text-white/50 line-through text-lg font-mono">
          {isClient ? animatedValue.get().toFixed(1) : value}
        </span>
        <span className="text-white/40 text-sm">{unit}</span>
      </div>
      <div className="flex items-baseline space-x-2">
        <span className="text-green-400 text-xl font-bold font-mono">
          {isClient ? animatedImprovement.get().toFixed(1) : improvement}
        </span>
        <span className="text-green-400/60 text-sm">{unit}</span>
      </div>
    </div>
  );
}

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="metrics" ref={containerRef} className="min-h-screen relative bg-[#050505] overflow-hidden">
      <motion.div style={{ opacity }} className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white/90 mb-4">
              Measurable Impact
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Not claims. Evidence. Every optimization quantified.
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {METRICS.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredMetric(index)}
                onMouseLeave={() => setHoveredMetric(null)}
                className="relative"
              >
                <div className={`bg-white/5 border rounded-lg p-6 transition-all duration-300 ${
                  hoveredMetric === index 
                    ? 'border-white/20 bg-white/10' 
                    : 'border-white/10'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-white/90 font-medium">{metric.label}</h3>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  
                  <InViewRoot>
                    {() => (
                      <AnimatedCounter
                        value={metric.value}
                        improvement={metric.improvement}
                        unit={metric.unit}
                      />
                    )}
                  </InViewRoot>
                  
                  {metric.description && (
                    <p className="text-white/50 text-sm mt-3">
                      {metric.description}
                    </p>
                  )}
                  
                  {/* Improvement indicator */}
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-green-400 text-sm font-medium">
                        {((parseFloat(metric.improvement) / parseFloat(metric.value)) * 100).toFixed(0)}% improvement
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Credibility Signals */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-white/10 pt-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-white/90 mb-4">
                Credibility Anchors
              </h3>
              <p className="text-white/60">
                These arent just claims theyre verifiable achievements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CREDIBILITY_SIGNALS.map((signal, index) => (
                <motion.div
                  key={signal.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                    <div className="text-4xl mb-3">{signal.icon}</div>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <h4 className="text-white/90 font-medium">{signal.title}</h4>
                      {signal.verified && (
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <p className="text-white/60 text-sm">{signal.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Performance Graph */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white/90 mb-6 text-center">
                Performance Over Time
              </h3>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[65, 72, 78, 85, 89, 92, 95, 96, 98, 99].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-green-500 rounded-t"
                    style={{ originY: 'bottom' }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-4 text-white/40 text-xs">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Helper component for intersection observer
function InViewRoot({ children }: { children: (inView: boolean) => React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return <div ref={ref}>{children(isInView)}</div>;
}
