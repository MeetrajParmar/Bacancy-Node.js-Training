import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //const token1 = req.header("Authorization")?.replace("Bearer ", "");
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Please Login" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY!);
    //console.log(decoded);
    const { email, userId }: any = decoded;
    //console.log(email);
    //console.log(userId);
    req.body = req.body || {};
    req.body.email = email;
    req.body.userId = userId;
    // console.log(req.body);
    next();
    // return res
    //   .status(200)
    //   .json({ message: "Verify Succcss", email: email, userId: userId });
  } catch (er: any) {
    return res.status(401).json({ error: er.message });
  }
};
