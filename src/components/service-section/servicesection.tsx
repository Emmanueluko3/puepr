"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  Cloud,
  FileText,
  Grid3x3,
  Lightbulb,
  Network,
  Zap,
  RefreshCcw,
  LucideIcon,
} from "lucide-react";
import { CTASection } from "../home-sections/CTA";
import AOS from "aos";

interface Service {
  icon: LucideIcon;
  title: string;
  short: string;
  full: string;
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Initialize AOS (only once)
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 800, once: true });
    }
  }, []);

  const services: Service[] = [
    {
      icon: Briefcase,
      title: "Web Development",
      short:
        "We design and develop custom websites that are visually appealing, functional, and tailored to your business objectives. From corporate websites to professional portfolios, our web solutions enhance brand credibility and user engagement.",
      full: `We design and develop custom websites that are visually appealing, functional, and tailored to your business objectives. From corporate websites to professional portfolios, our web solutions enhance brand credibility and user engagement.`,
    },
    {
      icon: Zap,
      title: "Automation Solutions",
      short:
        "We help organizations save time and reduce errors by automating routine and repetitive processes. Our automation services include workflow, data entry, and task automation.",
      full: `We help organizations save time and reduce errors by automating routine and repetitive processes. Our automation services include:
- **Workflow Automation** – streamline repetitive tasks and boost efficiency.
- **Data Entry Automation** – minimize manual input and reduce errors.
- **Task Automation** – automate assignments, reminders, and notifications.
- **Custom Automation** – tailored solutions for specific organizational needs.`,
    },
    {
      icon: Grid3x3,
      title: "Project Management",
      short:
        "We provide end-to-end project management support, ensuring projects are delivered on time and within budget.",
      full: `We provide end-to-end project management support, ensuring projects are delivered on time and within budget. Our services include:
- Project planning & coordination
- Task and resource management
- Deadline tracking & progress reporting
- Risk assessment & issue resolution
- Project evaluation & closure.`,
    },
    {
      icon: RefreshCcw,
      title: "Rebranding Services",
      short:
        "We help businesses refresh and modernize their brand identity to align with evolving markets, ensuring stronger positioning.",
      full: `We help businesses refresh and modernize their brand identity to align with evolving markets, ensuring stronger positioning and increased customer connection.`,
    },
    {
      icon: Network,
      title: "Lead Generation",
      short:
        "We specialize in delivering high-quality, verified leads that fuel business growth and enhance conversions.",
      full: `We specialize in delivering high-quality, verified leads that fuel business growth. Our services cover:
- Verified lead research & segmentation
- Contact database building
- Industry-specific & targeted market research
- Social media-driven lead generation campaigns.`,
    },
  ];

  const servicesTWO: Service[] = [
    {
      icon: Lightbulb,
      title: "Administrative Support",
      short:
        "Our virtual assistance services provide reliable and efficient office support, including scheduling and documentation.",
      full: `Our virtual assistance services provide businesses with reliable and efficient office support, including:
- Email, phone, and chat management
- Scheduling & calendar coordination
- Data entry & document management
- Research & reporting
- Customer service & client support.`,
    },
    {
      icon: FileText,
      title: "Business Registration",
      short:
        "We simplify the process of establishing your business in Serbia or Montenegro with full compliance and speed.",
      full: `We simplify the process of establishing businesses by assisting with:
- Company registration in Serbia
- Company registration in Montenegro
- Legal documentation and compliance guidance
- Consultation for long-term business scalability.`,
    },
  ];

  const renderServiceCard = (service: Service, index: number) => {
    const Icon = service.icon;
    return (
      <div
        key={index}
        className="bg-white font-clash p-6 md:p-6 transition-shadow duration-300 relative"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <div className="w-12 h-12 mb-4 flex items-center justify-center">
          <Icon className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
          {service.short}
        </p>

        <button
          onClick={() => setSelectedService(service)}
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
        </button>
      </div>
    );
  };

  return (
    <>
      {/* Core Services */}
      <section className="py-16 px-4 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 font-clash" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl">
              We offer comprehensive solutions that cover every aspect of
              business growth and operational efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map(renderServiceCard)}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 px-4 md:py-24 bg-gray-50">
        <div className="max-w-7xl font-clash mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Specialized Services for Unique Business Needs
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl">
              We provide specialized solutions for businesses requiring tailored
              support beyond core services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {servicesTWO.map(renderServiceCard)}
          </div>
        </div>
        <CTASection />
      </section>

      {/* Modal */}
      {selectedService && (
        <div
          data-aos="fade-left"
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
        >
          <div className="bg-white max-w-lg w-full p-8 rounded-2xl shadow-xl relative animate-slideIn">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedService(null)}
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <selectedService.icon className="w-7 h-7 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedService.title}
              </h3>
            </div>

            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {selectedService.full}
            </p>
          </div>
        </div>
      )}

      {/* Slide Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}
