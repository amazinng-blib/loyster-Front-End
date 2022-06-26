import React, { useState } from "react";
import Final from "../src/pages/Onboarding";
import Login from "../src/pages/Login";
import Sign_Up from "../src/pages/Sign_Up";
import SelectBank from "./pages/SelectBank";
import ChooseMode from "./pages/ChooseMode";
import Loading from "./components/Loading";
import Card from "./pages/Card";
import SuccessMessage from "./pages/SuccessMessage";
import Home from "./pages/Home";
import Forgotpwd from "./pages/Forgotpwd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
            <Route path="/signup" element={<Sign_Up />} />

            <Route path="/select-bank" element={<SelectBank />} />
            <Route path="/choose-mood" element={<ChooseMode />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/card" element={<Card />} />
            <Route path="/success" element={<SuccessMessage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/fpwd" element={<Forgotpwd />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
