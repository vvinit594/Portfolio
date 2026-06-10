"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { fadeUp, stagger } from "./motion";
import type { GalleryItem } from "./types";

type GalleryCardProps = GalleryItem & {
  onExpand?: (item: GalleryItem) => void;
  expandable?: boolean;
};

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

function GalleryCard({
  src,
  title,
  description,
  onExpand,
  expandable = false,
}: GalleryCardProps) {
  const content = (
    <>
      <div className="results-gallery-image-wrap relative aspect-[16/10] overflow-hidden rounded-xl">
        {src ? (
          <>
            <Image
              src={src}
              alt={title}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {expandable && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/25 group-hover:opacity-100">
                <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs text-white/90 backdrop-blur-sm">
                  <ZoomIn className="size-3.5" />
                  View full preview
                </span>
              </div>
            )}
          </>
        ) : (
          <GalleryPlaceholder />
        )}
      </div>
      <figcaption className="mt-4 px-1">
        <h3 className="font-satoshi text-base font-medium text-white md:text-lg">
          {title}
        </h3>
        <p className="font-satoshi mt-2 text-sm leading-relaxed text-white/50">
          {description}
        </p>
      </figcaption>
    </>
  );

  if (expandable && src && onExpand) {
    return (
      <motion.figure variants={fadeUp} className="results-gallery-card group">
        <button
          type="button"
          onClick={() => onExpand({ src, title, description })}
          className="w-full cursor-zoom-in text-left"
          aria-label={`Expand ${title}`}
        >
          {content}
        </button>
      </motion.figure>
    );
  }

  return (
    <motion.figure
      variants={fadeUp}
      className="results-gallery-card group w-[min(88vw,340px)] shrink-0 sm:w-[380px] md:w-[420px]"
    >
      {content}
    </motion.figure>
  );
}

function GalleryModal({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="results-gallery-modal fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="results-gallery-modal-panel relative w-full max-w-5xl overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur-sm transition-colors hover:text-white"
          aria-label="Close preview"
        >
          <X className="size-5" />
        </button>

        {item.src && (
          <div className="relative aspect-[16/10] w-full bg-[#0a0a0f]">
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
              priority
            />
          </div>
        )}

        <div className="border-t border-white/[0.06] p-6 md:p-8">
          <h3 className="font-satoshi text-xl font-medium text-white md:text-2xl">
            {item.title}
          </h3>
          <p className="font-satoshi mt-3 text-sm leading-relaxed text-white/55 md:text-base">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

type GallerySectionProps = {
  gallery: GalleryItem[];
  layout?: "carousel" | "premium";
};

export function GallerySection({ gallery, layout = "carousel" }: GallerySectionProps) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

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

      {layout === "premium" ? (
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="results-gallery-grid mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {gallery.map((item) => (
            <GalleryCard
              key={item.title}
              {...item}
              expandable
              onExpand={setActiveItem}
            />
          ))}
        </motion.div>
      ) : (
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
      )}

      <AnimatePresence>
        {activeItem && (
          <GalleryModal item={activeItem} onClose={() => setActiveItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
