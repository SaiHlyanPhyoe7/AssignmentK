import React, { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const GuardSignUp = ({ children }) => {
  const nav = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) return children;
  else return <Navigate to="/" />;
};
export default GuardSignUp;
