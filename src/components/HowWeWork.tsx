"use client";

import { motion } from "framer-motion";
import {
  Search,
  Brain,
  Cog,
  FlaskConical,
  Rocket,
  type LucideIcon,
} from "lucide-react";

type ProcessStep = {
  Icon: LucideIcon;
  title: string;
  description: string;
  extraDetail: string;
};

const steps: ProcessStep[] = [
  {
    Icon: Search,
    title: "Understanding Your Vision",
    description:
      "We begin by deeply understanding your idea, business goals, and requirements. This helps us align on the right strategy before writing a single line of code.",
    extraDetail:
      "We analyze your target users, define core features, and identify the best technical approach for your product.",
  },
  {
    Icon: Brain,
    title: "Planning & System Design",
    description:
      "We design a scalable architecture and define workflows to ensure your product performs efficiently from day one.",
    extraDetail:
      "This includes database design, API structure, authentication systems, and performance planning.",
  },
  {
    Icon: Cog,
    title: "Building Your Product",
    description:
      "We start development using modern technologies, focusing on performance, clean code, and seamless user experience.",
    extraDetail:
      "Regular updates, modular development, and scalable coding practices ensure long-term maintainability.",
  },
  {
    Icon: FlaskConical,
    title: "Testing & Optimization",
    description:
      "We rigorously test the system and optimize performance to deliver a smooth and reliable experience.",
    extraDetail:
      "We focus on bug fixing, speed optimization, API efficiency, and edge-case handling.",
  },
  {
    Icon: Rocket,
    title: "Launch & Ongoing Support",
    description:
      "We deploy your product and continue supporting it with updates, improvements, and scaling strategies.",
    extraDetail:
      "From deployment to monitoring and future enhancements, we stay involved in your product's growth.",
  },
];

function StepScreen({ step, index }: { step: ProcessStep; index: number }) {
  const { Icon, title, description, extraDetail } = step;

  return (
    <section
      className="how-we-work-step relative flex min-h-screen w-full snap-start snap-always items-center justify-center px-6 py-24 md:px-12"
      aria-label={`Step ${index + 1}: ${title}`}
    >
      {/* Subtle background glow */}
      <div className="how-we-work-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-16">
        {/* Left: Content */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="how-we-work-icon mb-6 flex size-16 items-center justify-center rounded-2xl md:mb-8"
          >
            <Icon className="size-8 text-violet-300/90" strokeWidth={1.25} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-satoshi text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="font-satoshi mt-6 text-lg leading-relaxed text-white/75 md:text-xl"
          >
            {description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-satoshi mt-4 text-base leading-relaxed text-white/55 md:text-[1.0625rem]"
          >
            {extraDetail}
          </motion.p>
        </div>

        {/* Right: Abstract visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="how-we-work-visual hidden flex-1 md:block"
          aria-hidden
        />
      </div>
    </section>
  );
}

export function HowWeWork() {
  return (
    <div
      id="how-we-work"
      className="how-we-work-section how-we-work-layered relative rounded-t-3xl bg-[#0B0B0F]"
    >
      {/* Intro screen */}
      <section
        className="relative flex min-h-screen w-full snap-start snap-always flex-col items-center justify-center px-6 py-24"
        aria-label="How We Work introduction"
      >
        <div className="how-we-work-glow pointer-events-none absolute inset-0" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl text-center"
        >
          <h2 className="font-satoshi text-4xl font-normal tracking-tight text-white md:text-5xl lg:text-6xl">
            How We Work
          </h2>
          <p className="font-satoshi mx-auto mt-6 text-lg leading-relaxed text-white/60 md:text-xl">
            A structured, transparent, and efficient process to turn your ideas
            into real products.
          </p>
        </motion.div>
      </section>

      {/* Process steps */}
      {steps.map((step, index) => (
        <StepScreen key={step.title} step={step} index={index} />
      ))}
    </div>
  );
}
