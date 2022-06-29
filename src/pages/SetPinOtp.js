import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SetPinOtp = () => {
  const [otp, setOtp] = useState(new Array(5).fill(""));

  let navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // focus next input box

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <section className="mode">
      <div className="otp-container">
        <div className="img-div">
          <img src="./images/otp-image-preview.png" alt="otp-img" />
        </div>

        <p style={{ marginTop: "1rem" }}>OTP successfully sent to your mail</p>
        <p style={{ marginTop: "1rem" }}>
          Please enter the OTP sent in the box provided below
        </p>

        {otp.map((data, index) => {
          return (
            <input
              type="text"
              className="otp-field"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
        <button
          className=" sign-up-btn btn"
          onClick={() => navigate("/pin_success")}
        >
          Continue
        </button>
        <center style={{ cursor: "pointer" }}>
          <p className="resend">Resend OTP</p>
        </center>
      </div>
    </section>
  );
};

export default SetPinOtp;
