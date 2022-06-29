import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TransactionPin = () => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/setpin_otp");
  };
  return (
    <section className="page-section">
      <section className="info">
        <form className="input">
          <p style={{ marginBottom: "2rem" }}>Set Transaction Pin</p>
          <div className="form-control">
            <label htmlFor="pin">Enter Pin</label>
            <input
              type="password"
              id="pin"
              name="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="pin-2">Confirm Pin</label>
            <input
              type="password"
              id="pin-2"
              name="pin-2"
              value={confirmPin}
              onChange={(e) => setConfirmPin(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="question">Enter Security Question</label>
            <input
              type="text"
              id="question"
              name="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="answer">Enter Your Answer</label>
            <input
              type="text"
              id="answer"
              name="Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
        </form>
        <button type="submit" className=" sign-up-btn" onClick={handleSubmit}>
          Set Pin
        </button>
      </section>
    </section>
  );
};

export default TransactionPin;
