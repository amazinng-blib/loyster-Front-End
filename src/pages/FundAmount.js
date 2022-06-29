import React, { useState } from "react";
// import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const FundAmount = () => {
  const [amount, setAmount] = useState("X");
  let navigate = useNavigate();
  return (
    <div className="page-section">
      <form className="input">
        <div className="form-control">
          <label style={{ marginBottom: "1rem" }}>
            {" "}
            Please Enter Funding Amount
          </label>
          <input
            type="tel"
            placeholder="100"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          className="sign-up-btn btn mode-btn"
          onClick={() => navigate("/fundcard")}
        >
          Pay {amount} Naira
        </button>
      </form>
    </div>
  );
};

export default FundAmount;
