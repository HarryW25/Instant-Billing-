import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../Sanity/sanityClient';

const Blogs = ({ showAll = false }) => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(publishedAt desc){
        _id,
        title,
        slug,
        mainImage{ asset->{url} },
        body
      }`)
      .then((data) => {
        const limited = showAll ? data : data.slice(0, 3);
        setBlogs(limited);
      })
      .catch((err) => {
        console.error("Blogs fetch error:", err);
        setError(true);
      });
  }, [showAll]);

  const extractText = (blocks) => {
    if (!blocks || !Array.isArray(blocks)) return '';
    const block = blocks.find(b => b._type === 'block' && b.children);
    return block?.children?.map(c => c.text).join(' ') || '';
  };

  if (error) {
    return (
      <div className="text-center text-red-600 py-10">
        Unable to load blogs.
      </div>
    );
  }

  return (
    <section className="px-4 py-16 mx-auto max-w-screen-xl">
      {/* Section Heading */}
      <div className="text-center mb-20">
        <h1 className="sm:text-[50px] text-4xl font-bold text-[#7BAB0A] mb-4">
          Our Latest Blogs
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
          Check out the latest news and articles
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-96 h-1 rounded-full bg-[#7BAB0A] inline-flex"></div>
        </div>
      </div>

      {/* 📱 Mobile Carousel */}

      <div className="sm:hidden">
        <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-1">
          {blogs.map((blog) => (
            <article
              key={blog._id}
              className="min-w-[90%] max-w-[95%] snap-start shrink-0 rounded-lg border border-gray-100 bg-white shadow-md mx-auto"
            >
              <img
                src={blog.mainImage?.asset?.url}
                alt={blog.title}
                loading="lazy"
                className="h-52 w-full object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                  {extractText(blog.body).slice(0, 150)}
                </p>
                <Link
                  to={`/blog/${blog.slug.current}`}
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#7BAB0A]"
                >
                  Find out more
                  <span className="block transition-all group-hover:ms-0.5">
                    &rarr;
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>


      {/* 🖥️ Desktop Grid */}
      <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <article
            key={blog._id}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <img
              src={blog.mainImage?.asset?.url}
              alt={blog.title}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                {blog.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                {extractText(blog.body).slice(0, 150)}
              </p>
              <Link
                to={`/blog/${blog.slug.current}`}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#7BAB0A]"
              >
                Find out more
                <span className="block transition-all group-hover:ms-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Show More Button */}
      {!showAll && (
        <div className="mt-10 text-center">
          <Link
            to="/Blogpage"
            className="inline-block rounded bg-[#7BAB0A] px-6 py-2 text-white hover:bg-[#455a14] transition"
          >
            Show More
          </Link>
        </div>
      )}
    </section>
  );
};

export default Blogs;
