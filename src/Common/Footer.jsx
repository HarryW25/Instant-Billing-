import React from 'react';
import { Link } from 'react-router-dom';
import { Brand } from './Navbar';

const Footer = () => (
  <footer>
    <div className="wrap">
      <div className="fgrid">
        <div>
          <Brand light />
          <p>
            A partner brand of Instant Billing Solution LLC (New Mexico, USA). White-label prior authorization, AR,
            denial, posting, eligibility and coding teams for US billing companies and RCM firms.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/prior-authorization">Prior Authorization</Link></li>
            <li><Link to="/services#ar">AR Follow-Up</Link></li>
            <li><Link to="/services#denials">Denial Management</Link></li>
            <li><Link to="/services#charge-entry">Charge Entry</Link></li>
            <li><Link to="/services#posting">Payment Posting</Link></li>
            <li><Link to="/services#eligibility">Eligibility Verification</Link></li>
            <li><Link to="/services#coding">Medical Coding</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/how-it-works">How the Partnership Works</Link></li>
            <li><Link to="/pilot">Pilot Program</Link></li>
            <li><Link to="/security">Security &amp; HIPAA</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@instantbillings.com">info@instantbillings.com</a></li>
            <li>+1 (332) 378-6508</li>
            <li>1209 Mountain Road Pl NE, Ste R, Albuquerque, NM 87110, USA</li>
            <li>We work US business hours</li>
            <li><Link to="/free-audit">Request a free AR audit</Link></li>
            <li><Link to="/free-audit#pa">Free prior auth workflow review</Link></li>
          </ul>
        </div>
      </div>
      <div className="legal">
        © {new Date().getFullYear()} Instant Billing Solution LLC. Delivery team located in Pakistan. HIPAA is a law, not a
        certification; we follow a HIPAA-aware process and sign BAAs with every partner. Please do not send PHI through this website.
      </div>
    </div>
  </footer>
);

export default Footer;
