import { useState } from 'react'


import { Outlet } from 'react-router-dom'
import { Nav } from './components/nav/nav.jsx'
import { Footer } from './components/footer/footer.jsx'

import './main.css'
import './components/components.css'

import ScrollToTop from './utils/ScrollToTop.jsx';


export function App() {

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}


