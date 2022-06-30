import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import useLocalStorage from "../hooks/useLocalStorage";
import SavedCard from "../components/SavedCard";
const FundCard = () => {
  const [cardDetails, setCardDetails] = useState({
    number: "",
    date: "",
    ccv: "",
  });

  const [card, setCard] = useLocalStorage("data", []);
  const [show, setShow] = useState(false);

  if (card.number) {
    setShow(!show);
  }

  const [select, setSelect] = useState("bank", "");

  let navigate = useNavigate();
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const onClick = () => {
    if (cardDetails.date && cardDetails.ccv && cardDetails.number) {
      setCard([...card, cardDetails]);
    }
  };

  const removeCard = (id) => {
    const newCard = card.filter((data) => data.id !== id);
    setCard(newCard);
  };

  return (
    <article className="mode">
      <div>
        <div className="mode-heading">
          {" "}
          <BsArrowLeft />
          <p>Set Up Account</p>
        </div>
        <p>Please Enter Your Card Information</p>
        <div className="form-control">
          <label htmlFor="number" className="card-label">
            Card No
          </label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="&#8863; Enter 16 - 19 Card No"
            value={cardDetails.number}
            onChange={handleInputs}
          />
        </div>
        <div>
          <label htmlFor="bank">Bank</label>
          <select
            className="select"
            id="bank"
            onChange={(e) => {
              let selected = e.target.value;
              setSelect(selected);
            }}
          >
            <optgroup>
              <option disabled selected>
                {" "}
                select bank
              </option>
            </optgroup>
            <optgroup>
              <option value="fidelity Bank Plc">Fidelity Bank Plc</option>
            </optgroup>
            <optgroup>
              <option value="first City Monument Bank (FCMB)">
                First City Monument Bank (FCMB)
              </option>
            </optgroup>
            <optgroup>
              <option value="first Bank of Nigeria">
                First Bank of Nigeria
              </option>
            </optgroup>
            <optgroup>
              <option value="union Bank of Nigeria Plc">
                Union Bank of Nigeria Plc
              </option>
            </optgroup>
            <optgroup>
              <option value="united Bank for Africa (UBA)">
                United Bank for Africa (UBA)
              </option>
            </optgroup>
            <optgroup>
              <option value="zenith Bank Plc">Zenith Bank Plc</option>
            </optgroup>
            <optgroup>
              <option value="ecobank">Ecobank</option>
            </optgroup>
            <optgroup>
              <option value="heritage Bank">Heritage Bank</option>
            </optgroup>
            <optgroup>
              <option value="keystone Bank">Keystone Bank</option>
            </optgroup>
            <optgroup>
              <option value="polaris Bank">Polaris Bank</option>
            </optgroup>
            <optgroup>
              <option value="stanbic IBTC Bank">Stanbic IBTC Bank</option>
            </optgroup>
            <optgroup>
              <option value="sterling Bank">Sterling Bank</option>
            </optgroup>
            <optgroup>
              <option value="unity Bank">Unity Bank</option>
            </optgroup>
            <optgroup>
              <option value="WEMA Bank">WEMA Bank</option>
            </optgroup>
          </select>
        </div>
        <div className="date-ccv">
          <div className="card-date">
            <label htmlFor="date">Validity</label>
            <input
              type="date"
              name="date"
              id="date"
              className="card-date-ccv"
              value={cardDetails.date}
              onChange={handleInputs}
            />
          </div>

          <div className="card-ccv">
            <label className="date-ccv-label" htmlFor="ccv">
              {" "}
              ccv
            </label>

            <input
              type="password"
              name="ccv"
              id="ccv"
              placeholder="&#8863;  Enter ccv"
              value={cardDetails.ccv}
              onChange={handleInputs}
            />
          </div>
        </div>
        <div className="checkbox-1">
          <input type="checkbox" name="checkbox" onChange={onClick} />
          <label>Save Card Information</label>
        </div>
        {show && (
          <div className="saved-card">
            <header>
              <p>Amount Due </p>
              <p>#100</p>
            </header>
            <p>Selected Saved Card</p>
            <SavedCard card={card} bank={select} removeCard={removeCard} />
          </div>
        )}
        <button
          className=" sign-up-btn btn mode-btn"
          onClick={() => navigate("/savedcard")}
        >
          Setup Account
        </button>
      </div>
    </article>
  );
};

export default FundCard;
