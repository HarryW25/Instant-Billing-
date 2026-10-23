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
    <section className="wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="center" style={{ marginBottom: 40 }}>
        <h2>Latest articles</h2>
        <p className="sub">News and practical guides on prior authorization, AR, denials and coding.</p>
      </div>

      {/* 📱 Mobile Carousel */}

      <div className="sm:hidden">
        <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-1">
          {blogs.filter((b) => b.slug?.current).map((blog) => (
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
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#557c06]"
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
        {blogs.filter((b) => b.slug?.current).map((blog) => (
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
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#557c06]"
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
            to="/blog"
            className="inline-block rounded bg-[#6a9a08] px-6 py-2 text-white hover:bg-[#455a14] transition"
          >
            Show More
          </Link>
        </div>
      )}
    </section>
  );
};

export default Blogs;
