"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

interface JourneyLayer {
  id: string;
  title: string;
  description: string;
  color: string;
}

const JOURNEY_LAYERS: JourneyLayer[] = [
  {
    id: "curiosity",
    title: "Curiosity",
    description: "I wanted to understand how things worked.",
    color: "#3B82F6"
  },
  {
    id: "learning",
    title: "Learning", 
    description: "I learned by breaking things and putting them back together.",
    color: "#10B981"
  },
  {
    id: "building",
    title: "Building",
    description: "Ideas became things people could actually use.",
    color: "#F59E0B"
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Now I design systems, not just solutions.",
    color: "#8B5CF6"
  },
  {
    id: "present",
    title: "Present",
    description: "Growth happens in layers, not leaps.",
    color: "#64748B"
  }
];

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Pre-calculate all transforms outside the map
  const layer0Y = useTransform(scrollYProgress, [0/5 - 0.1, 0/5, 1/5, 1/5 + 0.1], [100, 0, 0, -100]);
  const layer1Y = useTransform(scrollYProgress, [1/5 - 0.1, 1/5, 2/5, 2/5 + 0.1], [100, 0, 0, -100]);
  const layer2Y = useTransform(scrollYProgress, [2/5 - 0.1, 2/5, 3/5, 3/5 + 0.1], [100, 0, 0, -100]);
  const layer3Y = useTransform(scrollYProgress, [3/5 - 0.1, 3/5, 4/5, 4/5 + 0.1], [100, 0, 0, -100]);
  const layer4Y = useTransform(scrollYProgress, [4/5 - 0.1, 4/5, 5/5, 5/5 + 0.1], [100, 0, 0, -100]);
  
  const layer0Opacity = useTransform(scrollYProgress, [0/5 - 0.05, 0/5, 1/5 - 0.05, 1/5], [0, 0.85, 0.85, 0]);
  const layer1Opacity = useTransform(scrollYProgress, [1/5 - 0.05, 1/5, 2/5 - 0.05, 2/5], [0, 0.85, 0.85, 0]);
  const layer2Opacity = useTransform(scrollYProgress, [2/5 - 0.05, 2/5, 3/5 - 0.05, 3/5], [0, 0.85, 0.85, 0]);
  const layer3Opacity = useTransform(scrollYProgress, [3/5 - 0.05, 3/5, 4/5 - 0.05, 4/5], [0, 0.85, 0.85, 0]);
  const layer4Opacity = useTransform(scrollYProgress, [4/5 - 0.05, 4/5, 5/5 - 0.05, 5/5], [0, 0.85, 0.85, 0]);
  
  const layer0Blur = useTransform(scrollYProgress, [0/5 - 0.1, 0/5, 1/5 - 0.1, 1/5], [8, 0, 0, 8]);
  const layer1Blur = useTransform(scrollYProgress, [1/5 - 0.1, 1/5, 2/5 - 0.1, 2/5], [8, 0, 0, 8]);
  const layer2Blur = useTransform(scrollYProgress, [2/5 - 0.1, 2/5, 3/5 - 0.1, 3/5], [8, 0, 0, 8]);
  const layer3Blur = useTransform(scrollYProgress, [3/5 - 0.1, 3/5, 4/5 - 0.1, 4/5], [8, 0, 0, 8]);
  const layer4Blur = useTransform(scrollYProgress, [4/5 - 0.1, 4/5, 5/5 - 0.1, 5/5], [8, 0, 0, 8]);
  
  const layer0Scale = useTransform(scrollYProgress, [0/5 - 0.1, 0/5, 1/5 - 0.1, 1/5], [0.95, 1, 1, 0.95]);
  const layer1Scale = useTransform(scrollYProgress, [1/5 - 0.1, 1/5, 2/5 - 0.1, 2/5], [0.95, 1, 1, 0.95]);
  const layer2Scale = useTransform(scrollYProgress, [2/5 - 0.1, 2/5, 3/5 - 0.1, 3/5], [0.95, 1, 1, 0.95]);
  const layer3Scale = useTransform(scrollYProgress, [3/5 - 0.1, 3/5, 4/5 - 0.1, 4/5], [0.95, 1, 1, 0.95]);
  const layer4Scale = useTransform(scrollYProgress, [4/5 - 0.1, 4/5, 5/5 - 0.1, 5/5], [0.95, 1, 1, 0.95]);
  
  const layerYs = [layer0Y, layer1Y, layer2Y, layer3Y, layer4Y];
  const layerOpacities = [layer0Opacity, layer1Opacity, layer2Opacity, layer3Opacity, layer4Opacity];
  const layerBlurs = [layer0Blur, layer1Blur, layer2Blur, layer3Blur, layer4Blur];
  const layerScales = [layer0Scale, layer1Scale, layer2Scale, layer3Scale, layer4Scale];

  return (
    <section id="story" ref={containerRef} className="relative min-h-screen bg-[#050505] overflow-hidden">
      <div className="relative h-screen">
        {/* Journey Layers */}
        {JOURNEY_LAYERS.map((layer, index) => {
          return (
            <motion.div
              key={layer.id}
              style={{
                y: layerYs[index],
                opacity: layerOpacities[index],
                filter: `blur(${layerBlurs[index]}px)`,
                scale: layerScales[index],
                zIndex: JOURNEY_LAYERS.length - index,
                backgroundColor: `${layer.color}08`
              }}
              className="absolute inset-0 flex items-center justify-center backdrop-blur-sm border border-white/5"
            >
              <div className="max-w-3xl mx-auto px-12 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-5xl md:text-6xl font-light text-white/90 mb-8 tracking-wide"
                >
                  {layer.title}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl mx-auto font-light"
                >
                  {layer.description}
                </motion.p>
              </div>
            </motion.div>
          );
        })}

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50"
        >
          <h1 className="text-2xl md:text-3xl font-light text-white/40 tracking-widest">
            THE JOURNEY
          </h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-white/20" />
            <p className="text-white/30 text-sm font-light tracking-wide">
              Scroll through the layers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
