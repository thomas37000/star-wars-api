import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Character from "../Characters";
import Navbar from "../Navbar";

export default function ReactRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Character />} />
        {/* <Route path="/the-alliance" element={< />} /> */}
        {/* <Route path="/the-empire" element={< />} /> */}
      </Routes>
    </Router>
  );
}
