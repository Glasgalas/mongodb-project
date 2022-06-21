import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();
const { SENDGRID_KEY } = process.env;

// відправка листів
sgMail.setApiKey(SENDGRID_KEY);

export const sendEmail = async (data) => {
  const email = { ...data, from: "alex.345.star@gmail.com" };
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};
const email = {
  to: "alex.starichenko@icloud.com",
  from: "alex.345.star@gmail.com",
  subject: "Auth new",
  html: "<p>You create new account!</p>",
};

// sgMail
//   .send(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));
