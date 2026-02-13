import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const token1 = req.header("Authorization")?.replace("Bearer ", "");
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Please Login" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY!);
    // req.email = decoded.email;
    return res.status(200).json({ decoded });
  } catch (er: any) {
    return res.status(401).json({ error: er.message });
  }
};
