import { getAllProductData, getProductDetail } from "../service/productService";
import { Request, Response } from "express";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const product = await getAllProductData();
    return res.status(200).json(product);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const getName = async (req: Request, res: Response) => {
  try {
    const name = req.params.name as string;
    const pdetail = await getProductDetail(name);
    if (!pdetail) {
      return res.status(201).json({ message: "Product Not Available!" });
    }
    return res.status(200).json(pdetail);
  } catch (er: any) {
    return res.status(400).json({ error: er.message });
  }
};
