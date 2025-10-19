"use client";

import {
  Code2,
  Workflow,
  ClipboardCheck,
  Palette,
  Target,
  Headphones,
  FileSignature,
} from "lucide-react";
import { CTASection } from "../home-sections/CTA";

const sections = [
  {
    id: "services",
    dataBg: "bg-gray-100",
    dataText: "text-grey-950",
    dataSecondary: "text-grey-950",
    title: "CORE SERVICES",
    description:
      "At PUEPR, we provide a comprehensive suite of services designed to improve business performance, digital presence, and operational efficiency.",
    services: [
      {
        icon: Code2,
        title: "Web development",
        description:
          "We design and develop custom websites that are visually appealing, functional, and tailored to your business objectives. From corporate websites to professional portfolios, our web solutions enhance brand credibility and user engagement.",
      },
      {
        icon: Workflow,
        title: "Business process automation",
        description:
          "We help organizations save time and reduce errors by automating routine and repetitive processes. From workflow automation to task assignments and custom solutions, our services streamline operations, boost efficiency, and free your team to focus on strategic priorities.",
      },
      {
        icon: ClipboardCheck,
        title: "Project management",
        description:
          "We provide end-to-end project management support, ensuring projects are delivered on time and within budget. From planning and coordination to resource management, deadline tracking, and risk resolution, our structured approach guarantees successful project outcomes.",
      },
      {
        icon: Palette,
        title: "Rebranding services",
        description:
          "We help businesses refresh and modernize their brand identity to align with evolving markets, ensuring stronger positioning and increased customer connection. Our rebranding solutions revitalize your visual presence and messaging to resonate with today’s audiences.",
      },
      {
        icon: Target,
        title: "Lead generation",
        description:
          "We specialize in delivering high-quality, verified leads that fuel business growth. From targeted research and contact database building to industry-specific lead lists, our lead generation services help you fill your pipeline with prospects ready to convert.",
      },
    ],
    className: "font-clash",
    withCTA: false,
  },
  {
    id: "unique",
    dataBg: "bg-white",
    dataText: "text-grey-950",
    dataSecondary: "text-grey-950",
    title: "Specialized services for unique business needs",
    description:
      "We provide specialized solutions for businesses requiring tailored support beyond core services.",
    services: [
      {
        icon: Headphones,
        title: "Administrative support",
        description:
          "Our virtual assistance services provide businesses with reliable and efficient office support that keeps operations running smoothly. From email and calendar management to data entry, research, and customer service, we handle administrative tasks so you can focus on core business activities.",
      },
      {
        icon: FileSignature,
        title: "Business registration",
        description:
          "We simplify the process of establishing businesses by assisting with company registration in Serbia and Montenegro. Our streamlined services navigate local requirements and paperwork, making it easy to establish your legal business presence and start operations with confidence.",
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
        <div key={sectionIndex}>
          <section
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
          </section>
          {section.withCTA && <CTASection />}
        </div>
      ))}
    </>
  );
}
