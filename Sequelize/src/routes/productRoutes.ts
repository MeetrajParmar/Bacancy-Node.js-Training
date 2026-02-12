import { Router } from "express";
import {getAllProduct } from "../controller/productController";


const productRouter=Router();

productRouter.get("/",getAllProduct);

export default productRouter