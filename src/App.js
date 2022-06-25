import React, { useState } from "react";
import Final from "../src/pages/Onboarding";
import Login from "../src/pages/Login";
import Sign_Up from "../src/pages/Sign_Up";
import SelectBank from "./pages/SelectBank";
import ChooseMode from "./components/ChooseMode";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<Final />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sign_Up />} />

            <Route path="/select-bank" element={<SelectBank />} />
            <Route path="/choose-mood" element={<ChooseMode />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
