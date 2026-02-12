import { Router } from "express";
import { LoginUser } from "../middleware/authMiddleware";

const authRouter = Router();

authRouter.get("/login", LoginUser);
export default authRouter;
