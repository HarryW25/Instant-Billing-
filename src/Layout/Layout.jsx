import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="ibp">
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
