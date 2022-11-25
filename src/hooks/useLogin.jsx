import { useState } from "react";

// firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const login = (email, password) => {
    setError(null);
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        // console.log("user logged in :", res.user);
      })
      .catch((err) => {
        setLoading(false);
        setSuccess(false);
        setError(err.message);
      });
  };
  return { error, login, success, loading };
};
