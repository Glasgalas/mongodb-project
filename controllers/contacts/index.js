import { getAll } from "./getAll.js";
import { getById } from "./getById.js";
import { add } from "./add.js";
import { updateById } from "./updateById.js";
import { deleteById } from "./deleteById.js";
import { updateStatus } from "./patch.js";

const contacts = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
  updateStatus,
};

export default contacts;
