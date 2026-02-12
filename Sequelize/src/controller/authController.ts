// import { Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { createUser } from "../service/userService";
// import dotenv from "dotenv";
// dotenv.config();

// export const CreateUser = async (req: Request, res: Response) => {
//   try {
//     const [response, exist] = await createUser(req.body);
//     if (!exist) {
//       throw new Error(`User Exist`);
//     }

//     return res.status(200).json({ response });
//   } catch (er: any) {
//     res.status(400).json({ error: er.message });
//   }
// };
