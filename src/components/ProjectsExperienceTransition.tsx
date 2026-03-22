"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollTransition } from "./ScrollTransition";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { Services } from "./Services";

export function ProjectsExperienceTransition() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Services enters: Projects fades/scales
  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "start start"],
  });
  const projectsOpacity = useTransform(servicesProgress, [0, 1], [1, 0.82]);
  const projectsScale = useTransform(servicesProgress, [0, 1], [1, 0.97]);

  // Experience enters: Services fades/scales
  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "start start"],
  });
  const servicesOpacity = useTransform(experienceProgress, [0, 1], [1, 0.82]);
  const servicesScale = useTransform(experienceProgress, [0, 1], [1, 0.97]);

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
        ref={servicesRef}
        style={{
          opacity: servicesOpacity,
          scale: servicesScale,
          transformOrigin: "center top",
        }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-30 -mt-[24vh] pb-[16vh] md:-mt-[28vh] md:pb-[18vh] will-change-[opacity,transform]"
      >
        <Services />
      </motion.div>

      <div
        ref={experienceRef}
        className="experience-layered relative z-40 -mt-[24vh] md:-mt-[28vh]"
      >
        <ExperienceTimeline />
      </div>
    </div>
  );
}

