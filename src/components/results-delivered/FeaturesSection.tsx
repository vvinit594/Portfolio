"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  LayoutDashboard,
  Package,
  BarChart3,
  Activity,
  FileDown,
} from "lucide-react";
import { fadeUp, stagger } from "./motion";

const features = [
  {
    icon: ClipboardList,
    title: "Registration Management",
    description:
      "Centralized participant intake with structured data capture and instant validation at the point of entry.",
  },
  {
    icon: LayoutDashboard,
    title: "Volunteer Dashboard",
    description:
      "Role-based workspace for on-ground teams to verify, coordinate, and act on live event data.",
  },
  {
    icon: Package,
    title: "Collection Tracking",
    description:
      "Digital tracking of collections and handoffs — eliminating spreadsheet errors and lost records.",
  },
  {
    icon: BarChart3,
    title: "Reporting System",
    description:
      "Automated summaries and exportable reports for leadership visibility after every event cycle.",
  },
  {
    icon: Activity,
    title: "Real-Time Logs",
    description:
      "Live activity stream so operators see check-ins, verifications, and exceptions as they happen.",
  },
  {
    icon: FileDown,
    title: "Export Reports",
    description:
      "One-click exports for finance, operations, and audit — formatted and ready for stakeholders.",
  },
];

export function FeaturesSection() {
  return (
    <section className="results-section px-6 py-28 md:px-10 md:py-36 lg:px-16">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="font-satoshi text-4xl font-medium text-white md:text-6xl">
          What We Built
        </h2>
        <p className="font-satoshi mt-6 text-lg text-white/50">
          Purpose-built modules that replaced fragmented manual workflows.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {features.map((feature) => (
          <motion.article
            key={feature.title}
            variants={fadeUp}
            className="results-feature-card group rounded-2xl p-8"
          >
            <div className="results-feature-icon flex size-12 items-center justify-center rounded-xl">
              <feature.icon className="size-5 text-violet-200" />
            </div>
            <h3 className="font-satoshi mt-6 text-xl font-medium text-white">
              {feature.title}
            </h3>
            <p className="font-satoshi mt-3 text-sm leading-relaxed text-white/55">
              {feature.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
