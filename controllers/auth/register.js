import models from "../../models/index.js";
import createError from "http-errors";
import bcrypt from "bcrypt";
import gravatar from "gravatar";
import { v4 } from "uuid";
import helpers from "../../helpers/index.js";

const { userModel } = models;
const { User } = userModel;
const { Conflict } = createError;
const { sendEmail } = helpers;

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }
  const verificationToken = v4();
  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    from: "alex.345.star@gmail.com",
    subject: "Confirmation of registration",
    html: `<p><a href="http://localhost:3000/api/auth/verify/${verificationToken}" target="_blank">Confirmation</a> email</p>`,
  };
  await sendEmail(mail);

  res.json({
    status: "success",
    code: 201,
    message: "User successfully registered",
    data: {
      user: {
        name,
        email,
        avatarURL,
        verificationToken,
      },
    },
  });
};
