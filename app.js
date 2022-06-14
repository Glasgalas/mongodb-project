import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => console.log("DataBase connect"))
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
