import React from 'react';
import BlogPageBanner from '../Components/BlogPageBanner';
import BlogMain from '../Components/BlogMain';
import Banner3 from '../Components/Banner3';
import bgimg from '../assets/img/ICD-10 Coding_ What You Need to Know for Efficient Medical Billing _ Zupyak.jpeg';

const Blogsview = () => {
  const bannerData = {
    image: bgimg,
    title: "Instant Medical Billing Blogs",
    description: "Explore expert-written articles and insights into efficient medical billing practices, updates, and compliance guidelines."
  };
  return (
    <>

      <Banner3 data={bannerData} />

      <BlogMain />
    </>
  );
};

export default Blogsview;
