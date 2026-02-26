"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

export function ScrollTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Hero fades and scales as Projects slides over (0 → ~0.3 progress)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4], [1, 0.9, 0.8]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25, 0.4], [1, 0.985, 0.97]);

  return (
    <div ref={containerRef} className="relative">
      {/* Sticky Hero - sticks until Projects overlaps */}
      <motion.div
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          transformOrigin: "center center",
        }}
        className="sticky top-0 z-10 h-screen will-change-[opacity,transform]"
      >
        <Hero />
      </motion.div>

      {/* Projects - scrolls up, overlaps Hero, stacks on top */}
      <div className="relative z-20 -mt-[1px]">
        <Projects />
      </div>
    </div>
  );
}
