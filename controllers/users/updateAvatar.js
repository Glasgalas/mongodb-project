import models from "../../models/index.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import jimp from "jimp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const { userModel } = models;
const { User } = userModel;

export const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const imageName = `${id}_${originalname}`;
  const img = jimp
    .read(tempUpload)
    .then((image) => {
      return image.resize(250, 250);
    })
    .catch((err) => {
      console.error(err);
    });

  try {
    const resultUpload = path.join(avatarsDir, imageName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("public", "avatars", imageName);
    await User.findByIdAndUpdate(req.user._id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};
