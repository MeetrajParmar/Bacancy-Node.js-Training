import { Router } from "express";
import { LoginUser, logout } from "../middleware/authMiddleware";
import { verifyUser } from "../middleware/verifyMiddleware";

const authRouter = Router();

authRouter.get("/login", LoginUser);
authRouter.get("/verify", verifyUser);
authRouter.get("/logout", logout);
export default authRouter;
