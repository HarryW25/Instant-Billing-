import React from 'react';
import protectionImage from '../assets/img/assest-protection-png.webp';
import { Link } from 'react-router-dom';

const Banner2 = () => {
  return (
    <section
      aria-label="Medical Billing and Coding Overview"
      className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center"
    >
      {/* Text Content */}
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-[#7BAB0A] md:text-3xl">
            Medical Billing and Coding Company
          </h2>

          {[
            "At InstantBillings, we specialize in comprehensive medical billing and coding solutions designed to keep your practice compliant, efficient, and profitable. Our team ensures full adherence to HIPAA, the Affordable Care Act (ACA), and state-specific regulations—giving you peace of mind in a complex regulatory landscape.",
            "With our advanced analytics and revenue cycle expertise, we uncover key insights that help boost your revenue and reduce denials. Our certified billing and coding professionals streamline operations, minimize administrative burdens, and improve claim accuracy.",
            "Trusted by healthcare providers across the U.S., InstantBillings has a proven track record of enhancing compliance and maximizing reimbursements for small to mid-sized practices."
          ].map((para, i) => (
            <p key={i} className="mt-4 text-gray-500">
              {para}
            </p>
          ))}

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block rounded-sm bg-[#7BAB0A] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#587418] focus:ring-3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="hidden md:flex justify-center items-center">
        <img
          alt="Medical Billing Illustration"
          src={protectionImage}
          loading="lazy"
          width="500"
          height="400"
          className="w-[80%] object-contain sm:rounded-tl-[30px] md:rounded-tl-[60px]"
        />
      </div>
    </section>
  );
};

export default Banner2;
