import React, { useState } from "react";
import { FaChevronRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useGlobalContest from "../useGlobalContest";
import { useNavigate } from "react-router-dom";
const Onboarding = () => {
  const { currpage, nextBtn, prevBtn, index, setIndex, array } =
    useGlobalContest();

  let radioValue = ["radio1", "radio2", "radio3"];
  let radioIndex = radioValue[index];

  let navigate = useNavigate();
  return (
    <main>
      <section>
        <h2 className="onboard">Onbording</h2>
        <div className="card-section">
          <p
            className={`skip ${
              index === 0 || index === array.length - 1
                ? "page-1-span skip-1"
                : "page-2-span skip-2"
            }`}
            onClick={nextBtn}
          >
            skip <FaChevronRight />
          </p>
          {currpage}
          <div className="navigation">
            {index === array.length - 1 ? (
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="btn btn-color-prev"
              >
                <FaArrowLeft /> Signup
              </button>
            ) : (
              <button
                className={`btn ${
                  index === 0 ? "btn-color-prev " : "next-btn-1"
                }`}
                onClick={prevBtn}
              >
                {" "}
                <FaArrowLeft /> back
              </button>
            )}
            <input type="radio" value={radioIndex} />
            <input type="radio" value={radioIndex} />
            <input type="radio" value={radioIndex} />
            {index === array.length - 1 ? (
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="btn btn-color-next"
              >
                Login <FaArrowRight />
              </button>
            ) : (
              <button
                className={`btn ${index === 0 ? "btn-color-next" : "next-btn"}`}
                onClick={nextBtn}
              >
                next <FaArrowRight />
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Onboarding;
