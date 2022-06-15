import express from "express";
import mdlwr from "../../middlewares/index.js";
import ctrl from "../../controllers/index.js";
import models from "../../models/index.js";

export const router = express.Router();

const { ctrlWrapper, validation, auth } = mdlwr;
const { contacts } = ctrl;
const { getAll, getById, add, deleteById, updateById, updateStatus } = contacts;
const { contactModel } = models;
const { joiSchema, statusJoiSchema } = contactModel;

router.get("/", auth, ctrlWrapper(getAll));
router.get("/:id", ctrlWrapper(getById));
router.post("/", auth, validation(joiSchema), ctrlWrapper(add));
router.delete("/:id", ctrlWrapper(deleteById));
router.put("/:id", validation(joiSchema), ctrlWrapper(updateById));
router.patch(
  "/:id/status",
  validation(statusJoiSchema),
  ctrlWrapper(updateStatus)
);
