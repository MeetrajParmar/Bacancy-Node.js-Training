import {Users} from "../models/userModel";
import { Product } from "../models/ProductModel";

export const getAllUserData = async () => {
  const data = await Users.findAll();
  return data;
};

export const getAllProductData=async()=>{
    const productData=await Product.findAll();
    return productData;
}
