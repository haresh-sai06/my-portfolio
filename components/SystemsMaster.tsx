"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import RevealHeading from "@/components/ui/RevealHeading";

interface SystemLayer {
  id: string;
  name: string;
  technologies: string[];
  description: string;
  usedIn: string;
  solved: string;
  color: string;
}

const SYSTEMS: SystemLayer[] = [
  {
    id: "frontend",
    name: "Frontend Systems",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    description: "Component architecture & state management",
    usedIn: "Portfolio, dashboards, landing experiences",
    solved: "Motion-led interfaces that target Lighthouse 90+ and hold 60fps",
    color: "#3B82F6"
  },
  {
    id: "backend",
    name: "Backend Systems",
    technologies: ["Node.js", "Firebase", "PostgreSQL", "Supabase", "Prisma"],
    description: "API design & data architecture",
    usedIn: "Real-time apps, internal tools, tournament & inventory systems",
    solved: "Normalized schemas, role-aware auth, real-time data flow",
    color: "#10B981"
  },
  {
    id: "ai",
    name: "AI / LLM Systems",
    technologies: ["Python", "LangChain", "OpenAI", "RAG", "Vector stores"],
    description: "LLM tooling, retrieval & automation",
    usedIn: "ForgeBot, Study Hub, voice agents, family chatbot",
    solved: "Production-ready LLM workflows with grounded retrieval and safe defaults",
    color: "#8B5CF6"
  },
  {
    id: "architecture",
    name: "Architecture & Performance",
    technologies: ["Edge runtime", "CDN", "Caching", "Observability"],
    description: "System design & optimization",
    usedIn: "Every shipped project - from landing pages to full-stack apps",
    solved: "Modular boundaries, observable hot paths, predictable scaling",
    color: "#F59E0B"
  }
];

export default function SystemsMaster() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredSystem, setHoveredSystem] = useState<string | null>(null);
  const [expandedSystem, setExpandedSystem] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Split animation - layers separate as you scroll
  const splitProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Canvas visualization
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw system layers
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.15;
      
      SYSTEMS.forEach((system, index) => {
        const angle = (index / SYSTEMS.length) * Math.PI * 2 - Math.PI / 2;
        const splitOffset = parseFloat(splitProgress.get().toString()) * 80;
        const radius = baseRadius + splitOffset;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        // Draw connection lines
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = system.color + '30';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw system node
        ctx.beginPath();
        ctx.arc(x, y, hoveredSystem === system.id ? 25 : 20, 0, Math.PI * 2);
        ctx.fillStyle = system.color + (hoveredSystem === system.id ? 'FF' : 'CC');
        ctx.fill();
        
        // Draw connections between systems
        SYSTEMS.forEach((otherSystem, otherIndex) => {
          if (index < otherIndex) {
            const otherAngle = (otherIndex / SYSTEMS.length) * Math.PI * 2 - Math.PI / 2;
            const otherX = centerX + Math.cos(otherAngle) * radius;
            const otherY = centerY + Math.sin(otherAngle) * radius;
            
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(otherX, otherY);
            ctx.strokeStyle = '#ffffff10';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [splitProgress, hoveredSystem]);

  return (
    <section id="systems" ref={containerRef} className="min-h-screen relative bg-[#050505] overflow-hidden">
      <motion.div 
        style={{ opacity }}
        className="relative h-screen flex items-center justify-center"
      >
        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        
        {/* System Cards */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
              03 · Systems
            </p>
            <RevealHeading
              as="h2"
              text="Ways I Create"
              className="font-display text-5xl md:text-7xl font-medium uppercase tracking-[0.04em] text-white mb-5"
            />
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Not just tools. Different layers of the same craft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SYSTEMS.map((system, index) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredSystem(system.id)}
                onMouseLeave={() => setHoveredSystem(null)}
                onClick={() => setExpandedSystem(expandedSystem === system.id ? null : system.id)}
                className="relative cursor-pointer group"
              >
                <div className="glass noise rounded-xl p-6 group-hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white/90 mb-2">
                        {system.name}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {system.description}
                      </p>
                    </div>
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: system.color }}
                    />
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {system.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Expanded Details */}
                  {expandedSystem === system.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-white/10 pt-4 mt-4"
                    >
                      <div className="space-y-3">
                        <>
                          <div>
                            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                              Applied In
                            </p>
                            <p className="text-white/80 text-sm">
                              {system.usedIn}
                            </p>
                          </div>
                          <div>
                            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                              Problems Solved
                            </p>
                            <p className="text-white/80 text-sm">
                              {system.solved}
                            </p>
                          </div>
                        </>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="flex items-center text-white/40 text-sm mt-4">
                    <span>Click to {expandedSystem === system.id ? 'collapse' : 'expand'}</span>
                    <motion.div
                      animate={{ rotate: expandedSystem === system.id ? 180 : 0 }}
                      className="ml-2"
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
