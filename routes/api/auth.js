import express from "express";
import mdlwr from "../../middlewares/index.js";
import ctrl from "../../controllers/index.js";
import models from "../../models/index.js";

export const router = express.Router();

const { ctrlWrapper, validation } = mdlwr;

const { auth, users } = ctrl;
const { register, login, logout } = auth;
const { verifyEmail, reVerification } = users;

const { userModel } = models;
const { joiRegisterSchema, joiLoginSchema, joiVerifySchema } = userModel;

router.post("/register", validation(joiRegisterSchema), ctrlWrapper(register));
router.post("/login", validation(joiLoginSchema), ctrlWrapper(login));
router.get("/logout", mdlwr.auth, ctrlWrapper(logout));
router.get("/verify/:verificationToken", ctrlWrapper(verifyEmail));
router.post(
  "/verify",
  validation(joiVerifySchema),
  ctrlWrapper(reVerification)
);
