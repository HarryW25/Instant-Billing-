import React from 'react';
import bgimg from '../assets/img/ICD-10 Coding_ What You Need to Know for Efficient Medical Billing _ Zupyak.jpeg';

const BlogPageBanner = ({ heading }) => {
  return (
    <div className="w-full h-[400px] relative overflow-hidden">
      {/* Background Image */}
      <img
        src={bgimg}
        alt="Efficient Medical Billing Background"
        loading="lazy"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* Overlay */}
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-10"></div>

      {/* Static Heading */}
      <h1 className="text-white text-4xl sm:text-6xl font-bold relative z-20 text-center px-4">
        {heading}
      </h1>
    </div>
  );
};

export default BlogPageBanner;
