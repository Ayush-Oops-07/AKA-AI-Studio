import { Hero } from "@/components/home/Hero";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { SelectedWork } from "@/components/home/SelectedWork";
import { WhyWorkWithUs } from "@/components/home/WhyWorkWithUs";
import { CoreServices } from "@/components/home/CoreServices";
import { HowWeWork } from "@/components/home/HowWeWork";
import { PricingSection } from "@/components/home/PricingSection";
import { AfterLaunchSupport } from "@/components/home/AfterLaunchSupport";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { FoundersSection } from "@/components/home/FoundersSection";
import { JourneyTimeline } from "@/components/home/JourneyTimeline";
import { IndustriesWeHelp } from "@/components/home/IndustriesWeHelp";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { BehindTheScenesSection } from "@/components/home/BehindTheScenesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FreeWebsiteCheck } from "@/components/home/FreeWebsiteCheck";
import { QuickQuoteForm } from "@/components/home/QuickQuoteForm";
import { LocationContact } from "@/components/home/LocationContact";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Marquee strip */}
      <MarqueeStrip />

      {/* 3. Work */}
      <SelectedWork />

      {/* 4. Why work with three students */}
      <WhyWorkWithUs />

      {/* 5. Services */}
      <CoreServices />

      {/* 6. How we work */}
      <HowWeWork />

      {/* 7. Pricing */}
      <PricingSection />

      {/* 8. Support & After-launch promise */}
      <AfterLaunchSupport />

      {/* 9. Reviews */}
      <ReviewsSection />

      {/* 10. Founders and Journey */}
      <FoundersSection />
      <JourneyTimeline />

      {/* 11. Industries */}
      <IndustriesWeHelp />

      {/* 12. Before and After (renders only if images exist) */}
      <BeforeAfterSection />

      {/* 13. Behind the scenes (renders only if photos exist) */}
      <BehindTheScenesSection />

      {/* 14. FAQ */}
      <FAQSection />

      {/* 15. Free website check (if enabled) */}
      <FreeWebsiteCheck />

      {/* 16. Quick quote form */}
      <QuickQuoteForm />

      {/* 17. Location and contact (renders only when base city is confirmed) */}
      <LocationContact />
    </>
  );
}
