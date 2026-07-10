import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TechStrip } from "@/components/home/TechStrip";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { CTASection } from "@/components/shared/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <TechStrip />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
