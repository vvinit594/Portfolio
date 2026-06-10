"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";
import type { GalleryItem } from "./types";

type GalleryCardProps = GalleryItem;

function GalleryPlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-900/15">
      <div className="absolute inset-4 rounded-xl border border-white/10 bg-[#0f0f14]/90 p-4">
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
      <p className="font-satoshi absolute bottom-4 left-4 text-sm text-white/50">
        Screenshot coming soon
      </p>
    </div>
  );
}

function GalleryCard({ src, title, description }: GalleryCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="results-gallery-card group w-[min(88vw,340px)] shrink-0 sm:w-[380px] md:w-[420px]"
    >
      <div className="results-gallery-image-wrap relative aspect-[16/10] overflow-hidden rounded-xl">
        {src ? (
          <Image
            src={src}
            alt={title}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 88vw, (max-width: 1024px) 380px, 420px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <GalleryPlaceholder />
        )}
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

type GallerySectionProps = {
  gallery: GalleryItem[];
};

export function GallerySection({ gallery }: GallerySectionProps) {
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
        {gallery.map((item) => (
          <div key={item.title} className="snap-center">
            <GalleryCard {...item} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
