import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import BankList from "../components/BankList";
import { useNavigate } from "react-router-dom";

const Card = () => {
  let navigate = useNavigate();
  return (
    <article className="mode">
      <div>
        <div className="mode-heading">
          {" "}
          <BsArrowLeft />
          <p>Set Up Account</p>
        </div>

        <p>Please Enter Your Card Information</p>

        <div className="form-control">
          <label className="card-label">Card No</label>
          <input type="text" placeholder="&#8863; Enter 16 - 19 Card No" />
        </div>
        <div>
          <label>Bank</label>
          <BankList />
        </div>
        <div className="date-ccv">
          <div className="card-date">
            <label>Validity</label>
            <input type="date" className="card-date-ccv" />
          </div>

          <div className="card-ccv">
            <label className="date-ccv-label"> ccv</label>

            <input type="password" placeholder="&#8863;  Enter ccv" />
          </div>
        </div>
        <div className="checkbox-1">
          <input type="checkbox" name="checkbox" />
          <label>Save Card Information</label>
        </div>
        <div className="checkbox-2">
          <input type="checkbox" name="checkbox" />{" "}
          <label>
            I have read and agreed to{" "}
            <span>Loyster's Terms and Conditions</span>
          </label>
        </div>
        <button
          className=" sign-up-btn btn mode-btn"
          onClick={() => navigate("/success")}
        >
          Setup Account
        </button>
      </div>
    </article>
  );
};

export default Card;
