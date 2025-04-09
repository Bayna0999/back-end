import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/users.js";

export const userRouter = express.Router();

userRouter.post("/user/create", createUser);
userRouter.get("/users", getUsers);
userRouter.get("/user:id", getUserById);
userRouter.delete("/user/delete", deleteUser);
userRouter.get("/user/update", updateUser);
