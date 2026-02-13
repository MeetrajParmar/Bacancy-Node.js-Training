import { Router } from "express";
import {
  findUser,
  getAllUser,
  UUser,
  CUser,
  LoginUser,
} from "../controller/UserController";

// import { CreateUser } from "../controller/authController";

const userRouter = Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", findUser);
userRouter.post("/", CUser);
userRouter.patch("/", UUser);
userRouter.post("/login", LoginUser);
export default userRouter;
