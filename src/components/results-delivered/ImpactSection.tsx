"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";
import type { CaseStudy } from "./types";

type ImpactSectionProps = {
  impact: CaseStudy["impact"];
};

export function ImpactSection({ impact }: ImpactSectionProps) {
  return (
    <section className="results-section results-impact-bg relative px-6 py-28 md:px-10 md:py-36 lg:px-16">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="font-satoshi text-4xl font-medium text-white md:text-6xl">
          The Impact
        </h2>
        <p className="font-satoshi mt-6 text-lg text-white/50">{impact.subtitle}</p>
      </motion.div>

      <motion.div
        className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {impact.items.map((item) => (
          <motion.article
            key={item.title}
            variants={fadeUp}
            className="results-impact-card rounded-2xl p-8"
          >
            <p className="font-satoshi text-2xl font-medium text-violet-200 md:text-3xl">
              {item.metric}
            </p>
            <h3 className="font-satoshi mt-4 text-lg font-medium text-white">
              {item.title}
            </h3>
            <p className="font-satoshi mt-3 text-sm leading-relaxed text-white/55">
              {item.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
