import Footer from "../components/Footer";
import { BiBell } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";

const Home = () => {
  let navigate = useNavigate;
  const [value, setValue] = useState("");

  const onSearch = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="Home-page">
      <div className="Home">
        <div className="top">
          <p>Hello Abina!</p>{" "}
          <BiBell style={{ width: "29px", height: "32px" }} />
        </div>
        <div className="search ">
          <FiSearch className="s-icon" style={{ fontSize: "20px" }} />
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            value={value}
            onChange={onSearch}
          ></input>
        </div>
        <div className="bottom">
          <p>Top Action</p>
          <div className="actions">
            <div className="half">
              <span className="box">
                <img src="./imgs/money-transfer.jpg" className="img"></img>
                <p>Transfer</p>
              </span>

              <span className="box2">
                <img src="./imgs/i-billing.png" className="img1"></img>
                <p>Pay Bills</p>
              </span>
            </div>

            <div className="half">
              <span className="box1">
                <img
                  src="./imgs/emojione_mobile-phone.png"
                  className="img2"
                ></img>
                <p>Data & airtime</p>
              </span>

              <span className="box3">
                <img src="./imgs/Money bag.jpg" className="img3"></img>
                <p>Check Balance</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
