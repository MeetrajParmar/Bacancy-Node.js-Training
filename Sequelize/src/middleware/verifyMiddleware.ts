import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Please Login" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY!);

    const { email, userId }: any = decoded;

    req.body = req.body || {};
    req.body.email = email;
    req.body.userId = userId;

    // req.user = {
    //   email: decoded.email,
    //   userId: decoded.userId,
    // };
    console.log(req.body);

    next();
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
