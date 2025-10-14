import React, { useState, useMemo, useRef } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const features = [
  { title: "Medical Billing", slug: "medical-billing" },
  { title: "Medical Coding", slug: "medical-coding" },
  { title: "Credentialing", slug: "credentialing" },
  { title: "Patient Payments", slug: "patient-payments" },
  { title: "Virtual Front Desk", slug: "virtual-front-desk" },
  { title: "Provider QPP", slug: "provider-qpp" },
];

// ...your imports
const Banner3 = ({ data }) => {
  const [country, setCountry] = useState(null);
  const [services, setServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ NEW
  const countryOptions = useMemo(() => countryList().getData(), []);
  const serviceOptions = features.map((item) => ({
    label: item.title,
    value: item.slug,
  }));
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // ✅ Start loader

    const formData = new FormData(formRef.current);
    formData.append('country', country?.label || '');
    formData.append('services', services.map(s => s.label).join(', ') || '');

    toast.dismiss();
    emailjs
      .send(
        'service_pjodm6j',
        'template_ei34omq',
        Object.fromEntries(formData),
        'FAaHzRcFT31wnth5Y'
      )
      .then(() => {
        toast.success('Message sent successfully!', { toastId: 'contact-toast' });
        formRef.current.reset();
        setCountry(null);
        setServices([]);
      })
      .catch(() => {
        toast.error('Failed to send message. Try again.', { toastId: 'contact-toast' });
      })
      .finally(() => {
        setIsSubmitting(false); // ✅ Stop loader
      });
  };

  if (!data) return null;
  const { image, title, description } = data;

  return (
    <section
      aria-label="Contact Appointment Section"
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black/40 w-full h-full px-4 py-20 sm:px-6 lg:px-16 flex items-center justify-center">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left">

          {/* Left Text */}
          <div className="text-white">
            <p className="text-sm font-bold text-white mb-2">QUALITY FIRST</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7BAB0A]">
              {title}
            </h2>
            <p className="mt-4 text-white/90 leading-relaxed">{description}</p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block bg-[#7BAB0A] px-6 py-3 text-white font-medium rounded shadow hover:bg-[#628119]"
              >
                Talk To An Expert Now
              </Link>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#7BAB0A] mb-4 text-center">
              Book An Appointment
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="inputStyle bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#7BAB0A] focus:bg-white focus:ring-2 focus:ring-[#7BAB0A] text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                />
                <div>
                  <Select
                    options={countryOptions}
                    value={country}
                    onChange={setCountry}
                    placeholder="Select Country"
                    classNamePrefix="react-select"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="inputStyle bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#7BAB0A] focus:bg-white focus:ring-2 focus:ring-[#7BAB0A] text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="inputStyle bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#7BAB0A] focus:bg-white focus:ring-2 focus:ring-[#7BAB0A] text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                />
              </div>

              {/* Services Multi-Select */}
              <div>
                <Select
                  options={serviceOptions}
                  isMulti
                  value={services}
                  onChange={setServices}
                  placeholder="Select Services"
                  classNamePrefix="react-select"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-full h-24 resize-none inputStyle bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#7BAB0A] focus:bg-white focus:ring-2 focus:ring-[#7BAB0A] text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7BAB0A] hover:bg-[#374710] text-white py-2 rounded font-medium flex justify-center items-center"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;

