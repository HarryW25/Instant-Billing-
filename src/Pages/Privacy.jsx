import React from 'react';
import useSeo from '../ibp/useSeo';
import { PageHero } from '../ibp/blocks';

const Privacy = () => {
  useSeo('/privacy');
  return (
    <>
      <PageHero title="Privacy Policy" lead="Instant Billing Solution LLC (doing business as Instant Billing Partners)." />
      <section>
        <div className="wrap prose-wrap">
          <h3>What we collect</h3>
          <p>When you use our contact or free audit forms we collect the business contact details you enter (name, work email, phone, company) and your message. Forms are delivered to our team by email through the EmailJS service.</p>
          <h3>No PHI through this website</h3>
          <p>Do not submit protected health information (PHI) through this website. Patient data is exchanged only after a Business Associate Agreement is signed, through a secure method we agree with you.</p>
          <h3>How we use it</h3>
          <p>We use your details only to answer your request and discuss our services. We do not sell your information.</p>
          <h3>Contact</h3>
          <p>Questions or deletion requests: <a href="mailto:info@instantbillings.com">info@instantbillings.com</a>.</p>
        </div>
      </section>
    </>
  );
};

export default Privacy;
