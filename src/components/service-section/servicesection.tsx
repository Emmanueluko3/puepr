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

const sections = [
  {
    id: "services",
    dataBg: "bg-white",
    dataText: "text-grey-950",
    dataSecondary: "text-grey-950",
    title: "CORE SERVICES",
    description:
      "At PUEPR, we provide a comprehensive suite of services designed to improve business performance, digital presence, and operational efficiency.",
    services: [
      {
        icon: Grid3x3,
        title: "Project Management",
        description:
          "Streamline your projects with expert planning, execution, and monitoring for measurable outcomes.",
      },
      {
        icon: Briefcase,
        title: "Web Development",
        description:
          "We design and develop custom websites that are visually appealing, functional, and tailored to your business objectives. From corporate websites to professional portfolios, our web solutions enhance brand credibility and user engagement.",
      },
      {
        icon: Zap,
        title: "Automation Solutions",
        description:
          "Implement smart systems and processes to save time, reduce errors, and boost productivity.",
      },
      {
        icon: Cloud,
        title: "Outsourcing",
        description:
          "Access skilled professionals who seamlessly integrate into your team, reducing costs and improving efficiency.",
      },
      {
        icon: Network,
        title: "Lead Generation",
        description:
          "High-quality leads tailored to your target market to grow your client base effectively.",
      },
    ],
    className: "font-clash",
    withCTA: false,
  },
  {
    id: "unique",
    dataBg: "bg-gray-50",
    dataText: "text-grey-950",
    dataSecondary: "text-grey-950",
    title: "Special Services for Unique Business Needs",
    description:
      "We provide specialized solutions for businesses requiring tailored support beyond core services.",
    services: [
      {
        icon: FileText,
        title: "Business Registration (Serbia & Montenegro)",
        description:
          "Expert guidance through local regulations to register your company quickly and compliantly.",
      },
      {
        icon: Lightbulb,
        title: "Admin Support",
        description:
          "Reliable support for your operations, documentation, and day-to-day management needs.",
      },
    ],
    className: "font-clash",
    withCTA: true,
  },
];

export function ServicesSection() {
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          id={section.id}
          data-bg={section.dataBg}
          data-text={section.dataText}
          data-secondary={section.dataSecondary}
          className={`py-16 px-4 md:py-24 ${section.dataBg}`}
        >
          <div className={`max-w-7xl mx-auto ${section.className}`}>
            <div className="mb-12 md:mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                {section.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl">
                {section.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {section.services.map((service, index) => {
                const Icon = service.icon;
                const delay = index * 100;

                return (
                  <div
                    key={service.title}
                    data-aos="fade-up"
                    data-aos-delay={delay}
                    className={`group bg-white p-6 md:p-8 transition-colors duration-300 hover:bg-primary-500 rounded-lg ${
                      sectionIndex === 0 ? "font-clash" : ""
                    }`}
                  >
                    <div className="mb-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/20 rounded-lg bg-gray-100">
                        <Icon
                          className="w-6 h-6 md:w-10 md:h-10 text-gray-700 transition-colors duration-300 group-hover:text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {section.withCTA && <CTASection />}
        </section>
      ))}
    </>
  );
}
