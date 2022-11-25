import React, { useEffect, useState } from "react";

import "./sidenavbar.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import MainNavbar from "./navbranch/MainNavbar";
import { useSelector } from "react-redux";

const SideNavbar = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("account"));
    setName(account.email);
  }, []);
  const spliceName = name.slice(0, -10);
  console.log(name);
  const [customer, setCustomer] = useState(true);
  const [addNewCustomer, setAddNewCustomer] = useState(false);
  const handleCustomer = () => {
    setCustomer(true);
  };
  const handleAddNewCustomer = () => {
    setCustomer(false);
  };
  return (
    <div className="navContainer">
      <MainNavbar
        handleCustomer={handleCustomer}
        handleAddNewCustomer={handleAddNewCustomer}
      />
      <div className="layout-container">
        <div className="layout-handler">
          <div className="main-content">
            <div className="nav">
              <div className="profile">
                <img
                  className="profile-img"
                  src="https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg"
                  alt=""
                />
                <div className="text">
                  <p>Joseph William</p>
                  <span className="title_name">{spliceName}</span>
                  <blockquote>Administrator</blockquote>
                </div>
              </div>
            </div>
            <div className="path">
              {customer ? (
                <p>
                  Dashboard <span> > </span> Customers
                </p>
              ) : (
                <p>
                  Dashboard <span> > </span> Add new Customer
                </p>
              )}
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default SideNavbar;
