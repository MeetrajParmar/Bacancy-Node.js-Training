import { getAllProductData} from "../service/productService";
import { Request, Response } from "express";

export const getAllProduct=async(req:Request, res:Response)=>{
  try {
      const product=await getAllProductData();
      return res.status(200).json(product)
  } catch (error:any) {
     return res.status(400).json({ error: error.message });
  }
}

