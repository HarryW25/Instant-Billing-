import React from 'react';
import { Link } from 'react-router-dom';

const specialties = [
  { label: "OB GYN", slug: "ob-gyn" },
  { label: "Dental Billing", slug: "dental-billing" },
  { label: "Chiropractic Billing", slug: "chiropractic-billing" },
  { label: "Hematology Billing", slug: "hematology-billing" },
  { label: "Orthopedic Billing", slug: "orthopedic-billing" },
  { label: "Mental Health", slug: "mental-health" },
  { label: "General Surgery", slug: "general-surgery" },
  { label: "Urology", slug: "urology" },
];

const Specialetie = ({ compact = false }) => {
  return (
    <section className="text-gray-600 body-font" aria-labelledby="specialties-heading">
      <div className={`container mx-auto ${compact ? 'px-0 py-4' : 'px-5 py-24'}`}>

        {/* Header Section (Only in Full View) */}
        {!compact && (
          <div className="text-center mb-20">
            <h1 id="specialties-heading" className="sm:text-[50px] text-4xl font-bold title-font text-[#7BAB0A] mb-4">
              Our Specialties
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
              From patient registration and insurance eligibility verification to charge capture and claim submission, we ensure precision and proficiency in every step of the revenue cycle. Our expansive nature of Revenue Cycle Management (RCM) services caters to a broad spectrum of medical specialties.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
            </div>
          </div>
        )}

        {/* List of Specialties */}
        <div className={`${compact ? 'flex flex-wrap gap-3 w-full' : 'flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'}`}>
          {specialties.map((item, index) => (
            <div
              key={index}
              className={`${compact ? 'flex-grow min-w-[140px] max-w-full' : 'p-2 sm:w-1/2 w-full'}`}
            >
              <Link
                to={`/specialties/${item.slug}`}
                className="block focus:outline-none focus:ring-2 focus:ring-[#7BAB0A] rounded"
                aria-label={`Read more about ${item.label}`}
              >
                <div className="bg-gray-100 rounded flex items-center px-4 py-4 transition duration-300 ease-in-out shadow-md transform hover:-translate-y-2 hover:shadow-xl hover:border-[#7BAB0A] border border-transparent">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="text-[#7BAB0A] w-5 h-5 flex-shrink-0 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action Button (Only in Full View) */}
        {!compact && (
          <div className="text-center mt-10">
            <Link
              to="/contactus"
              className="text-white bg-[#7BAB0A] border-0 py-2 px-8 focus:outline-none hover:bg-[#536b19] rounded text-lg transition"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Specialetie;
