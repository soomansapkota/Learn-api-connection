import React from 'react'
import Navbar from './components/navbar'
import InfoShow from './components/infoShow'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
<Navbar/>
<Outlet/>
<InfoShow/>
</>
  )

}

export default Layout
