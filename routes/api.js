import express from "express";

import UserRoutes from "./users.js";

const router = express.Router();

router.use("/user", UserRoutes);

router.get("/", (req, res) => {
  res.json("API endpoint working!");
});

export default router;
