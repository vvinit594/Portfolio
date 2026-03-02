"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "./HeroBackground";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0B0B0F] px-6 pt-24 pb-20">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 font-satoshi text-4xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Building Scalable SaaS Platforms & AI-Driven Applications
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-satoshi mx-auto mb-10 max-w-2xl text-lg font-normal leading-relaxed text-white/80 sm:text-xl"
        >
          Full-Stack Developer & AI Enthusiast specializing in modern web
          architecture, secure authentication systems, and intelligent automation
          workflows.
        </motion.p>

        {/* CTA Buttons - Premium classic style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="hero-cta-button font-satoshi h-12 rounded-full px-8 text-base font-normal text-white"
          >
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hero-cta-button hero-cta-button-outline font-satoshi h-12 rounded-full px-8 text-base font-normal text-white"
          >
            <Link href="#contact">Let&apos;s Work Together</Link>
          </Button>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <p className="font-satoshi mb-2 text-sm text-white/50">
          Scroll down to see projects
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <ChevronDown className="size-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
