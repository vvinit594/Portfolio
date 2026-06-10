"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "./motion";
import type { CaseStudy } from "./types";

type CaseStudyCtaSectionProps = {
  cta: NonNullable<CaseStudy["cta"]>;
};

export function CaseStudyCtaSection({ cta }: CaseStudyCtaSectionProps) {
  return (
    <section className="results-section px-6 pb-16 pt-8 md:px-10 md:pb-20 lg:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="results-cta-card mx-auto max-w-4xl rounded-3xl p-10 text-center md:p-16"
      >
        <h2 className="font-satoshi text-3xl font-medium text-white md:text-5xl">
          {cta.title}
        </h2>
        <p className="font-satoshi mx-auto mt-6 max-w-2xl text-lg text-white/55">
          {cta.description}
        </p>
        <Link
          href={cta.buttonHref}
          className="hero-cta-button font-satoshi mt-10 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm text-white"
        >
          {cta.buttonLabel}
          <ArrowRight className="size-4" />
        </Link>
      </motion.div>
    </section>
  );
}
