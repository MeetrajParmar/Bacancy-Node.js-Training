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

    // const email = req.body.email;
    // const userId = response.dataValues.id;

    const token = jwt.sign(
      { email: req.body.email, userId: response.dataValues.id },
      process.env.JWT_SECRETKEY!,
      {
        expiresIn: "3d",
      },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return res.status(200).json({ message: "Login successful", token: token });
  } catch (er: any) {
    return res.status(401).json({ error: er.message });
  }
};

export const logout = async (req: Request, res: Response) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(402).json({ error: "Please Login" });
  }

  res.clearCookie("token");
  res.status(201).json({ message: "Login out Succesfull" });
  try {
  } catch (e: any) {
    return res.status(401).json({ error: e.message });
  }
};
