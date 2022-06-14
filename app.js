import mongoose from "mongoose";
import { DB_HOST } from "./config.js";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("DataBase connect"))
  .catch((err) => console.error(err.message));
