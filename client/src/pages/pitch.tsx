import { PitchHeroSection } from "@/components/pitch/PitchHeroSection";
import { ProblemSection } from "@/components/pitch/ProblemSection";
import { SurveyResultsSection } from "@/components/pitch/SurveyResultsSection";
import { SolutionSection } from "@/components/pitch/SolutionSection";
import { MarketSection } from "@/components/pitch/MarketSection";
import { CompetitorsSection } from "@/components/pitch/CompetitorsSection";
import { BusinessModelSection } from "@/components/pitch/BusinessModelSection";
import { FinancialsSection } from "@/components/pitch/FinancialsSection";
import { RoadmapSection } from "@/components/pitch/RoadmapSection";
import { TeamSection } from "@/components/pitch/TeamSection";
import { PitchFooter } from "@/components/pitch/PitchFooter";

export default function Pitch() {
  return (
    <div className="min-h-screen bg-background overflow-hidden" data-testid="pitch-page">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl"
          style={{ transform: "translate(-50%, -50%)" }}
        />
        <div 
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-gray-300/20 rounded-full blur-3xl"
          style={{ transform: "translate(50%, 50%)" }}
        />
      </div>
      
      <PitchHeroSection />
      <ProblemSection />
      <SurveyResultsSection />
      <SolutionSection />
      <MarketSection />
      <CompetitorsSection />
      <BusinessModelSection />
      <FinancialsSection />
      <RoadmapSection />
      <TeamSection />
      <PitchFooter />
    </div>
  );
}
