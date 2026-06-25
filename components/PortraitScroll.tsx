"use client";

import { useScroll, useTransform, motion, useSpring, useReducedMotion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Portrait configuration
const PORTRAIT_COUNT = 6;
const PORTRAITS_DIR = "/photos/";
const PORTRAIT_IMAGES = [
  "photo-1.jpeg",
  "photo-2.jpeg",
  "photo-3.jpeg",
  "photo-4.jpeg",
  "photo-5.jpeg",
  "photo-6.jpeg"
];

const PORTRAIT_TEXTS = [
  {
    heading: "Haresh Sainaath",
    subheading: "20\nIndia\nAI & ML Engineering Student",
    isName: true
  },
  {
    heading: "Bachelor of Engineering",
    subheading: "Artificial Intelligence & Machine Learning\nSri Krishna College of Technology",
    isName: false
  },
  {
    heading: "Personal Traits",
    subheading: "Focused\nDetail-oriented\nCalm under pressure\nConsistent",
    isName: false
  },
  {
    heading: "Currently exploring",
    subheading: "AI systems & product design\n\nFocused on\nBuilding meaningful digital experiences",
    isName: false
  },
  {
    heading: "Interests",
    subheading: "Design • Motion • Systems",
    isName: false
  },
  {
    heading: "Based in India.",
    subheading: "Open to building globally.",
    isName: false
  }
];

// Motion constants
const SPRING_CONFIG = { stiffness: 100, damping: 20, restDelta: 0.001 };
const SCALE_RANGE = [1, 1.05];
const PORTRAIT_SCALE_RANGE = [1.08, 1.12];
const PARALLAX_RANGE = [-20, 20];

export default function PortraitScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress for the entire 600vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Apply spring smoothing for buttery motion (disabled if reduced motion preferred)
  const smoothedProgress = useSpring(
    scrollYProgress,
    shouldReduceMotion ? { stiffness: 1000, damping: 100, restDelta: 0.001 } : SPRING_CONFIG
  );

  // Calculate active portrait index (0-5)
  const activeIndex = useTransform(smoothedProgress, [0, 1], [0, PORTRAIT_COUNT - 1]);

  // Calculate transforms for each portrait - individual hooks
  const portraitOpacity0 = useTransform(smoothedProgress, [0 - 0.1, 0, 0 + 0.1], [0, 1, 0]);
  const portraitOpacity1 = useTransform(smoothedProgress, [1 / 6 - 0.1, 1 / 6, 1 / 6 + 0.1], [0, 1, 0]);
  const portraitOpacity2 = useTransform(smoothedProgress, [2 / 6 - 0.1, 2 / 6, 2 / 6 + 0.1], [0, 1, 0]);
  const portraitOpacity3 = useTransform(smoothedProgress, [3 / 6 - 0.1, 3 / 6, 3 / 6 + 0.1], [0, 1, 0]);
  const portraitOpacity4 = useTransform(smoothedProgress, [4 / 6 - 0.1, 4 / 6, 4 / 6 + 0.1], [0, 1, 0]);
  const portraitOpacity5 = useTransform(smoothedProgress, [5 / 6 - 0.1, 5 / 6, 5 / 6 + 0.1], [0, 1, 0]);

  const portraitOpacities = [portraitOpacity0, portraitOpacity1, portraitOpacity2, portraitOpacity3, portraitOpacity4, portraitOpacity5];

  const getPortraitOpacity = (index: number) => {
    return portraitOpacities[index];
  };

  // Calculate scale for each portrait - individual hooks
  const portraitScale0 = useTransform(smoothedProgress, [0 - 0.05, 0, 0 + 0.05], [1, SCALE_RANGE[1], 1]);
  const portraitScale1 = useTransform(smoothedProgress, [1 / 6 - 0.05, 1 / 6, 1 / 6 + 0.05], [1, SCALE_RANGE[1], 1]);
  const portraitScale2 = useTransform(smoothedProgress, [2 / 6 - 0.05, 2 / 6, 2 / 6 + 0.05], [1, SCALE_RANGE[1], 1]);
  const portraitScale3 = useTransform(smoothedProgress, [3 / 6 - 0.05, 3 / 6, 3 / 6 + 0.05], [1, SCALE_RANGE[1], 1]);
  const portraitScale4 = useTransform(smoothedProgress, [4 / 6 - 0.05, 4 / 6, 4 / 6 + 0.05], [1, SCALE_RANGE[1], 1]);
  const portraitScale5 = useTransform(smoothedProgress, [5 / 6 - 0.05, 5 / 6, 5 / 6 + 0.05], [1, SCALE_RANGE[1], 1]);

  const portraitScales = [portraitScale0, portraitScale1, portraitScale2, portraitScale3, portraitScale4, portraitScale5];

  const getPortraitScale = (index: number) => {
    return portraitScales[index];
  };

  // Calculate portrait zoom scale for intimacy - individual hooks
  const portraitZoomScale0 = useTransform(smoothedProgress, [0 - 0.05, 0, 0 + 0.05], [PORTRAIT_SCALE_RANGE[0], PORTRAIT_SCALE_RANGE[1], PORTRAIT_SCALE_RANGE[0]]);
  const portraitZoomScale1 = useTransform(smoothedProgress, [1 / 6 - 0.05, 1 / 6, 1 / 6 + 0.05], [PORTRAIT_SCALE_RANGE[0], PORTRAIT_SCALE_RANGE[1], PORTRAIT_SCALE_RANGE[0]]);
  const portraitZoomScale2 = useTransform(smoothedProgress, [2 / 6 - 0.05, 2 / 6, 2 / 6 + 0.05], [PORTRAIT_SCALE_RANGE[0], PORTRAIT_SCALE_RANGE[1], PORTRAIT_SCALE_RANGE[0]]);
  const portraitZoomScale3 = useTransform(smoothedProgress, [3 / 6 - 0.05, 3 / 6, 3 / 6 + 0.05], [PORTRAIT_SCALE_RANGE[0], PORTRAIT_SCALE_RANGE[1], PORTRAIT_SCALE_RANGE[0]]);
  const portraitZoomScale4 = useTransform(smoothedProgress, [4 / 6 - 0.05, 4 / 6, 4 / 6 + 0.05], [PORTRAIT_SCALE_RANGE[0], PORTRAIT_SCALE_RANGE[1], PORTRAIT_SCALE_RANGE[0]]);
  const portraitZoomScale5 = useTransform(smoothedProgress, [5 / 6 - 0.05, 5 / 6, 5 / 6 + 0.05], [PORTRAIT_SCALE_RANGE[0], PORTRAIT_SCALE_RANGE[1], PORTRAIT_SCALE_RANGE[0]]);

  const portraitZoomScales = [portraitZoomScale0, portraitZoomScale1, portraitZoomScale2, portraitZoomScale3, portraitZoomScale4, portraitZoomScale5];

  const getPortraitZoomScale = (index: number) => {
    return portraitZoomScales[index];
  };

  // Calculate parallax drift for each portrait - individual hooks
  const parallaxX0 = useTransform(smoothedProgress, [0 - 0.1, 0, 0 + 0.1], [PARALLAX_RANGE[0], 0, PARALLAX_RANGE[1]]);
  const parallaxX1 = useTransform(smoothedProgress, [1 / 6 - 0.1, 1 / 6, 1 / 6 + 0.1], [PARALLAX_RANGE[0], 0, PARALLAX_RANGE[1]]);
  const parallaxX2 = useTransform(smoothedProgress, [2 / 6 - 0.1, 2 / 6, 2 / 6 + 0.1], [PARALLAX_RANGE[0], 0, PARALLAX_RANGE[1]]);
  const parallaxX3 = useTransform(smoothedProgress, [3 / 6 - 0.1, 3 / 6, 3 / 6 + 0.1], [PARALLAX_RANGE[0], 0, PARALLAX_RANGE[1]]);
  const parallaxX4 = useTransform(smoothedProgress, [4 / 6 - 0.1, 4 / 6, 4 / 6 + 0.1], [PARALLAX_RANGE[0], 0, PARALLAX_RANGE[1]]);
  const parallaxX5 = useTransform(smoothedProgress, [5 / 6 - 0.1, 5 / 6, 5 / 6 + 0.1], [PARALLAX_RANGE[0], 0, PARALLAX_RANGE[1]]);

  const parallaxXs = [parallaxX0, parallaxX1, parallaxX2, parallaxX3, parallaxX4, parallaxX5];

  const getParallaxX = (index: number) => {
    return parallaxXs[index];
  };

  // Calculate text overlay transforms for each portrait - individual hooks
  const textOpacity0 = useTransform(portraitOpacity0, [0, 0.3, 1], [0, 0, 1]);
  const textOpacity1 = useTransform(portraitOpacity1, [0, 0.3, 1], [0, 0, 1]);
  const textOpacity2 = useTransform(portraitOpacity2, [0, 0.3, 1], [0, 0, 1]);
  const textOpacity3 = useTransform(portraitOpacity3, [0, 0.3, 1], [0, 0, 1]);
  const textOpacity4 = useTransform(portraitOpacity4, [0, 0.3, 1], [0, 0, 1]);
  const textOpacity5 = useTransform(portraitOpacity5, [0, 0.3, 1], [0, 0, 1]);

  const textOpacities = [textOpacity0, textOpacity1, textOpacity2, textOpacity3, textOpacity4, textOpacity5];

  const textX0 = useTransform(portraitOpacity0, [0, 0.3, 1], [50, 0, 0]);
  const textX1 = useTransform(portraitOpacity1, [0, 0.3, 1], [-50, 0, 0]);
  const textX2 = useTransform(portraitOpacity2, [0, 0.3, 1], [50, 0, 0]);
  const textX3 = useTransform(portraitOpacity3, [0, 0.3, 1], [-50, 0, 0]);
  const textX4 = useTransform(portraitOpacity4, [0, 0.3, 1], [50, 0, 0]);
  const textX5 = useTransform(portraitOpacity5, [0, 0.3, 1], [-50, 0, 0]);

  const textXs = [textX0, textX1, textX2, textX3, textX4, textX5];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Update current index for display
  useEffect(() => {
    const unsubscribe = activeIndex.on("change", (latest) => {
      setCurrentIndex(Math.round(latest));
    });
    return unsubscribe;
  }, [activeIndex]);
  useEffect(() => {
    let loadedCount = 0;

    const loadImages = async () => {
      for (let i = 0; i < PORTRAIT_COUNT; i++) {
        const img = document.createElement('img');
        img.src = PORTRAITS_DIR + PORTRAIT_IMAGES[i];
        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / PORTRAIT_COUNT) * 100));
          if (loadedCount === PORTRAIT_COUNT) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / PORTRAIT_COUNT) * 100));
          if (loadedCount === PORTRAIT_COUNT) setImagesLoaded(true);
        };
      }
    };

    loadImages();
  }, []);

  return (
    <section
      ref={containerRef}
      id="portraits"
      className="relative h-[600vh] bg-[#050505]"
    >
      {/* Section heading */}
      <motion.div
        className="sticky top-0 left-0 z-50 pt-6 sm:pt-8 pl-4 sm:pl-8 md:pl-12 lg:pl-24"
        initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 0.5 }}
      >
        <h2
          className="text-white/80 text-lg sm:text-xl md:text-2xl font-bold tracking-wider"
          style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
        >
          ABOUT ME
        </h2>
      </motion.div>

      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Loading state */}
        {!imagesLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-[#050505] text-white/50 font-mono text-xs sm:text-sm"
          >
            <div className="text-center">
              <div className="mb-2">LOADING PRESENCE...</div>
              <div className="text-white/30">{loadingProgress}%</div>
            </div>
          </motion.div>
        )}

        {/* Portrait stack */}
        <div className="relative h-full w-full">
          {PORTRAIT_IMAGES.map((imageName, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              style={{
                opacity: getPortraitOpacity(index),
                scale: getPortraitScale(index),
                x: getParallaxX(index),
                willChange: "transform, opacity"
              }}
            >
              {/* Background fill layer - blurred and dimmed */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={PORTRAITS_DIR + imageName}
                  alt={`Portrait background ${index + 1}`}
                  fill
                  className="object-cover scale-110"
                  style={{
                    filter: 'blur(50px) brightness(0.8)',
                    opacity: 0.35
                  }}
                  sizes="100vw"
                  priority={index < 2}
                />
              </div>

              {/* Vignette overlay for edge blending */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.6) 100%)'
                }}
              />

              {/* Main portrait image - contained and centered with zoom */}
              <div className="absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-6">
                <motion.div
                  className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[88vh] max-w-[45vh] sm:max-w-[50vh] md:max-w-[55vh]"
                  style={{
                    scale: shouldReduceMotion ? 1 : getPortraitZoomScale(index)
                  }}
                >
                  <Image
                    src={PORTRAITS_DIR + imageName}
                    alt={`Portrait ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="50vh"
                    priority={index < 2}
                  />
                </motion.div>
              </div>

              {/* Additional darkening overlay for cinematic depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-30" />

              {/* Biodata text overlay - mobile optimized positioning */}
              <motion.div
                className={`absolute top-1/2 -translate-y-1/2 z-40 ${index % 2 === 0
                  ? 'right-4 sm:right-6 md:right-8 lg:right-24 text-left'
                  : 'left-4 sm:left-6 md:left-8 lg:left-24 text-left'
                  }`}
                style={{
                  opacity: textOpacities[index],
                  x: shouldReduceMotion ? 0 : textXs[index]
                }}
              >
                <div className="max-w-[280px] sm:max-w-xs md:max-w-sm">
                  <h3
                    className={`text-white/90 mb-2 sm:mb-3 leading-tight ${PORTRAIT_TEXTS[index].isName
                      ? 'text-2xl sm:text-3xl md:text-4xl font-bold'
                      : 'text-lg sm:text-xl md:text-2xl font-semibold'
                      }`}
                    style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
                  >
                    {PORTRAIT_TEXTS[index].heading}
                  </h3>
                  <div className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {PORTRAIT_TEXTS[index].subheading}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Subtle scroll indicator - mobile optimized */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/30 text-xs sm:text-xs tracking-widest uppercase z-30"
          style={{
            opacity: useTransform(smoothedProgress, [0, 0.1, 0.9, 1], [1, 0, 0, 1])
          }}
        >
          <div className="flex flex-col items-center space-y-1">
            <div className="text-[10px] sm:text-xs">
              {currentIndex + 1} / {PORTRAIT_COUNT}
            </div>
            {/* Mobile scroll hint */}
            <div className="hidden sm:block text-[8px] text-white/20">
              SCROLL
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
