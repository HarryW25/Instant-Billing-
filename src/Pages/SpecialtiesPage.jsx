import React from 'react';
import { useParams } from 'react-router-dom';
import specialtiess from '../Helpers/Specialtiess'; // ✅ Make sure file name is correct (no typo)

import Banner3 from '../Components/Banner3';
import InfoBoxes from '../Components/InfoBoxes';
import Imgbanner from '../Components/Imgbanner';
import Qualities from '../Components/Qualitites';
import ContactSection from '../Components/ContactSection';

const SpecialtiesPage = () => {
  const { specialtyId } = useParams();
  const specialty = specialtiess[specialtyId]; // Get data using slug from URL

  if (!specialty) {
    return <div className="p-10 text-red-600 text-xl">Specialty Not Found</div>;
  }

  return (
    <>
      <Banner3 data={specialty.banner} />
      <Imgbanner data={specialty.imageBanner} />
      <Qualities
        features={specialty.qualities}
        title={specialty.qualitiesTitle}
        description={specialty.qualitiesDescription}
      />
      <ContactSection />
    </>
  );
};

export default SpecialtiesPage;
