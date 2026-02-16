import {
  getAllProductData,
  getProductDetail,
  getUserDetail,
  addProduct,
} from "../service/productService";
import { Request, Response } from "express";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const product = await getAllProductData();
    if (!product) {
      // return res.status(400).json(`No Product avaiable!`);
      throw new Error("No Product Available");
    }
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
      // return res;
      // .status(201)
      // .json({ message: "Requested Product Not Available!" });
      throw new Error(`Requested Product Not Available!!`);
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
      // return res.json({ message: `Product Not Found` });
      throw new Error("Product Not Found!");
    }
    const userId = ProductDetail?.dataValues.userId;
    const userDetail = await getUserDetail(userId);
    return res.status(200).json({ userDetail });
  } catch (er: any) {
    return res.status(400).json({ error: er.message });
  }
};

export const AddProduct = async (req: Request, res: Response) => {
  try {
    const addResponse = await addProduct(req.body);
    const isExist = addResponse[1];
    if (!isExist) {
      // return res.status(400).json("Product Exist only!!");
      throw new Error("Product Already Exist");
    }
    // console.log(addResponse);
    // if (!addResponse) {
    //   return res.status(400).json("Product Not be able to create!");
    // }
    return res.status(200).json({ data: addResponse[0] });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
