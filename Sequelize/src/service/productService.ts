import { Product } from "../models/ProductModel";
import { Users } from "../models/userModel";

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

export const getUserDetail = async (data: any) => {
  const UserDetail = await Users.findOne({
    where: {
      id: data,
    },
  });
  return UserDetail;
};

export const addProduct = async (data: any) => {
  const addproduct = await Product.findOrCreate({
    where: {
      name: data.name,
    },
    defaults: {
      name: data.name,
      description: data.description,
      price: data.price,
      costPrice: data.costPrice,
      stockQuantity: data.stockQuantity,
      userId: data.userId,
    },
  });
  return addproduct;
};
