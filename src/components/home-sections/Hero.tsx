"use client";

import Image from "next/image";
// import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const goToPage = () => {
    router.push("/contact");
  };

  return (
    <section
      id="hero"
      data-bg="bg-transparent"
      data-text="text-white"
      data-secondary="text-white"
      className="relative h-screen w-full overflow-hidden flex justify-center items-center"
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
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <Container
        data-aos="fade-up"
        data-aos-duration="300"
        className="relative z-20 flex items-center justify-center flex-col h-full gap-8 lg:py-16 py-14 text-white"
      >
        <h2
          className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[114.99999999999999%] mb-6 lg:mb-0 font-oswald tracking-tighter text-center"
          data-aos="fade-up"
          data-aos-delay="40"
        >
          Grow Smarter, Not Harder with PUEPR Beyond Borders
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="50"
          className="text-base md:text-lg text-center text-white font-medium md:max-w-3/5 font-clash"
        >
          Empowering businesses worldwide with agile solutions in project
          management, web development, automation, lead generation, admin
          support, and business registration — helping you scale with
          confidence.
        </p>
        <div
          className="flex items-center gap-4"
          data-aos="fade-up"
          data-aos-delay="70"
        >
          <Button
            onClick={goToPage}
            variant="primary"
            size="md"
            className="px-6 py-2.5 font-medium"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Book Free Consultation
          </Button>
          <Button
            onClick={goToPage}
            variant="secondary"
            size="md"
            className="px-6 py-2.5 font-medium"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Explore Our Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
