import React from 'react'

import Banner from '../Components/Banner'
import Services from '../Components/Services'
import Experience from '../Components/Experience'
import Specialetie from '../Components/Specialetie'
import Banner2 from '../Components/Banner2'

import Blogs from '../Components/Blogs'
import ContactSection from '../Components/ContactSection'
import CertificatesSection from '../Components/CertificatesSection'
import TestimonialCarousel from '../Components/TestimonialCarousel'


const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Experience />
      <Specialetie />
      <Banner2 />
      <Blogs  showAll={false} />
      <ContactSection />
      <CertificatesSection />
     {/* <TestimonialCarousel/> */}
    </>
  )
}

export default Home
