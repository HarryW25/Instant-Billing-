import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Favicon/logo.png';

export const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/prior-authorization', label: 'Prior Authorization' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/pilot', label: 'Pilot' },
  { to: '/security', label: 'Security & HIPAA' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export const Brand = ({ light = false }) => (
  <Link className="brand" to="/" style={light ? { color: '#fff' } : undefined} aria-label="Instant Billing Partners home">
    <img src={logo} alt="Instant Billing logo" style={light ? { background: '#fff', borderRadius: 6, padding: 2 } : undefined} />
    <span>
      Instant Billing Partners
      <small style={light ? { color: '#9fb2c8' } : undefined}>WHITE-LABEL RCM TEAMS</small>
    </span>
  </Link>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap nav">
        <Brand />
        <nav aria-label="Main">
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} style={({ isActive }) => (isActive ? { color: 'var(--green-d)', fontWeight: 700 } : undefined)}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="btn btn-primary" to="/free-audit">Free Audit</Link>
        <button className="menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      <div className={`mobile-nav${open ? ' open' : ''}`}>
        {navLinks.map((l) => (
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link className="btn btn-primary" to="/free-audit" onClick={() => setOpen(false)} style={{ marginTop: 10, color: '#fff', textAlign: 'center' }}>
          Free Audit
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
