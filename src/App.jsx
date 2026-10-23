import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import ScrollToTop from './Common/ScrollToTop';
import Home from './Pages/Home';
import Services from './Pages/Services';
import PriorAuth from './Pages/PriorAuth';
import HowItWorks from './Pages/HowItWorks';
import FreeAudit from './Pages/FreeAudit';
import Pilot from './Pages/Pilot';
import Security from './Pages/Security';
import About from './Pages/About';
import ContactUS from './Pages/ContactUS';
import BlogPage from './Pages/BlogPage';
import Blogsview from './Pages/Blogsview';
import Privacy from './Pages/Privacy';
import NotFound from './Pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Old provider-facing service URLs: send prior-auth related ones to the PA page,
// everything else to /services. (vercel.json also issues 301s for crawlers.)
const OldService = () => {
  const { serviceId = '' } = useParams();
  const to = /auth/i.test(serviceId) ? '/prior-authorization' : '/services';
  return <Navigate to={to} replace />;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prior-authorization" element={<PriorAuth />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/free-audit" element={<FreeAudit />} />
          <Route path="/free-ar-audit" element={<Navigate to="/free-audit" replace />} />
          <Route path="/pilot" element={<Pilot />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/Blogpage" element={<Navigate to="/blog" replace />} />
          <Route path="/blog/:id" element={<Blogsview />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/servicespage/:serviceId" element={<OldService />} />
          <Route path="/specialties/:specialtyId" element={<Navigate to="/services" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
