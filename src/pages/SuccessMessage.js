import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessMessage = () => {
  let navigate = useNavigate();

  return (
    <section className="mode">
      <div className="success-img">
        <div className="success-img-container">
          <img src="./images/success-preview.png" alt="success_img" />
        </div>
        <div className="success-text">
          <p>Card Successfully Added. </p>
          <p> Your account is ready for use. </p>
        </div>

        <button
          className=" sign-up-btn btn mode-btn"
          onClick={() => navigate("/home")}
        >
          Go Home
        </button>

        <p onClick={() => navigate("/card")} className="success-p">
          Add Another Card
        </p>
      </div>
    </section>
  );
};

export default SuccessMessage;
