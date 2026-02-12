import { Router } from "express";
import { getAllProduct, getName } from "../controller/productController";

const productRouter = Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:name", getName);

export default productRouter;
