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
  MessageCircle,
} from "lucide-react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home-sections/CTA";
import { Container } from "@/components/ui/Container";

const contactInfo = [
  {
    icon: MapPin,
    title: "PUEPR Head Quarters",
    info: `Milutina Milankovica Blvd 9ž
Beograd 11070, Serbia`,
    delay: 400,
  },
  // { icon: Phone, title: "Phone", info: "+381 66 8735615", delay: 500 },
  { icon: Mail, title: "Email", info: "info@puepr.com", delay: 600 },
  { icon: Clock, title: "Working Hours", info: "9:00 - 17:00", delay: 700 },
];

const socials = [
  {
    href: "https://www.facebook.com/share/1BBXno86GW/?mibextid=wwXIfr",
    icon: Facebook,
  },
  { href: "https://x.com/pueprconsulting?s=21", icon: Twitter },
  { href: "https://www.linkedin.com/company/puepr/", icon: Linkedin },
  {
    href: "https://www.instagram.com/pueprconsulting?igsh=MXJxcmg5MGh1bnhrcg==",
    icon: Instagram,
  },
  {
    href: "https://connect.viber.com/business/57c286bc-abfa-11f0-ab4e-ba164ec54561",
    icon: MessageCircle,
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
    <div className="bg-white">
      {/* Hero Section */}
      <section
        id="contactHero"
        data-bg="bg-white"
        data-text="text-grey-950"
        data-secondary="text-grey-950"
        className="px-4 py-16 font-clash md:pt-[8rem]"
      >
        <div className="container mx-auto p-8 border-[#F9FAFB] border-[3px] border-solid shadow-md max-w-7xl text-center">
          <h1
            className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Let&apos;s connect and grow your business together
          </h1>
          <p
            className="mx-auto mb-12 max-w-3xl text-base md:text-lg text-gray-600 leading-relaxed"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Do you have questions or ready to get started ? Fill out the contact
            form below and a member of our team will get back to you and provide
            tailored solutions for your business.
          </p>

          {/* Social Icons */}
          <div
            className="mb-16 flex justify-center gap-4"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {socials.map(({ href, icon: Icon }, i) => (
              <a
                key={i}
                href={href}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#000AC3] text-white transition-transform hover:scale-110 hover:bg-blue-700"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}

      <section
        id="contactCard"
        data-bg="bg-white"
        data-text="text-grey-950"
        data-secondary="text-grey-950"
        className="bg-white text-grey-950 pb-10 relative z-0"
      >
        <Container className="flex justify-center flex-col md:flex-row gap-6 w-full">
          {contactInfo.map(({ icon: Icon, title, info, delay }, i) => (
            <div
              key={i}
              className="w-full md:w-1/2 flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-gray-50 p-4 font-clash text-center sm:text-left"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={delay}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#000AC3] mx-auto sm:mx-0">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-black">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  {info}
                </p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Form Section */}
      <section
        id="contactForm"
        data-bg="bg-white"
        data-text="text-grey-950"
        data-secondary="text-grey-950"
        className="py-16 md:py-24"
      >
        <Container className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/contact.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>

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
              <Form className="space-y-6 font-clash">
                {[
                  [
                    {
                      label: "First Name",
                      name: "firstName",
                      placeholder: "Enter First Name",
                    },
                    {
                      label: "Last Name",
                      name: "lastName",
                      placeholder: "Enter Last Name",
                    },
                  ],
                  [
                    {
                      label: "Email Address",
                      name: "email",
                      type: "email",
                      placeholder: "Enter Email Address",
                    },
                    {
                      label: "Phone Number",
                      name: "phone",
                      type: "tel",
                      placeholder: "Enter Phone Number",
                    },
                  ],
                ].map((pair, i) => (
                  <div key={i} className="grid gap-6 md:grid-cols-2">
                    {pair.map((field) => (
                      <Input key={field.name} {...field} />
                    ))}
                  </div>
                ))}

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
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm mt-3 font-clash text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full px-8 py-4 text-lg font-semibold font-clash text-white transition-all hover:bg-blue-700 hover:shadow-lg"
                >
                  Send Your Message
                </Button>
              </Form>
            </Formik>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
