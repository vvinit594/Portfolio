"use client";

import { ResultsHero } from "./ResultsHero";
import { CaseStudyCover } from "./CaseStudyCover";
import { ProblemSection } from "./ProblemSection";
import { ChallengeSection } from "./ChallengeSection";
import { SolutionSection } from "./SolutionSection";
import { FeaturesSection } from "./FeaturesSection";
import { TechStackSection } from "./TechStackSection";
import { ImpactSection } from "./ImpactSection";
import { GallerySection } from "./GallerySection";
import { TestimonialSection } from "./TestimonialSection";
import { NextStorySection } from "./NextStorySection";

export function ResultsDelivered() {
  return (
    <div className="results-page bg-[#0B0B0F]">
      <ResultsHero />
      <CaseStudyCover />
      <ProblemSection />
      <ChallengeSection />
      <SolutionSection />
      <FeaturesSection />
      <TechStackSection />
      <ImpactSection />
      <GallerySection />
      <TestimonialSection />
      <NextStorySection />
    </div>
  );
}
