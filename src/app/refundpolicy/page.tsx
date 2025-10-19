"use client";

import React from "react";
import Link from "next/link";

export default function RefundPolicyPage() {
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
          Refund Policy
        </h1>
      </section>

      {/* Refund Policy Content */}
      <section className="max-w-5xl mx-auto py-12 px-6 sm:px-10 lg:px-16 leading-relaxed text-gray-700 space-y-10">
        {/* 1. Introduction */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            1. INTRODUCTION
          </h2>
          <p className="font-clash">
            This Refund Policy outlines the terms and conditions under which{" "}
            <strong>PROMISE UDUAK EKANEM PR (PUEPR)</strong> processes refunds
            for services provided. By engaging our services, you agree to this
            Refund Policy.
          </p>
        </div>

        {/* 2. General Refund Policy */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            2. GENERAL REFUND POLICY
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            2.1 Service-based Refunds
          </h3>
          <p className="font-clash mb-2">
            As a service provider, our refund policy is based on the following
            principles:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Refunds are evaluated on a case-by-case basis</li>
            <li>Services already rendered are generally non-refundable</li>
            <li>
              Refunds may be issued for services not yet provided or delivered
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            2.2 Eligibility for Refunds
          </h3>
          <p className="font-clash mb-2">
            You may be eligible for a refund under the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Services were not provided as agreed in the service contract
            </li>
            <li>
              Services were not delivered within the agreed timeframe due to our
              fault
            </li>
            <li>We are unable to fulfill the service agreement</li>
            <li>Duplicate payment was made in error</li>
            <li>Payment was made in error for services not requested</li>
          </ul>
        </div>

        {/* 3. Non-Refundable Services */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            3. NON-REFUNDABLE SERVICES
          </h2>
          <p className="font-clash mb-2">
            The following are generally non-refundable:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Services that have already been completed or delivered</li>
            <li>Consultation fees for time already spent</li>
            <li>Custom work that has been started or completed</li>
            <li>
              Deposits or advance payments for services already in progress
            </li>
            <li>Services where deliverables have been provided and accepted</li>
            <li>Administrative or processing fees</li>
          </ul>
        </div>

        {/* 4. Refund Request Process */}
        <div data-aos="fade-up" data-aos-delay="250">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            4. REFUND REQUEST PROCESS
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            4.1 How to Request a Refund
          </h3>
          <p className="font-clash mb-2">To request a refund, you must:</p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Contact us at{" "}
              <a
                href="mailto:support@puepr.com"
                className="text-blue-600 underline"
              >
                support@puepr.com
              </a>{" "}
              with &quot;Refund Request&quot; in the subject line
            </li>
            <li>
              Provide your full name, contact information, and invoice/payment
              reference number
            </li>
            <li>Clearly explain the reason for the refund request</li>
            <li>
              Submit the request within 3 days of payment or service delivery
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            4.2 Required Information
          </h3>
          <p className="font-clash mb-2">Your refund request must include:</p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Invoice number or payment receipt</li>
            <li>Date of payment</li>
            <li>Service description</li>
            <li>Detailed reason for refund request</li>
            <li>Supporting documentation (if applicable)</li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            4.3 Response Time
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              We will acknowledge your refund request within 3 business days
            </li>
            <li>
              We will review and respond to your request within 7 business days
            </li>
            <li>
              Additional information may be requested during the review process
            </li>
          </ul>
        </div>

        {/* 5. Refund Evaluation Criteria */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            5. REFUND EVALUATION CRITERIA
          </h2>
          <p className="font-clash mb-2">
            We will evaluate refund requests based on:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>The nature and extent of services provided</li>
            <li>Whether deliverables were provided as agreed</li>
            <li>Communication and cooperation between parties</li>
            <li>The reason for dissatisfaction</li>
            <li>Evidence supporting the refund claim</li>
            <li>Terms outlined in the service agreement</li>
          </ul>
        </div>

        {/* 6. Partial Refunds */}
        <div data-aos="fade-up" data-aos-delay="350">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            6. PARTIAL REFUNDS
          </h2>
          <p className="font-clash mb-2">
            In some cases, we may offer a partial refund:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash mb-4">
            <li>When services were partially completed or delivered</li>
            <li>When some aspects of the service were satisfactory</li>
            <li>When work can be salvaged or used by the client</li>
            <li>As a goodwill gesture to resolve disputes</li>
          </ul>

          <p className="font-clash mb-2">
            The amount of any partial refund will be determined based on:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>The percentage of services completed</li>
            <li>Time and resources invested</li>
            <li>Value delivered to the client</li>
          </ul>
        </div>

        {/* 7. Refund Methods and Timing */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            7. REFUND METHODS AND TIMING
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            7.1 Refund Methods
          </h3>
          <p className="font-clash mb-2">
            Approved refunds will be processed using the original payment
            method:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Bank transfer refunds: 7-14 business days</li>
            <li>Credit/Debit card refunds: 7-14 business days</li>
            <li>
              Other payment methods: As applicable to the payment processor
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            7.2 Processing Time
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Once approved, refunds will be initiated within 7-14 business days
            </li>
            <li>
              The time for funds to appear in your account depends on your
              financial institution
            </li>
            <li>
              You will receive confirmation once the refund has been processed
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            7.3 Transaction Fees
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Refunds may be subject to deduction of transaction fees charged by
              payment processors
            </li>
            <li>
              Any bank transfer fees incurred may be deducted from the refund
              amount
            </li>
          </ul>
        </div>

        {/* 8. Cancellation Policy */}
        <div data-aos="fade-up" data-aos-delay="450">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            8. CANCELLATION POLICY
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            8.1 Cancellation Before Service Commencement
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Cancellations made 2 days before the scheduled service start: Full
              refund minus any administrative fee
            </li>
            <li>
              Cancellations made after 2 days before scheduled service: No
              refund
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            8.2 Cancellation After Service Commencement
          </h3>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Once services have begun, cancellation does not entitle you to a
              refund for work completed
            </li>
            <li>
              You will be charged for services rendered up to the cancellation
              date
            </li>
            <li>
              Any prepaid amounts for uncompleted services may be refunded
            </li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            8.3 Cancellation by PUEPR
          </h3>
          <p className="font-clash mb-2">
            If we cancel services for reasons within our control:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>You will receive a full refund of all amounts paid</li>
            <li>We will notify you as soon as possible</li>
            <li>Alternative arrangements may be offered</li>
          </ul>
        </div>

        {/* 9. Dispute Resolution */}
        <div data-aos="fade-up" data-aos-delay="500">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            9. DISPUTE RESOLUTION
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            9.1 Communication First
          </h3>
          <p className="font-clash mb-2">
            We encourage open communication to resolve any dissatisfaction:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              Contact us immediately if you have concerns about our services
            </li>
            <li>We will work with you to find a satisfactory solution</li>
            <li>Many issues can be resolved without a formal refund request</li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            9.2 Mediation
          </h3>
          <p className="font-clash mb-2">
            If we cannot reach an agreement regarding a refund:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>
              We may suggest mediation as an alternative dispute resolution
              method
            </li>
            <li>Mediation costs may be shared between parties</li>
            <li>
              Mediation is voluntary and non-binding unless agreed otherwise
            </li>
          </ul>
        </div>

        {/* 10. Exceptions and Special Circumstances */}
        <div data-aos="fade-up" data-aos-delay="550">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            10. EXCEPTIONS AND SPECIAL CIRCUMSTANCES
          </h2>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            10.1 Force Majeure
          </h3>
          <p className="font-clash mb-2">
            No refunds will be issued for delays or non-performance due to
            circumstances beyond our control, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Natural disasters</li>
            <li>Pandemics or health emergencies</li>
            <li>Government actions or restrictions</li>
            <li>Technical failures beyond our control</li>
          </ul>

          <h3 className="text-xl font-semibold font-oswald text-gray-800 mt-4 mb-2">
            10.2 Client-caused Delays
          </h3>
          <p className="font-clash mb-2">
            Refunds will not be issued when delays or service failures are
            caused by:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Failure to provide necessary information or materials</li>
            <li>Lack of response or cooperation from the client</li>
            <li>Changes in requirements after service commencement</li>
            <li>Client cancellation or termination without cause</li>
          </ul>
        </div>

        {/* 11. Amendments to Refund Policy */}
        <div data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            11. AMENDMENTS TO REFUND POLICY
          </h2>
          <p className="font-clash mb-2">
            We reserve the right to modify this Refund Policy at any time.
            Changes will:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-clash">
            <li>Be posted on our website with the updated date</li>
            <li>Apply to services engaged after the revision date</li>
            <li>
              Not affect existing service agreements unless mutually agreed
            </li>
          </ul>
        </div>

        {/* 12. Governing Law */}
        <div data-aos="fade-up" data-aos-delay="650">
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3">
            12. GOVERNING LAW
          </h2>
          <p className="font-clash">
            This Refund Policy is governed by the laws of the Republic of
            Serbia. Any disputes arising from this policy shall be subject to
            the jurisdiction of Serbian courts.
          </p>
        </div>

        {/* 13. Contact Us */}
        <div
          className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          <h2 className="text-2xl font-semibold font-oswald text-gray-900 mb-3 text-center">
            13. CONTACT US
          </h2>
          <p className="font-clash text-center mb-2">
            For questions about this Refund Policy or to submit a refund
            request, please contact us:
          </p>
          <div className="text-center space-y-1 font-clash mt-4">
            <p>
              <strong>Email:</strong>
              <a
                href="mailto:support@puepr.com"
                className="text-blue-600 underline"
              >
                support@puepr.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>
              <a href="tel:+381658241323" className="text-blue-600 underline">
                +381658241323
              </a>
            </p>
            <p>
              <strong>Address:</strong> Belgrade, GTC FORTYONE. Milutina
              Milankovica Blvd 9ž Beograd Beograd-Beograd, 11070, Serbia
            </p>
            <p>
              <strong>Business Hours:</strong> Monday-Friday, 9:00 - 17:00
            </p>
          </div>
        </div>

        {/* Acknowledgment */}
        <div
          className="bg-blue-50 p-8 rounded-xl border border-blue-200 mt-10"
          data-aos="fade-up"
          data-aos-delay="750"
        >
          <h3 className="text-xl font-semibold font-oswald text-gray-900 mb-3 text-center">
            ACKNOWLEDGMENT
          </h3>
          <p className="font-clash text-center mb-6">
            By engaging our services, you acknowledge that you have read,
            understood, and agree to this Refund Policy.
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
