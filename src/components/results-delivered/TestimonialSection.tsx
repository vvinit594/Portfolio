"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeUp } from "./motion";
import type { CaseStudy } from "./types";

type TestimonialSectionProps = {
  testimonial: NonNullable<CaseStudy["testimonial"]>;
};

export function TestimonialSection({ testimonial }: TestimonialSectionProps) {
  return (
    <section className="results-section px-6 py-28 md:px-10 md:py-36 lg:px-16">
      <motion.blockquote
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="results-testimonial-card relative mx-auto max-w-4xl rounded-3xl p-10 text-center md:p-16"
      >
        <Quote className="mx-auto size-10 text-violet-300/50" />
        <p className="font-satoshi mt-8 text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <footer className="mt-10">
          <p className="font-satoshi text-lg font-medium text-white">
            {testimonial.author}
          </p>
          <p className="font-satoshi mt-2 text-sm text-white/45">{testimonial.role}</p>
        </footer>
      </motion.blockquote>
    </section>
  );
}
