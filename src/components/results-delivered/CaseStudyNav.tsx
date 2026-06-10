"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fadeUp } from "./motion";
import type { CaseStudy } from "./types";

type CaseStudyNavProps = {
  previous?: CaseStudy;
  next?: CaseStudy;
};

function scrollToCaseStudy(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function CaseStudyNav({ previous, next }: CaseStudyNavProps) {
  if (!previous && !next) return null;

  return (
    <section className="results-section px-6 py-12 md:px-10 lg:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="results-case-nav mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-4 rounded-2xl p-4 sm:flex-row sm:items-center md:p-6"
      >
        {previous ? (
          <button
            type="button"
            onClick={() => scrollToCaseStudy(previous.id)}
            className="font-satoshi group flex flex-1 items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-white/[0.04]"
          >
            <ArrowLeft className="size-4 shrink-0 text-white/50 transition-transform group-hover:-translate-x-0.5 group-hover:text-violet-300" />
            <span>
              <span className="block text-xs uppercase tracking-wider text-white/40">
                Previous Project
              </span>
              <span className="mt-1 block text-sm text-white/85 transition-colors group-hover:text-white md:text-base">
                {previous.navTitle}
              </span>
            </span>
          </button>
        ) : (
          <div className="hidden flex-1 sm:block" />
        )}

        {previous && next && (
          <div className="hidden h-10 w-px bg-white/10 sm:block" aria-hidden />
        )}

        {next ? (
          <button
            type="button"
            onClick={() => scrollToCaseStudy(next.id)}
            className="font-satoshi group flex flex-1 items-center justify-end gap-3 rounded-xl px-4 py-3 text-right transition-colors hover:bg-white/[0.04]"
          >
            <span>
              <span className="block text-xs uppercase tracking-wider text-white/40">
                Next Project
              </span>
              <span className="mt-1 block text-sm text-white/85 transition-colors group-hover:text-white md:text-base">
                {next.navTitle}
              </span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:text-violet-300" />
          </button>
        ) : (
          <div className="hidden flex-1 sm:block" />
        )}
      </motion.div>
    </section>
  );
}
