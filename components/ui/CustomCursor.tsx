"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string>("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.5 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const hoverable = target.closest(
        "a, button, [role='button'], [data-cursor], input, textarea"
      );
      if (hoverable) {
        setHovering(true);
        const cursorLabel = (hoverable as HTMLElement).dataset.cursor;
        setLabel(cursorLabel ?? "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] flex items-center justify-center rounded-full bg-white text-black font-mono uppercase"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        mixBlendMode: "difference",
      }}
      animate={{
        width: hovering ? 72 : 14,
        height: hovering ? 72 : 14,
        fontSize: hovering && label ? 10 : 0,
        letterSpacing: hovering && label ? "0.18em" : "0em",
      }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    >
      {hovering && label ? <span>{label}</span> : null}
    </motion.div>
  );
}
