"use client";
import { processSteps } from "@/lib/constants";
import Image from "next/image";
export default function HowWeWorkSection() {
  return (
    <section
      className="relative min-h-screen py-20 px-4 md:px-8"
      id="howWeWork"
      data-bg="bg-primary-500"
      data-text="text-white"
      data-secondary="text-white"
      style={{
        background: "linear-gradient(253.21deg, #FF7104 0%, #000AC3 105.98%)",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center mb-8">
          <div className="rounded-full border border-gray-200 bg-gray-100 px-4 py-2 w-fit">
            <span className="bg-gradient-to-b from-[#FFA100] to-[#FF000D] bg-clip-text text-transparent text-sm w-fit">
              How we work
            </span>
          </div>
        </div>

        <h2 className="text-sm font-clash md:text-xl lg:text-4xl font-bold text-white text-center mb-6 leading-tight px-4">
          Our process is designed to understand, strategize, and deliver
          trackable success at every stage of your business.
        </h2>

        <p className="text-white/90 text-center text-lg md:text-xl max-w-4xl mx-auto mb-16 font-clash leading-relaxed">
          Our proven methodology ensures every project delivers practical value
          through systematic excellence and personal attention.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className=" backdrop-blur-sm border-white/20 overflow-hidden transition-all duration-300"
            >
              <div className="p-0">
                <div className="aspect-square  rounded-2xl mb-3 overflow-hidden">
                  <Image
                    src={step.image || "/images/building.jpg"}
                    alt={step.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold  text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
