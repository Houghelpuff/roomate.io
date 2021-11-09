import React from "react";
import { Link } from "react-router-dom";

// import Navbar from "./components/nav/Navbar.js";

const App = () => {
  return (
    <div>
      <h1>Bookstore</h1>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default App;
