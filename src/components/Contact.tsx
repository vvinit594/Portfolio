"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Rocket, ArrowRight } from "lucide-react";
import { ClientProjectForm } from "./contact/ClientProjectForm";
import { TeamApplicationForm } from "./contact/TeamApplicationForm";
import { SocialConnect } from "./contact/SocialConnect";

type ContactMode = "select" | "project" | "team";

const selectionOptions = [
  {
    id: "project" as const,
    icon: Briefcase,
    title: "Start a Project",
    description: "Turn your idea into a scalable digital product.",
    cta: "Start a Project",
  },
  {
    id: "team" as const,
    icon: Rocket,
    title: "Join The Team",
    description: "Join us in building impactful products and experiences.",
    cta: "Join the Team",
  },
];

export function Contact() {
  const [mode, setMode] = useState<ContactMode>("select");

  return (
    <section
      id="contact"
      className="contact-section relative overflow-hidden px-6 py-28 md:px-12 md:py-32"
    >
      <div className="contact-bg-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center md:mb-16"
        >
          <h2 className="font-satoshi text-3xl font-normal tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            Let&apos;s Build Something Meaningful
          </h2>
          <p className="font-satoshi mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
            Whether you&apos;re looking to build a product or join the team,
            this is where the journey begins.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {mode === "select" && (
            <motion.div
              key="select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-satoshi mb-10 text-center text-lg text-white/70">
                Who Are You?
              </p>

              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                {selectionOptions.map((option, index) => (
                  <motion.button
                    key={option.id}
                    type="button"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setMode(option.id)}
                    className="contact-choice-card group rounded-3xl p-8 text-left md:p-10"
                  >
                    <span className="contact-choice-icon flex size-14 items-center justify-center rounded-2xl">
                      <option.icon className="size-7 text-violet-200/90" strokeWidth={1.25} />
                    </span>
                    <h3 className="font-satoshi mt-6 text-xl font-medium text-white md:text-2xl">
                      {option.title}
                    </h3>
                    <p className="font-satoshi mt-3 text-base leading-relaxed text-white/60">
                      {option.description}
                    </p>
                    <span className="font-satoshi mt-8 inline-flex items-center gap-2 text-sm text-violet-300/90 transition-colors group-hover:text-violet-200">
                      {option.cta}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {mode === "project" && (
            <motion.div
              key="project"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <ClientProjectForm onBack={() => setMode("select")} />
            </motion.div>
          )}

          {mode === "team" && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <TeamApplicationForm onBack={() => setMode("select")} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-24 border-t border-white/10 pt-20 md:mt-28 md:pt-24">
          <SocialConnect />
        </div>
      </div>
    </section>
  );
}
