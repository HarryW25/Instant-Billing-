import React from 'react';

const InfoBoxes = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <section
      className="w-full px-4 pb-12 pt-20"
      aria-label="Informational Boxes Section"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-wrap -mx-2">
          {data.map((box, index) => (
            <div
              key={box.id || index}
              className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4"
            >
              <article
                className="flex items-center justify-center bg-white shadow-lg shadow-[#5a5a5a] rounded-lg p-4 h-full"
                aria-label={box.title}
              >
                <img
                  src={box.logo}
                  alt={box.title || 'icon'}
                  loading="lazy"
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-black font-semibold text-lg text-center ml-4">
                  {box.title}
                </h3>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
