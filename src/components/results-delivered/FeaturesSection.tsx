"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  ClipboardList,
  FileDown,
  Globe,
  Layout,
  LayoutDashboard,
  MousePointerClick,
  Package,
  Palette,
  Smartphone,
  Sparkles,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, stagger } from "./motion";
import type { CaseStudy } from "./types";

const iconMap: Record<string, LucideIcon> = {
  clipboard: ClipboardList,
  dashboard: LayoutDashboard,
  package: Package,
  chart: BarChart3,
  activity: Activity,
  export: FileDown,
  layout: Layout,
  palette: Palette,
  smartphone: Smartphone,
  pointer: MousePointerClick,
  users: Users,
  zap: Zap,
  globe: Globe,
  sparkles: Sparkles,
};

type FeaturesSectionProps = {
  features: CaseStudy["features"];
};

export function FeaturesSection({ features }: FeaturesSectionProps) {
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
        <p className="font-satoshi mt-6 text-lg text-white/50">{features.subtitle}</p>
      </motion.div>

      <motion.div
        className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {features.items.map((feature) => {
          const Icon = iconMap[feature.icon] ?? Layout;
          return (
            <motion.article
              key={feature.title}
              variants={fadeUp}
              className="results-feature-card group rounded-2xl p-8"
            >
              <div className="results-feature-icon flex size-12 items-center justify-center rounded-xl">
                <Icon className="size-5 text-violet-200" />
              </div>
              <h3 className="font-satoshi mt-6 text-xl font-medium text-white">
                {feature.title}
              </h3>
              <p className="font-satoshi mt-3 text-sm leading-relaxed text-white/55">
                {feature.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
