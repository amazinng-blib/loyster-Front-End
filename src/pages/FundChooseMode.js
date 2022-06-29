import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const FundChooseMode = () => {
  let navigate = useNavigate();
  return (
    <article className="mode">
      <div className="mode-container">
        <div className="mode-heading">
          {" "}
          <BsArrowLeft />
          <p>Fund Account</p>
        </div>
        <p>Choose Funding Mode</p>

        <form className="form-mode">
          <div>
            <label>Bank Card</label>

            <input type="radio" id="bank" name="radio" />
          </div>

          <div>
            <label>Account No</label>
            <input type="radio" id="acc no" name="radio" />
          </div>

          <div>
            <label>USSD</label>
            <input type="radio" id="ussd" name="radio" />
          </div>
        </form>
        <button
          className=" sign-up-btn btn mode-btn"
          onClick={() => {
            navigate("/fundamount");
          }}
        >
          Fund Account
        </button>
      </div>
    </article>
  );
};

export default FundChooseMode;
