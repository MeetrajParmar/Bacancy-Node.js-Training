import { Router } from "express";
import { findUser, getAllUser,CUser,UUser } from "../controller/UserController";

const userRouter=Router();

userRouter.get("/",getAllUser);
userRouter.get("/:id",findUser);
userRouter.post("/",CUser);
userRouter.patch("/",UUser);
export default userRouter   