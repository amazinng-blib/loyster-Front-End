import React from "react";
import { useNavigate } from "react-router-dom";

const PinSuccess = () => {
  let navigate = useNavigate();
  return (
    <section className="mode">
      <div className="success-img">
        <div className="success-img-container">
          <img src="./images/pin-success-img-preview.png" alt="success_img" />
        </div>
        <div className="success-text">
          <p>Pin Successfully Created . </p>
        </div>

        <button
          className=" sign-up-btn btn mode-btn"
          onClick={() => navigate("/home")}
        >
          Go Home
        </button>
      </div>
    </section>
  );
};

export default PinSuccess;
