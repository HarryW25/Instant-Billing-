import React from 'react';
import { Link } from 'react-router-dom';
import useSeo from '../ibp/useSeo';
import { PageHero } from '../ibp/blocks';

const NotFound = () => {
  useSeo('/404', { title: 'Page not found | Instant Billing Partners', description: 'This page does not exist.', noindex: true });
  return (
    <PageHero title="Page not found." lead="The page you are looking for has moved or no longer exists.">
      <div className="cta-row"><Link className="btn btn-primary" to="/">Go to the home page</Link><Link className="btn btn-ghost" to="/services">See our services</Link></div>
    </PageHero>
  );
};

export default NotFound;
