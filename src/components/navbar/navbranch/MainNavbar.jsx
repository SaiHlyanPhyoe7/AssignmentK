import React, { useEffect, useState } from "react";
import { FaInfoCircle, FaUserCircle, FaUserFriends } from "react-icons/fa";
import { MdOutlineCreate } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { BiLogIn, BiMenu } from "react-icons/bi";
import { GiCrossedBones } from "react-icons/gi";
import Signup from "../../signin/Signin";
import { useLogout } from "../../../hooks/useLogout";

const MainNavbar = ({ handleAddNewCustomer, handleCustomer }) => {
  const [toggleButton, setToggleButton] = useState(false);
  const { logout, success } = useLogout();
  const nav = useNavigate();
  const handleToggler = () => {
    setToggleButton(!toggleButton);
    console.log("Toggler Click");
  };
  const logoutHandler = () => {
    logout();
    localStorage.removeItem("account");
  };

  useEffect(() => {
    // console.log(success);
    if (success) {
      nav("/signin");
    }
  }, [success]);

  return (
    <>
      <div>
        {toggleButton ? (
          <div onClick={handleToggler} className="toggler_x">
            <GiCrossedBones className="toggler-icons-one" />
          </div>
        ) : (
          <div onClick={handleToggler} className="toggler">
            <BiMenu className="toggler-icons" />
          </div>
        )}
      </div>

      <div
        className={`${
          toggleButton ? `sidebar_block` : `sidebar_none`
        } sidebar sidebar_block`}
      >
        <h1 className="titleside">CRM App</h1>
        <ul>
          <li className="primary">Navigation</li>
          <NavLink onClick={handleCustomer} to="/">
            <li className="list">
              <FaUserFriends className="icon" />
              <span>Customers</span>
            </li>
          </NavLink>
          <NavLink onClick={handleAddNewCustomer} to="/create">
            <li className="list">
              <FaInfoCircle className="icon" />
              <span>Add new customers</span>
            </li>
          </NavLink>
          <NavLink to="signin">
            <li className="list">
              <BiLogIn className="icon" />
              <span>Login</span>
            </li>
          </NavLink>
          <NavLink to="signup">
            <li className="list">
              <MdOutlineCreate className="icon" />
              <span>Signup</span>
            </li>
          </NavLink>
          <li onClick={logoutHandler} className="list">
            <FaUserCircle className="icon" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainNavbar;
