"use client";

import { CaseStudyCover } from "./CaseStudyCover";
import { ProblemSection } from "./ProblemSection";
import { ChallengeSection } from "./ChallengeSection";
import { SolutionSection } from "./SolutionSection";
import { FeaturesSection } from "./FeaturesSection";
import { TechStackSection } from "./TechStackSection";
import { ImpactSection } from "./ImpactSection";
import { GallerySection } from "./GallerySection";
import { TestimonialSection } from "./TestimonialSection";
import { SummarySection } from "./SummarySection";
import { CaseStudyCtaSection } from "./CaseStudyCtaSection";
import type { CaseStudy } from "./types";

type CaseStudyBlockProps = {
  study: CaseStudy;
  showTopDivider?: boolean;
};

export function CaseStudyBlock({ study, showTopDivider = false }: CaseStudyBlockProps) {
  return (
    <div id={study.id} className="scroll-mt-28">
      {showTopDivider && <div className="results-case-divider" aria-hidden />}
      <CaseStudyCover study={study} />
      <ProblemSection problem={study.problem} />
      <ChallengeSection challenge={study.challenge} />
      <SolutionSection solution={study.solution} />
      <FeaturesSection features={study.features} />
      <TechStackSection tech={study.tech} />
      <ImpactSection impact={study.impact} />
      <GallerySection gallery={study.gallery} />
      {study.testimonial && <TestimonialSection testimonial={study.testimonial} />}
      {study.summary && <SummarySection summary={study.summary} />}
      {study.cta && <CaseStudyCtaSection cta={study.cta} />}
    </div>
  );
}
