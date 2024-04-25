import React from 'react'
import './dash.css'
import { TbDashboard, TbLogout } from 'react-icons/tb'
import { BsPersonCircle, BsFilePersonFill, BsCarFront } from 'react-icons/bs'
import { BsMap, BsReceipt, BsPersonCheck } from 'react-icons/bs'

import { NavLink } from 'react-router-dom'
const MainDash = () => {
  return (
   <div className='sidebar bg-tertiary'>
    <div className='logo relative bg-transparent text-gray-500'>
<NavLink className='absolute left-0 bg-transparent text-gray-500'>
    MovZen
</NavLink>
    </div>
    <ul className='menu'>
        <li className="active">
            <a href="">
                <i className='text-xl'>
                    <TbDashboard />
                </i>
            <span>Dashboard</span>

            </a>

        </li>
        <li>
                    <a href="">
                        <i class="ri-user-fill">
                            <BsPersonCircle />
                            </i>                     
                       <span>Profile</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="ri-user-fill">
                            <BsCarFront />
                            </i>                     
                       <span>Gerer mes vehicules</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="ri-user-fill">
                            <BsMap />
                            </i>                     
                       <span>Map</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="ri-user-fill">
                            <BsReceipt />
                            </i>                     
                       <span>Reservation</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="ri-user-fill">
                            <BsPersonCheck />
                            </i>                     
                       <span>Employé</span>
                    </a>
                </li>


                <li class="logout">
                    <a href="">
                        <i class="ri-logout-box-r-fill"> <TbLogout /></i>             
                      <span>Logout</span>
                    </a>
                </li>
    </ul>
   </div>

  )
}

export default MainDash
