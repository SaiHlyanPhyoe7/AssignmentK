import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavbar from "../navbar/SideNavbar";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
import UserTable from "../userTable/UserTable";
import CreateUser from "../createUser/CreateUser";
import Guard from "../Guard/Guard";
import GuardSignUp from "../Guard/GuardSignUp";

const RoutesList = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Guard>
                <SideNavbar />
              </Guard>
            }
          >
            <Route
              index
              element={
                <Guard>
                  <UserTable />
                </Guard>
              }
            />
            <Route
              path="create"
              element={
                <Guard>
                  <CreateUser />
                </Guard>
              }
            />
          </Route>
          <Route path="signin" element={<Signin />} />
          <Route
            path="signup"
            element={
              <GuardSignUp>
                <Signup />
              </GuardSignUp>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default RoutesList;
