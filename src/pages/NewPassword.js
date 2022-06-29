import React from "react";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  let navigate = useNavigate();
  return (
    <section className="newpassword">
      <p style={{ marginBottom: "1.3rem" }}>Enter New Password</p>

      <div className="form-control">
        <label> New Password</label>
        <input type="password" name="password" />
      </div>
      <div className="form-control">
        <label> Re-Enter Password</label>
        <input type="password" name="password" />
      </div>
      <button
        className=" sign-up-btn btn"
        onClick={() => {
          navigate("/p-success");
        }}
      >
        Confirm password
      </button>
    </section>
  );
};

export default NewPassword;
