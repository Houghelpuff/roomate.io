import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import APIRoutes from "./routes/api.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 3500;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", APIRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
