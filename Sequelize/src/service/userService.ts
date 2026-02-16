import { Users } from "../models/userModel";
import { Cart } from "../models/assocation";
import { where } from "sequelize";

type Fullname = {
  firstName: string;
  lastName: string;
};
export const getAllUserData = async () => {
  const data = await Users.findAll();
  return data;
};

export const getOneUserData = async (id: number) => {
  const data = await Users.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

export const getuserbyName = async (name: any) => {
  const data = await Users.findOne({
    where: {
      firstName: name.firstName,
      lastName: name.lastName,
    },
  });
  return data;
};

export const createUser = async (userData: any) => {
  const [response, exist] = await Users.findOrCreate({
    where: {
      email: userData.email,
    },
    defaults: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
    },
  });
  return [response, exist];
};

export const updateUser = async (userData: any) => {
  const updateUser = await Users.findOne({
    where: {
      id: userData.id,
    },
  });
  if (!updateUser) {
    throw new Error(`User not found`);
  }
  await updateUser.update(userData);
  return updateUser;
};

export const loginUser = async (userData: any) => {
  const response = await Users.findOne({
    where: {
      email: userData.email,
    },
  });
  return response;
};

export const addToCart = async (userData: any) => {
  const { userId, productId, quantity, totalBill } = userData;
  const response = await Cart.findCreateFind({
    where: {
      productId: productId,
      quantity: quantity,
      totalBill: totalBill,
    },
    defaults: {
      userId: userId,
      productId: productId,
      quantity: quantity,
      totalBill: totalBill,
    },
  });
  return response;
};

export const profile = async (userdata: number) => {
  const data = await Users.findOne({
    where: {
      id: userdata,
    },
    attributes: {
      exclude: ["password", "createAt", "updateAt", "age"],
    },
  });
  return data;
};
