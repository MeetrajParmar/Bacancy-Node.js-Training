import { Product } from "../models/ProductModel";


export const getAllProductData=async()=>{
    const productData=await Product.findAll();
    return productData;
}
