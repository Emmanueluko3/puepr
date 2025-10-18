"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "iconoir-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import BlogCard from "../BlogCard";
import { blogPosts } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Blogs() {
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const [totalSlides, setTotalSlides] = useState<number>(1);

  const updateTotalSlides = (swiper: SwiperType) => {
    const slidesPerGroup = swiper.params.slidesPerGroup || 1;
    const total = Math.ceil(blogPosts.length / slidesPerGroup);
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

  return (
    <section
      id="blogs"
      data-bg="bg-white"
      data-text="text-gray-900"
      data-secondary="text-gray-900"
      className="py-16 lg:py-32 bg-white overflow-x-clip"
      data-aos="fade-up"
    >
      <Container className="transition-all duration-1000" data-aos="fade-up">
        <div
          className="flex lg:items-end flex-col lg:flex-row w-full lg:w-10/12 lg:gap-8 mb-14 lg:mb-16"
          data-aos="fade-up"
        >
          <h2
            className="w-full md:w-1/2 text-4xl md:text-[80px] text-gray-950 font-bold leading-[115%] mb-6 md:mb-0 font-oswald text-nowrap tracking-tighter"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            OUR LATEST
            <br />
            BLOGS
          </h2>

          <div className="w-full md:w-4/6 lg:w-1/2">
            <p
              className="font-clash text-base md:text-lg text-grey-600 mb-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Stay ahead with actionable intelligence from our consulting
              experts. Discover insights that drive competitive advantage and
              fuel sustainable growth.
            </p>
            <div data-aos="fade-left" data-aos-delay="300">
              <Button
                onClick={() => router.push("/blogs")}
                variant="outline-invert"
                className="!border-gray-200 text-grey-700 px-6 py-2.5"
              >
                View all Posts
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Blog Cards with Swiper */}
      <Container
        className="relative mb-12 !overflow-hidden md:!px-0 w-full px-0" // ✅ fix here
        data-aos="fade-up"
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
              slidesPerView: 2.7,
              slidesPerGroup: 2.7,
              spaceBetween: 24,
            },
          }}
          className="!pb-4 px-4 lg:!px-20 overflow-hidden w-full"
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={post.id}>
              <Link href={`/blogs/${post.id}`}>
                <BlogCard
                  image={post.image}
                  title={post.title}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  text={post.excerpt}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Navigation Dots & Arrows */}
      <Container className="transition-all duration-1000" data-aos="fade-up">
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
