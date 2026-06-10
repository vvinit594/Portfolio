"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";

const galleryItems = [
  { label: "Registration Dashboard", accent: "from-violet-600/30 to-indigo-900/20" },
  { label: "Volunteer Check-In View", accent: "from-purple-600/25 to-violet-900/15" },
  { label: "Collection Tracker", accent: "from-indigo-600/30 to-purple-900/20" },
  { label: "Live Activity Logs", accent: "from-violet-500/25 to-indigo-800/15" },
  { label: "Export & Reports", accent: "from-purple-500/30 to-violet-900/20" },
];

function MockScreen({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="results-gallery-card group relative h-[280px] w-[420px] shrink-0 overflow-hidden rounded-2xl border border-white/10 md:h-[320px] md:w-[480px]">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute inset-4 rounded-xl border border-white/10 bg-[#0f0f14]/90 p-4 transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="mb-4 flex gap-1.5">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
        <div className="space-y-3">
          <div className="h-2.5 w-1/2 rounded-full bg-white/15" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-20 rounded-lg bg-white/[0.06]" />
            <div className="h-20 rounded-lg bg-white/[0.06]" />
          </div>
          <div className="h-16 rounded-lg bg-white/[0.04]" />
          <div className="h-10 rounded-lg bg-violet-500/20" />
        </div>
      </div>
      <p className="font-satoshi absolute bottom-4 left-4 text-sm text-white/70">{label}</p>
    </div>
  );
}

export function GallerySection() {
  return (
    <section className="results-section overflow-hidden px-6 py-28 md:px-10 md:py-36 lg:px-16">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="font-satoshi text-4xl font-medium text-white md:text-6xl">
          Project Gallery
        </h2>
        <p className="font-satoshi mt-6 text-lg text-white/50">
          Interface previews from the live platform.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="results-gallery-scroll mt-16 flex gap-6 overflow-x-auto pb-4 pl-6 md:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
      >
        {galleryItems.map((item) => (
          <MockScreen key={item.label} label={item.label} accent={item.accent} />
        ))}
      </motion.div>
    </section>
  );
}
