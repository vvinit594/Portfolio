"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "./motion";

export function CaseStudyCover() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <section
      ref={ref}
      className="results-section relative px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="results-cover-glass mx-auto grid max-w-7xl gap-12 overflow-hidden p-8 md:grid-cols-2 md:gap-16 md:p-12 lg:p-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <span className="results-badge font-satoshi">Event Management Platform</span>
          <h2 className="font-satoshi mt-8 text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            Event Registration &amp; Check-In Platform
          </h2>
          <p className="font-satoshi mt-6 text-lg leading-relaxed text-white/60 md:text-xl">
            Transforming manual event operations into a scalable digital workflow.
          </p>
        </motion.div>

        <motion.div style={{ y, rotate }} className="relative min-h-[320px] md:min-h-[400px]">
          <div className="results-mockup-frame absolute inset-0 rounded-2xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="results-mockup-device absolute left-4 right-8 top-6 bottom-12 rounded-xl border border-white/10 bg-[#12121a] p-4 shadow-2xl"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="size-2 rounded-full bg-red-400/80" />
              <span className="size-2 rounded-full bg-amber-400/80" />
              <span className="size-2 rounded-full bg-emerald-400/80" />
            </div>
            <div className="space-y-3">
              <div className="h-3 w-2/3 rounded-full bg-white/10" />
              <div className="grid grid-cols-3 gap-2">
                <div className="results-mockup-stat h-16 rounded-lg" />
                <div className="results-mockup-stat h-16 rounded-lg" />
                <div className="results-mockup-stat h-16 rounded-lg" />
              </div>
              <div className="h-24 rounded-lg bg-white/[0.04]" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="results-floating-card absolute -right-2 bottom-8 w-44 rounded-xl p-4 md:w-52"
          >
            <p className="font-satoshi text-xs text-white/45">Live Check-Ins</p>
            <p className="font-satoshi mt-1 text-2xl font-medium text-white">2,847</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-violet-500" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="results-floating-card absolute -left-2 top-16 w-40 rounded-xl p-3 md:w-48"
          >
            <p className="font-satoshi text-xs text-emerald-300/80">Verified</p>
            <p className="font-satoshi mt-1 text-sm text-white/80">Participant #1842</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
