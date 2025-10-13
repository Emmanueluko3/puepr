"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <section
      className="py-16 lg:py-32 bg-white"
      data-aos="fade-up"
      data-aos-duration="1000"
      id="features"
      data-bg="bg-white"
      data-text="text-gray-900"
      data-secondary="text-gray-900"
    >
      <Container className="flex flex-col md:flex-row items-end gap-6">
        <div
          className="flex flex-col w-full pr-10 lg:gap-8 mb-14 lg:mb-0"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="rounded-full border border-gray-200 bg-gray-100 px-4 py-2 w-fit">
            <span className="bg-gradient-to-b from-[#FFA100] to-[#FF000D] bg-clip-text text-transparent text-xs w-fit">
              Why Businesses Around the World Choose PUEPR
            </span>
          </div>

          <h2 className="w-full text-3xl text-gray-950 font-bold leading-[115%] mb-6 lg:mb-0 font-oswald tracking-tighter">
            Empowering Businesses With Smarter, Tailored Solutions
          </h2>
          <Image
            src="/images/business.jpg"
            alt=""
            width={500}
            height={300}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="w-full flex flex-col gap-8">
          <p className="font-clash font-normal text-base md:text-lg text-grey-600 w-full">
            With years of expertise and a global perspective, PUEPR helps
            companies unlock efficiency, scale operations, and expand into new
            markets. Our agile, innovative approach ensures every client gets
            strategies that drive measurable growth and lasting results.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((card, idx) => (
              <div
                key={idx}
                className="bg-grey-100 rounded-2xl border border-gray-100 p-6"
                data-aos="zoom-in-up"
                data-aos-delay={100 + idx * 100}
                data-aos-duration="800"
              >
                <h3 className="text-lg font-bold mb-2 font-oswald">
                  {card.title}
                </h3>
                <p className="text-grey-600 text-sm font-clash">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
          <Button
            variant="primary"
            data-aos="zoom-in-right"
            data-aos-delay="100"
            className="flex items-center justify-center gap-3 w-fit"
            onClick={() => router.push("/about")}
          >
            Discover More About Us <ArrowRight />
          </Button>
        </div>
      </Container>
    </section>
  );
}
