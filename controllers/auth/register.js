import models from "../../models/index.js";
import createError from "http-errors";
import bcrypt from "bcrypt";

const { userModel } = models;
const { User } = userModel;
const { Conflict } = createError;

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({ name, email, password: hashPassword });
  res.json({
    status: "success",
    code: 201,
    message: "User successfully registered",
    data: {
      user: {
        name,
        email,
      },
    },
  });
};