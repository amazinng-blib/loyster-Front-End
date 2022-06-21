import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Page_3 = () => {
  return (
    <section>
      <article className="card-container ">
        <p className="page-1-span skip skip-1">
          skip <FaChevronRight />
        </p>
        <div className="card-container">
          <img src="./images/onboard_3.PNG" alt="picture" />
          <h4>
            Built for The{" "}
            <span className="page-1-span">
              OG's Who Love To <i>Be In Charge</i>
            </span>
          </h4>
          <p>
            With a single tap on loyster, you activate your{" "}
            <span className="page-1-span"> superpower</span> and enjoy{" "}
            <span className="page-1-span">complete ownership </span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Page_3;
