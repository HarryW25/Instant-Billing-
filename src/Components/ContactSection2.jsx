import React, { useMemo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const ContactSection2 = () => {
  const formRef = useRef();
  const [country, setCountry] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ NEW

  const countryOptions = useMemo(() => countryList().getData(), []);

  const serviceOptions = [
    { label: 'Medical Billing', value: 'medical-billing' },
    { label: 'Medical Coding', value: 'medical-coding' },
    { label: 'Provider QPP', value: 'Provider QPP' },
    { label: 'Credentialing', value: 'credentialing' },
    { label: 'Patient Payments', value: 'Patient Payments' },
    { label: 'Virtual Front Desk', value: 'Virtual Front Desk' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // ✅ NEW

    const formData = new FormData(formRef.current);
    formData.append('country', country?.label || '');
    formData.append(
      'services',
      selectedServices.map((s) => s.label).join(', ')
    );

    toast.dismiss('contact-toast');

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
        setSelectedServices([]);
      })
      .catch(() => {
        toast.error('Failed to send message. Try again.', { toastId: 'contact-toast' });
      })
      .finally(() => {
        setIsSubmitting(false); // ✅ NEW
      });
  };

  return (
    <section className="text-gray-600 body-font relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-20">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h1 className="sm:text-[50px] text-4xl font-bold title-font text-[#7BAB0A] mb-4">
            Contact Us
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
            Schedule Your Free Consultation Today.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-10 justify-center items-stretch">
          {/* Left Content Box */}
          <div className="md:w-1/2 w-full px-4 bg-[#dadada50] p-6 sm:p-12 rounded-3xl">
            <h2 className="text-2xl font-bold text-[#7BAB0A] mb-4">
              Free Medical Consulting Services
            </h2>
            <p className="mb-4 text-gray-700">
              We help you generate revenue for your healthcare practice and reduce time and effort managing administrative tasks.
              We'll collaborate with your team so that everyone is working towards the same goals, from medical billing and practice
              management services to quality patient healthcare!
            </p>
            <p className="text-gray-700">
              Our professional team works closely with your office staff to ensure that medical billing needs are met quickly and
              efficiently. With our experience and knowledge, we provide quality medical practice billing service to clients and
              help them achieve their goals.
            </p>
          </div>

          {/* Right Form Box */}
          <div className="md:w-1/2 w-full px-4">
            <div>
              <h3 className="text-xl font-semibold text-[#7BAB0A] mb-4 text-center">
                Book An Appointment
              </h3>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4"
                aria-label="Contact Form"
              >
                {/* Full Name and Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    autoComplete="name"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#7BAB0A] focus:bg-white focus:ring-2 focus:ring-[#7BAB0A] text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                  />
                  <div className="w-full">
                    <Select
                      options={countryOptions}
                      value={country}
                      onChange={setCountry}
                      placeholder="Select Country"
                      classNamePrefix="react-select"
                      aria-label="Select Country"
                      styles={{
                        control: (base) => ({
                          ...base,
                          backgroundColor: '#f3f4f6',
                          borderColor: '#d1d5db',
                          borderRadius: '0.5rem',
                          fontSize: '0.95rem',
                          width: '100%',
                        }),
                      }}
                    />
                  </div>
                </div>

                {/* Services Multi-select */}
                <div>
                  <Select
                    options={serviceOptions}
                    isMulti
                    value={selectedServices}
                    onChange={setSelectedServices}
                    placeholder="Select Services"
                    classNamePrefix="react-select"
                    aria-label="Select Services"
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: '#f3f4f6',
                        borderColor: '#d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '0.95rem',
                        width: '100%',
                      }),
                    }}
                  />
                </div>

                {/* Phone and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#7BAB0A] focus:bg-white focus:ring-2 focus:ring-[#7BAB0A] text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#7BAB0A] focus:bg-white focus:ring-2 focus:ring-[#7BAB0A] text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="w-full h-24 resize-none bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#7BAB0A] focus:bg-white focus:ring-2 focus:ring-[#7BAB0A] text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                ></textarea>

                {/* Submit Button with Loader */}
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
      </div>
    </section>
  );
};

export default ContactSection2;
