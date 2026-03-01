"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const selectedWork = [
  {
    title: "FlowDeck",
    fullTitle: "FlowDeck – A Digital Workspace for Freelancers",
    description:
      "A unified digital workspace combining tasks, chat, AI, and invoicing into one streamlined platform.",
    url: "https://flow-deck-delta.vercel.app/",
    tags: ["Next.js", "AI", "Real-time"],
    imageSrc: "/FlowDeck.png",
  },
  {
    title: "Fuora Social",
    fullTitle: "Fuora Social – A Social Media Automation Platform",
    description:
      "Automate scheduling, analytics, and content workflows in one centralized system.",
    url: "https://fuora-frontend.onrender.com/",
    tags: ["Social", "Automation", "React"],
    imageSrc: "/Fuora.png",
  },
];

const freelancingProjects = [
  {
    title: "AKelva",
    fullTitle: "AKelva – A Luxury E-commerce Jewellery Store",
    description:
      "A premium shopping experience with elegant UI and refined brand aesthetics.",
    url: "https://luxuryjewelleryecommercewebsite-imw.vercel.app/",
    tags: ["E-commerce", "Luxury", "React"],
    imageSrc: "/Akelva.png",
  },
  {
    title: "Elegance",
    fullTitle: "Elegance – A Luxury Fashion Brand Website",
    description:
      "A luxury clothing brand experience showcasing premium design and smooth UI.",
    url: "https://elegance-ici0.onrender.com/",
    tags: ["Fashion", "Luxury", "Next.js"],
    imageSrc: "/Elegance.png",
  },
];

function ProjectCard({
  fullTitle,
  description,
  url,
  tags,
  imageSrc,
  index,
}: {
  fullTitle: string;
  description: string;
  url: string;
  tags: string[];
  imageSrc: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="project-card-premium group"
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="project-image-panel absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden md:block">
          <Image
            src={imageSrc}
            alt={fullTitle}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="42vw"
            priority={false}
          />
          <div className="project-image-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 flex min-h-[220px] flex-col px-6 py-6 md:min-h-[260px] md:px-10 md:py-8">
          {/* Left: Content */}
          <div className="relative flex flex-1 flex-col justify-center md:max-w-[58%] md:pr-8">
            <h3 className="font-satoshi text-xl font-medium text-white md:text-2xl">
              {fullTitle}
            </h3>
            <p className="font-satoshi mt-3 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
              {description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="project-tag font-satoshi rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm md:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-6 inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white md:mt-8">
              <ExternalLink className="size-5" />
            </span>
          </div>

          {/* Mobile: Show project image below content */}
          <div className="relative mt-6 h-44 w-full overflow-hidden rounded-xl border border-white/10 md:hidden">
            <Image
              src={imageSrc}
              alt={fullTitle}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="100vw"
              priority={false}
            />
            <div className="project-image-overlay absolute inset-0" />
          </div>
        </div>

        {/* Noise overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </Link>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="projects-section-layered relative rounded-t-3xl bg-[#0B0B0F] px-6 py-28 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Freelancing Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="font-satoshi text-2xl font-normal tracking-tight text-white md:text-3xl">
            Freelancing Projects
          </h2>
          <p className="font-satoshi mt-4 text-lg text-white/55">
            E-commerce and luxury brand experiences
          </p>
        </motion.div>

        {/* Freelancing Projects */}
        <div className="space-y-6 md:space-y-8">
          {freelancingProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              fullTitle={project.fullTitle}
              description={project.description}
              url={project.url}
              tags={project.tags}
              imageSrc={project.imageSrc}
              index={i}
            />
          ))}
        </div>

        {/* Selected Work */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 md:mt-40"
        >
          <h2 className="font-satoshi text-3xl font-normal tracking-tight text-white md:text-4xl">
            Selected Work
          </h2>
          <p className="font-satoshi mt-4 text-lg text-white/55">
            Product-focused projects building scalable platforms
          </p>
        </motion.div>

        <div className="mt-10 space-y-6 md:mt-12 md:space-y-8">
          {selectedWork.map((project, i) => (
            <ProjectCard
              key={project.title}
              fullTitle={project.fullTitle}
              description={project.description}
              url={project.url}
              tags={project.tags}
              imageSrc={project.imageSrc}
              index={i + freelancingProjects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
