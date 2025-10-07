"use client";

import {
  Briefcase,
  Cloud,
  FileText,
  Grid3x3,
  Lightbulb,
  Network,
  Zap,
} from "lucide-react";
import { CTASection } from "../home-sections/CTA";

const services = [
  {
    icon: Grid3x3,
    title: "Project Management",
    description:
      "Streamline your projects with expert planning, execution, and monitoring for measurable outcomes.",
    hasProfileBadge: true,
  },
  {
    icon: Briefcase,
    title: "Business Development",
    description:
      "Unlock new opportunities, optimize operations, and grow your business locally and globally.",
    hasProfileBadge: false,
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Implement smart systems and processes to save time, reduce errors, and boost productivity.",
    hasProfileBadge: false,
  },
  {
    icon: Cloud,
    title: "Outsourcing",
    description:
      "Access skilled professionals who seamlessly integrate into your team, reducing costs and improving efficiency.",
    hasProfileBadge: false,
  },
  {
    icon: Network,
    title: "Lead Generation",
    description:
      "High-quality leads tailored to your target market to grow your client base effectively.",
    hasProfileBadge: false,
  },
];
const servicesTWO = [
  {
    icon: FileText,
    title: "Business Registration (Serbia & Montenegro)",
    description:
      "Expert guidance through local regulations to register your company quickly and compliantly.",
    delay: 0,
  },
  {
    icon: Lightbulb,
    title: "Admin Support",
    description:
      "Reliable support for your operations, documentation, and day-to-day management needs.",
    delay: 100,
  },
];
export function ServicesSection() {
  return (
    <>
      <section className="py-16 px-4 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12  md:mb-12 font-clash" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl">
              We offer comprehensive solutions that cover every aspect of
              business growth and operational efficiency.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white font-clash p-6 md:p-4  transition-shadow duration-300 relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Icon with optional profile badge */}
                  <div className="relative inline-block mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                      <Icon
                        className="w-8 h-8 md:w-10 md:h-10 text-gray-700"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:py-24 bg-gray-50">
        <div className="max-w-7xl  font-clash mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Special Services for Unique Business Needs
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl">
              We provide specialized solutions for businesses requiring tailored
              support beyond core services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {servicesTWO.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                  className="bg-white  p-8 transition-shadow duration-300"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <CTASection />
      </section>
    </>
  );
}
