// import models from "../../models/index.js";

// const { userModel } = models;
// const { User, joiRegisterSchema, joiLoginSchema } = userModel;

export const getCurrent = async (req, res) => {
  const { name, email } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      user: { name, email },
    },
  });
};
