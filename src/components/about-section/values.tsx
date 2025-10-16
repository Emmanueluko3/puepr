"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";

export const services = [
  {
    title: "Local Insight, Global Perspective",
    content:
      "We work hand-in-hand with your team, moving beyond consultancy to co-create success.",
  },
  {
    title: "Agile and Adaptive",
    content:
      "Our team adapts quickly to changing business needs, using modern tools and creative approaches to implement solutions that drive real impact.",
  },
  {
    title: "Transparent Collaboration",
    content:
      "Our communication style is open and clear at every stage, ensuring you always know what's happening and can trust our results.",
  },
  {
    title: "Results That Matter",
    content:
      "At PUEPR, our solutions are designed to generate measurable growth and tangible outcomes, helping your business thrive beyond simple reports and metrics.",
  },
];

export default function Features() {
  return (
    <section
      className="pt-16 bg-grey-100"
      data-aos="fade-up"
      data-aos-duration="1000"
      id="values"
    >
      {/* Values Section */}
      <Container className="flex flex-col-reverse md:flex-row items-center md:items-end gap-10">
        <div className="flex flex-col w-full md:w-1/2 gap-8">
          <div className="bg-white w-fit rounded-full h-full px-4 py-2 border border-gray-200 mx-auto md:mx-0">
            <span className="rounded-full font-bold w-fit text-sm bg-gradient-to-b from-[#000AC3] to-[#000AC3] bg-clip-text text-transparent">
              PUEPR VALUES
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-950 font-bold leading-[115%] font-oswald tracking-tighter text-center md:text-left">
            Our values drive every solution
          </h2>

          <p className="font-clash text-sm sm:text-base md:text-lg text-grey-600 text-center md:text-left">
            At PUEPR, these are the principles that guide our work and our
            relationship with you:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map(({ title, content }, idx) => (
              <article
                key={title}
                className="rounded-2xl border border-gray-300 bg-gray-200 p-5 sm:p-6"
                data-aos="zoom-in-up"
                data-aos-delay={100 + idx * 100}
                data-aos-duration="800"
              >
                <h3 className="text-base sm:text-lg font-bold mb-2 font-oswald">
                  {title}
                </h3>
                <p className="text-grey-600 text-sm sm:text-base font-clash">
                  {content}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src="/images/about-1.jpg"
            alt="Team at work"
            width={500}
            height={500}
            data-aos="fade-left"
            data-aos-delay="100"
            className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-cover rounded-2xl"
          />
        </div>
      </Container>

      {/* Team Section */}
      <Container className="py-16 w-full lg:mt-[5rem] font-clash">
        <header className="mb-12 lg:mb-16 text-center lg:text-left">
          <div className="bg-white w-fit rounded-full h-full px-4 py-2 border border-gray-200 mx-auto md:mx-0 mb-6">
            <span className="rounded-full font-bold w-fit text-sm bg-gradient-to-b from-[#000AC3] to-[#000AC3] bg-clip-text text-transparent">
              OUR TEAM
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight text-balance">
              Meet the experts driving smarter growth
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-black leading-relaxed lg:pt-4">
              Our diverse team of professionals combines local expertise and
              global insights to deliver innovative, tailored solutions for
              businesses worldwide.
            </p>
          </div>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(({ name, role, image, delay }) => (
            <article
              key={name}
              data-aos="zoom-in"
              data-aos-delay={delay}
              className="overflow-hidden text-center"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src={image} alt={name} fill className="object-cover" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">
                  {name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-black">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
