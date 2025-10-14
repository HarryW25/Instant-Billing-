import React from 'react';

const Imgbanner = ({ data }) => {
  if (!data) return null;

  const { image, heading, paragraph1, paragraph2, paragraph3 } = data;

  return (
    <section
      className="flex flex-col md:flex-row items-stretch gap-8 pt-10 pb-6 px-6 md:pt-16 md:pb-10 md:px-12 bg-white"
      aria-labelledby="imgbanner-heading"
    >
      {/* Left Image (only on md+ screens) */}
      <div className="w-full md:w-1/2 hidden md:block">
        <img
          src={image}
          alt={heading || 'Banner Image'}
          loading="lazy"
          className="w-full h-[26rem] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h2
          id="imgbanner-heading"
          className="text-3xl font-bold text-[#7BAB0A]"
        >
          {heading}
        </h2>

        {paragraph1 && (
          <p className="text-gray-600">{paragraph1}</p>
        )}

        {paragraph2 && (
          <p className="text-gray-600">{paragraph2}</p>
        )}

        {paragraph3 && (
          <p className="text-gray-600">{paragraph3}</p>
        )}
      </div>
    </section>
  );
};

export default Imgbanner;
