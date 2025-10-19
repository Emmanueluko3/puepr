"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section
        id="heroo-section"
        data-bg="bg-gray-50"
        data-text="text-grey-950"
        data-secondary="text-grey-950"
        className="bg-gray-50 min-h-[80vh] py-20 px-6 sm:px-10 lg:px-24 text-center flex flex-col justify-center"
        data-aos="fade-up"
      >
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 uppercase font-oswald"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Privacy Policy
        </h1>
      </section>

      {/* Privacy Policy Content */}
      <section className="max-w-5xl mx-auto py-12 px-6 sm:px-10 lg:px-16 leading-relaxed text-gray-700 space-y-10">
        {/* 1. General Information */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            1. GENERAL INFORMATION
          </h2>
          <p className="font-clash">
            This Privacy Policy describes how{" "}
            <strong>PROMISE UDUAK EKANEM PR (PUEPR)</strong> (&quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;) collects, uses, and protects the
            personal data of users of our website{" "}
            <Link
              href="https://www.puepr.com"
              className="text-blue-600 underline"
            >
              www.puepr.com
            </Link>
            .
          </p>
        </div>

        {/* 2. Legal Basis */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            2. LEGAL BASIS
          </h2>
          <p className="font-clash mb-2">
            Processing of personal data is conducted in accordance with:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Serbian Law on Personal Data Protection</li>
            <li>EU General Data Protection Regulation (GDPR) 2016/679</li>
          </ul>
        </div>

        {/* 3. Data We Collect */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            3. DATA WE COLLECT
          </h2>
          <p className="font-clash mb-2">
            We collect the following personal data when you contact us through
            our contact form or directly:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>First name</li>
            <li>Last name</li>
            <li>Email address</li>
            <li>Phone number</li>
          </ul>
        </div>

        {/* 4. Purpose of Data Processing */}
        <div data-aos="fade-up" data-aos-delay="250">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            4. PURPOSE OF DATA PROCESSING
          </h2>
          <p className="font-clash mb-2">
            We use your personal data exclusively for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash mb-4">
            <li>Responding to your inquiries and providing services</li>
            <li>Communicating with you regarding our services</li>
            <li>Providing customer support</li>
            <li>Fulfilling legal obligations</li>
          </ul>
          <p className="font-clash">
            <strong>Legal basis for processing:</strong> Your consent and
            legitimate interest in providing the services you requested.
          </p>
        </div>

        {/* 5. Data Retention */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            5. DATA RETENTION
          </h2>
          <p className="font-clash mb-2">We retain your personal data:</p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              As long as is necessary to provide the services you requested
            </li>
            <li>Or until you withdraw your consent</li>
            <li>
              Maximum 6 months from last contact, unless law requires longer
              retention
            </li>
          </ul>
        </div>

        {/* 6. Data Sharing */}
        <div data-aos="fade-up" data-aos-delay="350">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            6. DATA SHARING
          </h2>
          <p className="font-clash mb-2">
            We <strong>DO NOT</strong> sell, rent, or share your personal data
            with third parties, except in the following cases:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>When necessary to provide the service you requested</li>
            <li>When required by law</li>
            <li>With your explicit consent</li>
          </ul>
        </div>

        {/* 7. Data Security */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            7. DATA SECURITY
          </h2>
          <p className="font-clash">
            We implement appropriate technical and organizational measures to
            protect your personal data from unauthorized access, loss, misuse,
            or disclosure.
          </p>
        </div>

        {/* 8. Your Rights */}
        <div data-aos="fade-up" data-aos-delay="450">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            8. YOUR RIGHTS
          </h2>
          <p className="font-clash mb-2">
            In accordance with the law, you have the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash mb-4">
            <li>
              <strong>Right of access</strong> - the right to know what data we
              hold about you
            </li>
            <li>
              <strong>Right to rectification</strong> - the right to correct
              inaccurate data
            </li>
            <li>
              <strong>Right to erasure</strong> - the right to request deletion
              of your data
            </li>
            <li>
              <strong>Right to restriction</strong> - the right to restrict
              processing of your data
            </li>
            <li>
              <strong>Right to data portability</strong> - the right to receive
              your data in a structured format
            </li>
            <li>
              <strong>Right to object</strong> - the right to object to data
              processing
            </li>
            <li>
              <strong>Right to withdraw consent</strong> - you may withdraw
              consent at any time
            </li>
          </ul>
          <p className="font-clash">
            To exercise your rights, contact us at:{" "}
            <a
              href="mailto:support@puepr.com"
              className="text-blue-600 underline"
            >
              support@puepr.com
            </a>
          </p>
        </div>

        {/* 9. Cookies */}
        <div data-aos="fade-up" data-aos-delay="500">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            9. COOKIES
          </h2>
          <p className="font-clash">
            Our website may use cookies to improve user experience. You can set
            your browser to refuse cookies.
          </p>
        </div>

        {/* 10. Links to Other Websites */}
        <div data-aos="fade-up" data-aos-delay="550">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            10. LINKS TO OTHER WEBSITES
          </h2>
          <p className="font-clash">
            Our website may contain links to other websites. We are not
            responsible for the privacy policies of other websites.
          </p>
        </div>

        {/* 11. Children */}
        <div data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            11. CHILDREN
          </h2>
          <p className="font-clash">
            Our services are not intended for persons under 18 years of age. We
            do not knowingly collect data from minors.
          </p>
        </div>

        {/* 12. Changes to Privacy Policy */}
        <div data-aos="fade-up" data-aos-delay="650">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            12. CHANGES TO PRIVACY POLICY
          </h2>
          <p className="font-clash">
            We reserve the right to update this Privacy Policy. Changes will be
            posted on this page with a new date.
          </p>
        </div>

        {/* 13. Complaints */}
        <div data-aos="fade-up" data-aos-delay="700">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            13. COMPLAINTS
          </h2>
          <p className="font-clash">
            If you are not satisfied with how we process your data, you have the
            right to file a complaint with the{" "}
            <strong>
              Commissioner for Information of Public Importance and Personal
              Data Protection of the Republic of Serbia
            </strong>
            .
          </p>
        </div>

        {/* 14. Contact */}
        <div
          className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10"
          data-aos="zoom-in"
          data-aos-delay="750"
        >
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3 text-center">
            14. CONTACT
          </h2>
          <p className="font-clash text-center">
            For all questions regarding this Privacy Policy, you can contact us
            at{" "}
            <a
              href="mailto:support@puepr.com"
              className="text-blue-600 underline"
            >
              support@puepr.com
            </a>
          </p>
        </div>

        {/* Consent Statement */}
        <div
          className="bg-blue-50 p-8 rounded-xl border border-blue-200 mt-10"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h3 className="text-xl font-semibold font-oswald text-gray-900 mb-3 text-center">
            CONSENT STATEMENT
          </h3>
          <p className="font-clash text-center mb-6">
            By using our website and submitting your data through the contact
            form, you consent to the processing of your personal data in
            accordance with this Privacy Policy.
          </p>
          <div className="text-center pt-4 border-t border-blue-300">
            <p className="font-semibold font-oswald text-gray-900 text-lg">
              PROMISE UDUAK EKANEM PR (PUEPR)
            </p>
            <p className="font-clash text-gray-600 mt-1">15th October, 2025</p>
          </div>
        </div>
      </section>
    </main>
  );
}
