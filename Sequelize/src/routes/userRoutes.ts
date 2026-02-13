import { Router } from "express";
import {
  findUser,
  getAllUser,
  UUser,
  CUser,
} from "../controller/UserController";
import { LoginUser } from "../middleware/authMiddleware";
// import { CreateUser } from "../controller/authController";

const userRouter = Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", findUser);
userRouter.post("/", CUser);
userRouter.patch("/", UUser);
export default userRouter;
