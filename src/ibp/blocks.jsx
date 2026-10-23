import React from 'react';
import { Link } from 'react-router-dom';

export const TrustBar = () => (
  <div className="trustbar">
    <div className="wrap">
      <span>US LLC contracting</span><span>BAA signed with every partner</span><span>HIPAA-aware process</span>
      <span>Dedicated, named staff</span><span>Work stays in your PM/EHR</span><span>Month-to-month pilot</span>
    </div>
  </div>
);

export const services = [
  { id: 'prior-auth', icon: '⚑', title: 'Prior Authorization', short: 'Requirement checks, submissions on payer portals, fax and phone, status tracking against CMS-0057-F decision windows, and denied-auth resubmission.', link: '/prior-authorization',
    long: 'A dedicated PA desk: requirement checks by payer and plan, request build and submission by portal, fax, phone or API, daily status tracking against payer decision windows, RFIs and denied-auth rework, retro auth and claim tie-out, and a weekly PA report you can forward under your brand.' },
  { id: 'ar', icon: '☎', title: 'AR Follow-Up', short: 'Payer calls, portal checks and status follow-up on aged claims, with every action noted in your system.',
    long: 'Payer calls, IVR and portal status checks on aged claims; corrected-claim and resubmission prep; every touch documented in your PM. We work your aging buckets by dollar value and timely-filing risk.' },
  { id: 'denials', icon: '⟲', title: 'Denial Management', short: 'Root-cause review, corrections, reconsiderations and appeals, plus trend reporting by payer and denial code.',
    long: 'Denial categorization by CARC/RARC, root-cause notes, corrections, reconsiderations and written appeals, with a weekly trend report by payer and code so you can fix problems upstream.' },
  { id: 'charge-entry', icon: '✎', title: 'Charge Entry', short: 'Accurate demographic and charge entry from superbills and encounter notes, checked against your edits.',
    long: 'Demographics, insurance and charge entry from superbills, encounter notes or EHR feeds, with scrubber-edit clean-up before submission.' },
  { id: 'posting', icon: '$', title: 'Payment Posting', short: 'ERA and EOB posting, reconciliation to deposits, and denial routing on the same day the remit is posted.',
    long: 'ERA auto-post exceptions, manual EOB posting, deposit reconciliation, patient-responsibility transfers and same-day routing of denials to the AR queue.' },
  { id: 'eligibility', icon: '✓', title: 'Eligibility Verification', short: 'Coverage and benefits checks ahead of the visit, handed straight to the prior auth desk when an auth is needed, to reduce front-end denials.',
    long: 'Coverage, deductible, copay/co-insurance and prior-auth requirement checks 24-72 hours before visits, with results noted in the appointment. When an auth is needed, the case goes straight to the PA desk.' },
  { id: 'coding', icon: '⌘', title: 'Medical Coding', short: null,
    long: null },
];

export const CodingText = () => (
  <>CPT, ICD-10-CM and modifier assignment and coding-denial review by experienced coders.</>
);

export const ServiceCards = ({ long = false }) => (
  <div className="grid3">
    {services.map((s) => (
      <div className="card" key={s.id} id={long ? s.id : undefined}>
        <div className="icon" aria-hidden="true">{s.icon}</div>
        <h3>{s.title}</h3>
        <p>
          {s.id === 'coding' ? <CodingText /> : long ? s.long : s.short}
          {s.link && <> <Link to={s.link} style={{ color: 'var(--green-d)', fontWeight: 600 }}>See the PA desk</Link></>}
        </p>
      </div>
    ))}
  </div>
);

export const Steps = () => (
  <div className="steps">
    <div className="step"><h3>Audit</h3><p>We review a sample of your aged AR or your auth workflow and show where the money is stuck, free.</p></div>
    <div className="step"><h3>Sign</h3><p>MSA, BAA and non-solicit signed with our US LLC. Access set up with MFA in your systems.</p></div>
    <div className="step"><h3>Pilot</h3><p>One dedicated FTE works your queue for 30 days. You get weekly KPI reports.</p></div>
    <div className="step"><h3>Scale</h3><p>Convert to a monthly seat and add FTEs, a QA lead and a team lead as you grow.</p></div>
  </div>
);

export const CtaBand = ({ title = "See what's stuck in your AR or your auth queue, free.", text }) => (
  <section className="ctaband">
    <div className="wrap">
      <h2>{title}</h2>
      <p>{text || <>Send a sample of aged claims or walk us through your auth workflow. Get a written findings report.</>}</p>
      <div className="cta-row" style={{ justifyContent: 'center' }}>
        <Link className="btn btn-primary" to="/free-audit">Request My Free AR Audit</Link>
        <Link className="btn btn-ghost" to="/free-audit#pa">Free Prior Auth Workflow Review</Link>
      </div>
    </div>
  </section>
);

export const PageHero = ({ eyebrow, title, lead, children }) => (
  <section className="hero" style={{ padding: '64px 0' }}>
    <div className="wrap">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1 style={{ maxWidth: 860 }}>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </div>
  </section>
);
