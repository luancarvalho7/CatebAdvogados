import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from './components/nav/nav.jsx'
import './main.css'
import './components/components.css'

export function App() {

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}


