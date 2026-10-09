"use client";

import {
    useScroll,
    useTransform,
    motion,
    AnimatePresence,
    MotionValue,
    useReducedMotion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Magnetic from "@/components/ui/Magnetic";
import Image from "next/image";

const FRAME_COUNT = 240;
const IMAGES_DIR = "/frames/";
const IMAGE_NAME = (index: number) =>
    `ezgif-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;

export default function PortfolioScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Preload frames - bug fix: progress now ticks on every settle (load OR error)
    useEffect(() => {
        let cancelled = false;
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = new Array(FRAME_COUNT);

        const onSettle = () => {
            if (cancelled) return;
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
            if (loadedCount === FRAME_COUNT) setImagesLoaded(true);
        };

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new window.Image();
            img.decoding = "async";
            img.onload = onSettle;
            img.onerror = onSettle;
            img.src = IMAGES_DIR + IMAGE_NAME(i);
            imgArray[i] = img;
        }

        imagesRef.current = imgArray;

        return () => {
            cancelled = true;
        };
    }, []);

    // Render loop
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        const images = imagesRef.current;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

        const renderFrame = (rawIndex: number) => {
            const index = Math.max(0, Math.min(FRAME_COUNT - 1, rawIndex));
            const img = images[index]?.naturalWidth ? images[index] : images.find(image => image.complete && image.naturalWidth > 0);
            if (!img || !img.complete || img.naturalWidth === 0) return;

            const canvasAspect = canvas.width / canvas.height;
            const imgAspect = img.width / img.height;

            let renderW: number;
            let renderH: number;
            let offsetX: number;
            let offsetY: number;

            if (canvasAspect > imgAspect) {
                renderW = canvas.width;
                renderH = canvas.width / imgAspect;
                offsetX = 0;
                offsetY = (canvas.height - renderH) / 2;
            } else {
                renderW = canvas.height * imgAspect;
                renderH = canvas.height;
                offsetX = (canvas.width - renderW) / 2;
                offsetY = 0;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
            canvas.style.opacity = "1";
        };

        const updateSize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            canvas.width = parent.clientWidth * dpr;
            canvas.height = parent.clientHeight * dpr;
            canvas.style.width = `${parent.clientWidth}px`;
            canvas.style.height = `${parent.clientHeight}px`;
            renderFrame(Math.round(frameIndex.get()));
        };

        window.addEventListener("resize", updateSize);
        updateSize();

        let rafId = 0;
        let pendingFrame = Math.round(frameIndex.get());

        const unsubscribe = frameIndex.on("change", (latest) => {
            pendingFrame = Math.round(latest);
            if (rafId) return;
            rafId = window.requestAnimationFrame(() => {
                rafId = 0;
                renderFrame(pendingFrame);
            });
        });

        renderFrame(pendingFrame);

        return () => {
            window.removeEventListener("resize", updateSize);
            unsubscribe();
            if (rafId) window.cancelAnimationFrame(rafId);
        };
    }, [imagesLoaded, frameIndex]);

    return (
        <div id="top" ref={containerRef} className="relative h-[400vh] bg-[#050505]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <AnimatePresence>
                    {!imagesLoaded && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
                            className="absolute bottom-5 left-5 z-50 rounded-full border border-white/10 bg-black/50 px-3 py-2 text-white/50 font-mono text-[10px]"
                            role="status"
                            aria-live="polite"
                        >
                            LOADING SYSTEM... {loadingProgress}%
                        </motion.div>
                    )}
                </AnimatePresence>

                <Image src="/frames/ezgif-frame-001.jpg" alt="" fill priority sizes="100vw" className="object-cover" aria-hidden />
                <canvas
                    ref={canvasRef}
                    className="relative h-full w-full object-cover opacity-0"
                    aria-label="Scroll-driven cinematic intro sequence"
                    role="img"
                />

                <div className="absolute inset-0 pointer-events-none">
                    <TextOverlay progress={scrollYProgress} />
                </div>
            </div>
        </div>
    );
}

function TextOverlay({ progress }: { progress: MotionValue<number> }) {
    const [scrollP, setScrollP] = useState(0);

    useEffect(() => {
        return progress.on("change", (v: number) => setScrollP(v));
    }, [progress]);

    return (
        <div className="relative h-full w-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
            <motion.div
                className="absolute inset-x-0 text-center"
                initial={{ opacity: 1, y: 0 }}
                animate={{
                    opacity: scrollP < 0.15 ? 1 - scrollP * 6.67 : 0,
                    y: scrollP < 0.15 ? 0 : -20,
                }}
                transition={{ duration: 0.5 }}
            >
                <p className="eyebrow mb-5 text-[rgb(168,255,96)]">Haresh Sainaath · AI & ML Engineering</p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white/90 mb-4">
                    I build systems.
                </h1>
                <p className="text-lg text-white/50 max-w-2xl mx-auto">
                    Applied AI, spatial experiences, and full-stack products. Built with curiosity, engineered with intent.
                </p>
            </motion.div>

            <motion.div
                className="absolute left-6 md:left-24 max-w-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                    opacity: scrollP > 0.15 && scrollP < 0.4 ? 1 : 0,
                    x: scrollP > 0.15 && scrollP < 0.4 ? 0 : -20,
                }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl font-semibold text-white/90 mb-2">
                    Engineering clarity.
                </h2>
                <p className="text-xl text-white/60">
                    Every line has purpose. Every system has logic.
                </p>
            </motion.div>

            <motion.div
                className="absolute right-6 md:right-24 max-w-xl text-right"
                initial={{ opacity: 0, x: 20 }}
                animate={{
                    opacity: scrollP > 0.4 && scrollP < 0.7 ? 1 : 0,
                    x: scrollP > 0.4 && scrollP < 0.7 ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl font-semibold text-white/90 mb-2">
                    Systems over features.
                </h2>
                <p className="text-xl text-white/60">
                    Architecture. Performance. Scalability.
                </p>
            </motion.div>

            <motion.div
                className="absolute inset-x-0 text-center bottom-24 pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: scrollP > 0.75 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4 font-mono">
                    The proof follows
                </p>
                <Magnetic strength={0.4} className="inline-block">
                    <a
                        href="#systems"
                        data-cursor="EXPLORE"
                        className="inline-flex items-center gap-3 px-9 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black uppercase text-sm tracking-[0.18em]"
                    >
                        Explore My Systems
                        <span aria-hidden>→</span>
                    </a>
                </Magnetic>
            </motion.div>
        </div>
    );
}
