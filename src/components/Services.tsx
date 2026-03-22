"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
};

const servicesData: Service[] = [
  {
    id: "saas",
    title: "SaaS Web Development",
    description:
      "Building scalable, modern web platforms with strong architecture and performance.",
    features: [
      "React / Next.js Frontend",
      "Node.js / FastAPI Backend",
      "Scalable API Architecture",
      "Secure Authentication Systems",
    ],
    buttonText: "Start a Project",
  },
  {
    id: "ai",
    title: "AI & Automation Systems",
    description:
      "Integrating AI capabilities and automation workflows into modern applications.",
    features: [
      "AI Model Integration",
      "Workflow Automation",
      "API Optimization",
      "NLP & RAG Systems",
    ],
    buttonText: "Explore AI Solutions",
  },
  {
    id: "app",
    title: "App Development",
    description:
      "Designing and building scalable mobile applications for modern businesses.",
    features: [
      "React Native Development",
      "Tailwind UI Systems",
      "Android App Development",
      "Scalable Application Architecture",
    ],
    buttonText: "Build an App",
  },
];

function ServicePanel({ service }: { service: Service }) {
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="services-panel-content"
    >
      <h3 className="font-satoshi text-2xl font-medium text-white md:text-3xl">
        {service.title}
      </h3>
      <p className="font-satoshi mt-5 text-base leading-relaxed text-white/65 md:text-lg">
        {service.description}
      </p>

      <ul className="mt-8 space-y-3">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="font-satoshi flex items-center gap-3 text-sm text-white/90 md:text-base"
          >
            <span className="size-2 shrink-0 rounded-full bg-[#8B5CF6]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link href="#contact" className="mt-10 inline-block">
        <Button className="hero-cta-button font-satoshi rounded-full px-8 py-3 text-sm font-normal text-white md:text-base">
          {service.buttonText}
        </Button>
      </Link>

      <div
        className="services-panel-visual absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
        aria-hidden
      />
    </motion.div>
  );
}

export function Services() {
  const [activeId, setActiveId] = useState(servicesData[0].id);
  const activeService = servicesData.find((s) => s.id === activeId) ?? servicesData[0];

  return (
    <section
      id="services"
      className="services-section-layered relative rounded-t-3xl bg-[#0B0B0F] px-6 py-28 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center md:mb-20"
        >
          <h2 className="font-satoshi text-3xl font-normal tracking-tight text-white md:text-4xl">
            Services
          </h2>
          <p className="font-satoshi mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Helping startups and businesses build scalable products and
            AI-powered systems.
          </p>
        </motion.div>

        <div className="services-split-layout flex flex-col gap-12 md:flex-row md:gap-16">
          {/* Left: Service list (navigation) */}
          <nav className="services-nav shrink-0 md:w-[280px] lg:w-[320px]">
            <ul className="space-y-1">
              {servicesData.map((service) => {
                const isActive = activeId === service.id;
                return (
                  <li key={service.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(service.id)}
                      className={`services-nav-item w-full text-left transition-all duration-300 ${
                        isActive ? "services-nav-item-active" : ""
                      }`}
                    >
                      {service.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Dynamic content panel */}
          <div className="services-panel relative min-h-[360px] flex-1 rounded-2xl md:min-h-[400px]">
            <AnimatePresence mode="wait">
              <ServicePanel service={activeService} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
