"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type ServiceCard = {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref?: string;
};

const services: ServiceCard[] = [
  {
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

function ServiceCard({ card, index }: { card: ServiceCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="service-card group"
    >
      <div className="flex h-full flex-col rounded-3xl p-7 md:p-8">
        <h3 className="font-satoshi text-xl font-medium text-white md:text-2xl">
          {card.title}
        </h3>
        <p className="font-satoshi mt-3 text-[0.9375rem] leading-relaxed text-white/65 md:text-base">
          {card.description}
        </p>

        <div className="my-6 h-px w-full bg-white/10" />

        <ul className="flex-1 space-y-3">
          {card.features.map((feature) => (
            <li
              key={feature}
              className="font-satoshi flex items-center gap-3 text-sm text-white/90 md:text-[0.9375rem]"
            >
              <span className="service-check-icon flex size-6 shrink-0 items-center justify-center rounded-full">
                <Check className="size-3.5 stroke-[2.5] text-violet-200" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link href="#contact" className="mt-8 block">
          <Button className="service-card-button w-full rounded-xl py-5 text-sm font-medium md:py-6 md:text-base">
            {card.buttonText}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export function Services() {
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((card, index) => (
            <ServiceCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
