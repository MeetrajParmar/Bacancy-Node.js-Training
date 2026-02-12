import { Request, Response } from "express";
import {
  getAllUserData,
  getOneUserData,
  createUser,
  updateUser,
} from "../service/userService";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const data = await getAllUserData();
    return res.status(200).json(data);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

export const findUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const IntId = Number(id);
    const data = await getOneUserData(IntId);
    if (data === null) {
      throw new Error(`User not Found`);
    }
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const CUser = async (req: Request, res: Response) => {
  try {
    const createRes = await createUser(req.body);
    if (createRes === null) {
      throw new Error(`User Not Created!`);
    }
    return res.status(201).json(createRes);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const UUser = async (req: Request, res: Response) => {
  try {
    const UpdateUser = await updateUser(req.body);
    if (UpdateUser === null) {
      throw new Error(`Update User Not availiable`);
    }
    return res.status(201).json(UpdateUser);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
