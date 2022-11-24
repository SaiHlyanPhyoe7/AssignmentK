import React, { useState } from 'react';

import './sidenavbar.css'

import {BrowserRouter as Router,Routes,Route, Outlet} from "react-router-dom";
import MainNavbar from './navbranch/MainNavbar';


const SideNavbar = () => {
    const [customer,setCustomer] = useState(true)
    const [addNewCustomer,setAddNewCustomer] = useState(false)
    const handleCustomer = ()=>{
        setCustomer(true)
    }
    const handleAddNewCustomer = ()=>{
        setCustomer(false)
    }
  return (
      <div className='navContainer'>

        <MainNavbar handleCustomer={handleCustomer} handleAddNewCustomer={handleAddNewCustomer} />
        <div className='layout-container'>
            <div className='layout-handler'>
                <div className='main-content'>
                    <div className='nav'>
                        <div className='profile'>
                            <img className='profile-img' src="https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg" alt="" />
                            <div className='text'>
                                <p>Joseph William</p>
                                <blockquote>Administrator</blockquote>
                            </div>
                        </div>
                    </div>
                    <div className='path'>
                        {
                            customer ? <p>Dashboard <span> > </span> Customers</p> : <p>Dashboard <span> > </span> Add new Customer</p>
                        }
                    </div>
                </div>
            </div>
            <Outlet/>   
        </div>
      </div>
        
  )
}

export default SideNavbar