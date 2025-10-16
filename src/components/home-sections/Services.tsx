"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const services = [
  {
    title: "Globally aligned expertise",
    description:
      "We deliver consulting solutions in digital transformation, automation, and business operations that align with global growth trends and evolving industry demands.",
  },
  {
    title: "Integrated solutions, One partner",
    description:
      "You get full-service support from our highly impactful and specialized team rather than hiring multiple vendors. One partnership, complete coordination, maximum efficiency.",
  },
  {
    title: "Built for global business",
    description:
      "Our cloud-based delivery model, GDPR compliance, and modern collaboration tools position us to serve international clients with the same excellence we deliver locally.",
  },
  {
    title: "Collaborative partnership / Direct delivery",
    description:
      "We work hand-in-hand with your team, moving beyond strategy to seamless execution, delivering tangible outcomes and lasting business growth.",
  },
  {
    title: "Pricing benchmarks",
    description:
      "Our pricing stays competitive with Eastern European standards while delivering clear ROI on every project.",
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
      <Container className="flex flex-col md:flex-row items-end md:items-start gap-6">
        <div
          className="flex flex-col w-full pr-10 lg:gap-8 mb-14 lg:mb-0"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <span className="rounded-full border border-gray-200 bg-gray-100 px-4 py-2 w-fit">
            <span className="bg-gradient-to-b from-[#FFA100] to-[#FF000D] bg-clip-text text-transparent text-xs sm:text-sm">
              Why businesses around the world choose PUEPR?
            </span>
          </span>

          <h2 className="w-full text-3xl text-gray-950 font-bold leading-[115%] mb-6 lg:mb-0 font-oswald tracking-tighter">
            Smarter strategies, Lasting growth
          </h2>

          <Image
            src="/images/business.jpg"
            alt="Business growth"
            width={500}
            height={300}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        <div className="w-full flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ul>
              {services.map((card, idx) => (
                <li
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
                    {card.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant="primary"
            data-aos="zoom-in-right"
            data-aos-delay="100"
            className="flex items-center justify-center gap-3 w-fit text-sm sm:text-base"
            onClick={() => router.push("/about")}
          >
            Get Started <ArrowRight />
          </Button>
        </div>
      </Container>
    </section>
  );
}
