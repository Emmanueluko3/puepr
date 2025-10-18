"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { useRouter } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      id="hero"
      data-bg="bg-transparent"
      data-text="text-white"
      data-secondary="text-white"
      className="relative min-h-screen w-full overflow-hidden flex justify-center items-center"
    >
      {/* Background Image */}
      <Image
        src="/images/building.jpg"
        width={500}
        height={500}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/images/landingPage/AdobeStock_1263557849.mov"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <Container
        data-aos="fade-up"
        data-aos-duration="300"
        className="relative z-20 flex flex-col items-center justify-center h-full gap-6 px-4 sm:px-6 md:px-10 text-white text-center"
      >
        <h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-4 font-oswald tracking-tighter"
          data-aos="fade-up"
          data-aos-delay="40"
        >
          Grow smarter, Not harder with PUEPR beyond borders.
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="50"
          className="text-sm sm:text-base md:text-lg text-white font-medium max-w-[90%] sm:max-w-2xl md:max-w-3xl font-clash"
        >
          Success starts with the right path. We design strategies guided by
          analysis and personal insight. With PUEPR, your business works smarter
          and grows globally.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4"
          data-aos="fade-up"
          data-aos-delay="70"
        >
          <Button
            onClick={() => router.push(SITE_CONFIG.calendlyUrl)}
            variant="primary"
            size="md"
            className="w-full sm:w-auto px-6 py-2.5 font-medium"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Book your free consultation
          </Button>
          <Button
            onClick={() => router.push("/contact")}
            variant="secondary"
            size="md"
            className="w-full sm:w-auto px-6 py-2.5 font-medium"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Explore our services
          </Button>
        </div>
      </Container>
    </section>
  );
}
