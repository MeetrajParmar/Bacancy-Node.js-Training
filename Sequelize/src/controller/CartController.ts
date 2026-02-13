import { Request, Response, NextFunction } from "express";
import { getProductIdCart } from "../service/cartService";

//IN CART
export const productDetailbyUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const response = await getProductIdCart(req.body);
    if (!response || response.length === 0) {
      return res.status(404).json({ message: "Cart is empty" });
    }
    let result: any[] = [];
    response.forEach((ele) => {
      result.push(ele.dataValues.Product.dataValues.name);
    });

    //console.log(response[0].dataValues.Product.dataValues.name);
    return res.status(200).json({ message: "Product are:", data: result });
  } catch (err: any) {
    return res.json({ error: err.message });
  }
};
