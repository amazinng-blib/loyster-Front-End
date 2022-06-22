import React, { useState, useEffect } from "react";
import { FaChevronRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useGlobalContest from "../useGlobalContest";
import { useNavigate } from "react-router-dom";
const Onboarding = () => {
  const { currpage, nextBtn, prevBtn, index, setIndex, array } =
    useGlobalContest();
  const [radio, setRadio] = useState(0);

  let navigate = useNavigate();
  return (
    <main>
      <section className="card-section">
        <h2 className="onboard">Onbording</h2>
        <div>
          <button
            onClick={nextBtn}
            disabled={index - 1 >= array.length - 2}
            className={`skip ${
              index === 0
                ? "page-1-span skip-1"
                : index === array.length - 1
                ? "page-1-span skip-1"
                : "page-2-span skip-2"
            }`}
          >
            skip <FaChevronRight />
          </button>
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
            <label className="radio">
              {index === 0 && (
                <input
                  type="radio"
                  name="sample"
                  className="radio_input"
                  checked
                />
              )}
              <div className="checkmark"></div>
            </label>
            <label className="radio">
              {index === 1 && (
                <input
                  type="radio"
                  name="sample"
                  className="radio_input"
                  checked
                />
              )}
              <div className="checkmark-1"></div>
            </label>
            <label className="radio">
              {index === 2 && (
                <input
                  type="radio"
                  name="sample"
                  className="radio_input"
                  checked
                />
              )}
              <div className="checkmark"></div>
            </label>

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
