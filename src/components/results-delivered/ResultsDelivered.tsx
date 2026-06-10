"use client";

import { ResultsHero } from "./ResultsHero";
import { CaseStudyBlock } from "./CaseStudyBlock";
import { CaseStudyNav } from "./CaseStudyNav";
import { caseStudies } from "./case-studies";

export function ResultsDelivered() {
  return (
    <div className="results-page bg-[#0B0B0F]">
      <ResultsHero />

      {caseStudies.map((study, index) => (
        <div key={study.id}>
          <CaseStudyBlock study={study} showTopDivider={index > 0} />
          <CaseStudyNav
            previous={index > 0 ? caseStudies[index - 1] : undefined}
            next={index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined}
          />
        </div>
      ))}
    </div>
  );
}
