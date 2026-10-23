import React from 'react';
import { Link } from 'react-router-dom';
import useSeo from '../ibp/useSeo';
import { TrustBar, ServiceCards, Steps, CtaBand } from '../ibp/blocks';

const Home = () => {
  useSeo('/');
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">For US medical billing companies &amp; RCM firms</div>
            <h1>Add dedicated prior auth, AR and denial specialists, under your brand.</h1>
            <p className="lead">
              Instant Billing Partners gives you full-time, white-label billing staff who work inside your systems, follow your SOPs,
              and stay invisible to your clients. Prior authorization is one of our strongest desks, worked alongside AR and denials,
              not as an add-on. One flat monthly rate per FTE. Contracted through a US LLC, with a BAA signed before day one.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/free-audit">Get a Free AR Audit</Link>
              <Link className="btn btn-ghost" to="/free-audit#pa">Free Prior Auth Workflow Review</Link>
            </div>
            <p className="note" style={{ color: '#cfdbe8' }}>
              <Link to="/prior-authorization" style={{ color: '#b5d96a' }}>Prior authorization teams</Link>: submissions, status tracking
              and denied-auth follow-up for imaging, oncology, DME and surgery.
            </p>
          </div>
          <div className="hero-card">
            <h3>Start without risk</h3>
            <ol>
              <li><b>Free AR audit or prior auth workflow review.</b> Send a de-identified or BAA-covered sample of 50-100 aged claims, or walk us through your auth workflow. We return a written findings report.</li>
              <li><b>Paid 30-day pilot.</b> One dedicated FTE on your queue, with weekly KPI reports. Cancel at the end of the month.</li>
              <li><b>Scale by the seat.</b> Add FTEs as your client book grows.</li>
            </ol>
            <p className="note">Per-FTE pricing on request.</p>
          </div>
        </div>
      </section>
      <TrustBar />

      <section id="services">
        <div className="wrap">
          <div className="center">
            <h2>Core desks: Prior Authorization, AR and Denials</h2>
            <p className="sub">Each seat is a full-time specialist assigned to your account, trained on your payer mix and working your queues during US business hours.</p>
          </div>
          <ServiceCards />
          <p className="note center" style={{ marginTop: 22 }}>All desks are billed per FTE per month. <Link to="/services">See all services</Link></p>
        </div>
      </section>

      <section className="alt" id="how">
        <div className="wrap">
          <div className="center">
            <h2>How the partnership works</h2>
            <p className="sub">You keep the client relationship. We supply the capacity behind it.</p>
          </div>
          <Steps />
          <p className="center" style={{ marginTop: 28 }}><Link className="btn btn-outline" to="/how-it-works">See the full process</Link></p>
        </div>
      </section>

      <section id="pilot">
        <div className="wrap grid2">
          <div>
            <div className="eyebrow" style={{ color: 'var(--green-d)' }}>Pilot Program</div>
            <h2>Test one seat for 30 days before you commit</h2>
            <p>The pilot is a paid, one-FTE engagement on a real queue. We agree the KPIs up front (claims touched per day, resolution rate, dollars recovered, QA accuracy) and report them every week. At day 30 you decide: convert, change scope, or walk away.</p>
            <Link className="btn btn-primary" to="/pilot">See the 30-Day Pilot</Link>
          </div>
          <div className="card">
            <h3>Included in the pilot</h3>
            <ul className="check">
              <li>One dedicated, full-time specialist</li><li>Onboarding to your SOPs and payer mix</li>
              <li>Weekly KPI report and review call</li><li>QA sampling of completed work</li><li>BAA signed before any PHI access</li>
            </ul>
            <p className="note">Pilot pricing on request.</p>
          </div>
        </div>
      </section>

      <section className="alt" id="security">
        <div className="wrap grid2">
          <div>
            <h2>Security &amp; HIPAA</h2>
            <p>We handle PHI as a subcontractor business associate. Every partnership starts with a signed Business Associate Agreement, and our staff follow written HIPAA privacy and security procedures.</p>
            <ul className="check">
              <li>BAA signed with every partner</li><li>Work done inside your PM/EHR, no local copies of PHI</li>
              <li>MFA on all accounts; least-privilege access</li><li>HIPAA training for all staff; signed NDAs</li><li>Offshore location disclosed in writing</li>
            </ul>
            <Link className="btn btn-outline" to="/security">Read our security approach</Link>
          </div>
          <div>
            <p className="note">Medicare Advantage and Medicaid work: some plan contracts restrict offshore access. We ask at intake and only assign queues your contracts allow.</p>
            <p className="note">HIPAA does not have an official certification. We do not currently hold SOC 2 or ISO 27001, and we will answer your security questionnaire in full.</p>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div>
            <h2>About Instant Billing Partners</h2>
            <p>Instant Billing Partners is the partner brand of Instant Billing Solution LLC, a US-registered company with a delivery team of about 10 medical billing professionals in Pakistan. Our team works claims, denials, prior authorizations and AR for US practices, and we now put that experience to work behind billing companies like yours.</p>
            <Link className="btn btn-outline" to="/about">About us</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default Home;
