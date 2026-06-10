import type { CaseStudy } from "./types";

export const eventRegistrationCaseStudy: CaseStudy = {
  id: "event-registration",
  navTitle: "Event Registration Platform",
  category: "Event Management Platform",
  title: "Event Registration & Check-In Platform",
  tagline: "Transforming manual event operations into a scalable digital workflow.",
  coverImage: "/First.png",
  coverImageAlt: "Event Registration & Check-In Platform dashboard",
  coverPriority: true,
  floatingCards: [
    { variant: "stat", label: "Live Check-Ins", value: "2,847" },
    { variant: "badge", label: "Verified", value: "Participant #1842", accent: "emerald" },
  ],
  problem: {
    subtitle: "Operational friction that slows events and creates risk at scale.",
    items: [
      "Long queues during participant check-ins",
      "Manual participant verification",
      "Spreadsheet-based tracking",
      "Collection management errors",
      "No real-time visibility",
    ],
  },
  challenge: {
    headline: "Managing thousands of participants manually doesn't scale.",
    cardLabel: "Core operational pressures",
    items: [
      "Participant verification",
      "Collection tracking",
      "Volunteer coordination",
      "Reporting",
      "Scalability",
    ],
  },
  solution: {
    subtitle: "A connected system architecture designed for high-volume event operations.",
    flow: [
      "Participant Registration",
      "Verification System",
      "Volunteer Dashboard",
      "Collection Tracking",
      "Reporting Engine",
    ],
  },
  features: {
    subtitle: "Purpose-built modules that replaced fragmented manual workflows.",
    items: [
      {
        icon: "clipboard",
        title: "Registration Management",
        description:
          "Centralized participant intake with structured data capture and instant validation at the point of entry.",
      },
      {
        icon: "dashboard",
        title: "Volunteer Dashboard",
        description:
          "Role-based workspace for on-ground teams to verify, coordinate, and act on live event data.",
      },
      {
        icon: "package",
        title: "Collection Tracking",
        description:
          "Digital tracking of collections and handoffs — eliminating spreadsheet errors and lost records.",
      },
      {
        icon: "chart",
        title: "Reporting System",
        description:
          "Automated summaries and exportable reports for leadership visibility after every event cycle.",
      },
      {
        icon: "activity",
        title: "Real-Time Logs",
        description:
          "Live activity stream so operators see check-ins, verifications, and exceptions as they happen.",
      },
      {
        icon: "export",
        title: "Export Reports",
        description:
          "One-click exports for finance, operations, and audit — formatted and ready for stakeholders.",
      },
    ],
  },
  tech: {
    subtitle: "Modern, reliable foundations chosen for scale and maintainability.",
    groups: [
      { label: "Frontend", items: ["Next.js", "React", "TailwindCSS"] },
      { label: "Backend", items: ["Node.js", "PostgreSQL", "Prisma"] },
      { label: "Infrastructure", items: ["Cloud Deployment", "Reporting Engine"] },
    ],
  },
  impact: {
    subtitle: "Measurable operational improvements — not just features shipped.",
    items: [
      {
        title: "Faster Participant Verification",
        metric: "Minutes → Seconds",
        description: "Check-in queues collapsed with instant digital verification.",
      },
      {
        title: "Reduced Manual Errors",
        metric: "Near Zero",
        description: "Spreadsheet duplication and data entry mistakes eliminated.",
      },
      {
        title: "Improved Volunteer Efficiency",
        metric: "3× Throughput",
        description: "Teams coordinated through a single live operational dashboard.",
      },
      {
        title: "Real-Time Collection Visibility",
        metric: "Live",
        description: "Leadership saw collection status without waiting for end-of-day reports.",
      },
      {
        title: "Simplified Reporting",
        metric: "One Click",
        description: "Export-ready summaries replaced hours of manual consolidation.",
      },
      {
        title: "Enhanced Participant Experience",
        metric: "Seamless",
        description: "Faster entry, fewer bottlenecks, and a more professional event flow.",
      },
    ],
  },
  gallery: [
    {
      src: "/Registration.png",
      title: "Registration Dashboard",
      description: "Centralized participant registration and management system.",
    },
    {
      src: "/Volunteer_checkin.png",
      title: "Volunteer Check-In View",
      description: "Real-time participant verification for event volunteers.",
    },
    {
      src: "/Collection_tracker.png",
      title: "Collection Tracker",
      description: "Track Bib, T-Shirt and Goodies collection with status updates.",
    },
    {
      src: "/Live_activity.png",
      title: "Live Activity Dashboard",
      description: "Monitor participant activity and event operations in real time.",
    },
    {
      src: "/Export.png",
      title: "Reporting & Export System",
      description: "Generate exportable reports and event analytics.",
    },
  ],
  testimonial: {
    quote:
      "The platform transformed how we run events. What used to take hours of manual coordination now happens in real time — our volunteers are more confident and our leadership has full visibility.",
    author: "Event Operations Lead",
    role: "Large-Scale Community Event Organization",
  },
};

