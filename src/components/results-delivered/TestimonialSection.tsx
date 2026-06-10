"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeUp } from "./motion";

export function TestimonialSection() {
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
          &ldquo;The platform transformed how we run events. What used to take hours of
          manual coordination now happens in real time — our volunteers are more
          confident and our leadership has full visibility.&rdquo;
        </p>
        <footer className="mt-10">
          <p className="font-satoshi text-lg font-medium text-white">Event Operations Lead</p>
          <p className="font-satoshi mt-2 text-sm text-white/45">
            Large-Scale Community Event Organization
          </p>
        </footer>
      </motion.blockquote>
    </section>
  );
}
