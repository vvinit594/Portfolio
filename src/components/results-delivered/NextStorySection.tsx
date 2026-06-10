"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "./motion";

export function NextStorySection() {
  return (
    <section className="results-section px-6 pb-32 pt-8 md:px-10 md:pb-40 lg:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="results-cta-card mx-auto max-w-4xl rounded-3xl p-10 text-center md:p-16"
      >
        <h2 className="font-satoshi text-3xl font-medium text-white md:text-5xl">
          More Results Coming Soon
        </h2>
        <p className="font-satoshi mx-auto mt-6 max-w-xl text-lg text-white/55">
          We&apos;re continuously building solutions that solve real business challenges.
        </p>
        <Link
          href="/#projects"
          className="hero-cta-button font-satoshi mt-10 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm text-white"
        >
          View Next Case Study
          <ArrowRight className="size-4" />
        </Link>
      </motion.div>
    </section>
  );
}
