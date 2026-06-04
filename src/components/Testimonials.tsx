"use client";

import { motion } from "framer-motion";

type Testimonial = {
  id: string;
  clientName: string;
  projectName: string;
  workDelivered: string;
  quote: string;
  supporting: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Sarah Chen",
    projectName: "FlowDeck",
    workDelivered: "Full-stack development, AI integration",
    quote:
      "Vinit delivered beyond expectations. The platform is fast, scalable, and the AI features work flawlessly.",
    supporting:
      "Communication was excellent throughout. He understood our vision and brought it to life with modern tech and clean architecture.",
  },
  {
    id: "2",
    clientName: "Marcus Reed",
    projectName: "AKelva E-commerce",
    workDelivered: "Luxury e-commerce platform",
    quote:
      "The level of polish and attention to detail is rare. Our conversion rate improved significantly after launch.",
    supporting:
      "From design collaboration to deployment, the process was smooth. Highly recommend for premium product builds.",
  },
  {
    id: "3",
    clientName: "Elena Volkov",
    projectName: "ENFU AI",
    workDelivered: "AI automation systems",
    quote:
      "Vinit built complex automation workflows that just work. His AI integration skills are top-tier.",
    supporting:
      "He handled API optimization and workflow design with expertise. The system has been running reliably since launch.",
  },
];

type TestimonialBubbleProps = {
  testimonial: Testimonial;
  index: number;
  isCenter: boolean;
};

function TestimonialBubble({
  testimonial,
  index,
  isCenter,
}: TestimonialBubbleProps) {
  const scale = isCenter ? 1 : 0.88;
  const zIndex = isCenter ? 30 : index === 0 ? 10 : 20;
  const opacity = isCenter ? 1 : 0.75;
  const rotate = isCenter ? 0 : index === 0 ? -2.5 : 2.5;

  const positionClass =
    index === 0
      ? "left-0 md:left-[2%] xl:left-[8%] hidden md:block"
      : index === 1
        ? "left-1/2 -translate-x-1/2"
        : "right-0 md:right-[2%] xl:right-[8%] hidden md:block";

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        zIndex,
        scale,
        opacity,
        rotate,
      }}
      className={`testimonial-bubble absolute top-1/2 w-[92%] max-w-md -translate-y-1/2 md:w-[380px] ${positionClass}`}
    >
        <motion.article
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.35 }}
        className="testimonial-bubble-card group h-full rounded-2xl p-6 md:p-8"
      >
        <div className="mb-4 flex flex-wrap items-baseline gap-2">
          <span className="font-satoshi text-base font-medium text-white">
            {testimonial.clientName}
          </span>
          <span className="font-satoshi text-sm text-violet-300/80">
            · {testimonial.projectName}
          </span>
        </div>
        <p className="font-satoshi text-xs text-white/50">{testimonial.workDelivered}</p>

        <blockquote className="mt-5">
          <p className="font-satoshi text-lg leading-relaxed text-white md:text-xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="font-satoshi mt-4 text-sm leading-relaxed text-white/65">
            {testimonial.supporting}
          </p>
        </blockquote>
      </motion.article>
    </motion.div>
  );
}

export function Testimonials() {
  const centerIndex = 1;

  return (
    <section
      id="testimonials"
      className="testimonials-section relative overflow-hidden px-6 py-28 md:px-12 md:py-32"
    >
      {/* Soft gradient background */}
      <div className="testimonials-bg-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="font-satoshi text-3xl font-normal tracking-tight text-white md:text-4xl">
            What Clients Say
          </h2>
          <p className="font-satoshi mx-auto mt-4 max-w-xl text-lg text-white/60">
            Real conversations from people I&apos;ve worked with.
          </p>
        </motion.div>

        {/* Floating cards container */}
        <div className="relative h-[420px] md:h-[480px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialBubble
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isCenter={index === centerIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
