import express from "express";
import mdlwr from "../../middlewares/index.js";
import ctrl from "../../controllers/index.js";

export const router = express.Router();

const { auth, ctrlWrapper } = mdlwr;

const { users } = ctrl;
const { getCurrent } = users;

router.post("/current", auth, ctrlWrapper(getCurrent));
