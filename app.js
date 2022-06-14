import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes/api/contacts.js";

dotenv.config();
const { DB_HOST, PORT = 3000 } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contacts", router);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
