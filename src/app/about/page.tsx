import HomePage from "@/components/about-section/page";
import Features from "@/components/about-section/values";
import { CTASection } from "@/components/home-sections/CTA";
import React from "react";

const page = () => {
  return (
    <>
      <HomePage />
      <Features />
      <CTASection />
    </>
  );
};

export default page;
