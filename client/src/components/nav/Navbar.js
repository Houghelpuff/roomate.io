import React, { useState } from "react";

import { NavContainer, LiSuButtons } from "./styledComponents";

const Navbar = () => {
  const initData = Object.freeze({
    username: "",
    password: "",
  });

  const [formData, setFormData] = useState(initData);
  const [successStatus, setSuccessStatus] = useState(1);

  const inputStyles = {
    outline: "1px solid black",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const sendData = () => {
    fetch("http://localhost:3500/api/user/create", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("in navbar component: " + data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
  };

  return (
    <>
      <div></div>
      <form>
        <label>
          <strong>Username</strong>
        </label>
        <input
          name="username"
          type="text"
          style={inputStyles}
          onChange={handleChange}
        />

        <br />

        <label>
          <strong>Password</strong>
        </label>
        <input
          name="password"
          type="text"
          style={inputStyles}
          onChange={handleChange}
        />

        <br />

        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Navbar;
