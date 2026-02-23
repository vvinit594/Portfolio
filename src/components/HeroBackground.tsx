"use client";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft wavy/fluid gradient shapes - reference style */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
          </filter>
        </defs>
        {/* Flowing organic blob shapes */}
        <path
          d="M-100 200 Q 200 50 400 200 T 900 150 T 1200 300 V 800 H -100 Z"
          fill="url(#wave1)"
          filter="url(#blur)"
        />
        <path
          d="M 1200 100 Q 800 250 500 100 T 0 200 V 800 H 1200 Z"
          fill="url(#wave2)"
          filter="url(#blur)"
        />
      </svg>
      {/* Subtle gradient orbs for depth */}
      <div className="absolute -left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent blur-[100px]" />
      <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-white/[0.05] via-white/[0.02] to-transparent blur-[100px]" />
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
