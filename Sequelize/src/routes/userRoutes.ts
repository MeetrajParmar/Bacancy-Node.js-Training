import { Router } from "express";
import { getUser } from "../controller/UserController";


const router=Router();

router.get("/",getUser);

export default router