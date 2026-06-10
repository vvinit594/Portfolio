"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";
import type { CaseStudy } from "./types";

type TechStackSectionProps = {
  tech: CaseStudy["tech"];
};

export function TechStackSection({ tech }: TechStackSectionProps) {
  return (
    <section className="results-section results-tech-bg relative px-6 py-28 md:px-10 md:py-36 lg:px-16">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="font-satoshi text-4xl font-medium text-white md:text-6xl">
          Technology Stack
        </h2>
        <p className="font-satoshi mt-6 text-lg text-white/50">{tech.subtitle}</p>
      </motion.div>

      <motion.div
        className="mx-auto mt-16 flex max-w-4xl flex-col gap-12"
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {tech.groups.map((group) => (
          <motion.div key={group.label} variants={fadeUp} className="text-center">
            <p className="font-satoshi mb-6 text-sm uppercase tracking-[0.24em] text-violet-300/60">
              {group.label}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="results-tech-pill font-satoshi px-5 py-2.5 text-sm text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
