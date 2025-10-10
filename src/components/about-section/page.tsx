"use client";

import { MapPin, Flag } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  // Initialize AOS once

  return (
    <main className="pt-10">
      {/* Hero Section */}
      <section className="container text-black font-clash mx-auto px-4 py-12 md:py-20 lg:py-24">
        {/* Heading & Subheading */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start mb-12 lg:mb-16">
          {/* Heading */}
          <div data-aos="fade-left" data-aos-delay="0">
            <h1 className="text-4xl text-black md:text-3xl lg:text-5xl font-semibold leading-tight text-balance">
              Empowering Businesses to Grow Smarter, Not Harder
            </h1>
          </div>

          {/* Subheading */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="flex items-center lg:items-end lg:pt-10"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We combine local expertise and global insights to deliver
              innovative, tailored solutions that help businesses thrive in
              Serbia, Montenegro, and beyond.
            </p>
          </div>
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

        {/* Mission and Vision Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-7xl mx-auto">
          {/* Mission */}
          <div
            data-aos="fade-in"
            data-aos-delay="500"
            className="bg-[#F9FAFB] border-0 transition-shadow duration-300"
          >
            <div className="p-6 md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl text-black font-[600] mb-3">
                    Mission
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Empower businesses worldwide with agile, innovative
                    solutions that drive growth, efficiency, and lasting
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div
            data-aos="fade-in"
            data-aos-delay="700"
            className="bg-[#F9FAFB] border-0     transition-shadow duration-300"
          >
            <div className="p-6 md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <Flag className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl text-black md:text-2xl font-[600] mb-3">
                    Vision
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    To be recognized globally for delivering innovative,
                    tailored business solutions that help clients thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
