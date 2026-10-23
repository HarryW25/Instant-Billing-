import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import sanityClient from '../Sanity/sanityClient';
import { PortableText } from '@portabletext/react';
import Blogs from './Blogs';
import useSeo from '../ibp/useSeo';
import { CtaBand } from '../ibp/blocks';

const textOf = (blocks) => {
  if (!Array.isArray(blocks)) return '';
  const b = blocks.find((x) => x._type === 'block' && x.children);
  return b?.children?.map((c) => c.text).join(' ') || '';
};

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
        console.error('Blog fetch error:', err);
        setError(true);
      });
  }, [id]);

  useSeo('/blog', {
    path: `/blog/${id}`,
    type: 'article',
    title: blog ? `${blog.metaTitle || blog.title} | Instant Billing Partners` : undefined,
    description: blog ? blog.metaDescription || textOf(blog.body).slice(0, 155) : undefined,
    image: blog?.mainImage?.asset?.url,
  });

  if (error) return <div className="wrap center" style={{ padding: '80px 24px', color: '#b42318' }}>Failed to load this article. Please try again later.</div>;
  if (!blog) return <div className="wrap center" style={{ padding: '80px 24px' }}>Loading...</div>;

  return (
    <>
      <section style={{ paddingBottom: 32 }}>
        <div className="wrap prose-wrap">
          <p className="note"><Link to="/blog">Blog</Link></p>
          <div className="note" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            {blog.publishedAt && <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>}
            {blog.author?.name && <span>By {blog.author.name}</span>}
            {blog.categories?.length > 0 && <span className="text-xs bg-[#6a9a08] text-white px-2 py-1 rounded">{blog.categories[0].title}</span>}
          </div>
          <h1 style={{ color: 'var(--navy)', fontSize: 40 }}>{blog.title}</h1>
          {blog.mainImage?.asset?.url && (
            <img src={blog.mainImage.asset.url} alt={blog.title} loading="lazy" style={{ width: '100%', maxHeight: 440, objectFit: 'cover', borderRadius: 12, margin: '12px 0 28px' }} />
          )}
          <div className="blog-body"><PortableText value={blog.body} /></div>
          {blog.tags?.length > 0 && (
            <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {blog.tags.map((tag, i) => <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full">#{tag}</span>)}
            </div>
          )}
        </div>
      </section>
      <div className="alt"><Blogs showAll={false} /></div>
      <CtaBand />
    </>
  );
};

export default BlogMain;
