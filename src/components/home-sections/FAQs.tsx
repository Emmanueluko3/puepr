"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Container } from "../ui/Container";

const faqs = [
  {
    id: 1,
    question: "What industries do you serve?",
    answer:
      "We partner with businesses across a wide range of industries worldwide. Our specialized expertise includes business registration in Serbia & Montenegro, as well as project management, automation, and operational growth for companies looking to scale smarter.",
  },
  {
    id: 2,
    question: "How do you tailor solutions for my business?",
    answer:
      "We begin by understanding your goals, challenges, and industry context. Using this insight, we design strategies and workflows that align with your unique needs. This way, each solution is actionable, growth-ready, and built to deliver measurable impact.",
  },
  {
    id: 3,
    question: "Can you help with business registration in Serbia & Montenegro?",
    answer:
      "Yes. We assist businesses with the full registration process in Serbia and                  Montenegro, from preparing documentation to navigating local requirements. Our team ensures that your setup is compliant, efficient, and aligned with your long-term growth goals.",
  },
  {
    id: 4,
    question: "What is your approach to project management and automation?",
    answer:
      "At PUEPR, we combine proven project management frameworks with smart automation to streamline workflows and eliminate inefficiencies. This approach ensures every project is delivered with clarity, consistency, and lasting results, helping your business grow smarter.",
  },
  {
    id: 5,
    question: "Can you work with startups as well as established businesses?",
    answer:
      "We work with clients of all sizes, including startups, SMEs, large enterprises, entrepreneurs, and solopreneurs, tailoring solutions to their stage of growth.",
  },
  {
    id: 6,
    question: "How do I schedule a consultation?",
    answer:
      "Simply click the “Book your consultation” button, select a time through our Calendly link, and you’ll be scheduled for a 1:1 session with our founder to discuss your business goals.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="contactCard"
      data-bg="bg-white"
      data-text="text-grey-950"
      data-secondary="text-grey-950"
      className="py-16 px-4 md:py-24 bg-white"
    >
      <Container className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center font-clash mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Answers to the most common questions about our services, process,
            and how we help businesses Grow smarter.
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
      </Container>
    </section>
  );
}
