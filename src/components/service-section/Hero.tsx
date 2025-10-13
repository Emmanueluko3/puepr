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
      className="relative md:h-screen w-full overflow-hidden flex justify-center items-center"
    >
      {/* Background Image */}
      <Image
        src="/images/servicebg.jpg"
        width={500}
        height={500}
        alt=""
        className="absolute top-0 left-0 w-full h-full  object-cover"
      />

      {/* Overlay */}
      <div className="absolute hidden lg:block inset-0 bg-black/20 z-10" />

      {/* Content */}
      <Container
        data-aos="fade-up"
        data-aos-duration="300"
        className="relative z-20  pt-6 flex justify-center flex-col h-full gap-8 lg:py-16 py-14 text-white"
      >
        <h2
          className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[114.99999999999999%] mb-6 lg:mb-0 font-oswald tracking-tighter text-start"
          data-aos="fade-up"
          data-aos-delay="40"
        >
          Solutions that drive growth, efficiency, and success.
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="50"
          className="text-base md:text-lg text-start text-white font-medium max-w-3/2 md:max-w-3/5 font-clash"
        >
          Discover our full range of core and specialized services, crafted to
          help businesses streamline operations, unlock new opportunities, and
          achieve sustainable growth—whether you’re expanding locally in Serbia
          and Montenegro or scaling globally.
        </p>
        <div
          className="flex items-center gap-4"
          data-aos="fade-up"
          data-aos-delay="70"
        ></div>
      </Container>
    </section>
  );
}
