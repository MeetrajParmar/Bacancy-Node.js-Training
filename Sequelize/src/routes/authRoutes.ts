import { Router } from "express";
import { logout } from "../controller/UserController";
import { verifyUser } from "../middleware/verifyMiddleware";

const authRouter = Router();

authRouter.get("/verify", verifyUser);
authRouter.get("/logout", logout);
export default authRouter;
