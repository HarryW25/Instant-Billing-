import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import ServicePage from './Pages/ServicePage';
import ContactUS from './Pages/ContactUS';
import BlogPage from './Pages/BlogPage';
import ScrollToTop from './Common/ScrollToTop';
import Blogsview from './Pages/Blogsview';
import SpecialtiesPage from './Pages/SpecialtiesPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicespage/:serviceId" element={<ServicePage />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/Blogpage" element={<BlogPage />} />
          <Route path="/blog/:id" element={<Blogsview />} />
          <Route path="/specialties/:specialtyId" element={<SpecialtiesPage />} />
         
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />  
    </BrowserRouter>
  );
}

export default App;
