import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import nodemailer from "nodemailer";
import { router as contactRouter } from "./routes/api/contacts.js";
import { router as authRouter } from "./routes/api/auth.js";
import { router as usersRouter } from "./routes/api/users.js";

dotenv.config();
const { DB_HOST, META_PASSWORD, PORT = 3000 } = process.env;

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "glasgalas@meta.ua",
//     pass: META_PASSWORD,
//   },
// };

// const transporter = nodemailer.createTransport(nodemailerConfig);
// const email = {
//   to: "alex.starichenko@icloud.com",
//   from: "glasgalas@meta.ua",
//   subject: "Auth new",
//   html: "<p>You create new account!</p>",
// };

// transporter
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));

const app = express();
app.use(cors());
app.use(express.json());

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
