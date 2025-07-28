import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Stars from './components/Stars/Stars'

function Layout() {
  return (
    <>
      <Stars/>
      <Navbar/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  )
}

export default Layout
