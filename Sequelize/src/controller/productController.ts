import {
  getAllProductData,
  getProductDetail,
  getUserDetail,
} from "../service/productService";
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

export const getUserProduct = async (req: Request, res: Response) => {
  try {
    const productName = req.params.name;
    const ProductDetail = await getProductDetail(productName as string);
    if (!ProductDetail) {
      return res.status(401).json({ message: `Product Not Found` });
    }
    const userId = ProductDetail?.dataValues.userId;
    const userDetail = await getUserDetail(userId);
    return res.status(200).json({ userDetail });
  } catch (er: any) {
    return res.status(401).json({ error: er.message });
  }
};
