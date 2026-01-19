import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { SupportSection } from "@/components/support-section";
import { CustomerStoreSection } from "@/components/customer-store-section";
import { CallToAction } from "@/components/call-to-action";

export default function Home() {
  return (
    <>
      <article>
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerStoreSection />
        <CallToAction />
      </article>
    </>
  );
}
