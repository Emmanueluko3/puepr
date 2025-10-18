"use client";

import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { Facebook, X as TwitterX, Linkedin, Instagram } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerSections = [
    {
      title: "COMPANY",
      links: [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
      ],
    },
    {
      title: "HELP AND SUPPORT",
      links: [
        { name: "Contact us", href: "/contact" },
        // { name: "Privacy Policy", href: "/privacy-policy" },
        // { name: "Terms & Conditions", href: "/terms-&-conditions" },
      ],
    },
  ];

  return (
    <section
      id="footer"
      data-bg="bg-grey-950"
      data-text="text-white"
      data-secondary="text-white"
      className="bg-grey-950 text-white pb-10 relative z-0"
    >
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Left Grid Item (Main Info) */}
            <div
              className="lg:col-span-8 gap-6 flex flex-col"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src={SITE_CONFIG.logoLight}
                    width={500}
                    height={500}
                    className="h-10 w-40 md:w-fit"
                    alt={SITE_CONFIG.name}
                  />
                </Link>
              </div>
              <p className="text-grey-300 font-clash text-base">
                BELGRADE, GTC FORTYONE <br />
                Milutina Milankovica Blvd 9ž <br />
                Beograd <br />
                Beograd-Beograd <br />
                11070 <br />
                Serbia
              </p>
              <div className="flex space-y-4 lg:space-x-4 flex-col lg:flex-row">
                {/* <div className="flex flex-col">
                  <h3 className="text-base font-normal text-grey-300 font-clash mb-2">
                    Phone number
                  </h3>
                  <a
                    href="tel:+381668735615"
                    className="text-white hover:text-gray-200 text-base transition-colors font-clash"
                  >
                    +381 66 8735615
                  </a>
                </div> */}
                <div className="flex flex-col">
                  <h3 className="text-base font-normal text-gray-300 font-clash mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@puepr.com"
                    className="text-white hover:text-gray-200 text-base transition-colors font-clash"
                  >
                    info@puepr.com
                  </a>
                </div>
              </div>
              <div className="flex space-x-6 lg:flex-row">
                <Link href="https://www.facebook.com/share/1BBXno86GW/?mibextid=wwXIfr">
                  <Facebook
                    width={20}
                    height={20}
                    className="text-gray-400 duration-300 ease-in-out transition-all hover:text-white lg:hover:scale-110"
                    strokeWidth={1.5}
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/puepr/">
                  <Linkedin
                    width={20}
                    height={20}
                    className="text-gray-400 duration-300 ease-in-out transition-all hover:text-white lg:hover:scale-110"
                    strokeWidth={1.5}
                  />
                </Link>
                <Link href="https://x.com/pueprconsulting?s=21">
                  <TwitterX
                    width={20}
                    height={20}
                    className="text-gray-400 duration-300 ease-in-out transition-all hover:text-white lg:hover:scale-110"
                    strokeWidth={1.5}
                  />
                </Link>
                <Link href="https://www.instagram.com/pueprconsulting?igsh=MXJxcmg5MGh1bnhrcg==">
                  <Instagram
                    width={20}
                    height={20}
                    className="text-gray-400 duration-300 ease-in-out transition-all hover:text-white lg:hover:scale-110"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>

            {/* Footer Grid Items */}
            {footerSections.map((section, index) => (
              <div
                key={section.title}
                className="lg:ms-auto lg:col-span-2"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                {/* <h3 className="font-semibold mb-4 font-clash text-sm">
                    {section.title}
                  </h3> */}
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 text-base hover:text-white transition-colors font-clash"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex justify-center items-center py-8 border-t border-grey-900 w-full text-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="text-grey-300 text-base text-center font-clash">
            © 2025 PUEPR. All rights reserved.
          </p>
        </div>
      </Container>
    </section>
  );
}
