import { HeroSection } from "@/components/landing/HeroSection";
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
    <div className="min-h-screen bg-white" data-testid="landing-page">
      <HeroSection />
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
