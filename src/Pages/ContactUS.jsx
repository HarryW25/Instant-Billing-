import React from 'react';
import { Link } from 'react-router-dom';
import useSeo from '../ibp/useSeo';
import { PageHero } from '../ibp/blocks';
import ContactForm from '../Components/ContactForm';

const ContactUS = () => {
  useSeo('/contact');
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk capacity."
        lead="Tell us what's backing up (prior auths, AR, denials, posting or eligibility) and we'll suggest a starting point." />
      <section>
        <div className="wrap grid2">
          <div>
            <h2>Reach us</h2>
            <ul className="check">
              <li>Email: <a href="mailto:info@instantbillings.com">info@instantbillings.com</a></li>
              <li>Phone: <a href="tel:+13323786508">+1 (332) 378-6508</a></li>
              <li>Hours: we work US business hours</li>
              <li>Mailing address: 1209 Mountain Road Pl NE, Ste R, Albuquerque, NM 87110, USA</li>
            </ul>
            <p>Prefer a call? Phone us or email to set a time.</p>
            <p>Looking for a free offer? <Link to="/free-audit">Request a free AR audit or prior auth workflow review</Link>.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactUS;
