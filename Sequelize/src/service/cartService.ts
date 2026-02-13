import { Cart, Product } from "../models/assocation";

export const getProductIdCart = async (id: any) => {
  const productid = await Cart.findAll({
    where: {
      userId: id.userId,
    },
    include: [{ model: Product, as: "Product" }],
  });
  return productid;
};
