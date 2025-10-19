"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";

const services = [
  {
    title: "Innovation & Adaptability",
    content:
      "We embrace modern tools and creative approaches, adapting quickly to changing business needs to drive real impact.",
  },
  {
    title: "Global Insight, Local Impact",
    content:
      "We deliver strategies that help your business succeed in any market by effectively blending international experience with crucial local knowledge.",
  },
  {
    title: "Clarity & Trust",
    content:
      "We prioritize open and clear communication at every stage, ensuring you always know what's happening and can have absolute confidence in our results.",
  },
  {
    title: "Results-Driven",
    content:
      "We are committed to designing solutions that go beyond simple reports and metrics, focusing on generating genuine, measurable success for your business.",
  },
];

const team = [
  {
    name: "Ekanem, P",
    role: "Founder & CEO",
    image: "/images/Ekanem-P.JPG",
    delay: 0,
  },
  {
    name: "Harrison, M",
    role: "COO",
    image: "/images/HARRISON-M.jpg",
    delay: 100,
  },
  {
    name: "Lois G",
    role: "Admin Assistant",
    image: "/images/LOIS-G.JPG",
    delay: 200,
  },
  {
    name: "Blossom A",
    role: "Lead Generation / Automation Specialist",
    image: "/images/BLOSSOM-A.JPG",
    delay: 300,
  },
];

export default function Features() {
  return (
    <section data-aos="fade-up" data-aos-duration="1000">
      {/* Values Section */}
      <section
        id="values"
        data-bg="bg-gray-100"
        data-text="text-grey-950"
        data-secondary="text-grey-950"
        className="py-16 bg-gray-100"
      >
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
              src="/images/about-1.jpeg"
              alt="Team at work"
              width={500}
              height={500}
              data-aos="fade-left"
              data-aos-delay="100"
              className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-cover rounded-2xl"
            />
          </div>
        </Container>
      </section>

      <section
        id="team"
        data-bg="bg-white"
        data-text="text-grey-950"
        data-secondary="text-grey-950"
        className="py-16"
      >
        {/* Team Section */}
        <Container className="w-full font-clash">
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
    </section>
  );
}
