import { Router } from "express";
import {
  createUserController,
  listUsersController,
} from "../controllers/userController.js";

const userRoute = Router();

userRoute.post("/user", createUserController);
userRoute.get("/users", listUsersController);

export default userRoute;
