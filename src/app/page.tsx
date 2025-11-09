// src/app/page.tsx
import React from "react";
import AnimatedHero from "../components/AnimatedHero";
import FeaturesSection from "../components/FeaturesSection";
import AppFeaturesSection from "../components/AppFeaturesSection";
import BrandSection from "../components/BrandSection";
import CTASection from "../components/CTASection";



export default async function HomePage() {
  return (
    <>
      {/* Hero Section with Animated Title */}
      <AnimatedHero />

      {/* Brand/Technology Section */}
      <BrandSection />

      {/* Features Section (Why Us) */}
      <FeaturesSection />

      {/* App Features Section (Discover the Power) */}
      <AppFeaturesSection />

      {/* CTA Section (Get Started) */}
      <CTASection />
    </>
  );
}