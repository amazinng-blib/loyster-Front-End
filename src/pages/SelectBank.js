import React, { useState } from "react";
import BankList from "../components/BankList";
import { useNavigate } from "react-router-dom";
const SelectBank = () => {
  const [accountNum, setAccountNum] = useState("");
  const [loading, setLoading] = useState(false);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    navigate("/loading");

    // fech data
    const response = await fetch(url);
    const cart = await response.json();
    console.log(cart);
    // after fetching data, setLoading false
    setLoading(false);
    navigate("/choose-mood");
  };

  return (
    <section className="page-section select-section">
      <p>
        Please select the bank Account you would love to link to your Loyster
        Account
      </p>
      <div>
        <label> Select Bank</label>
        <BankList />
      </div>
      <div className="bank-form form-control">
        <label Htmlfor="accountNumber">Enter Account No</label>
        <input
          type="text"
          id="accountNum"
          placeholder="Account No"
          value={accountNum}
          onChange={(e) => setAccountNum(e.target.value)}
        />
      </div>
      <button type="submit" className=" sign-up-btn btn" onClick={fetchData}>
        Continue
      </button>
    </section>
  );
};

export default SelectBank;
