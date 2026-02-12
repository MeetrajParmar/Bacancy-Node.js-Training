import {Users} from "../models/userModel";

export const getUserData = async () => {
  const data = await Users.findAll();
  return data;
};

