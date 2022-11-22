import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SideNavbar from '../navbar/SideNavbar';
import Signin from "../signin/Signin"
import Signup from '../signup/Signup';
import UserTable from '../userTable/UserTable';
import CreateUser from '../createUser/CreateUser';


const RoutesList = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<SideNavbar/>}>
                  <Route index element={<UserTable/>}/>
                  <Route path='create' element={<CreateUser/>}/>
                </Route>
                <Route path='signin' element={<Signin/>} />
                <Route path='signup' element={<Signup/>} />
            </Routes>
        </Router>
    </>
  )
}

export default RoutesList