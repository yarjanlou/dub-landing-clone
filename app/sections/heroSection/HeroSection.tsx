import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <div className="relative overflow-clip px-4">
      <div className="max-w-grid-width relative mx-auto px-4 py-20 sm:px-12">
        <HeroBackground />
        <HeroContent />
      </div>
    </div>
  );
}
