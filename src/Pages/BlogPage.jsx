import React from 'react';
import useSeo from '../ibp/useSeo';
import { PageHero } from '../ibp/blocks';
import Blogs from '../Components/Blogs';

const BlogPage = () => {
  useSeo('/blog');
  return (
    <>
      <PageHero eyebrow="Blog" title="Insights on prior authorization, AR and medical billing." lead="Articles on billing, coding, denials and compliance updates from our team." />
      <Blogs showAll={true} />
    </>
  );
};

export default BlogPage;
