import React from "react";
import { FaChevronRight } from "react-icons/fa";
import useGlobalContest from "../useGlobalContest";

const Onboard_1 = () => {
  const { nextBtn } = useGlobalContest();
  return (
    <section>
      <article className="card-container ">
        <div className="card-container">
          <img src="./images/onboard_1.PNG" alt="picture" />
          <h4>
            Thinking of Comfort or Convenience?{" "}
            <span className="page-1-span">We Got You Covered</span>
          </h4>
          <p>
            Our Customer oriented policy is reflected in how we treat you to
            comfort and a delightful experience{" "}
            <span className="page-1-span">
              {" "}
              everyday, everytime and everywhere
            </span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Onboard_1;
