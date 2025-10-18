import { CTASection } from "@/components/home-sections/CTA";
import { FAQSection } from "@/components/home-sections/FAQs";
import { WhyChooseUsSection } from "@/components/home-sections/Growth";
import Hero from "@/components/home-sections/Hero";
import HowWeWorkSection from "@/components/home-sections/howtowork";
import Reviews from "@/components/home-sections/Reviews";
import Features from "@/components/home-sections/Services";
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowWeWorkSection />

      <WhyChooseUsSection />
      <Reviews />
      <CTASection />
      <FAQSection />
    </>
  );
}
