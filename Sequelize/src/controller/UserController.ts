import { Request, Response } from "express";
import { getAllUserData, getAllProductData} from "../service/userService";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const data = await getAllUserData();
    return res.status(200).json(data);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

export const getAllProduct=async(req:Request, res:Response)=>{
  try {
      const product=await getAllProductData();
      return res.status(200).json(product)
  } catch (error:any) {
     return res.status(400).json({ error: error.message });
  }
}