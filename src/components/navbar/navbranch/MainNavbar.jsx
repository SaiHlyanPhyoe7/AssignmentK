import React from 'react'
import {FaInfoCircle, FaUserCircle, FaUserFriends} from "react-icons/fa";
import {MdOutlineCreate} from "react-icons/md";
import {NavLink} from "react-router-dom";
import {BiLogIn} from "react-icons/bi";
import Signup from '../../signin/Signin';
import {useLogout} from '../../../hooks/useLogout'


const MainNavbar = ({handleAddNewCustomer,handleCustomer}) => {
    const {logout} = useLogout()

  return (
    <div className='sidebar'>
            <h1 className='titleside'>CRM App</h1>
            <ul>    
                <li className='primary'>Navigation</li>
                <NavLink onClick={handleCustomer} to='/'><li className='list'><FaUserFriends className='icon'/><span>Customers</span></li></NavLink>
                <NavLink onClick={handleAddNewCustomer} to='/create'><li className='list'><FaInfoCircle className='icon'/><span>Add new customers</span></li></NavLink>
                <NavLink to='signin'>
                    <li className='list'>
                        <BiLogIn className='icon'/>
                        <span>Login</span>
                    </li>
                </NavLink>
                <NavLink to='signup'>
                    <li className='list'>
                        <MdOutlineCreate className='icon'/>
                        <span>Signup</span>
                    </li>
                </NavLink>
                <li onClick={logout} className='list'><FaUserCircle className='icon'/><span>Log Out</span></li>
            </ul>
        </div>
  )
}

export default MainNavbar