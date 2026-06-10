"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { fadeUp, stagger } from "./motion";

const problems = [
  "Long queues during participant check-ins",
  "Manual participant verification",
  "Spreadsheet-based tracking",
  "Collection management errors",
  "No real-time visibility",
];

export function ProblemSection() {
  return (
    <section className="results-section results-problem-bg relative px-6 py-28 md:px-10 md:py-36 lg:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-satoshi text-4xl font-medium text-white md:text-6xl"
        >
          The Problem
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-satoshi mt-6 text-lg text-white/50"
        >
          Operational friction that slows events and creates risk at scale.
        </motion.p>
      </div>

      <div className="relative mx-auto mt-20 max-w-2xl">
        <div className="results-timeline-line absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2" />

        <motion.div
          className="relative space-y-8"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={problem}
              variants={fadeUp}
              className="results-problem-card relative mx-auto flex max-w-lg items-start gap-4 rounded-2xl p-6"
            >
              <div className="results-problem-icon flex size-10 shrink-0 items-center justify-center rounded-xl">
                <AlertTriangle className="size-4 text-orange-300/90" />
              </div>
              <div>
                <span className="font-satoshi text-xs uppercase tracking-wider text-orange-300/60">
                  Issue {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-satoshi mt-2 text-base leading-relaxed text-white/85 md:text-lg">
                  {problem}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
