import React from 'react';
import useSeo from '../ibp/useSeo';
import { PageHero, CtaBand } from '../ibp/blocks';

const steps = [
  ['Discovery call (20 min)', 'Your client mix, systems, backlog and goals, including your prior auth volume.'],
  ['Free AR audit or PA workflow review', 'We review 50-100 aged claims, or one client\'s auth workflow, and send written findings.'],
  ['Paperwork', 'Master Services Agreement, Business Associate Agreement and non-solicitation agreement, all with Instant Billing Solution LLC (US).'],
  ['Access setup', 'You create named user accounts with MFA in your PM/EHR, clearinghouse and payer portals. We never download PHI to local devices.'],
  ['Onboarding (week 1)', 'Your SOPs, payer rules and note templates; shadow review of first work.'],
  ['Pilot (30 days)', 'One FTE, agreed KPIs, weekly report and call.'],
  ['Scale', null],
];

const HowItWorks = () => {
  useSeo('/how-it-works');
  return (
    <>
      <PageHero eyebrow="How the Partnership Works" title="A simple path from first call to a dedicated team." lead="You keep the client relationship. We supply the capacity behind it." />
      <section>
        <div className="wrap">
          <div className="steps" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
            {steps.map(([t, d]) => (
              <div className="step" key={t}><h3>{t}</h3>
                <p>{d || <>Convert to monthly seats and add FTEs as your volume grows.</>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap grid2">
          <div>
            <h2>What we report every week</h2>
            <ul className="check">
              <li>Claims touched and claims resolved</li><li>Dollars collected on worked accounts</li><li>Denials appealed and overturned</li>
              <li>Prior auths submitted, approved, pended and denied</li><li>Posting lag</li><li>QA accuracy score</li>
            </ul>
          </div>
          <div>
            <h2>Communication</h2>
            <p>A dedicated team lead, a shared channel (Slack, Teams or email). We work US business hours.</p>
            <h2 style={{ marginTop: 28 }}>Your clients</h2>
            <p>We stay white-label. Staff never contact your clients unless you instruct them, and our agreement includes a non-solicitation clause.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap prose-wrap">
          <h2>Questions partners ask</h2>
          <dl className="faq">
            <dt>Do you work in our software?</dt><dd>Yes. We work inside your PM/EHR, clearinghouse and payer portals, using accounts you create.</dd>
            <dt>Where is the team?</dt><dd>Pakistan, contracted through our US LLC, Instant Billing Solution LLC.</dd>
            <dt>Can we cancel?</dt><dd>Pilot: at month end. Monthly seats: on the notice terms in your agreement.</dd>
            <dt>Do you do Medicaid or Medicare Advantage work?</dt><dd>Only where your client contracts allow offshore access. We ask at intake.</dd>
            <dt>How is pricing set?</dt><dd>A flat monthly fee per full-time FTE, by role. Pricing on request.</dd>
          </dl>
        </div>
      </section>
      <CtaBand />
    </>
  );
};

export default HowItWorks;
