"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";

type SummarySectionProps = {
  summary: string;
};

export function SummarySection({ summary }: SummarySectionProps) {
  return (
    <section className="results-section px-6 py-28 md:px-10 md:py-36 lg:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="results-challenge-card mx-auto max-w-4xl rounded-3xl p-10 text-center md:p-16"
      >
        <p className="font-satoshi text-sm uppercase tracking-[0.24em] text-violet-300/60">
          Project Summary
        </p>
        <p className="font-satoshi mt-8 text-xl leading-relaxed text-white/75 md:text-2xl">
          {summary}
        </p>
      </motion.div>
    </section>
  );
}
