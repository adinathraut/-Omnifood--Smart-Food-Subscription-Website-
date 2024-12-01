import React from "react";
import HeroSection from "./HeroSection";
import FeaturedSection from "./FeaturedSection";
import HowItWorksSection from "./HowItWorksSection";
import MealsSection from "./MealsSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import CtaSection from "./CtaSection";

function MainComponent() {
  return (
    <div>
      {/* All sections of the page */}
      <HeroSection />
      <FeaturedSection />
      <HowItWorksSection />
      <MealsSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}

export default MainComponent;
