import { Router } from "express";
import {getAllProduct } from "../controller/UserController";


const productRouter=Router();

productRouter.get("/",getAllProduct);

export default productRouter