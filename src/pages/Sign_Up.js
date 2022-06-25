import React, { useState } from "react";
import { FaGoogle, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sign_Up = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  let navigate = useNavigate();
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
          </div>
          <div className="form-control">
            <label htmlFor="re-enterpassword">Re-enter password</label>
            <input
              type="password"
              id="re-enterpassword"
              name="re-enterpassword"
              value={reEnterPassword}
              onChange={(e) => setReEnterPassword(e.target.value)}
              required
            />
          </div>
        </form>
        <button type="submit" className=" sign-up-btn" onClick={handleSubmit}>
          Sign up
        </button>
        <div className="signup-footer">
          <span>or sign up using</span> <br />
          <div className="signup-icons">
            {" "}
            <FaGoogle /> <FaInstagram />{" "}
          </div>
          <p>
            Already a user?{" "}
            <span>
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="sign-up-login"
              >
                Login
              </button>
            </span>
          </p>
        </div>
      </section>
    </section>
  );
};

export default Sign_Up;
