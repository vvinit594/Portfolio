"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ExperienceItem = {
  company: string;
  role: string;
  date: string;
  website?: string;
  points: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Shantabai - The Maid Service Startup",
    role: "Frontend Developer",
    date: "2 Feb 2025 - 31 May 2025",
    points: [
      "Designed and developed responsive frontend architecture for a service-booking platform.",
      "Built interactive dashboards for maids with Accept/Decline booking features.",
      "Implemented structured UI components for workflow clarity.",
      "Collaborated in feature planning and product improvements.",
    ],
  },
  {
    company: "ENFU AI - AI-Powered Automation",
    role: "AI Developer",
    date: "1 Nov 2025 - 31 Dec 2025",
    website: "https://www.enfuai.in/",
    points: [
      "Developed secure authentication systems for protected user access.",
      "Integrated AI models with multiple APIs for workflow automation.",
      "Designed backend logic for intelligent automation pipelines.",
      "Optimized API communication for scalability and performance.",
    ],
  },
  {
    company: "Fitskol Pvt. Ltd",
    role: "Full-Stack Developer",
    date: "2 Feb 2026 - Present",
    points: [
      "Building a fully functional and scalable Bib Expo Web/App platform.",
      "Developing Book My Run application architecture and workflows.",
      "Designing scalable backend and frontend integration systems.",
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative bg-[#0B0B0F] px-6 py-28 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center md:mb-20"
        >
          <h2 className="font-satoshi text-3xl font-normal tracking-tight text-white md:text-4xl">
            Experience
          </h2>
          <p className="font-satoshi mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Building scalable products, AI systems, and real-world platforms.
          </p>
        </motion.div>

        <div className="relative">
          {/* Mobile line */}
          <div className="experience-timeline-line absolute bottom-0 left-4 top-0 w-[2px] md:hidden" />
          {/* Center line */}
          <div className="experience-timeline-line absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 md:block" />

          <div className="space-y-10 md:space-y-14">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={item.company} className="relative">
                  {/* Timeline node */}
                  <span className="experience-node absolute left-4 top-10 z-20 size-3 -translate-x-1/2 rounded-full md:left-1/2" />

                  <motion.article
                    initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 12 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`experience-card ml-10 rounded-3xl p-7 md:ml-0 md:w-[calc(50%-2.5rem)] md:p-8 ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <h3 className="font-satoshi text-2xl font-medium text-white">
                      {item.company}
                    </h3>
                    <p className="font-satoshi mt-2 text-base text-violet-300/90">
                      {item.role}
                    </p>
                    <p className="font-satoshi mt-1 text-sm text-white/50">
                      {item.date}
                    </p>

                    {item.website && (
                      <Link
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-satoshi mt-3 inline-flex text-sm text-violet-300/90 transition-colors hover:text-violet-200"
                      >
                        {item.website}
                      </Link>
                    )}

                    <ul className="mt-5 space-y-2.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="font-satoshi text-sm leading-relaxed text-white/78 md:text-[0.95rem]"
                        >
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

