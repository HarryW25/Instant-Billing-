import React from 'react';
import { Link } from 'react-router-dom';
import useSeo from '../ibp/useSeo';
import { CtaBand } from '../ibp/blocks';

const desk = [
  ['?', 'Requirement checks', 'Confirm whether a CPT/HCPCS code needs auth for that payer and plan, from eligibility results, payer lists and portals.'],
  ['✎', 'Request build and submission', 'Pull clinical notes, orders and codes from the chart, complete payer forms and submit by portal, fax, phone or API.'],
  ['⏱', 'Status tracking', 'Daily follow-up on pending auths, tracked against payer decision windows, with escalations flagged before the date of service.'],
  ['⟲', 'Denied and pended auths', "Answer requests for more information, resubmit with missing documentation and set up peer-to-peer for your client's provider."],
  ['⇄', 'Retro auth and claim tie-out', 'Match auth numbers to claims, catch visit-count and date-range overruns, and route auth-related claim denials to the AR desk.'],
  ['▤', 'Weekly PA report', 'Auths submitted, approved, pended and denied, turnaround by payer and top denial reasons, in a format you can forward under your brand.'],
];

const PriorAuth = () => {
  useSeo('/prior-authorization');
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Prior Authorization, a core desk</div>
            <h1>White-label prior authorization specialists who keep your clients' schedules moving.</h1>
            <p className="lead">Dedicated, full-time PA specialists who work inside your PM/EHR and payer portals, under your brand. They check requirements, build and submit requests, chase status and rework denied auths, so your clients' patients are not rescheduled and your claims are not denied for missing auth.</p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/free-audit#pa">Get a Free Prior Auth Workflow Review</Link>
              <Link className="btn btn-ghost" to="/pilot">See the 30-Day Pilot</Link>
            </div>
          </div>
          <div className="hero-card">
            <h3>Why billing companies add a PA desk now</h3>
            <ol>
              <li><b>New payer clocks.</b> Under CMS-0057-F, impacted payers (Medicare Advantage, Medicaid and CHIP, and their managed care plans) must decide non-drug auths within 72 hours for urgent and 7 calendar days for standard requests, starting January 1, 2026, and must give a specific denial reason.</li>
              <li><b>More electronic PA in 2027.</b> Those payers must stand up Prior Authorization APIs by January 1, 2027. Workflows will be mixed portal, fax and API for a while.</li>
              <li><b>Volume.</b> The AMA's 2024 physician survey reports 39 auths per physician per week and 13 hours of physician and staff time.</li>
            </ol>
            <p className="note">Sources: CMS-0057-F fact sheet and FAQ; AMA 2024 Prior Authorization Physician Survey.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="center"><h2>What the PA desk does</h2><p className="sub">One named specialist (or a pod) assigned to your account, working during US business hours.</p></div>
          <div className="grid3">
            {desk.map(([i, t, d]) => (
              <div className="card" key={t}><div className="icon" aria-hidden="true">{i}</div><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
          <p className="note center" style={{ marginTop: 22 }}>Clinical decisions stay with your clients' US-licensed providers. Our staff prepare and submit; providers sign and handle peer-to-peer calls.</p>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="center"><h2>Specialties where auth volume is heaviest</h2><p className="sub">Payers most often require PA for surgery, imaging, infused and injected drugs and oncology, and traditional Medicare requires it for certain DMEPOS items.</p></div>
          <div className="grid3">
            <div className="card"><h3>Imaging</h3><p>MRI, CT, PET and nuclear studies, including radiology benefit manager portals.</p></div>
            <div className="card"><h3>Oncology and infusion</h3><p>Chemotherapy regimens, infused and injected drugs, and regimen changes mid-course.</p></div>
            <div className="card"><h3>DME and orthotics</h3><p>DMEPOS items on Medicare's required-PA list, plus commercial and MA DME auths.</p></div>
            <div className="card"><h3>Surgery</h3><p>Inpatient and outpatient procedures, ASC cases, and date or site-of-service changes.</p></div>
            <div className="card"><h3>Therapy and behavioral health</h3><p>PT/OT/ST visit authorizations and extensions.</p></div>
            <div className="card"><h3>Your client's mix</h3><p>Ask us about specialties. We train on each client's payer list and auth rules during onboarding.</p></div>
          </div>
          <p className="note center" style={{ marginTop: 18 }}>Source: Perceptions of prior authorization burden and solutions, PMC 2024 (payers report PA for surgery 82%, imaging 70%, hematology/oncology 54% of respondents); KFF 2024 Medicare Advantage analysis.</p>
        </div>
      </section>

      <section>
        <div className="wrap grid2">
          <div>
            <h2>Priced like every other desk: one flat monthly fee per FTE</h2>
            <p>A PA specialist is a full-time, dedicated seat billed monthly, never a percentage of collections. Teams of 3+ and pods of 6+ get volume pricing, a shared QA lead and a team lead. For low-volume clients we can quote per authorization once we have seen the volume.</p>
            <p className="note">Pricing on request.</p>
            <Link className="btn btn-primary" to="/free-audit#pa">Start with the free workflow review</Link>
          </div>
          <div className="card">
            <h3>KPIs we report every week</h3>
            <ul className="check">
              <li>Auths submitted per day</li><li>Average days from order to submission</li><li>Approval, pend and denial rates by payer</li>
              <li>Auths at risk before date of service</li><li>Auth-related claim denials caught</li><li>QA accuracy on sampled requests</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap grid2">
          <div>
            <h2>Same security rules as our AR desk</h2>
            <ul className="check">
              <li>BAA signed before any PHI access</li><li>Work stays inside your PM/EHR and payer portals</li>
              <li>Named accounts with MFA, removed the day someone leaves your account</li><li>Offshore location (Pakistan) disclosed in writing</li>
            </ul>
          </div>
          <div><p className="note">Medicare Advantage and Medicaid work: some plan and state contracts restrict offshore access to PHI. We ask at intake and only assign queues your contracts allow.</p></div>
        </div>
      </section>

      <CtaBand
        title="Find out where your auths stall, free."
        text={<>Walk us through one client's prior auth workflow. Get written findings on turnaround, denials and staffing.</>}
      />
    </>
  );
};

export default PriorAuth;
