import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { value: 12, label: 'Specialties' },
    { value: 10, label: 'Years of Experience' },
    { value: 15, label: 'Practices Served' },
    { value: 12, label: 'Certified Providers' },
    { value: 30, label: 'Team Members' },
  ];

  return (
    <section className="text-gray-700 body-font bg-white" ref={ref} aria-labelledby="experience-heading">
      <div className="container px-5 py-24 mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 id="experience-heading" className="sm:text-[50px] text-4xl font-bold text-[#7BAB0A] mb-4">
            Our Experience in Numbers
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
            Trusted by providers and practices nationwide, our team ensures precision and performance.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="flex flex-wrap -m-4 text-center">
          {stats.map((stat, index) => (
            <article
              key={index}
              className="p-4 md:w-1/5 sm:w-1/2 w-full"
            >
              <div className="border border-[#7BAB0A] px-4 py-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-white">
                <h3 className="text-3xl font-bold text-gray-900">
                  {inView ? <CountUp start={0} end={stat.value} duration={2} /> : '0'}
                </h3>
                <p className="mt-2 text-base text-gray-600 font-medium">{stat.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
