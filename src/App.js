import React, { useState, useEffect } from "react";
import { FaChevronRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import useGlobalContest from "./useGlobalContest";
const App = () => {
  const [loading, setLoading] = useState(true);

  const { currpage, nextBtn, prevBtn, index, setIndex, array } =
    useGlobalContest();

  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }
  return (
    !loading && (
      <main>
        <section>
          <h2 className="onboard">Onbording</h2>
          <div className="card-section">
            {currpage}
            <div className="navigation">
              {index === array.length - 1 ? (
                <button className="btn">Sign up</button>
              ) : (
                <button className="btn prev" onClick={prevBtn}>
                  {" "}
                  <FaArrowLeft /> back
                </button>
              )}
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
              {index === array.length - 1 ? (
                <button className="btn">Login</button>
              ) : (
                <button className="btn next" onClick={nextBtn}>
                  next <FaArrowRight />
                </button>
              )}
            </div>
          </div>
        </section>
      </main>
    )
  );
};

export default App;
