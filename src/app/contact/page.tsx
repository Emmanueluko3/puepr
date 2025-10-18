"use client";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home-sections/CTA";
const contactInfo = [
  {
    icon: MapPin,
    title: "PUEPR Head Quarters",
    info: "12 Milentija Popovica Street, Belgrade, Serbia",
    delay: 400,
  },
  {
    icon: Phone,
    title: "Phone",
    info: "+381 XX XXX XXXX",
    delay: 500,
  },
  {
    icon: Mail,
    title: "Email",
    info: "info@puepr.com",
    delay: 600,
  },
  {
    icon: Clock,
    title: "Working Hours",
    info: "10am - 6pm",
    delay: 700,
  },
];

const serviceOptions = [
  { value: "consulting", title: "Business Consulting" },
  { value: "strategy", title: "Strategy Development" },
  { value: "management", title: "Project Management" },
  { value: "automation", title: "Automation & Tech" },
];

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  services: Yup.string().required("Please select a service"),
  message: Yup.string().required("Required"),
});
export default function ContactPage() {
  return (
    <>
      <div className=" bg-white">
        {/* Hero Section */}
        <section className="px-4 py-16 font-clash md:pt-[8rem] ">
          <div className="container mx-auto p-8   border-[#F9FAFB] border-solid border-[3px] shadow-md max-w-7xl">
            {/* Logo */}

            {/* Main Content */}
            <div className="text-center">
              <h1
                className="mb-6   text-4xl font-bold leading-tight text-black md:text-5xl lg:text-6xl"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                Let&apos;s Connect and Grow Your Business Together
              </h1>

              <p
                className="mx-auto mb-12 max-w-3xl  text-base leading-relaxed text-gray-600 md:text-lg"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Have questions or ready to get started? Our team is here to
                provide guidance and tailor solutions for your business in
                Serbia, Montenegro, and beyond.
              </p>

              {/* Social Media Icons */}
              <div
                className="mb-16 flex justify-center gap-4"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <a
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-800 text-white transition-transform hover:scale-110 hover:bg-blue-700"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#000AC3] text-white transition-transform hover:scale-110 hover:bg-blue-700"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#000AC3] text-white transition-transform hover:scale-110 hover:bg-blue-700"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#000AC3] text-white transition-transform hover:scale-110 hover:bg-blue-700"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-4 pb-16 md:pb-24">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col font-clash sm:flex-row lg:flex-roww items-center lg:items-atart gap-4 rounded-2xl bg-gray-50 p-4 text-start sm:text-left lg:text-center "
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay={item.delay}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#000AC3] mx-auto sm:mx-0 lg:mx-auto">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 flex-col w-full  text-center md:text-left  items-center md:items-start">
                      <h3 className="mb-1 text-lg font-semibold text-black">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.info}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left Image */}
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-3xl md:h-[600px]">
                  <Image
                    src="/images/contact.jpg"
                    alt="Team collaboration - hands together"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Form */}
              <div className="flex flex-col justify-center">
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    services: "",
                    message: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log(values);
                    alert("Message sent successfully!");
                  }}
                >
                  {() => (
                    <Form className="space-y-6 font-clash">
                      <div className="grid gap-6 md:grid-cols-2">
                        <Input
                          label="First Name"
                          name="firstName"
                          placeholder="Enter First Name"
                        />
                        <Input
                          label="Last Name"
                          name="lastName"
                          placeholder="Enter Last Name"
                        />
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <Input
                          label="Email Address"
                          name="email"
                          placeholder="Enter Email Address"
                          type="email"
                        />
                        <Input
                          label="Phone Number"
                          name="phone"
                          className="bg-[#F9FAFB]"
                          placeholder="Enter Phone Number"
                          type="tel"
                        />
                      </div>

                      <Select
                        label="Services"
                        name="services"
                        placeholder="Select a service"
                        options={serviceOptions}
                      />

                      <div>
                        <label
                          htmlFor="message"
                          className="text-lg font-medium font-clash"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          placeholder="Write your message here"
                          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-clash text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 mt-3"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full rounded-full px-8 py-4 font-clash text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
                      >
                        Send Your Message
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </div>
    </>
  );
}
