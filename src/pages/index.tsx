import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";

export default function Home() {
  return (
    <>
      <article>
        <HeroSection />
        <FeatureSection />
      </article>
    </>
  );
}
