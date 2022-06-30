import React, { useState } from "react";
import Final from "../src/pages/Onboarding";
import Login from "../src/pages/Login";
import SignUp from "./pages/SignUp";
import SelectBank from "./pages/SelectBank";
import ChooseMode from "./pages/ChooseMode";
import Loading from "./components/Loading";
import Card from "./pages/Card";
import SuccessMessage from "./pages/SuccessMessage";
import Home from "./pages/Home";
import Forgotpwd from "./pages/Forgotpwd";
import Otp from "./pages/Otp";
import NewPassword from "./pages/NewPassword";
import PasswordSuccess from "./pages/PasswordSuccess";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import TransactionPin from "./pages/TransactionPin";
import SetPinOtp from "./pages/SetPinOtp";
import PinSuccess from "./PinSuccess";
import FundChooseMode from "./pages/FundChooseMode";
import FundAmount from "./pages/FundAmount";
import FundCard from "./pages/FundCard";
import SavedCard from "./components/SavedCard";
import Airtime from "./pages/Airtime";
import Data from "./pages/Data"
import BuyCredit from "./pages/BuyCredit";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Loyster</title>
        <link rel="canonical" href="http://loyster.com/app" />
      </Helmet>
      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<Final />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Data" element={<Data />} />
            <Route path="/BuyCredit" element={<BuyCredit />} />
            <Route path="/Airtime" element={<Airtime />} />    
            <Route path="/select-bank" element={<SelectBank />} />
            <Route path="/choose-mood" element={<ChooseMode />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/card" element={<Card />} />
            <Route path="/success" element={<SuccessMessage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/fpwd" element={<Forgotpwd />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/newpassword" element={<NewPassword />} />
            <Route path="/p-success" element={<PasswordSuccess />} />
            <Route path="/transactionpin" element={<TransactionPin />} />
            <Route path="/setpin_otp" element={<SetPinOtp />} />
            <Route path="/pin_success" element={<PinSuccess />} />
            <Route path="/fundchoosemode" element={<FundChooseMode />} />
            <Route path="/fundamount" element={<FundAmount />} />
            <Route path="/fundcard" element={<FundCard />} />
            <Route path="/savedcard" element={<SavedCard />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