export const matchupIndiaCaseStudy: CaseStudy = {
  id: "matchup-india",
  navTitle: "MatchUpIndia Platform",
  category: "Matchmaking Platform",
  title: "MatchUpIndia — Modern Matchmaking Platform Experience",
  tagline: "Transforming traditional matchmaking into a modern digital platform.",
  coverImage: "/Second.png",
  coverImageAlt: "MatchUpIndia modern matchmaking platform showcase",
  galleryLayout: "premium",
  floatingCards: [
    { variant: "stat", label: "Profile Views", value: "12.4K" },
    { variant: "badge", label: "Mobile Ready", value: "100% Responsive", accent: "violet" },
  ],
  problem: {
    subtitle:
      "The existing experience lacked visual appeal and did not create the trust, engagement, and professionalism users expect.",
    items: [
      "Modern user experience",
      "Mobile responsiveness",
      "Better user engagement",
      "Faster navigation",
      "Professional visual branding",
      "Improved trust and credibility",
    ],
  },
  challenge: {
    headline:
      "Building a highly responsive and engaging platform that balances aesthetics, usability, and performance while maintaining a clean and trustworthy user experience.",
    cardLabel: "Platform requirements",
    items: [
      "Seamless cross-device experience",
      "Smooth profile exploration journey",
      "Aesthetics and usability balance",
      "Performance optimization",
      "Trustworthy visual presentation",
      "Scalable frontend foundation",
    ],
  },
  solution: {
    subtitle:
      "Designed and developed the complete frontend experience with a focus on user-centered design and modern visual craft.",
    flow: [
      "User-Centered Design",
      "Mobile-First Responsiveness",
      "Smooth Interactions",
      "Performance Optimization",
      "Clean Information Architecture",
      "Modern Visual Design",
    ],
  },
  features: {
    subtitle:
      "A complete frontend experience crafted for engagement, trust, and seamless cross-device usability.",
    items: [
      {
        icon: "layout",
        title: "Responsive Landing Pages",
        description:
          "Conversion-focused landing experiences optimized for clarity, trust, and action across every screen size.",
      },
      {
        icon: "palette",
        title: "Modern User Interface",
        description:
          "Clean, contemporary interface patterns that elevate perceived quality and platform credibility.",
      },
      {
        icon: "smartphone",
        title: "Mobile-First Design",
        description:
          "Touch-friendly layouts and navigation built for the majority of users browsing on mobile devices.",
      },
      {
        icon: "pointer",
        title: "Interactive Components",
        description:
          "Polished micro-interactions and UI components that make the platform feel alive and responsive.",
      },
      {
        icon: "users",
        title: "Profile Browsing Experience",
        description:
          "Intuitive profile discovery flows designed to keep users engaged and exploring with confidence.",
      },
      {
        icon: "zap",
        title: "Performance Optimized Frontend",
        description:
          "Lean, fast-loading pages that deliver smooth performance without sacrificing visual quality.",
      },
      {
        icon: "globe",
        title: "Cross-Browser Compatibility",
        description:
          "Consistent experience across modern browsers so every user sees a reliable, polished product.",
      },
      {
        icon: "sparkles",
        title: "Modern Visual Branding",
        description:
          "Cohesive visual identity that positions the platform as professional, trustworthy, and contemporary.",
      },
    ],
  },
  tech: {
    subtitle: "A focused frontend stack built for responsive, high-quality user experiences.",
    groups: [
      {
        label: "Frontend",
        items: [
          "HTML5",
          "CSS3",
          "JavaScript (Vanilla JS)",
          "Responsive Design",
          "UI/UX Design Principles",
        ],
      },
    ],
  },
  impact: {
    subtitle: "Outcomes that strengthen user trust, engagement, and platform perception.",
    items: [
      {
        title: "Modern User Experience",
        metric: "Elevated",
        description: "A contemporary interface that feels current, polished, and purpose-built.",
      },
      {
        title: "Improved Mobile Accessibility",
        metric: "Mobile-First",
        description: "Fully responsive layouts that work seamlessly on phones and tablets.",
      },
      {
        title: "Higher User Engagement",
        metric: "Increased",
        description: "Smoother journeys and interactive UI that encourage deeper exploration.",
      },
      {
        title: "Professional Platform Branding",
        metric: "Premium",
        description: "Visual identity that builds credibility from the first impression.",
      },
      {
        title: "Responsive Across Devices",
        metric: "All Screens",
        description: "Consistent quality whether users browse on desktop, tablet, or mobile.",
      },
      {
        title: "Faster Frontend Performance",
        metric: "Optimized",
        description: "Lightweight implementation focused on speed and smooth interactions.",
      },
      {
        title: "Enhanced User Trust",
        metric: "Stronger",
        description: "Professional design language that helps users feel comfortable engaging.",
      },
      {
        title: "Scalable Frontend Foundation",
        metric: "Future-Ready",
        description: "Clean architecture ready to grow with new features and user flows.",
      },
    ],
  },
  gallery: [
    {
      src: "/Landing.png",
      title: "Landing Page Experience",
      description:
        "Modern landing page designed to increase engagement and build user trust.",
    },
    {
      src: "/Platform.png",
      title: "Platform Dashboard",
      description:
        "Core platform interface designed for intuitive navigation and seamless user interaction.",
    },
    {
      src: "/Profile.png",
      title: "Profile Discovery",
      description:
        "Clean and engaging profile browsing experience optimized for user exploration.",
    },
    {
      src: "/Responsive.png",
      title: "Responsive Design",
      description:
        "Mobile-first responsive experience across all screen sizes and devices.",
    },
    {
      src: "/user.png",
      title: "User Experience Flow",
      description:
        "Optimized user journey focused on usability and engagement.",
    },
    {
      src: "/FlowDeck.png",
      title: "Platform Workflow",
      description:
        "Structured user flow designed to simplify interactions and improve conversion.",
    },
  ],
  summary:
    "This project demonstrates the ability to build customer-facing platforms that focus on user experience, engagement, and visual trust. Rather than simply creating pages, the goal was to craft a digital experience that helps users feel comfortable interacting with the platform.",
  cta: {
    title: "Need a modern platform for your startup?",
    description:
      "Whether you're building a marketplace, SaaS platform, community product, or consumer application, we help founders turn ideas into polished digital experiences.",
    buttonLabel: "Let's Build Your Platform",
    buttonHref: "/#contact",
  },
};

export const caseStudies = [eventRegistrationCaseStudy, matchupIndiaCaseStudy];
