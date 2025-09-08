import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="w-full">
        <div className="flex flex-col w-full items-start relative bg-white">
          <HeaderSection />
          <HeroSection />
          <FeaturesSection />
          <AboutUsSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};
