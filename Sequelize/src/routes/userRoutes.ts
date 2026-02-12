import { Router } from "express";
import { getAllUser,getAllProduct } from "../controller/UserController";


const userRouter=Router();

userRouter.get("/",getAllUser);
userRouter.get("/",getAllProduct);

export default userRouter