import express from "express";
import mdlwr from "../../middlewares/index.js";
import ctrl from "../../controllers/index.js";
import models from "../../models/index.js";

export const router = express.Router();

const { ctrlWrapper, validation } = mdlwr;

const { auth } = ctrl;
const { register, login, logout } = auth;

const { userModel } = models;
const { joiRegisterSchema, joiLoginSchema } = userModel;

router.post("/register", validation(joiRegisterSchema), ctrlWrapper(register));
router.post("/login", validation(joiLoginSchema), ctrlWrapper(login));
router.get("/logout", mdlwr.auth, ctrlWrapper(logout));
