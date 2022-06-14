import mongoose from "mongoose";

const DB_HOST =
  "mongodb+srv://glasgls:fgf64gfgd6d@cluster0.owwmt.mongodb.net/organizer?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("DataBase connect"))
  .catch((err) => console.error(err.message));
