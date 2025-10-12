"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "True Partnership",
    content:
      "We work hand-in-hand with your team, moving beyond consultancy to co-create success.",
  },
  {
    title: "Borderless Growth",
    content:
      "Strong roots in Serbia & Montenegro, paired with strategies that scale across borders.",
  },
  {
    title: "Influence That Lasts",
    content:
      "From media to stakeholders, we shape narratives that endure, build trust, and drive lasting influence.",
  },
  {
    title: "Tailored to You",
    content:
      "Every solution is carefully customized to fit your market, reflect your story, and achieve your goals with precision.",
  },
];

export default function Features() {
  return (
    <section
      className="pt-16   bg-white"
      data-aos="fade-up"
      data-aos-duration="1000"
      id="features"
      data-bg="bg-white"
      data-text="text-gray-900"
      data-secondary="text-gray-900"
    >
      <Container className="flex flex-col  md:flex-row  gap-6">
        <div className="w-full flex  mt-7 flex-col gap-8">
          <div className="rounded-full border border-gray-200 bg-gray-100 px-4 py-2 w-fit">
            <span className="bg-gradient-to-b from-[#000AC3] to-[#000AC3] bg-clip-text text-transparent text-xs w-fit">
              PUEPR VALUES
            </span>
          </div>

          <h2 className="w-full text-3xl text-gray-950 font-bold leading-[115%] mb-6 lg:mb-0 font-oswald tracking-tighter">
            Our Values Drive Every Solution{" "}
          </h2>
          <p className="font-clash font-normal text-base md:text-lg text-grey-600 w-full">
            At PUEPR, we believe in transparency, innovation, and measurable
            results. These principles guide every project we undertake.{" "}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((div, idx) => (
              <div
                key={idx}
                className="bg-grey-100 rounded-2xl border border-gray-100 p-6"
                data-aos="zoom-in-up"
                data-aos-delay={100 + idx * 100}
                data-aos-duration="800"
              >
                <h3 className="text-lg font-bold mb-2 font-oswald">
                  {div.title}
                </h3>
                <p className="text-grey-600 text-sm font-clash">
                  {div.content}
                </p>
              </div>
            ))}
          </div>
          <Button
            variant="primary"
            data-aos="zoom-in-right"
            data-aos-delay="100"
            className="flex items-center justify-center gap-3 w-fit"
          >
            Discover More About Us <ArrowRight />
          </Button>
        </div>{" "}
        <div
          className="flex flex-col w-full  lg:gap-8  lg:mb-0"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <Image
            src="/images/business.jpg"
            alt=""
            width={500}
            height={300}
            className="w-full h-full md:h-[550px] md:mt-[6rem]  object-cover rounded-2xl"
          />
        </div>
      </Container>

      {/* Section Header */}
      <Container className="py-16 w-full  lg:mt-[5rem]">
        <div className="mb-12  lg:mb-16 font-clash">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider px-4 py-2 bg-blue-50 rounded-full">
              OUR TEAM
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-black leading-tight text-balance">
              Meet the Experts Driving Smarter Growth
            </h2>
            <p className="text-base md:text-lg text-muted-black leading-relaxed lg:pt-4">
              Our diverse team of professionals combines local expertise and
              global insights to deliver innovative, tailored solutions for
              businesses worldwide.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid font-clash gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Team Member 1 */}
          <div data-aos="zoom-in" data-aos-delay="0">
            <div className="border-0 overflow-hidden">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/avater.jpg"
                  alt="Alex Markovic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black mb-1">
                  Alex Markovic
                </h3>
                <p className="text-sm text-muted-black">Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div data-aos="zoom-in" data-aos-delay="100">
            <div className="border-0 overflow-hidden">
              <div className="relative rounded-2xl aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/avater.jpg"
                  alt="Milena Petrovic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black mb-1">
                  Milena Petrovic
                </h3>
                <p className="text-sm text-muted-black">
                  Head of Project Management
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div data-aos="zoom-in" data-aos-delay="200">
            <div className="border-0 overflow-hidden">
              <div className="relative  rounded-2xl aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/avater.jpg"
                  alt="Stefan Jovanovic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black mb-1">
                  Stefan Jovanovic
                </h3>
                <p className="text-sm text-muted-black">
                  Lead Business Consultant
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div data-aos="zoom-in" data-aos-delay="300">
            <div className="border-0 overflow-hidden">
              <div className="relative  rounded-2xl aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/avater.jpg"
                  alt="Ivana Nikolic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold  text-black mb-1">
                  Ivana Nikolic
                </h3>
                <p className="text-sm text-muted-black">
                  Automation & Tech Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
