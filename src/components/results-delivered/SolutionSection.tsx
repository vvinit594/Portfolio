"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";
import type { CaseStudy } from "./types";

type SolutionSectionProps = {
  solution: CaseStudy["solution"];
};

export function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <section className="results-section results-solution-bg relative px-6 py-28 md:px-10 md:py-36 lg:px-16">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="font-satoshi text-4xl font-medium text-white md:text-6xl">
          The Solution
        </h2>
        <p className="font-satoshi mt-6 text-lg text-white/50">{solution.subtitle}</p>
      </motion.div>

      <motion.div
        className="mx-auto mt-20 flex max-w-md flex-col items-center"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {solution.flow.map((step, index) => (
          <div key={step} className="flex w-full flex-col items-center">
            <motion.div
              variants={fadeUp}
              className="results-flow-node w-full rounded-2xl px-8 py-6 text-center"
            >
              <p className="font-satoshi text-lg font-medium text-white md:text-xl">
                {step}
              </p>
            </motion.div>
            {index < solution.flow.length - 1 && (
              <motion.div
                variants={fadeUp}
                className="results-flow-connector my-2 flex h-10 flex-col items-center"
                aria-hidden
              >
                <div className="h-full w-px bg-gradient-to-b from-violet-500/80 to-violet-500/20" />
                <div className="size-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(124,58,237,0.6)]" />
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
