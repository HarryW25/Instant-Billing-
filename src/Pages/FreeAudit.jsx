import React from 'react';
import useSeo from '../ibp/useSeo';
import AuditForm from '../Components/AuditForm';

const FreeAudit = () => {
  useSeo('/free-audit');
  return (
    <>
      <section className="hero" style={{ padding: '64px 0' }}>
        <div className="wrap">
          <div className="eyebrow">Two free offers</div>
          <h1 style={{ maxWidth: 820 }}>Free AR Audit or Free Prior Auth Workflow Review.</h1>
          <p className="lead">Pick the one that hurts most. We send back a written report you can use, whether or not you work with us.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#ar">Free AR Audit</a>
            <a className="btn btn-ghost" href="#pa">Free Prior Auth Workflow Review</a>
          </div>
        </div>
      </section>
      <section id="ar">
        <div className="wrap grid2">
          <div>
            <h2>Free AR Audit: what you get</h2>
            <p>We review a sample of 50-100 aged claims from one of your clients.</p>
            <ul className="check">
              <li>Breakdown of the sample by aging bucket, payer and status</li><li>Top denial and rejection reasons, with root causes</li>
              <li>Claims we believe are recoverable, and the next action for each</li><li>Timely-filing risks flagged</li>
              <li>A recommended staffing plan (how many FTEs, which roles)</li>
            </ul>
            <h2 id="pa" style={{ marginTop: 40, scrollMarginTop: 90 }}>Free Prior Auth Workflow Review: what you get</h2>
            <p>We review how one client's prior authorizations move today, from order to decision, using a de-identified log or a sample of recent auths under a BAA.</p>
            <ul className="check">
              <li>Map of the current workflow: who checks requirements, who submits, who chases status</li>
              <li>Turnaround by payer against the CMS-0057-F windows (72 hours urgent, 7 calendar days standard, for impacted payers)</li>
              <li>Top auth denial and pend reasons, and missing-documentation patterns</li>
              <li>Services delivered or scheduled without a valid auth (claim-denial risk)</li>
              <li>A recommended PA staffing plan by specialty volume</li>
            </ul>
            <h3 style={{ marginTop: 30 }}>How it works</h3>
            <div className="steps" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 18 }}>
              <div className="step"><h3>Request</h3><p>Fill out the form. We reply within one business day.</p></div>
              <div className="step"><h3>BAA</h3><p>We sign a BAA before you share any PHI, or you send a de-identified export.</p></div>
              <div className="step"><h3>Review</h3><p>Our AR or PA team works the sample against payer rules.</p></div>
              <div className="step"><h3>Report</h3><p>Written findings and a 30-minute walkthrough call.</p></div>
            </div>
          </div>
          <AuditForm />
        </div>
      </section>
    </>
  );
};

export default FreeAudit;
