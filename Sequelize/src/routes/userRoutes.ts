import { Router } from "express";
import {
  findUser,
  getAllUser,
  UUser,
  CUser,
  LoginUser,
  addtoCart,
} from "../controller/UserController";
import { verifyUser } from "../middleware/verifyMiddleware";

// import { CreateUser } from "../controller/authController";

const userRouter = Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", findUser);
userRouter.post("/", CUser);
userRouter.patch("/", UUser);
userRouter.post("/login", LoginUser);
userRouter.post("/addtocart", verifyUser, addtoCart);
export default userRouter;
