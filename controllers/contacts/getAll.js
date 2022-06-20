import models from "../../models/index.js";

const { contactModel } = models;
const { Contact } = contactModel;

export const getAll = async (req, res) => {
  // const { _id } = req.user;
  // const { page = 1, limit = 10, status } = req.query;
  // const skip = (page - 1) * limit;
  // let resultWithStatus;
  // if (status) {
  //   resultWithStatus = await Contact.find({
  //     owner: _id,
  //     status: status,
  //   }).populate("owner", "_id name email");
  // }
  // const resultWithoutStatus = await Contact.find({ owner: _id }, "", {
  //   skip,
  //   limit: Number(limit),
  // }).populate("owner", "_id name email");
  // res.json({
  //   status: "success",
  //   code: 200,
  //   data: {
  //     result: resultWithStatus || resultWithoutStatus,
  //   },
  // });

  // for test:
  const result = [
    {
      _id: "62b03fdb0a7e7e8a010f15fb",
      name: "123456",
      phone: "(123) 123-1234",
      email: "zz444@mail.com",
      status: false,
      owner: {
        _id: "62ac7256326616f771a4dc1f",
        name: "Zz",
        email: "zz@mail.com",
      },
      createdAt: "2022-06-20T09:37:31.284Z",
      updatedAt: "2022-06-20T09:37:31.284Z",
    },
    {
      _id: "62b03fdb0a7e7e8a010f15fb",
      name: "123456",
      phone: "(123) 123-1234",
      email: "zz444@mail.com",
      status: false,
      owner: {
        _id: "62ac7256326616f771a4dc1f",
        name: "Zz",
        email: "zz@mail.com",
      },
      createdAt: "2022-06-20T09:37:31.284Z",
      updatedAt: "2022-06-20T09:37:31.284Z",
    },
  ];
  res.json(result);
};
