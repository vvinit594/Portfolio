"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Linkedin, Instagram } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vinitvishwakarma/",
    Icon: Linkedin,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/vvinit594",
    Icon: XIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vinu__verse/",
    Icon: Instagram,
  },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SocialConnect() {
  return (
    <div className="contact-social-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 text-center"
      >
        <h3 className="font-satoshi text-2xl font-medium text-white md:text-3xl">
          Let&apos;s Connect
        </h3>
        <p className="font-satoshi mx-auto mt-3 max-w-md text-base text-white/60">
          Follow the journey, connect, and stay updated.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-3">
        {socials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card group flex items-center justify-between rounded-2xl p-5 md:p-6"
            >
              <div className="flex items-center gap-4">
                <span className="contact-social-icon flex size-11 items-center justify-center rounded-xl">
                  <item.Icon className="size-5 text-violet-200" />
                </span>
                <span className="font-satoshi text-base font-medium text-white">
                  {item.name}
                </span>
              </div>
              <ExternalLink className="size-4 text-white/40 transition-colors group-hover:text-violet-300/90" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
