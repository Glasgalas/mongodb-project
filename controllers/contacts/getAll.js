import models from "../../models/index.js";

const { contactModel } = models;
const { Contact } = contactModel;

export const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10, status } = req.query;
  const skip = (page - 1) * limit;

  let resultWithStatus;
  if (status) {
    resultWithStatus = await Contact.find({
      owner: _id,
      status: status,
    }).populate("owner", "_id name email");
  }
  const resultWithoutStatus = await Contact.find({ owner: _id }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id name email");

  res.json({
    status: "success",
    code: 200,
    data: {
      result: resultWithStatus || resultWithoutStatus,
    },
  });
};
