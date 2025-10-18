import MianHeader from "@/components/main-header/MianHeader";
import HeroSection from "./sections/heroSection/Index";

export default function HomePage() {
  return (
    <div className="relative bg-white">
      <MianHeader />
      <main>
        <HeroSection />
      </main>
      <footer></footer>
    </div>
  );
}
