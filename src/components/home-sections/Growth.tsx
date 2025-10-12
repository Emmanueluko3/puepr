"use client";

import { Gauge, Network, SlidersHorizontal, CloudUpload } from "lucide-react";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Gauge,
      title: "Agility at the Core",
      description:
        "We adapt quickly to changes, ensuring your business stays ahead in fast-moving markets.",
    },
    {
      icon: Network,
      title: "Partnership, Not Just Service",
      description:
        "We don't just deliver work—we build lasting relationships, growing alongside you.",
    },
    {
      icon: SlidersHorizontal,
      title: "Fresh Thinking",
      description:
        "With a startup mindset, we approach challenges differently, bringing creativity and practical solutions.",
    },
    {
      icon: CloudUpload,
      title: "Value-Driven Results",
      description:
        "Our goal isn't just to complete tasks, but to create measurable growth for your business.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Label */}
        <div className="rounded-full border border-gray-200 bg-gray-100 px-4 py-2 w-fit">
          <span className="bg-gradient-to-b from-[#FFA100] to-[#FF000D] bg-clip-text text-transparent text-xs w-fit">
            Why Choose Us
          </span>
        </div>

        {/* Heading and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">
          <div className="font-oswald ">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight">
              Not Just Another Service Provider
              <br />A True Partner in Growth
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600 font-clash text-base md:text-lg leading-relaxed">
              We&apos;re not your typical agency or consultancy. As a young and
              agile startup, we move with speed, flexibility, and a deep focus
              on results. Every project is an opportunity to prove that
              innovation and reliability can go hand in hand.
            </p>
          </div>
        </div>

        {/* Cards with AOS animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white font-clash border-gray-200   duration-300  border"
                data-aos="zoom-in-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Profile Image for Value-Driven Results card */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
