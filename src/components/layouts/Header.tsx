"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type SectionStyles = {
  id: string;
  bg: string;
  text: string;
  textSecondary: string;
};

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStyles, setActiveStyles] = useState<SectionStyles>({
    id: "hero",
    bg: "bg-transparent",
    text: "text-gray-900",
    textSecondary: "text-grey-600",
  });

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const NAVBAR_HEIGHT = 80;
    const MIN_VIEWPORT_HEIGHT = window.innerHeight * 0.95;

    const checkSectionVisibility = () => {
      const sections = document.querySelectorAll(
        "section[data-bg]"
      ) as NodeListOf<HTMLElement>;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();

        const hasReachedNavbar = rect.top <= NAVBAR_HEIGHT;
        const visibleHeight =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const isAtLeast95vh = visibleHeight >= MIN_VIEWPORT_HEIGHT;
        const shouldBeActive = hasReachedNavbar || isAtLeast95vh;

        if (shouldBeActive && rect.bottom > NAVBAR_HEIGHT) {
          const bg = section.dataset.bg || "bg-transparent";
          const text = section.dataset.text || "text-gray-900";
          const secondary = section.dataset.secondary || "text-grey-600";

          setActiveStyles({
            id: section.id,
            bg,
            text,
            textSecondary: secondary,
          });
          break;
        }
      }
    };

    checkSectionVisibility();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkSectionVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      checkSectionVisibility();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isDarkSection =
    activeStyles.bg.includes("primary-300") ||
    activeStyles.bg.includes("primary-600") ||
    activeStyles.bg.includes("grey-custom") ||
    activeStyles.bg.includes("primary-custom") ||
    activeStyles.bg.includes("gray-900") ||
    activeStyles.bg.includes("grey-950") ||
    activeStyles.bg.includes("black") ||
    activeStyles.bg.includes("transparent");

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-500",
        activeStyles.bg
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-6 lg:py-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src={isDarkSection ? SITE_CONFIG.logo : SITE_CONFIG.logoDark}
              width={500}
              height={500}
              className="h-10 w-44 object-contain"
              alt={SITE_CONFIG.name}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden  lg:flex items-center space-x-5">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "transition-all duration-300 hover:scale-110 lg:text-base font-clash",
                    isDarkSection
                      ? isActive
                        ? "text-white scale-110 font-bold"
                        : `${
                            activeStyles.textSecondary ?? "text-primary-500"
                          } font-medium hover:text-white`
                      : isActive
                      ? "text-gray-900 scale-110 font-bold"
                      : "text-gray-700 font-medium hover:text-gray-950"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            {/* <Link
              href={SITE_CONFIG.corporatetrainingUrl}
              className={cn(
                "transition-all duration-300 hover:scale-110 font-medium lg:text-base font-clash rounded-full px-4 py-2 ml-auto",
                isDarkSection
                  ? "bg-transparent text-white bg-gradient-to-b from-primary-500/80 to-primary-600"
                  : "bg-white text-gray-900 hover:bg-gray-950 hover:text-white border-gray-400 hover:border-white"
              )}
            >
              Book Free Consultation
            </Link> */}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("lg:hidden p-2", activeStyles.text)}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 overflow-hidden"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            {/* Close Button (Top-Right) */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-900"
              aria-label="Close menu"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <X size={28} />
            </button>

            {/* Navigation Links */}
            <nav className="flex font-clash gap-[3rem] flex-col items-center space-y-8 -mt-[2rem]">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <div
                    key={item.name}
                    data-aos="fade-right"
                    data-aos-delay={index * 150}
                    className="overflow-hidden"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "block text-3xl font-semibold tracking-wide text-center transition-all duration-300",
                        isActive
                          ? "text-black scale-105"
                          : "text-gray-800 hover:text-gray-900"
                      )}
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* CTA Button */}
            {/* <div
              data-aos="fade-up"
              data-aos-delay={navigation.length * 150 + 200}
              className="mt-12"
            >
              <Link
                href={SITE_CONFIG.corporatetrainingUrl}
                onClick={() => setIsMenuOpen(false)}
                className="inline-block text-lg font-clash font-semibold bg-black text-white rounded-full px-8 py-3 transition-transform duration-300 hover:scale-105"
              >
                Book Free Consultation
              </Link>
            </div> */}
          </div>
        )}
      </Container>
    </header>
  );
}
