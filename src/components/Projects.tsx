"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type GlowColor =
  | "purple-violet"
  | "cyan-blue"
  | "pink-purple"
  | "golden-amber"
  | "royal-blue";

const selectedWork = [
  {
    title: "FlowDeck",
    fullTitle: "FlowDeck – A Digital Workspace for Freelancers",
    description:
      "A unified digital workspace combining tasks, chat, AI, and invoicing into one streamlined platform.",
    url: "https://flow-deck-delta.vercel.app/",
    tags: ["Next.js", "AI", "Real-time"],
    glowColor: "purple-violet" as GlowColor,
  },
  {
    title: "AI Interview Platform",
    fullTitle: "AI Interview Platform – An AI Powered Interview Simulator",
    description:
      "Practice interviews with real-time AI feedback to improve communication and confidence.",
    url: "https://ai-interview-ebon-two.vercel.app/",
    tags: ["AI", "React", "Speech"],
    glowColor: "cyan-blue" as GlowColor,
  },
  {
    title: "Fuora Social",
    fullTitle: "Fuora Social – A Social Media Automation Platform",
    description:
      "Automate scheduling, analytics, and content workflows in one centralized system.",
    url: "https://fuora-frontend.onrender.com/",
    tags: ["Social", "Automation", "React"],
    glowColor: "pink-purple" as GlowColor,
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
    glowColor: "golden-amber" as GlowColor,
  },
  {
    title: "Elegance",
    fullTitle: "Elegance – A Luxury Fashion Brand Website",
    description:
      "A luxury clothing brand experience showcasing premium design and smooth UI.",
    url: "https://elegance-ici0.onrender.com/",
    tags: ["Fashion", "Luxury", "Next.js"],
    glowColor: "royal-blue" as GlowColor,
  },
];

const glowStyles: Record<GlowColor, { gradient: string; glow: string }> = {
  "purple-violet": {
    gradient:
      "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(139, 92, 246, 0.5) 0%, rgba(124, 58, 237, 0.3) 40%, transparent 70%)",
    glow: "rgba(139, 92, 246, 0.35)",
  },
  "cyan-blue": {
    gradient:
      "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(34, 211, 238, 0.5) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 70%)",
    glow: "rgba(34, 211, 238, 0.35)",
  },
  "pink-purple": {
    gradient:
      "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(236, 72, 153, 0.45) 0%, rgba(139, 92, 246, 0.35) 40%, transparent 70%)",
    glow: "rgba(236, 72, 153, 0.35)",
  },
  "golden-amber": {
    gradient:
      "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(251, 191, 36, 0.45) 0%, rgba(245, 158, 11, 0.3) 40%, transparent 70%)",
    glow: "rgba(251, 191, 36, 0.3)",
  },
  "royal-blue": {
    gradient:
      "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(59, 130, 246, 0.45) 0%, rgba(30, 64, 175, 0.35) 40%, transparent 70%)",
    glow: "rgba(59, 130, 246, 0.35)",
  },
};

function ProjectCard({
  fullTitle,
  description,
  url,
  tags,
  glowColor,
  index,
}: {
  fullTitle: string;
  description: string;
  url: string;
  tags: string[];
  glowColor: GlowColor;
  index: number;
}) {
  const { gradient, glow } = glowStyles[glowColor];

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
        <div className="flex min-h-[220px] flex-col px-6 py-6 md:min-h-[260px] md:flex-row md:items-center md:justify-between md:px-10 md:py-8">
          {/* Left: Content */}
          <div className="relative z-10 flex flex-1 flex-col justify-center md:pr-8">
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

          {/* Right: Animated Sphere */}
          <div className="relative flex flex-shrink-0 items-center justify-center md:w-[45%] md:max-w-[320px]">
            <div className="project-sphere-container">
              {/* Halo / background glow */}
              <div
                className="project-sphere-halo"
                style={{
                  background: gradient,
                  boxShadow: `0 0 120px 60px ${glow}`,
                }}
              />
              {/* Main sphere */}
              <div
                className="project-sphere"
                style={{
                  background: gradient,
                  boxShadow: `0 0 80px 40px ${glow}`,
                }}
              />
            </div>
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="font-satoshi text-3xl font-normal tracking-tight text-white md:text-4xl">
            Selected Work
          </h2>
          <p className="font-satoshi mt-4 text-lg text-white/55">
            Product-focused projects building scalable platforms
          </p>
        </motion.div>

        {/* Selected Work */}
        <div className="space-y-6 md:space-y-8">
          {selectedWork.map((project, i) => (
            <ProjectCard
              key={project.title}
              fullTitle={project.fullTitle}
              description={project.description}
              url={project.url}
              tags={project.tags}
              glowColor={project.glowColor}
              index={i}
            />
          ))}
        </div>

        {/* Freelancing Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 md:mt-40"
        >
          <h2 className="font-satoshi text-2xl font-normal tracking-tight text-white md:text-3xl">
            Freelancing Projects
          </h2>
          <p className="font-satoshi mt-4 text-lg text-white/55">
            E-commerce and luxury brand experiences
          </p>
        </motion.div>

        <div className="mt-10 space-y-6 md:mt-12 md:space-y-8">
          {freelancingProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              fullTitle={project.fullTitle}
              description={project.description}
              url={project.url}
              tags={project.tags}
              glowColor={project.glowColor}
              index={i + selectedWork.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
