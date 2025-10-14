import React from 'react';

import logo1 from '../assets/img/BBBlogo.PNG';
import logo2 from '../assets/img/CMSlogo.PNG';
import logo3 from '../assets/img/HIPAAlogo.PNG';
import logo4 from '../assets/img/ISOlogo.PNG';

const certificateLogos = [
  { id: 1, src: logo1, alt: 'Better Business Bureau Certified' },
  { id: 2, src: logo2, alt: 'CMS Certification' },
  { id: 3, src: logo3, alt: 'HIPAA Compliance Certified' },
  { id: 4, src: logo4, alt: 'ISO Standard Certification' },
];

const CertificatesSection = () => {
  return (
    <section className="px-5 text-center py-16">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="sm:text-[50px] text-4xl font-bold title-font text-[#7BAB0A] mb-4">
          Certificates
        </h1>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          We are proud to be certified by nationally recognized organizations ensuring compliance, quality, and excellence.
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
        </div>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center max-w-4xl mx-auto">
        {certificateLogos.map((logo) => (
          <div key={logo.id} className="flex justify-center items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="w-36 h-36 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
