import createError from "http-errors";
import models from "../../models/index.js";

const { contactModel } = models;
const { Contact } = contactModel;

const { NotFound } = createError;

export const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    message: "Contact upadted",
    data: {
      result,
    },
  });
};
