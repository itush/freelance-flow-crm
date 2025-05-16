
import HeroSection from "@/components/lp/HeroSection";
import ProblemSolutionSection from "@/components/lp/ProblemSolutionSection";
import FeaturesSection from "@/components/lp/FeaturesSection";
import HowItWorksSection from "@/components/lp/HowItWorksSection";
import TestimonialsSection from "@/components/lp/TestimonialsSection";
import PricingSection from "@/components/lp/PricingSection";
import FinalCTASection from "@/components/lp/FinalCTASection";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-cyan-50 dark:bg-slate-900">

      <HeroSection />     
      <ProblemSolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTASection />
    
    </main>
  );
}
