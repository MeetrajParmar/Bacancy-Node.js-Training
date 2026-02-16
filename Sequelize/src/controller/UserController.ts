import { Request, Response, NextFunction } from "express";
import {
  getAllUserData,
  getOneUserData,
  createUser,
  updateUser,
  loginUser,
  addToCart,
  getuserbyName,
} from "../service/userService";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const salt = bcrypt.genSaltSync(10);

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const data = await getAllUserData();
    if (!data) {
      throw new Error("NO User Available!");
    }
    return res.status(200).json(data);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

export const LoginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log(req.body);
    const response = await loginUser(req.body);
    if (!response) {
      // return res.status(201).json({ message: "User Invalid", user: response });
      throw new Error(`Requested User is invalid!`);
    }
    // const password = response.dataValues.password;
    const isMatch = await bcrypt.compare(
      req.body.password,
      response.dataValues.password,
    );
    if (!isMatch) {
      // return res.status(403).json({
      //   message: "Password Mismatch",
      //   user: response.dataValues.email,
      // });
      throw new Error(`Password Mistmatch! User:${response.dataValues.email}`);
    }

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
    // next();
    return res.status(200).json({ message: "Login successful", token: token });
  } catch (er: any) {
    return res.status(400).json({ error: er.message });
  }
};

export const findUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let data;
    const IntId = Number(id);
    if (typeof IntId === "number") {
      data = await getOneUserData(IntId);
    } else if (typeof id === "string") {
      const fullName = id;
      //console.log(fullName.split(" ")[1]);
      const firstName = fullName.split(" ")[0];
      const lastName = fullName.split(" ")[1];
      data = await getuserbyName({ firstName: firstName, lastName: lastName });
    }

    //const data = await getOneUserData(Number(id));
    if (data === null) {
      throw new Error(`User not Found`);
    }
    return res.status(200).json(data);
  } catch (error: any) {
    return res.json({ error: error.message });
  }
};

export const CUser = async (req: Request, res: Response) => {
  try {
    // const salt = bcrypt.genSaltSync(10);

    const password = req.body.password;
    const hash = await bcrypt.hashSync(password, salt);
    req.body.password = hash;
    const createRes = await createUser(req.body);
    if (!createRes[1]) {
      // return res.status(409).json(`User Already Exist`);
      throw new Error("User already Exist!");
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
      // return res.status(400).json(`Requested User not Available!`);
      throw new Error("Requested User not Available!");
    }
    return res.status(201).json(UpdateUser);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

export const logout = async (req: Request, res: Response) => {
  const token = req.cookies.token;
  if (!token) {
    // return res.status(402).json({ error: "Please Login" });
    throw new Error("Please Login!");
  }
  res.clearCookie("token");
  res.status(201).json({ message: "Login out Succesfull" });
  try {
  } catch (e: any) {
    return res.status(400).json({ error: e.message });
  }
};

export const addtoCart = async (req: Request, res: Response) => {
  try {
    //console.log(req.body);
    const addtoCartResponse = await addToCart(req.body);
    const isExist = addtoCartResponse[1];
    if (!isExist) {
      // return res
      //   .status(401)
      //   .json({ success: false, error: "Already Placed Order!!" });
      throw new Error("Order already Placed!");
    }
    return res.status(200).json({
      success: true,
      message: "Order Placed",
      data: addtoCartResponse,
    });
  } catch (e: any) {
    return res.status(400).json({ error: e.message });
  }
};
