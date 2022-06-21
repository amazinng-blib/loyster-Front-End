import React, { useState, useEffect } from "react";

import Final from "./components/Onboarding";
import Login from "./components/Login";
import Sign_Up from "./components/Sign_Up";
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
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
