import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HighlightsSection from "@/components/HighlightsSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HighlightsSection />
      <ComingSoonSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
