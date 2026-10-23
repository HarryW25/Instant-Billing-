import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import PhiWarning from './PhiWarning';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../ibp/emailjsConfig';

const interests = [
  'Prior authorization', 'AR follow-up', 'Denial management', 'Charge entry',
  'Payment posting', 'Eligibility verification', 'Medical coding',
];

// Free AR Audit / Prior Auth Workflow Review request. Sends through the
// existing EmailJS template, using its name/email/phone/message/services fields.
const AuditForm = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(formRef.current);
    const v = (k) => (fd.get(k) || '').toString().trim();
    const picked = fd.getAll('interests').join(', ');
    const lines = [
      `Request type: ${v('offer')}`,
      `Company: ${v('company')} (${v('company_type')})`,
      `Team size: ${v('team_size') || 'n/a'}`,
      `PM / EHR: ${v('pm_ehr') || 'n/a'}`,
      `Approx. AR over 90 days: ${v('ar_90') || 'n/a'}`,
      `Approx. prior auths per month: ${v('pa_volume') || 'n/a'}`,
      `Areas of interest: ${picked || 'n/a'}`,
      '',
      `Notes: ${v('notes') || 'n/a'}`,
      '',
      'Sender confirmed no PHI is included.',
    ];
    const params = {
      name: `${v('first_name')} ${v('last_name')}`.trim(),
      email: v('email'),
      phone: v('phone'),
      country: 'United States',
      services: picked,
      company: v('company'),
      offer: v('offer'),
      subject: `Website: ${v('offer')} request`,
      message: lines.join('\n'),
    };
    setSending(true);
    setStatus(null);
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('ok');
        toast.success('Request sent. Thank you!', { toastId: 'audit-toast' });
        formRef.current.reset();
      })
      .catch(() => {
        setStatus('err');
        toast.error('Could not send. Please try again or email us.', { toastId: 'audit-toast' });
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="formcard" id="request">
      <h2 style={{ fontSize: 26 }}>Request your free audit or review</h2>
      <PhiWarning />
      <form ref={formRef} onSubmit={handleSubmit} aria-label="Free audit request form">
        <div className="row">
          <div className="field"><label htmlFor="fn">First name*</label><input id="fn" name="first_name" autoComplete="given-name" required /></div>
          <div className="field"><label htmlFor="ln">Last name*</label><input id="ln" name="last_name" autoComplete="family-name" required /></div>
        </div>
        <div className="row">
          <div className="field"><label htmlFor="em">Work email*</label><input id="em" name="email" type="email" autoComplete="email" required /></div>
          <div className="field"><label htmlFor="ph">Phone</label><input id="ph" name="phone" type="tel" autoComplete="tel" /></div>
        </div>
        <div className="field"><label htmlFor="co">Company name*</label><input id="co" name="company" autoComplete="organization" required /></div>
        <div className="row">
          <div className="field"><label htmlFor="ty">Company type*</label>
            <select id="ty" name="company_type" required defaultValue="">
              <option value="" disabled>Select...</option>
              <option>Medical billing company</option><option>RCM firm</option><option>Billing consultant</option><option>Other</option>
            </select></div>
          <div className="field"><label htmlFor="sz">Team size</label>
            <select id="sz" name="team_size" defaultValue="">
              <option value="">Select...</option><option>1-4</option><option>5-20</option><option>21-50</option><option>50+</option>
            </select></div>
        </div>
        <div className="field"><label htmlFor="of">Which free offer?*</label>
          <select id="of" name="offer" required defaultValue="">
            <option value="" disabled>Select...</option>
            <option>Free AR Audit</option><option>Free Prior Auth Workflow Review</option><option>Both</option>
          </select></div>
        <div className="row">
          <div className="field"><label htmlFor="pm">PM / EHR system</label><input id="pm" name="pm_ehr" placeholder="e.g., AdvancedMD, Kareo, eCW" /></div>
          <div className="field"><label htmlFor="ar">Approx. AR over 90 days</label>
            <select id="ar" name="ar_90" defaultValue="">
              <option value="">Select...</option><option>Under $100k</option><option>$100k-$500k</option><option>$500k-$1M</option><option>Over $1M</option>
            </select></div>
        </div>
        <div className="field"><label htmlFor="pv">Approx. prior auths per month</label>
          <select id="pv" name="pa_volume" defaultValue="">
            <option value="">Select...</option><option>Under 100</option><option>100-500</option><option>500-1,500</option><option>Over 1,500</option>
          </select></div>
        <div className="field"><label>Areas of interest</label>
          <div className="row" style={{ gap: '6px 16px' }}>
            {interests.map((i) => (
              <label className="chk" key={i}><input type="checkbox" name="interests" value={i} />{i}</label>
            ))}
          </div></div>
        <div className="field"><label htmlFor="ms">Anything we should know?</label>
          <textarea id="ms" name="notes" rows="3" placeholder="Specialties (imaging, oncology, DME, surgery...), payer mix, backlog size. No patient data." /></div>
        <div className="field"><label className="chk"><input type="checkbox" name="consent" required />I agree to be contacted about this request and confirm I have not included PHI.</label></div>
        <button className="btn btn-primary" style={{ width: '100%' }} type="submit" disabled={sending}>
          {sending ? 'Sending...' : 'Request My Free Audit or Review'}
        </button>
        {status === 'ok' && <div className="ok">Thanks, we'll reply within one business day with next steps and our BAA.</div>}
        {status === 'err' && <div className="err">Something went wrong. Please email <a href="mailto:info@instantbillings.com">info@instantbillings.com</a>.</div>}
        <p className="note" style={{ textAlign: 'center' }}>Or email <a href="mailto:info@instantbillings.com">info@instantbillings.com</a></p>
      </form>
    </div>
  );
};

export default AuditForm;
