import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../Sanity/sanityClient';
import { PortableText } from '@portabletext/react';
import ContactSection from '../Components/ContactSection';
import Specialetie from '../Components/Specialetie';
import Blogs from '../Components/Blogs';

const BlogMain = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setBlog(null);
    setError(false);

    sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          metaTitle,
          metaDescription,
          publishedAt,
          mainImage{ asset->{url} },
          author->{name, image},
          categories[]->{title},
          tags,
          body
        }`,
        { slug: id }
      )
      .then(setBlog)
      .catch((err) => {
        console.error("Blog fetch error:", err);
        setError(true);
      });
  }, [id]);

  if (error) {
    return (
      <div className="text-center text-red-600 text-xl py-20">
        Failed to load blog. Please try again later.
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center text-xl py-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5 py-10">

      {/* 🔰 Image + Specialties Section */}
      <div className="w-full mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-stretch">
          {/* 🖼️ Left: Blog Image */}
          <div className="lg:col-span-7 col-span-10 w-full h-full flex items-center justify-center bg-white">
            {blog.mainImage?.asset?.url && (
              <img
                src={blog.mainImage.asset.url}
                alt={blog.title}
                loading="lazy"
                className="w-full max-h-[500px] md:max-h-[400px] object-cover rounded-lg shadow"
              />
            )}
          </div>

          {/* ✅ Right: Specialties */}
          <div className="lg:col-span-3 col-span-10 w-full flex items-start justify-start">
            <div className="w-full">
              <Specialetie compact={true} />
            </div>
          </div>
        </div>
      </div>

      {/* 📄 Blog Content */}
      <div className="w-full">
        <div className="mb-2 text-sm text-gray-500 flex flex-wrap gap-3 items-center">
          <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
          {blog.author?.name && <span>By {blog.author.name}</span>}
          {blog.categories?.length > 0 && (
            <span className="text-xs bg-[#7BAB0A] text-white px-2 py-1 rounded">
              {blog.categories[0].title}
            </span>
          )}
        </div>

        <h1 className="text-5xl font-bold text-[#7BAB0A] mb-4 text-left">
          {blog.title}
        </h1>

        <div className="prose prose-green max-w-none text-justify">
          <PortableText value={blog.body} />
        </div>

        {blog.tags?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {blog.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-gray-200 px-2 py-1 rounded-full">#{tag}</span>
            ))}
          </div>
        )}
      </div>

      {/* 📰 Related Blogs */}
      <div className="mt-16">
        <Blogs showAll={false} />
      </div>

      {/* 📞 Contact Form */}
      <div className="mt-20">
        <ContactSection />
      </div>
    </div>
  );
};

export default BlogMain;
