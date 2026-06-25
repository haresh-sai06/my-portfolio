"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ParallaxProps {
  children: React.ReactNode;
  /** Fraction of own height to drift across the viewport. 0.1–0.4 is subtle. */
  speed?: number;
  className?: string;
}

export default function Parallax({
  children,
  speed = 0.25,
  className,
}: ParallaxProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        target.current,
        { yPercent: speed * 50 },
        {
          yPercent: -speed * 50,
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: wrap, dependencies: [speed] }
  );

  return (
    <div ref={wrap} className={className} style={{ willChange: "transform" }}>
      <div ref={target}>{children}</div>
    </div>
  );
}
