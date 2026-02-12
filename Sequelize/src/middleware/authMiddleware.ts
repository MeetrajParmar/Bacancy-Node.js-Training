import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { loginUser } from "../service/userService";

dotenv.config();

export const LoginUser = async (req: Request, res: Response) => {
  try {
    const response = await loginUser(req.body);
    if (!response) {
      //   throw new Error(`User is not valid`);
      return res.status(201).json({ message: "User Invalid", user: response });
    }
    const token = jwt.sign(
      { email: req.body.email },
      process.env.JWT_SECRETKEY!,
      {
        expiresIn: "3d",
      },
    );
    return res.status(200).json({ message: "Login successful", token });
  } catch (er: any) {
    return res.status(401).json({ error: er.message });
  }
};
