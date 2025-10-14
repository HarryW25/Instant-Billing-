import React from 'react'

import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  
  </>
  )
}

export default Layout
