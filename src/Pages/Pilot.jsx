import React from 'react';
import { Link } from 'react-router-dom';
import useSeo from '../ibp/useSeo';
import { PageHero, CtaBand } from '../ibp/blocks';

const Pilot = () => {
  useSeo('/pilot');
  return (
    <>
      <PageHero eyebrow="Pilot Program" title="Test one dedicated seat for 30 days."
        lead="The pilot is a paid, one-FTE engagement on a real queue: prior authorization, AR follow-up, denials or posting.">
        <div className="cta-row">
          <Link className="btn btn-primary" to="/free-audit">Request a Free AR Audit first</Link>
          <Link className="btn btn-ghost" to="/contact">Book a call</Link>
        </div>
      </PageHero>
      <section>
        <div className="wrap grid2">
          <div>
            <h2>How the pilot runs</h2>
            <p>Before day one we agree the KPIs: claims or auths touched per day, resolution rate, dollars recovered on worked accounts, QA accuracy. We report them every week. On day 30 you decide: convert to a monthly seat, change the scope, or stop.</p>
            <h3 style={{ marginTop: 24 }}>A good fit if you have</h3>
            <ul className="check">
              <li>An AR backlog or a growing prior auth queue</li><li>A new client launch</li><li>Open AR, PA or posting positions you can't fill</li>
            </ul>
          </div>
          <div className="card">
            <h3>Included</h3>
            <ul className="check">
              <li>One full-time specialist</li><li>Onboarding to your SOPs</li><li>Weekly KPI report and call</li><li>QA sampling</li><li>BAA before PHI access</li>
            </ul>
            <p><b>Pilot pricing on request.</b></p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
};

export default Pilot;
