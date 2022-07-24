import User from "../models/userModels.js";
import bycript from "bcrypt";
import { Op } from "sequelize";

export const createUser = async (user) => {
  try {
    const hash = bycript.hashSync(user.password, 10);
    user.password = hash;
    const userCreate = await User.create({ ...user });
    return userCreate;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const listUsers = async (name) => {
  if (name) {
    const user = await User.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
    });
    return user;
  }
  const user = await User.findAll();
  return user;
};

/* export const listUsers = async () => {
    const user = await User.findAll({
      where: { name: { [Op.like]: "%do%" } },
    });
    return user;
};
*/
