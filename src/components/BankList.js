import React from "react";

const BankList = () => {
  return (
    <>
      <label> Bank</label>
      <select className="select" id="bank">
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
          <option value="first Bank of Nigeria">First Bank of Nigeria</option>
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
    </>
  );
};

export default BankList;
