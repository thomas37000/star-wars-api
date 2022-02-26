import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardById from "../Card/CardById";
import Character from "../Characters";
import Alliance from "../Alliance";
import Navbar from "../Navbar";

export default function ReactRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Character />} />
        <Route path="/character/:id" element={<CardById />} />
        <Route path="/the-alliance" element={<Alliance />} />
        {/* <Route path="/the-empire" element={< />} /> */}
      </Routes>
    </Router>
  );
}
