import { Users } from "../models/userModel";

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

export const createUser = async (userData: any) => {
  const [response, exist] = await Users.findOrCreate({
    where: {
      firstName: userData.firstName,
      lastName: userData.lastName,
    },
    defaults: {
      firstName: userData.firstName,
      lastName: userData.lastName,
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
      password: userData.password,
    },
  });
  return response;
};
