import MianHeader from "@/components/main-header/MianHeader";
import HeroSection from "./sections/heroSection/HeroSection";
import FeaturesSection from "./sections/featuresSection/FeaturesSection";

export default function HomePage() {
  return (
    <div className="relative bg-white">
      <MianHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <footer></footer>
    </div>
  );
}
