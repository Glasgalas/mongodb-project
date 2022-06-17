import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router as contactRouter } from "./routes/api/contacts.js";
import { router as authRouter } from "./routes/api/auth.js";
import { router as usersRouter } from "./routes/api/users.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const { DB_HOST, PORT = 3000 } = process.env;

// authorization
app.use("/api/auth", authRouter);
// user
app.use("/api/users", usersRouter);
//work with contacts
app.use("/api/contacts", contactRouter);

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
