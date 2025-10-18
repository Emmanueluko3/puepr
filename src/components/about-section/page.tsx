"use client";

import { MapPin, Flag } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const infoCards = [
    {
      icon: MapPin,
      title: "Mission",
      text: "To empower your business with strategies that generate measurable growth and tangible outcomes by combining local knowledge with international experience.",
      delay: "500",
    },
    {
      icon: Flag,
      title: "Vision",
      text: "Our vision is to be globally recognized for delivering innovative, tailored business solutions that help clients thrive.",
      delay: "700",
    },
  ];

  return (
    <section
      id="about-section"
      data-bg="bg-white"
      data-text="text-grey-950"
      data-secondary="text-grey-950"
      className="container text-gray-950 font-clash mx-auto px-4 py-12 md:py-20 lg:py-32"
    >
      {/* Heading & Subheading */}
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start mb-12 lg:mb-16">
        <h1
          data-aos="fade-left"
          className="text-4xl md:text-3xl lg:text-5xl font-semibold leading-tight text-balance"
        >
          Trusted solutions for tomorrow’s challenges
        </h1>

        <p
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-base md:text-lg text-muted-foreground leading-relaxed lg:pt-10"
        >
          We are a globally-minded consultancy dedicated to delivering
          innovative, results-driven solutions that help your business not just
          succeed, but thrive
        </p>
      </div>

      {/* Hero Image */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-12 lg:mb-20"
      >
        <Image
          src="/images/about.jpg"
          alt="Team collaboration - hands joining together"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid gap-6 md:grid-cols-2 max-w-7xl mx-auto">
        {infoCards.map(({ icon: Icon, title, text, delay }) => (
          <article
            key={title}
            data-aos="fade-in"
            data-aos-delay={delay}
            className="bg-[#F9FAFB] rounded-lg p-6 md:p-8 transition-shadow duration-300 flex flex-col gap-4"
          >
            <Icon className="w-8 h-8 text-grey-700" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-black">
                {title}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
