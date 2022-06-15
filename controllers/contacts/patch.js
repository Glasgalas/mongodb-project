import createError from "http-errors";
import models from "../../models/index.js";

const { contactModel } = models;
const { Contact } = contactModel;

const { NotFound, BadRequest } = createError;

export const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const result = await Contact.findByIdAndUpdate(id, { status }, { new: true });
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  if (!status) {
    throw new BadRequest("Missing field favorite");
  }
  res.status(200).json({
    status: "success",
    code: 200,
    message: "Status updated",
    data: {
      result,
    },
  });
};
