import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import PhiWarning from './PhiWarning';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../ibp/emailjsConfig';

// General contact form, same EmailJS service/template/key as before.
const ContactForm = ({ title = 'Send us a message' }) => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(formRef.current);
    const v = (k) => (fd.get(k) || '').toString().trim();
    const params = {
      name: v('name'),
      email: v('email'),
      phone: v('phone'),
      company: v('company'),
      country: '',
      services: v('topic'),
      subject: `Website contact: ${v('topic') || 'General'}`,
      message: `Company: ${v('company') || 'n/a'}\nTopic: ${v('topic') || 'n/a'}\n\n${v('message')}\n\nSender confirmed no PHI is included.`,
    };
    setSending(true);
    setStatus(null);
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('ok');
        toast.success('Message sent successfully!', { toastId: 'contact-toast' });
        formRef.current.reset();
      })
      .catch(() => {
        setStatus('err');
        toast.error('Failed to send message. Try again.', { toastId: 'contact-toast' });
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="formcard">
      <h2 style={{ fontSize: 26 }}>{title}</h2>
      <PhiWarning />
      <form ref={formRef} onSubmit={handleSubmit} aria-label="Contact form">
        <div className="row">
          <div className="field"><label htmlFor="c-name">Name*</label><input id="c-name" name="name" autoComplete="name" required /></div>
          <div className="field"><label htmlFor="c-email">Work email*</label><input id="c-email" name="email" type="email" autoComplete="email" required /></div>
        </div>
        <div className="row">
          <div className="field"><label htmlFor="c-co">Company</label><input id="c-co" name="company" autoComplete="organization" /></div>
          <div className="field"><label htmlFor="c-ph">Phone</label><input id="c-ph" name="phone" type="tel" autoComplete="tel" /></div>
        </div>
        <div className="field"><label htmlFor="c-topic">Topic</label>
          <select id="c-topic" name="topic" defaultValue="">
            <option value="">Select...</option>
            <option>Prior authorization desk</option><option>AR follow-up / denials</option><option>Posting / charge entry</option>
            <option>Eligibility / coding</option><option>30-day pilot</option><option>Pricing sheet</option><option>Security packet</option><option>Other</option>
          </select></div>
        <div className="field"><label htmlFor="c-msg">Message* (no PHI)</label><textarea id="c-msg" name="message" rows="4" required /></div>
        <div className="field"><label className="chk"><input type="checkbox" required />I confirm this message contains no PHI.</label></div>
        <button className="btn btn-primary" style={{ width: '100%' }} type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
        {status === 'ok' && <div className="ok">Thanks, we'll reply within one business day.</div>}
        {status === 'err' && <div className="err">Something went wrong. Please email <a href="mailto:info@instantbillings.com">info@instantbillings.com</a>.</div>}
      </form>
    </div>
  );
};

export default ContactForm;
