import Hero from "../components/ui/home/Hero";
import AboutSection from "../components/ui/home/AboutSection";
import InstitutionSection from "../components/ui/home/InstitutionSection";
import UpgradeSection from "../components/ui/home/UpgradeSection";
import InsightsSection from "../components/ui/home/InsightsSection";
import ControlSection from "../components/ui/home/ControlSection";
import FAQSection from "../components/ui/home/FAQSection";
import VideoSection from "../components/ui/home/VideoSection";
import FooterBanner from "../components/ui/home/FooterBanner";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <InstitutionSection />
      <UpgradeSection />
      <InsightsSection />
      <ControlSection />
      <FAQSection />
      <VideoSection />
      <FooterBanner />
    </div>
  );
}
