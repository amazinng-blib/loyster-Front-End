import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Page_2 = () => {
  return (
    <section>
      <article className="card-container ">
        <div className="card-container">
          <img src="./images/onboard_2.PNG" alt="picture-2" />
          <h4>
            Faster Than <span className="page-2-span">Lightning</span>, Safer
            Than A <span>Vault</span>
          </h4>
          <p>
            Loyster brings to you{" "}
            <span className="page-2-span">Fast and Secure transactions</span>{" "}
            unlike any you have ever experienced
          </p>
        </div>
      </article>
    </section>
  );
};

export default Page_2;
