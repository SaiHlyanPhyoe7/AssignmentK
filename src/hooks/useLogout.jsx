// firebase imports
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useState } from "react";

export const useLogout = () => {
  const [success, setSuccess] = useState(false);
  const logout = () => {
    signOut(auth)
      .then(() => {
        setSuccess(true);
        console.log("user signed out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return { logout, success };
};
