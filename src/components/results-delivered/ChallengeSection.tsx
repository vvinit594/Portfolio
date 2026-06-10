"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";
import type { CaseStudy } from "./types";

type ChallengeSectionProps = {
  challenge: CaseStudy["challenge"];
};

export function ChallengeSection({ challenge }: ChallengeSectionProps) {
  return (
    <section className="results-section px-6 py-28 md:px-10 md:py-36 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="font-satoshi text-sm uppercase tracking-[0.24em] text-violet-300/60">
            The Challenge
          </p>
          <h2 className="font-satoshi mt-6 text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            {challenge.headline}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="results-challenge-card rounded-3xl p-8 md:p-10"
        >
          <p className="font-satoshi text-sm text-white/45">{challenge.cardLabel}</p>
          <ul className="mt-8 space-y-4">
            {challenge.items.map((item) => (
              <li
                key={item}
                className="font-satoshi flex items-center gap-4 border-b border-white/[0.06] pb-4 text-lg text-white/85 last:border-0 last:pb-0"
              >
                <span className="size-2 shrink-0 rounded-full bg-violet-400" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
