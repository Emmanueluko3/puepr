"use client";

import {
  Rocket,
  Brain,
  Diamond,
  UserCheck,
  ShieldCheck,
  Cloud,
} from "lucide-react";
import Image from "next/image";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Rocket,
      title: "Agile Innovation without the Bureaucracy",
      description:
        "As a boutique consultancy, we pivot and innovate faster than larger firms. Unburdened by corporate red tape, we quickly adapt solutions to your unique challenges. You get creative problem-solving and truly customized strategies.",
    },
    {
      icon: Brain,
      title: "Specialized Expertise",
      description:
        "We offer a rare combination of digital and business expertise that few single providers can match. This deep, focused knowledge means highly tailored solutions and dedicated attention to your specific needs. No spreading resources thin across hundreds of clients.",
    },
    {
      icon: Diamond,
      title: "Premium Quality at Smart Pricing",
      description:
        "Without the overhead of massive agencies, we deliver top-tier consulting at competitive rates. You get specialized expertise and personalized service without the inflated costs. This proves that exceptional value does not require compromising on quality.",
    },
    {
      icon: UserCheck,
      title: "Direct Delivery, No Outsourcing",
      description:
        "Your project stays with our core team from start to finish. No handoffs to external contractors. You work directly with experienced experts who understand your business and take personal ownership of your success.",
    },
    {
      icon: ShieldCheck,
      title: "Built-In Quality Assurance",
      description:
        "Every project goes through a structured quality review covering functionality, user experience, and your acceptance criteria before it ever reaches you. This ensures our standards stay high and your results keep improving.",
    },
    {
      icon: Cloud,
      title: "Our Commitment to Excellence",
      description:
        "With cloud-based systems and real-time collaboration, you gain full visibility into progress, milestones, and outcomes throughout our partnership.",
    },
  ];

  return (
    <section
      data-bg="bg-white"
      data-text="text-gray-950"
      data-secondary="text-gray-950"
      className="py-16 md:py-24 px-4 md:px-8 bg-gray-50"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="rounded-full border border-gray-200 bg-gray-100 px-4 py-2 w-fit">
          <span className="bg-gradient-to-b from-[#FFA100] to-[#FF000D] bg-clip-text text-transparent text-xs">
            Why choose us?
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">
          <div className="font-oswald ">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight">
              Not Just Another Service Provider
              <br />A True Partner in Growth
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600 font-clash text-base md:text-lg leading-relaxed">
              Our team delivers tailored solutions that align with your business
              goals. With a global perspective, we bring expertise and proven
              results to drive impactful outcomes.{" "}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white font-clash border-gray-200 border duration-300 rounded-2xl"
                data-aos="zoom-in-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="p-6">
                  <Icon
                    className="w-8 h-8 text-gray-700 mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
