import { createUser, listUsers } from "../services/userService.js";

export const createUserController = async (req, res) => {
  try {
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

export const listUsersController = async (req, res) => {
  const user = await listUsers(req.query.name);
  res.json(user);
};
