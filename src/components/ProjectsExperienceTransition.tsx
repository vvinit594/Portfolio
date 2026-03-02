"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollTransition } from "./ScrollTransition";
import { ExperienceTimeline } from "./ExperienceTimeline";

export function ProjectsExperienceTransition() {
  const experienceRef = useRef<HTMLDivElement>(null);

  // Starts when Experience enters viewport from bottom, ends near top overlap.
  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "start start"],
  });

  const projectsOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const projectsScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <div className="relative">
      <motion.div
        style={{
          opacity: projectsOpacity,
          scale: projectsScale,
          transformOrigin: "center top",
        }}
        className="relative z-20 pb-[16vh] md:pb-[18vh] will-change-[opacity,transform]"
      >
        <ScrollTransition />
      </motion.div>

      <motion.div
        ref={experienceRef}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="experience-layered relative z-30 -mt-[24vh] md:-mt-[28vh]"
      >
        <ExperienceTimeline />
      </motion.div>
    </div>
  );
}

