import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import OverviewSection from "@/components/overview-section";
import TechnologySection from "@/components/technology-section";
import RisksSection from "@/components/risks-section";
import StructureSection from "@/components/structure-section";
import FrameworksSection from "@/components/frameworks-section";
import GoalsSection from "@/components/goals-section";
import PoliciesSection from "@/components/policies-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-arabic pdf-content" dir="rtl">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <TechnologySection />
      <RisksSection />
      <StructureSection />
      <FrameworksSection />
      <GoalsSection />
      <PoliciesSection />
      <FooterSection />
    </div>
  );
}
