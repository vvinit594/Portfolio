"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";

const galleryItems = [
  {
    src: "/Registration.png",
    title: "Registration Dashboard",
    description: "Centralized participant registration and management system.",
  },
  {
    src: "/Volunteer_checkin.png",
    title: "Volunteer Check-In View",
    description: "Real-time participant verification for event volunteers.",
  },
  {
    src: "/Collection_tracker.png",
    title: "Collection Tracker",
    description: "Track Bib, T-Shirt and Goodies collection with status updates.",
  },
  {
    src: "/Live_activity.png",
    title: "Live Activity Dashboard",
    description: "Monitor participant activity and event operations in real time.",
  },
  {
    src: "/Export.png",
    title: "Reporting & Export System",
    description: "Generate exportable reports and event analytics.",
  },
];

type GalleryCardProps = {
  src: string;
  title: string;
  description: string;
};

function GalleryCard({ src, title, description }: GalleryCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="results-gallery-card group w-[min(88vw,340px)] shrink-0 sm:w-[380px] md:w-[420px]"
    >
      <div className="results-gallery-image-wrap relative aspect-[16/10] overflow-hidden rounded-xl">
        <Image
          src={src}
          alt={title}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 380px, 420px"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4 px-1">
        <h3 className="font-satoshi text-base font-medium text-white md:text-lg">
          {title}
        </h3>
        <p className="font-satoshi mt-2 text-sm leading-relaxed text-white/50">
          {description}
        </p>
      </div>
    </motion.article>
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
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="results-gallery-scroll mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pl-6 pr-6 md:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] md:pr-16"
      >
        {galleryItems.map((item) => (
          <div key={item.title} className="snap-center">
            <GalleryCard
              src={item.src}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
