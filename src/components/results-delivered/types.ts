export type CaseStudyFeature = {
  icon: string;
  title: string;
  description: string;
};

export type CaseStudyImpact = {
  title: string;
  metric: string;
  description: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  src?: string;
};

export type FloatingCard = {
  variant: "stat" | "badge";
  label: string;
  value: string;
  accent?: string;
};

export type CaseStudy = {
  id: string;
  navTitle: string;
  category: string;
  title: string;
  tagline: string;
  coverImage?: string;
  coverImageAlt?: string;
  coverPriority?: boolean;
  floatingCards?: FloatingCard[];
  problem: {
    subtitle: string;
    items: string[];
  };
  challenge: {
    headline: string;
    cardLabel: string;
    items: string[];
  };
  solution: {
    subtitle: string;
    flow: string[];
  };
  features: {
    subtitle: string;
    items: CaseStudyFeature[];
  };
  tech: {
    subtitle: string;
    groups: { label: string; items: string[] }[];
  };
  impact: {
    subtitle: string;
    items: CaseStudyImpact[];
  };
  gallery: GalleryItem[];
  galleryLayout?: "carousel" | "premium";
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  summary?: string;
  cta?: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};
