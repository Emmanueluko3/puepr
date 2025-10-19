"use client";

import React from "react";
import Link from "next/link";

export default function TermsPage() {
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
          Terms & Conditions
        </h1>
      </section>

      {/* Terms Content */}
      <section className="max-w-5xl mx-auto py-12 px-6 sm:px-10 lg:px-16 leading-relaxed text-gray-700 space-y-10">
        {/* 1. Introduction */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            1. INTRODUCTION
          </h2>
          <p className="font-clash">
            Welcome to <strong>PROMISE UDUAK EKANEM PR (PUEPR)</strong>. These
            Terms and Conditions ("Terms") govern your use of our website{" "}
            <Link
              href="https://www.puepr.com"
              className="text-blue-600 underline"
            >
              www.puepr.com
            </Link>{" "}
            and the services we provide.
          </p>
          <p className="font-clash mt-2">
            By accessing our website or using our services, you agree to be
            bound by these Terms. If you do not agree with any part of these
            Terms, you must not use our website or services.
          </p>
        </div>

        {/* 2. Definitions */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            2. DEFINITIONS
          </h2>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              <strong>"We", "Us", "Our"</strong> refers to PROMISE UDUAK EKANEM
              PR (PUEPR)
            </li>
            <li>
              <strong>"You", "Your", "Client"</strong> refers to the person or
              entity using our services
            </li>
            <li>
              <strong>"Services"</strong> refers to all services provided by
              PUEPR
            </li>
            <li>
              <strong>"Website"</strong> refers to www.puepr.com
            </li>
          </ul>
        </div>

        {/* 3. Services */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            3. SERVICES
          </h2>
          <p className="font-clash">
            PUEPR provides business solutions. The specific scope of services
            will be agreed upon between PUEPR and the Client prior to
            commencement of work.
          </p>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            3.1 Service Scope
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Services will be provided as described in individual service
              agreements or proposals
            </li>
            <li>
              We reserve the right to modify or discontinue services with
              reasonable notice
            </li>
            <li>Services are subject to availability</li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            3.2 Service Delivery
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Service delivery timelines will be agreed upon in writing</li>
            <li>We will make reasonable efforts to meet agreed deadlines</li>
            <li>
              Delays caused by circumstances beyond our control will not
              constitute a breach of these Terms
            </li>
          </ul>
        </div>

        {/* 4. Client Obligations */}
        <div data-aos="fade-up" data-aos-delay="250">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            4. CLIENT OBLIGATIONS
          </h2>
          <p className="font-clash mb-2">You agree to:</p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Provide accurate and complete information</li>
            <li>Respond to our requests for information promptly</li>
            <li>Cooperate fully in the delivery of services</li>
            <li>Pay all fees as agreed</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </div>

        {/* 5. Fees and Payment */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            5. FEES AND PAYMENT
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            5.1 Pricing
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Service fees will be communicated prior to engagement</li>
            <li>All prices are in Euro (EUR)</li>
            <li>
              Prices are subject to change if an additional service is required
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            5.2 Payment Terms
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Payment terms will be specified in individual service agreements
            </li>
            <li>
              Standard payment terms: 70% payment is required before
              commencement of the project
            </li>
            <li>
              Late payments may cause the pause of your project if agreed
              payment terms is monthly
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            5.3 Refunds
          </h3>
          <p className="font-clash">
            See the refund policy at{" "}
            <Link
              href="https://www.puepr.com/refundpolicy"
              className="text-blue-600 underline"
            >
              www.puepr.com/refundpolicy
            </Link>
          </p>
        </div>

        {/* 6. Intellectual Property */}
        <div data-aos="fade-up" data-aos-delay="350">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            6. INTELLECTUAL PROPERTY
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            6.1 Our Property
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              All content on our website, including text, graphics, logos, and
              software, is the property of PUEPR or its licensors
            </li>
            <li>
              You may not reproduce, distribute, or create derivative works
              without our written permission
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            6.2 Client Materials
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>You retain ownership of the materials you provide to us</li>
            <li>
              You grant us a license to use your materials solely for the
              purpose of providing services
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            6.3 Deliverables
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Ownership of deliverables will be specified in individual service
              agreements
            </li>
            <li>Generally, ownership transfers upon full payment of fees</li>
          </ul>
        </div>

        {/* 7. Confidentiality */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            7. CONFIDENTIALITY
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            7.1 Our Commitment
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>We will keep your confidential information secure</li>
            <li>
              We will not disclose your information to third parties without
              your consent, except as required by law
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            7.2 Your Commitment
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              You agree to keep confidential any proprietary information we
              share with you
            </li>
            <li>This obligation survives termination of our relationship</li>
          </ul>
        </div>

        {/* 8. Liability and Disclaimers */}
        <div data-aos="fade-up" data-aos-delay="450">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            8. LIABILITY AND DISCLAIMERS
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            8.1 Service Warranty
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>We will provide services with reasonable skill and care</li>
            <li>We do not guarantee specific results or outcomes</li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            8.2 Limitation of Liability
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Our total liability for any claim arising from services shall not
              exceed the fees paid for those services
            </li>
            <li>
              We are not liable for indirect, consequential, or punitive damages
            </li>
            <li>
              Nothing in these Terms excludes liability that cannot be excluded
              by law
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            8.3 Disclaimer
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Services are provided "as is" without warranties of any kind
            </li>
            <li>
              We do not warrant that services will be uninterrupted or
              error-free
            </li>
          </ul>
        </div>

        {/* 9. Termination */}
        <div data-aos="fade-up" data-aos-delay="500">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            9. TERMINATION
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            9.1 Termination by Either Party
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Either party may terminate an engagement with written notice as
              specified in the service agreement
            </li>
            <li>
              You remain responsible for fees for services rendered prior to
              termination
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            9.2 Termination for Breach
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>We may terminate immediately if you breach these Terms</li>
            <li>
              Upon termination for breach, all outstanding fees become
              immediately due
            </li>
          </ul>
        </div>

        {/* 10. Data Protection and Privacy */}
        <div data-aos="fade-up" data-aos-delay="550">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            10. DATA PROTECTION AND PRIVACY
          </h2>
          <p className="font-clash">
            Your personal data is processed in accordance with our Privacy
            Policy, which is incorporated into these Terms by reference. Please
            review our Privacy Policy at{" "}
            <Link
              href="https://www.puepr.com/privacypolicy"
              className="text-blue-600 underline"
            >
              www.puepr.com/privacypolicy
            </Link>
          </p>
        </div>

        {/* 11. Website Use */}
        <div data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            11. WEBSITE USE
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            11.1 Acceptable Use
          </h3>
          <p className="font-clash mb-2">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Use the website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Transmit viruses or malicious code</li>
            <li>Interfere with other users' use of the website</li>
            <li>Scrape or collect data from the website without permission</li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            11.2 Links to Third-Party Websites
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Our website may contain links to third-party websites</li>
            <li>
              We are not responsible for the content or practices of third-party
              websites
            </li>
          </ul>
        </div>

        {/* 12. Indemnification */}
        <div data-aos="fade-up" data-aos-delay="650">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            12. INDEMNIFICATION
          </h2>
          <p className="font-clash mb-2">
            You agree to indemnify and hold harmless PUEPR from any claims,
            damages, losses, or expenses arising from:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Your breach of these Terms</li>
            <li>Your violation of any law or rights of third parties</li>
            <li>Your use of our services</li>
          </ul>
        </div>

        {/* 13. Force Majeure */}
        <div data-aos="fade-up" data-aos-delay="700">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            13. FORCE MAJEURE
          </h2>
          <p className="font-clash mb-2">
            We are not liable for failure to perform our obligations due to
            circumstances beyond our reasonable control, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Natural disasters</li>
            <li>War or civil unrest</li>
            <li>Government actions</li>
            <li>Internet or telecommunications failures</li>
            <li>Pandemics or epidemics</li>
          </ul>
        </div>

        {/* 14. Dispute Resolution */}
        <div data-aos="fade-up" data-aos-delay="750">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            14. DISPUTE RESOLUTION
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            14.1 Governing Law
          </h3>
          <p className="font-clash">
            These Terms are governed by the laws of the Republic of Serbia.
          </p>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            14.2 Jurisdiction
          </h3>
          <p className="font-clash">
            Any disputes arising from these Terms or our services shall be
            subject to the exclusive jurisdiction of the courts of Belgrade,
            Serbia.
          </p>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            14.3 Negotiation
          </h3>
          <p className="font-clash">
            Before initiating legal proceedings, parties agree to attempt to
            resolve disputes through good-faith negotiation.
          </p>
        </div>

        {/* 15. General Provisions */}
        <div data-aos="fade-up" data-aos-delay="800">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            15. GENERAL PROVISIONS
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            15.1 Entire Agreement
          </h3>
          <p className="font-clash">
            These Terms, together with any service agreements and our Privacy
            Policy, constitute the entire agreement between you and PUEPR.
          </p>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            15.2 Amendments
          </h3>
          <p className="font-clash">
            We reserve the right to modify these Terms at any time. Changes will
            be posted on this page with a new date. Continued use of our
            services after changes constitutes acceptance.
          </p>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            15.3 Severability
          </h3>
          <p className="font-clash">
            If any provision of these Terms is found to be unenforceable, the
            remaining provisions remain in full effect.
          </p>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            15.4 Waiver
          </h3>
          <p className="font-clash">
            Our failure to enforce any right or provision does not constitute a
            waiver of that right or provision.
          </p>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            15.5 Assignment
          </h3>
          <p className="font-clash">
            You may not assign or transfer these Terms without our written
            consent. We may assign these Terms without restriction.
          </p>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            15.6 Language
          </h3>
          <p className="font-clash">
            In case of any conflict between English and other language versions
            of these Terms, the English version shall prevail.
          </p>
        </div>

        {/* 16. Contact Information */}
        <div
          className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10"
          data-aos="zoom-in"
          data-aos-delay="850"
        >
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3 text-center">
            16. CONTACT INFORMATION
          </h2>
          <p className="font-clash text-center">
            For questions about these Terms and Conditions, please contact us at{" "}
            <a
              href="mailto:support@puepr.com"
              className="text-blue-600 underline"
            >
              support@puepr.com
            </a>
          </p>
        </div>

        {/* Acceptance */}
        <div
          className="bg-blue-50 p-8 rounded-xl border border-blue-200 mt-10"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <h3 className="text-xl font-semibold font-oswald text-gray-900 mb-3 text-center">
            ACCEPTANCE
          </h3>
          <p className="font-clash text-center mb-6">
            By using our website or services, you acknowledge that you have
            read, understood, and agree to be bound by these Terms and
            Conditions.
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
