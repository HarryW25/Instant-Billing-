import React from 'react';

const Qualities = ({
  features = [],
  title = "Transforming Medical Billing Services for Small Practices with Instant Precision.",
  description = "Instant Medical Billing is the leading medical billing services company that delivers a reliable, swift, and reasonable pricing model to ensure that your practice gets the maximum reimbursement possible. We are a team of certified professional billers and coders covering every aspect of RCM billing services with utmost accuracy and efficiency.",
}) => {
  return (
    <section
      className="py-10 px-6 md:px-12 bg-white text-center pt-28"
      aria-labelledby="qualities-title"
    >
      {/* Heading */}
      <h2
        id="qualities-title"
        className="text-3xl md:text-4xl font-bold text-[#7BAB0A] mb-4"
      >
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-3xl mx-auto mb-10">
        {description}
      </p>

      {/* Features Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <article
            key={index}
            className="bg-[#fdfcfc] p-6 rounded-xl shadow hover:shadow-lg transition text-center space-y-4"
            aria-label={item.title}
          >
            <div className="flex justify-center">
              <img
                src={item.icon}
                alt={item.title || 'feature icon'}
                loading="lazy"
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
