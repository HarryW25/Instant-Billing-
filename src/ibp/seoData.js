// Per-route SEO data. Used at runtime (useSeo) and by scripts/postbuild-seo.mjs
// to write static <head> tags into dist/<route>/index.html for crawlers.
export const SITE_URL = 'https://www.instantbillings.com';
export const SITE_NAME = 'Instant Billing Partners';

export const seoRoutes = {
  '/': {
    title: 'White-Label AR, Denial & Prior Authorization Teams | Instant Billing Partners',
    description:
      'Dedicated white-label prior authorization, AR follow-up, denial, posting, eligibility and coding FTEs for US billing companies. US LLC contract, BAA signed. Start with a free AR audit or prior auth workflow review.',
  },
  '/services': {
    title: 'White-Label Prior Auth, AR, Denial & Posting Staff for RCM Firms | Instant Billing Partners',
    description:
      'Dedicated FTEs for prior authorization, AR follow-up, denial management, charge entry, payment posting, eligibility verification and coding. Billed per FTE per month. Pricing on request.',
  },
  '/prior-authorization': {
    title: 'White-Label Prior Authorization Specialists for Billing Companies | Instant Billing Partners',
    description:
      'Dedicated white-label prior authorization FTEs for US billing companies: requirement checks, submissions, status tracking and denied-auth follow-up for imaging, oncology, DME and surgery. BAA signed. Free workflow review.',
  },
  '/how-it-works': {
    title: 'How White-Label RCM Partnership Works | Instant Billing Partners',
    description:
      'From a free AR audit to a 30-day pilot to a dedicated team: see how we onboard, report KPIs and protect PHI for US billing companies.',
  },
  '/free-audit': {
    title: 'Free AR Audit & Prior Auth Workflow Review | Instant Billing Partners',
    description:
      'Two free offers for US billing companies: a written AR audit on 50-100 aged claims, or a prior authorization workflow review with turnaround and denial findings. BAA signed first.',
  },
  '/pilot': {
    title: '30-Day One-Seat RCM Pilot | Instant Billing Partners',
    description:
      'Test a dedicated white-label prior auth, AR or denial specialist for 30 days with weekly KPI reports. Paid pilot, no long-term commitment. Pricing on request.',
  },
  '/security': {
    title: 'HIPAA-Aware Process & BAA | Security at Instant Billing Partners',
    description:
      'How we protect PHI as a subcontractor business associate: signed BAA, work inside your systems, MFA, least-privilege access, staff HIPAA training.',
  },
  '/about': {
    title: 'About Instant Billing Partners | Instant Billing Solution LLC',
    description:
      'Instant Billing Partners is the white-label partner brand of Instant Billing Solution LLC, a US company with a dedicated medical billing team in Pakistan.',
  },
  '/contact': {
    title: 'Contact Instant Billing Partners | White-Label RCM Support',
    description:
      'Talk to Instant Billing Partners about dedicated white-label RCM staff, a free AR audit, a prior auth workflow review or a 30-day pilot. Email info@instantbillings.com.',
  },
  '/blog': {
    title: 'RCM, Prior Authorization & Medical Billing Blog | Instant Billing Partners',
    description:
      'Articles on medical billing, coding, denials, AR and prior authorization from the Instant Billing Partners team.',
  },
  '/privacy': {
    title: 'Privacy Policy | Instant Billing Partners',
    description:
      'How Instant Billing Solution LLC handles information submitted through instantbillings.com, including our no-PHI rule for website forms.',
  },
};
