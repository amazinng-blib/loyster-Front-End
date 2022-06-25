import React, { useState } from "react";
import { FaGoogle, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="page-section">
      <section className="info">
        <div class="info-img">
          <img src="./loyster-logo-1.png" alt="logo" />
          <img src="./loyster-logo-2.png" alt="logo" />
        </div>

        <form className="input">
          <div className="form-control">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="login-forgot-password" onClick={() =>{
              navigate("/fpwd")
            }}>Forgot Password?</p>
          </div>
        </form>
        <button
          className=" sign-up-btn"
          onClick={() => {
            navigate("/select-bank");
          }}
        >
          Login
        </button>
        <div className="signup-footer">
          <span>or sign up using</span> <br />
          <div className="signup-icons">
            {" "}
            <FaGoogle /> <FaInstagram />{" "}
          </div>
          <p>
            Not a user?{" "}
            <span>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="sign-up-login"
              >
                Sign up
              </button>
            </span>
          </p>
        </div>
      </section>
    </section>
  );
};

export default Login;
