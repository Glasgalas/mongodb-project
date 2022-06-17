import express from "express";
import mdlwr from "../../middlewares/index.js";
import ctrl from "../../controllers/index.js";

export const router = express.Router();

const { auth, upload, ctrlWrapper } = mdlwr;

const { users } = ctrl;
const { getCurrent, updateAvatar } = users;

router.post("/current", auth, ctrlWrapper(getCurrent));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);
