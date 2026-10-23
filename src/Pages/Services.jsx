import React from 'react';
import { Link } from 'react-router-dom';
import useSeo from '../ibp/useSeo';
import { PageHero, ServiceCards, TrustBar, CtaBand } from '../ibp/blocks';

const Services = () => {
  useSeo('/services');
  return (
    <>
      <PageHero
        eyebrow="White-Label Services"
        title="Dedicated billing specialists who work as part of your team."
        lead="Every seat is one full-time person assigned to your account only. They log into your systems, use your notes format and escalation rules, and work during US business hours. Your clients see your brand, never ours."
      >
        <div className="cta-row">
          <Link className="btn btn-primary" to="/free-audit">Get a Free AR Audit</Link>
          <Link className="btn btn-ghost" to="/contact">Ask for the pricing sheet</Link>
        </div>
      </PageHero>
      <TrustBar />
      <section>
        <div className="wrap">
          <div className="center">
            <h2>Core desks: Prior Authorization, AR and Denials</h2>
            <p className="sub">Prior authorization, AR follow-up and denial management are our headline desks. Posting, charge entry, eligibility and coding seats complete the cycle.</p>
          </div>
          <ServiceCards long />
        </div>
      </section>
      <section className="alt">
        <div className="wrap grid2">
          <div>
            <h2>How we price</h2>
            <p>A flat monthly fee per full-time FTE, by role. Never a percentage of collections. Team (3+) and pod (6+) arrangements include a shared QA lead and team lead.</p>
            <p><b>Pricing on request.</b></p>
            <Link className="btn btn-primary" to="/contact">Ask for the pricing sheet</Link>
          </div>
          <div className="card">
            <h3>Every seat includes</h3>
            <ul className="check">
              <li>A named, full-time specialist on your account only</li><li>Work inside your PM/EHR, clearinghouse and payer portals</li>
              <li>Your SOPs, note templates and escalation rules</li><li>Weekly KPI report and QA sampling</li><li>BAA signed before any PHI access</li>
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
};

export default Services;
