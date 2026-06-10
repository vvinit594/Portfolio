"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";

const impacts = [
  {
    title: "Faster Participant Verification",
    metric: "Minutes → Seconds",
    description: "Check-in queues collapsed with instant digital verification.",
  },
  {
    title: "Reduced Manual Errors",
    metric: "Near Zero",
    description: "Spreadsheet duplication and data entry mistakes eliminated.",
  },
  {
    title: "Improved Volunteer Efficiency",
    metric: "3× Throughput",
    description: "Teams coordinated through a single live operational dashboard.",
  },
  {
    title: "Real-Time Collection Visibility",
    metric: "Live",
    description: "Leadership saw collection status without waiting for end-of-day reports.",
  },
  {
    title: "Simplified Reporting",
    metric: "One Click",
    description: "Export-ready summaries replaced hours of manual consolidation.",
  },
  {
    title: "Enhanced Participant Experience",
    metric: "Seamless",
    description: "Faster entry, fewer bottlenecks, and a more professional event flow.",
  },
];

export function ImpactSection() {
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
        <p className="font-satoshi mt-6 text-lg text-white/50">
          Measurable operational improvements — not just features shipped.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {impacts.map((impact) => (
          <motion.article
            key={impact.title}
            variants={fadeUp}
            className="results-impact-card rounded-2xl p-8"
          >
            <p className="font-satoshi text-2xl font-medium text-violet-200 md:text-3xl">
              {impact.metric}
            </p>
            <h3 className="font-satoshi mt-4 text-lg font-medium text-white">
              {impact.title}
            </h3>
            <p className="font-satoshi mt-3 text-sm leading-relaxed text-white/55">
              {impact.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
