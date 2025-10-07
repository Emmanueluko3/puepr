"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What industries do you serve?",
    answer:
      "We work with businesses across various industries globally, with specialized expertise in Serbia and Montenegro business registration, project management, automation, and operational growth.",
  },
  {
    id: 2,
    question: "How do you tailor solutions for my business?",
    answer:
      "We begin with a comprehensive discovery phase to understand your unique challenges, goals, and market position. Our team then crafts customized strategies that align with your specific objectives and industry requirements.",
  },
  {
    id: 3,
    question:
      "Can you help with business registration in Serbia and Montenegro?",
    answer:
      "Yes, we specialize in business registration services for Serbia and Montenegro. We handle all legal requirements, documentation, and regulatory compliance to ensure a smooth registration process for your business.",
  },
  {
    id: 4,
    question: "What is your approach to project management and automation?",
    answer:
      "We combine agile methodologies with cutting-edge automation tools to streamline your operations. Our approach focuses on efficiency, scalability, and measurable results while maintaining flexibility to adapt to your evolving needs.",
  },
  {
    id: 5,
    question: "How do I schedule a consultation?",
    answer:
      'You can schedule a consultation by clicking the "Get Started Today" button on our website, or by contacting us directly through our contact form. We typically respond within 24 hours to arrange a convenient time for your consultation.',
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 px-4 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center font-clash mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Answers to the most common questions about our services, process,
            and how we help businesses grow smarter.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="  font-clash  border-b-1 border-0 border-gray-200 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 text-left transition-colors"
                aria-expanded={openId === faq.id}
              >
                <div className="flex items-start gap-3 md:gap-4 flex-1">
                  <span className="text-gray-400 font-medium text-sm md:text-xl flex-shrink-0">
                    {String(faq.id).padStart(2, "0")}
                  </span>
                  <h3 className="text-base md:text-lg lg:text-xl  text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 mt-1">
                  {openId === faq.id ? (
                    <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  )}
                </div>
              </button>

              {/* Answer with AOS Animation */}
              {openId === faq.id && (
                <div
                  data-aos="fade-down"
                  data-aos-duration="400"
                  className="px-6 pb-5 md:px-8 md:pb-6"
                >
                  <div className="pl-0 md:pl-8 border-t border-gray-100 pt-4">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
