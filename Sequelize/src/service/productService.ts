import { Product } from "../models/ProductModel";

export const getAllProductData = async () => {
  const productData = await Product.findAll();
  return productData;
};

export const getProductDetail = async (productName: string) => {
  const productDetail = await Product.findOne({
    where: {
      name: productName,
    },
  });
  return productDetail;
};
