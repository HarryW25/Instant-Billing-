import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import bgimg from '../assets/img/8de1f6a4-d72a-4828-91e4-62a71d506312.jpg';

const contactInfo = [
  {
    icon: <FaPhoneAlt className="text-3xl text-[#7BAB0A] mb-3" />,
    title: 'Call Us',
    description: 'Reach us by phone for immediate support or inquiries.',
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-[#7BAB0A] mb-3" />,
    title: 'Our Location',
    description: 'Visit our office at your convenience during business hours.',
  },
  {
    icon: <FaEnvelope className="text-3xl text-[#7BAB0A] mb-3" />,
    title: 'Email Us',
    description: 'Send us your questions and we’ll get back to you promptly.',
  },
];

const Contactusbanner = () => {
  return (
    <section className="relative w-full text-white" aria-labelledby="contact-heading">
      {/* Banner */}
      <div
        className="h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>

        {/* Heading */}
        <div className="relative z-10 text-center px-4">
          <h1 id="contact-heading" className="text-3xl md:text-5xl font-bold mb-3">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            We're here to help. Reach out to us anytime and we'll happily answer your questions.
          </p>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="w-full px-4 sm:px-8 py-10 bg-white flex flex-col md:flex-row md:justify-between gap-6 -mt-12 z-20 relative">
        {contactInfo.map((item, index) => (
          <article
            key={index}
            className="bg-white border border-gray-200 text-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center w-full md:w-1/3"
          >
            {item.icon}
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Contactusbanner;
