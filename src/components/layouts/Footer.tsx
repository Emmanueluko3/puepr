"use client";

import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Facebook,
  X as TwitterX,
  Linkedin,
  Mail,
  Youtube,
  Tiktok,
  Instagram,
  Phone,
  MapPin,
} from "iconoir-react";

import Image from "next/image";
import Link from "next/link";
import Input from "../ui/Input";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic
    console.log("Subscribe:", email);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="bg-[#1a1a1a] text-white pb-10 pt-20 relative z-0"
    >
      <Container>
        {/* Newsletter Section */}
        <div className="mb-20">
          <div className="flex items-center mb-6">
            <Link href="/">
              <Image
                src={SITE_CONFIG.logoLight}
                width={500}
                height={500}
                className="h-10 w-44"
                alt={SITE_CONFIG.name}
              />
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                Stay Ahead with Smarter Business Insights
              </h2>
              <p className="text-gray-400 text-base">
                Subscribe to PEUEPR&apos;s newsletter and get the latest tips,
                strategies, and updates to grow your business
                efficiently—delivered straight to your inbox.
              </p>
            </div>

            {/* Newsletter Input */}
            <div className="relative lg:min-w-[500px]">
              <Image
                src={"/logos/sms.png"}
                alt="sms"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
                width={20}
                height={20}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-[#2a2a2a] border border-gray-700 rounded-full py-3 px-12 pr-40 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <Button
                onClick={handleSubscribe}
                className="absolute right-1 top-1/2 transform -translate-y-1/2  text-white px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/terms-&-conditions"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    Privacy Policies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-6 space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-[#2a2a2a] p-3 rounded-lg">
                  <Phone width={24} height={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+381668735615"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +381637160315
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-[#2a2a2a] p-3 rounded-lg">
                  <Mail width={24} height={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:info@puepr.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@puepr.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-[#2a2a2a] p-3 rounded-lg">
                  <MapPin width={24} height={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    BELGRADE, GTC FORTYONE
                  </h4>
                  <p className="text-gray-400">Milutina Milankovica Blvd 9ž</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-1">
                © {currentYear} PEUEPR. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-sm italic">
                Grow Smarter, Not Harder
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100086541873470"
                className="bg-[#2a2a2a] p-3 rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <Facebook width={20} height={20} className="text-white" />
              </Link>
              <Link
                href="https://x.com/EthicsPart2464?t=ApKgf1yAXNRrWyczSAYmVA&s=09"
                className="bg-[#2a2a2a] p-3 rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <TwitterX width={20} height={20} className="text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/ecp-llc/posts/?feedView=all"
                className="bg-[#2a2a2a] p-3 rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <Linkedin width={20} height={20} className="text-white" />
              </Link>
              <Link
                href="https://www.instagram.com/ethicsconsultingpartners?igsh=MWtyZXFqbXlhMnBuaw=="
                className="bg-[#2a2a2a] p-3 rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <Instagram width={20} height={20} className="text-white" />
              </Link>
            </div>
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
