import "./signin.css";
import { BsEnvelope, BsPersonCircle } from "react-icons/bs";
import { useLogin } from "../../hooks/useLogin";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../animation/loadingComponent/LoadingComponent";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login, success, loading } = useLogin();
  const nav = useNavigate();
  console.log(loading);
  useEffect(() => {
    console.log(success);
    if (success && !localStorage.getItem("account")) {
      localStorage.setItem("account", JSON.stringify({ email, password }));
    }
    if (success) {
      nav("/");
    }
  }, [success]);
  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("account"));
    if (account) {
      login(account.email, account.password);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <>
      <div className="container">
        <form className="form-container" onSubmit={handleSubmit}>
          <h1 className="title">Sign In</h1>
          <div className="input-container">
            <label htmlFor="username">
              <BsPersonCircle className="icon" />
            </label>
            <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="input"
              placeholder="Enter email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">
              <BsEnvelope className="icon" />
            </label>
            <input
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="input"
              placeholder="Enter Password"
            />
          </div>
          <button className="btn">Sign In</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Signin;
