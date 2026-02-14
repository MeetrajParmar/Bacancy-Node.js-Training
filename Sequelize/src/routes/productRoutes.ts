import { Router } from "express";
import {
  AddProduct,
  getAllProduct,
  getName,
  getUserProduct,
} from "../controller/productController";
import { verify } from "jsonwebtoken";
import { verifyUser } from "../middleware/verifyMiddleware";

const productRouter = Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:name", getName);
productRouter.get("/getuser/:name", verifyUser, getUserProduct);
productRouter.post("/addproduct", AddProduct);
export default productRouter;
