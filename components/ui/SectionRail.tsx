"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Identity" },
  { id: "portraits", label: "About" },
  { id: "systems", label: "Systems" },
  { id: "projects", label: "Work" },
  { id: "mindset", label: "Mindset" },
  { id: "closure", label: "Contact" },
];

export default function SectionRail() {
  const [active, setActive] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const compute = () => {
      const probe = window.scrollY + window.innerHeight * 0.4;
      let idx = 0;
      SECTIONS.forEach((s, i) => {
        if (s.id === "top") return;
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= probe) idx = i;
      });
      setActive(idx);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  // Hide the rail over sections that own their own left-edge UI
  // (the portrait scroll has left-aligned biodata + its own counter),
  // so the two never collide.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const portraits = document.getElementById("portraits");
    if (!portraits) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.intersectionRatio > 0.25),
      { threshold: [0, 0.25, 0.5, 1] }
    );
    observer.observe(portraits);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
    if (id === "top") {
      window.scrollTo({ top: 0, behavior });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
  };

  return (
    <nav
      aria-label="Section navigation"
      className={`fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-[60] hidden md:flex flex-col gap-5 mix-blend-difference transition-opacity duration-500 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {SECTIONS.map((s, i) => {
        const isActive = active === i;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => scrollTo(s.id)}
            data-cursor="JUMP"
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-3 text-left rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span
              className={`font-mono text-[10px] tracking-[0.25em] transition-colors ${
                isActive
                  ? "text-white"
                  : "text-white/35 group-hover:text-white/70 group-focus-visible:text-white/70"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`overflow-hidden font-mono text-[10px] tracking-[0.25em] uppercase whitespace-nowrap transition-[max-width,opacity] duration-500 ease-out ${
                isActive
                  ? "opacity-100 max-w-[120px]"
                  : "opacity-0 max-w-0 group-hover:opacity-70 group-hover:max-w-[120px] group-focus-visible:opacity-100 group-focus-visible:max-w-[120px]"
              } text-white`}
            >
              {s.label}
            </span>
            <span
              className={`h-px transition-all duration-500 ease-out ${
                isActive
                  ? "w-10 bg-white"
                  : "w-5 bg-white/35 group-hover:bg-white/70 group-hover:w-8 group-focus-visible:bg-white/70 group-focus-visible:w-8"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
