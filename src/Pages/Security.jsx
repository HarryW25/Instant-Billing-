import React from 'react';
import { Link } from 'react-router-dom';
import useSeo from '../ibp/useSeo';
import { PageHero } from '../ibp/blocks';

const Security = () => {
  useSeo('/security');
  return (
    <>
      <PageHero eyebrow="Security & HIPAA" title="Built to protect your clients' PHI."
        lead="We act as a subcontractor business associate. Every engagement starts with a signed Business Associate Agreement, and our team follows written HIPAA privacy and security procedures." />
      <section>
        <div className="wrap grid2">
          <div className="card"><h3>Agreements</h3><p>BAA, MSA, NDA and non-solicitation, signed with our US LLC.</p></div>
          <div className="card"><h3>Access</h3><p>Named accounts, MFA, least privilege; access removed the same day someone leaves your account.</p></div>
          <div className="card"><h3>Data handling</h3><p>Work happens inside your PM/EHR and clearinghouse; no PHI stored on local devices or personal email.</p></div>
          <div className="card"><h3>People</h3><p>HIPAA training at hire and annually; signed confidentiality agreements.</p></div>
          <div className="card"><h3>Incident response</h3><p>Written breach-notification procedure aligned with the BAA timelines.</p></div>
          <div className="card"><h3>Offshore transparency</h3><p>Our delivery team is in Pakistan. Some Medicare Advantage and Medicaid contracts restrict offshore access; we ask at intake and assign only queues your contracts allow.</p></div>
        </div>
      </section>
      <section className="ctaband">
        <div className="wrap">
          <h2>Plain answers on security</h2>
          <p>HIPAA does not have an official certification. We do not currently hold SOC 2 or ISO 27001. We'll answer your security questionnaire in full.</p>
          <div className="cta-row" style={{ justifyContent: 'center' }}><Link className="btn btn-primary" to="/contact">Request our security packet</Link></div>
        </div>
      </section>
    </>
  );
};

export default Security;
