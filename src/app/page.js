import Hero from "../home/Hero";
import AboutSection from "../home/AboutSection";
import InstitutionSection from "../home/InstitutionSection";
import UpgradeSection from "../home/UpgradeSection";
import InsightsSection from "../home/InsightsSection";
import ControlSection from "../home/ControlSection";
import FAQSection from "../home/FAQSection";
import VideoSection from "../home/VideoSection";
import FooterBanner from "../home/FooterBanner";

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
