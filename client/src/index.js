import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Home from "./components/test/Home.js";
import About from "./components/test/About.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
