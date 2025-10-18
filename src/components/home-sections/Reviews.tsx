"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "iconoir-react";
import { Container } from "../ui/Container";

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  interface Reviews {
    name: string;
    image: string;
    occupation: string;
    comment: string;
  }
  const reviews: Reviews[] = [
    {
      name: "Gloria A.",
      image: "/images/Gloria.JPG",
      occupation: "Product/Digital marketer",
      comment:
        "I contracted PUEPR  to help with both personal assistance and administrative tasks for my brand. They exhibited a high level of professionalism and competence. My assigned assistant particularly helped to organise and manage my schedule, increasing my productivity very much and helped in ensuring I managed my time well. The entire team  is great with research, meeting note taking and reports, as well creative presentation slides. I highly recommend PUEPR!",
    },
    {
      name: "Dominique",
      image: "/images/Dominique.JPG",
      occupation: "Founder - Dominique Ceara",
      comment:
        "I just want to say how much I appreciate this amazing team. They are not only reliable and efficient - they think with me. That kind of presence and initiative is rare. I can feel that PUEPR genuinely cares about the work and wants to contribute to the bigger picture. Their support has been such a gift, and I deeply value the way the founder and her team brings calm, clarity, and dedication into every task. She's doing a beautiful job - and it doesn't go unnoticed",
    },
    {
      name: "Milan Petrović",
      image: "/images/Milan.JPG",
      occupation: "COO - Nexus Solutions",
      comment:
        "PUEPR is the perfect partner because they get the big picture. They combined their international experience with a deep understanding of our local market. It felt like having a global expert sitting right here with us. Their strategy had an immediate, positive impact on our business.",
    },
  ];

  const [totalSlides, setTotalSlides] = useState<number>(1);

  const updateTotalSlides = (swiper: SwiperType) => {
    const slidesPerGroup = swiper.params.slidesPerGroup || 1;
    const total = Math.ceil(reviews.length / slidesPerGroup);
    setTotalSlides(total);
  };

  const nextSlide = (): void => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const prevSlide = (): void => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToSlide = (slideIndex: number): void => {
    if (swiperRef.current) {
      const groupSize = swiperRef.current.params.slidesPerGroup || 1;
      swiperRef.current.slideTo(slideIndex * groupSize);
    }
  };

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveCard(null);
    }
  };

  return (
    <section
      className="py-16 lg:pt-16 bg-white text-gray-950"
      data-aos="fade-up"
      data-aos-duration="1000"
      id="reviews"
      data-bg="bg-white"
      data-text="text-gray-950"
      data-secondary="text-gray-950"
    >
      <Container>
        {/* Heading Section */}
        <div
          className="flex items-center justify-center flex-col w-full md:w-10/12 lg:w-full gap-8 mb-14 md:mb-10 lg:mb-16 mx-auto"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <div className="flex justify-center ">
            <div className="rounded-full border border-gray-200 bg-gray-100 px-4 py-2 w-fit">
              <span className="bg-gradient-to-b from-[#FFA100] to-[#FF000D] bg-clip-text text-transparent text-sm w-fit">
                TESTIMONIAL
              </span>
            </div>
          </div>
          <h2 className="w-full text-xl md:text-3xl md:text-[80px] text-black font-bold  font-oswald tracking-tighter text-center">
            PUEPR is trusted by businesses that Grow smarter
          </h2>
          <p className="font-clash text-base md:text-lg text-black lg:w-5/12 text-center">
            See how businesses worldwide have achieved measurable growth and
            operational efficiency with PUEPR’s tailored solutions.
          </p>
        </div>

        {/* Blog Cards with Swiper */}
        <div
          className="relative mb-12"
          data-aos="fade-up"
          onClick={handleClickOutside}
        >
          <Swiper
            modules={[Navigation, Pagination, Mousewheel]}
            spaceBetween={24}
            slidesPerView={3}
            slidesPerGroup={3}
            mousewheel={{
              enabled: true,
              forceToAxis: true,
            }}
            speed={600}
            loop={false}
            grabCursor={true}
            watchSlidesProgress={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateTotalSlides(swiper);
            }}
            onSlideChange={(swiper) => {
              const slidesPerGroup = swiper.params.slidesPerGroup || 1;
              const currentGroup = Math.floor(
                swiper.activeIndex / slidesPerGroup
              );
              setCurrentSlide(currentGroup);
              // Reset active card when sliding
              setActiveCard(null);
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
              },
            }}
            className="!pb-4 !px-6 !md:px-20 overflow-hidden"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <article
                  className="group rounded-2xl overflow-hidden h-full relative cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  onClick={() => handleCardClick(index)}
                >
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    className="h-[480px] object-cover"
                    alt={item.name}
                  />

                  {/* Hover/Active Overlay - works on both desktop hover and mobile click */}
                  <div
                    className={`absolute inset-0 bg-black/40 backdrop-blur-2xl transition-opacity duration-300 z-20 text-white px-6 pt-10 md:pt-16 pb-6 h-full overflow-hidden ${
                      activeCard === index
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div className="flex flex-col justify-between h-full overflow-y-auto">
                      <p className="text-base font-clash overflow-y-auto max-h-[80%] pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                        {item.comment}
                      </p>
                      <div className="flex items-center gap-2 mt-4 flex-shrink-0">
                        <Image
                          src={item.image}
                          width={500}
                          height={500}
                          className="h-11 w-11 rounded-lg object-cover flex-shrink-0"
                          alt={item.name}
                        />
                        <div className="flex flex-col justify-between h-full min-w-0">
                          <h3 className="text-white text-lg font-clash font-medium truncate">
                            {item.name}
                          </h3>
                          <p className="text-white text-base font-clash font-normal truncate">
                            {item.occupation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Default bottom content - covered by overlay */}
                  <div
                    className={`bg-white absolute bottom-4 left-4 py-2 px-4 flex flex-col gap-0.5 rounded-lg drop-shadow-md z-10 transition-opacity duration-300 ${
                      activeCard === index
                        ? "opacity-0"
                        : "group-hover:opacity-0"
                    }`}
                  >
                    <h3 className="text-gray-950 text-lg font-clash font-medium">
                      {item.name}
                    </h3>
                    <p className="text-gray-950 text-base font-clash font-normal">
                      {item.occupation}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Dots & Arrows */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-[width,background-color] duration-300 ease-in-out ${
                  index === currentSlide
                    ? "w-8 bg-[#71717A]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-50 transition-colors duration-200"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-4 h-4 text-grey-600" strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-50 transition-colors duration-200"
              aria-label="Next slide"
            >
              <ArrowRight className="w-4 h-4 text-grey-600" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
