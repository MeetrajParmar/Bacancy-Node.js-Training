import { Router } from "express";
import { verifyUser } from "../middleware/verifyMiddleware";
import { productDetailbyUser } from "../controller/CartController";
const cartRoute = Router();

cartRoute.get("/cart", verifyUser, productDetailbyUser);

export default cartRoute;
