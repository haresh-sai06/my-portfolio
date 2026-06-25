"use client";

import React, { useEffect, useRef, useState } from "react";

const PHOTO = "/photos/photo-1.jpeg";
const RADIUS = 265;
const FOCUS = "50% 24%"; // frame the face near the top so it isn't bisected

export default function SpotlightReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return; // static, dimmed fallback for touch / reduced-motion
    setInteractive(true);

    const section = sectionRef.current;
    const wrap = wrapRef.current;
    const reveal = revealRef.current;
    if (!section || !wrap || !reveal) return;

    const raw = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    let rafId = 0;
    let running = false;

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      raw.x = e.clientX - r.left;
      raw.y = e.clientY - r.top;
    };

    const loop = (t: number) => {
      // Ken Burns: slow GPU-accelerated zoom, 1.05 → 1.10 and back (~19s)
      const s = 1.05 + 0.05 * (0.5 - 0.5 * Math.cos(t / 3000));
      wrap.style.transform = `scale(${s})`;

      smooth.x += (raw.x - smooth.x) * 0.16;
      smooth.y += (raw.y - smooth.y) * 0.16;

      // Correct the mask for the scale so the spotlight stays under the cursor.
      const rect = section.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const lx = cx + (smooth.x - cx) / s;
      const ly = cy + (smooth.y - cy) / s;
      const mask = `radial-gradient(circle ${RADIUS}px at ${lx}px ${ly}px, #000 0%, #000 40%, rgba(0,0,0,0.5) 70%, transparent 86%)`;
      reveal.style.webkitMaskImage = mask;
      reveal.style.maskImage = mask;

      rafId = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          rafId = requestAnimationFrame(loop);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0 }
    );

    io.observe(section);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const layer: React.CSSProperties = {
    backgroundImage: `url('${PHOTO}')`,
    backgroundSize: "cover",
    backgroundPosition: FOCUS,
  };

  return (
    <section
      id="closer"
      ref={sectionRef}
      className="relative flex min-h-[118vh] items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Zoom wrapper holds both image layers so they scale together */}
      <div
        ref={wrapRef}
        className="absolute inset-0 will-change-transform"
        style={{ transformOrigin: "center", transform: interactive ? undefined : "scale(1.05)" }}
        aria-hidden
      >
        {/* base — desaturated + dim */}
        <div
          className="absolute inset-0"
          style={{
            ...layer,
            filter: "grayscale(1) brightness(0.34) contrast(1.15)",
          }}
        />
        {/* reveal — full colour, masked to the cursor */}
        <div
          ref={revealRef}
          className="absolute inset-0"
          style={{
            ...layer,
            filter: "saturate(1.15) contrast(1.05)",
            opacity: interactive ? 1 : 0.5,
            WebkitMaskImage: interactive
              ? "radial-gradient(circle 230px at -400px -400px, #000 0%, transparent 86%)"
              : undefined,
            maskImage: interactive
              ? "radial-gradient(circle 230px at -400px -400px, #000 0%, transparent 86%)"
              : undefined,
          }}
        />
      </div>

      {/* Cinematic scrims for framing + text legibility */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, transparent 56%, rgba(5,5,5,0.42) 86%, #050505 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] via-[#050505]/35 to-transparent"
        aria-hidden
      />

      {/* Overlaid copy */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[30vh] z-20 mx-auto max-w-5xl px-6 text-center">
        <p className="eyebrow mb-5">Look closer</p>
        <h2 className="font-display text-5xl font-medium uppercase leading-[0.95] tracking-[0.02em] text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)] md:text-7xl lg:text-8xl">
          Systems beneath the surface
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/70 md:text-lg">
          Most people see the screen.{" "}
        </p>
      </div>
    </section>
  );
}
