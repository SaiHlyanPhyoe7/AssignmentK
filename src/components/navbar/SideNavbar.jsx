import React, { useState } from 'react';

import './sidenavbar.css'

import {BrowserRouter as Router,Routes,Route, Outlet} from "react-router-dom";
import CreateUser from '../createUser/CreateUser';
import UserTable from '../userTable/UserTable';
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
                            <img className='profile-img' src="https://media.newyorker.com/photos/5ba177da9eb2f7420aadeb98/master/w_2560%2Cc_limit/Cohen-Linus-Torvalds.jpg" alt="" />
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