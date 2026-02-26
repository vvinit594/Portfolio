"use client";

export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Bolt-style curved horizon - prominent arc rising from bottom */}
      <div
        className="hero-arc-container absolute left-1/2 -translate-x-1/2 w-[180%] min-w-[100vw]"
        style={{
          bottom: 0,
          height: "min(45vh, 380px)",
        }}
      >
        <svg
          viewBox="0 0 1200 400"
          className="h-full w-full"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <radialGradient
              id="arc-gradient"
              cx="50%"
              cy="85%"
              r="100%"
              fx="50%"
              fy="90%"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="8%" stopColor="#7C3AED" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#9333EA" stopOpacity="0.7" />
              <stop offset="55%" stopColor="#4F46E5" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0B0B0F" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="arc-highlight"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#E9D5FF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
            <filter id="arc-blur" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
            </filter>
          </defs>
          {/* Main glow - wide flat ellipse, peak rises ~40% from bottom */}
          <ellipse
            cx="600"
            cy="380"
            rx="1000"
            ry="280"
            fill="url(#arc-gradient)"
            filter="url(#arc-blur)"
          />
          {/* Sharp intense highlight - Bolt-style bright top edge */}
          <path
            d="M 80 170 A 1020 250 0 0 1 1120 170"
            fill="none"
            stroke="url(#arc-highlight)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
