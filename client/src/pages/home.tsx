import { HeroSection } from "@/components/landing/HeroSection";
import { MockupsSection } from "@/components/landing/MockupsSection";
import { ProblemSolutionSection } from "@/components/landing/ProblemSolutionSection";
import { AppDemoSection } from "@/components/landing/AppDemoSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { SocialFeedSection } from "@/components/landing/SocialFeedSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden" data-testid="landing-page">
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
      
      <HeroSection />
      <MockupsSection />
      <ProblemSolutionSection />
      <AppDemoSection />
      <BenefitsSection />
      <HowItWorksSection />
      <SocialFeedSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
