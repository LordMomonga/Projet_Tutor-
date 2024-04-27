import React from 'react'
import {Outlet} from "react-router-dom"
import '../../App.css'

import Sidebar from "../../layout/Sidebar/Sidebar"
import Content from '../../layout/Content/Content'
import { NavLink } from 'react-router-dom'

const MainDash = () => {
  return (
   <div className='app'>
   <Sidebar />
    <Content />
    </div>
  )
}

export default MainDash
