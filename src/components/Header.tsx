"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-8 md:pt-6"
    >
      <div className="relative w-full max-w-5xl">
        {/* Glassmorphism Navbar Container - Floating, Curly, 3D */}
        <nav className="navbar-glass flex w-full items-center justify-between rounded-[2rem] px-5 py-3 md:px-8 md:py-3.5">
        {/* Logo - Two-tone style */}
        <Link
          href="/"
          className="font-satoshi flex items-center text-xl font-medium transition-opacity hover:opacity-90 md:text-[1.25rem]"
        >
          <span className="text-white">Vin</span>
          <span className="text-white/60">it</span>
        </Link>

        {/* Nav Links - Desktop */}
        <div className="hidden items-center gap-7 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-satoshi text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: CTA Buttons + Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-3">
          <Button
            asChild
            className="navbar-btn-secondary font-satoshi hidden h-9 rounded-full px-4 text-sm font-normal text-white sm:inline-flex md:h-10 md:px-5"
          >
            <Link href="#projects">View Work</Link>
          </Button>
          <Button
            asChild
            className="navbar-btn-primary font-satoshi h-9 rounded-full px-4 text-sm font-normal text-white md:h-10 md:px-5"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-10 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

        {/* Mobile Menu Dropdown - Glassmorphism */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="navbar-glass absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl md:hidden"
            >
            <div className="flex flex-col p-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-satoshi rounded-xl px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
