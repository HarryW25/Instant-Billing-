import React from 'react';
import useSeo from '../ibp/useSeo';
import { PageHero, CtaBand } from '../ibp/blocks';

const About = () => {
  useSeo('/about');
  return (
    <>
      <PageHero eyebrow="About" title="The team behind your team." />
      <section>
        <div className="wrap grid2">
          <div>
            <p>Instant Billing Partners is the partner brand of Instant Billing Solution LLC, registered in New Mexico. Our delivery team of about 10 medical billing professionals works from Pakistan on US claims every day: prior authorization, AR follow-up, denials, posting, eligibility and coding.</p>
            <p>We built Instant Billing Partners to give US billing companies and RCM firms that capacity under their own brand, with straightforward per-FTE pricing and a US contract.</p>
          </div>
          <div className="card">
            <h3>What we value</h3>
            <ul className="check">
              <li><b>Transparency:</b> location, pricing model and scope stated up front</li>
              <li><b>Accountability:</b> weekly KPIs on every seat</li>
              <li><b>Discretion:</b> white-label delivery and a non-solicit clause</li>
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
};

export default About;
