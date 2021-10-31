import express from "express";

import UserController from "../controllers/UserController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Works!");
});

router.get("/user/:id", (req, res) => {
  res.send(`Omg it worked!! User: ${req.params.id}`);
});

router.post("/create", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let userCreationStatus = UserController.createUser({
    username: username,
    password: password,
  });
  if (userCreationStatus === "User already exists")
    res.send(JSON.stringify("User already exists"));
  else res.send(JSON.stringify("User created successfully!"));
});

export default router;
