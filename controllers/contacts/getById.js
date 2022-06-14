import createError from "http-errors";
import models from "../../models/index.js";

const { contactModel } = models;
const { Contact } = contactModel;

const { NotFound } = createError;

export const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);

  // если искать не по id
  // const result = await Contact.findOne({name: req.name})
  console.log(result);
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "Contact found",
    data: {
      result,
    },
  });
};
