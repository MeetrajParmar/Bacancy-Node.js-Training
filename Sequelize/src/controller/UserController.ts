import { Request, Response } from "express";
import { getUserData } from "../service/userService";

export const getUser = async (req: Request, res: Response) => {
  try {
    const data = await getUserData();
    return res.status(200).json(data);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
