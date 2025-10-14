import React from 'react';
import { useParams } from 'react-router-dom';
import serviceData from '../Helpers/Services';

import Banner3 from '../Components/Banner3';
import InfoBoxes from '../Components/InfoBoxes';
import Imgbanner from '../Components/Imgbanner';
import Qualities from '../Components/Qualitites';
import ContactSection from '../Components/ContactSection';

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return <div className="p-10 text-red-600 text-xl">Service Not Found</div>;
  }

  return (
    <>
      <Banner3 data={service.banner} />
      <InfoBoxes data={service.infobox} />
      <Imgbanner data={service.imageBanner} />
      <Qualities features={service.qualities} />
    
      <ContactSection/>
    </>
  );
};

export default ServicePage;
