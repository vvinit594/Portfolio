"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, stagger } from "./motion";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "Multiple", label: "Client Projects Delivered" },
  { value: "Full Stack", label: "& AI Solutions" },
];

export function ResultsHero() {
  return (
    <section className="results-hero relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-24 pt-32 md:px-10 lg:px-16">
      <div className="results-grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="results-hero-glow pointer-events-none absolute inset-0" aria-hidden />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        variants={stagger(0.12)}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="font-satoshi mb-6 text-sm uppercase tracking-[0.28em] text-violet-300/70"
        >
          Client Success Stories
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-satoshi max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Results Delivered
        </motion.h1>

        <motion.div variants={fadeUp} className="mt-10 max-w-2xl space-y-2">
          <p className="font-satoshi text-xl text-white/85 md:text-2xl">
            Real business problems.
            <br />
            Real software solutions.
            <br />
            Real outcomes.
          </p>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-satoshi mt-8 max-w-xl text-base leading-relaxed text-white/50 md:text-lg"
        >
          Every project starts with a challenge. Our job is turning operational
          problems into scalable digital systems.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="results-stat-card mt-14 grid gap-6 p-6 sm:grid-cols-3 md:mt-16 md:p-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-satoshi text-2xl font-medium text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="font-satoshi mt-1 text-sm text-white/55">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-satoshi text-xs uppercase tracking-[0.2em] text-white/35">
          Scroll
        </span>
        <ChevronDown className="size-5 animate-bounce text-violet-300/60" />
      </motion.div>
    </section>
  );
}
