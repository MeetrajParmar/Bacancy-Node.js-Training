import express from "express";
import { sequelize } from "./config/database";
import userrouter from "./routes/userRoutes";
import productRouter from "./routes/productRoutes";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes";
import cookieParser from "cookie-parser";
import cartRoute from "./routes/cartRoutes";
import cors from "cors";
import { Users, Product, Cart } from "./models/assocation";
dotenv.config();

export const server = express();

try {
  sequelize
    .authenticate()
    .then(() => {
      console.log(`Database Connected Successfull!!`);
    })
    .catch((error) => {
      console.log(`Database Not Connected!!${error}`);
    });
} catch (error) {
  console.log(`Some Error Occured!!`);
}
server.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}`);
});

server.use(
  cors({
    origin: "http://localhost:5173", // Vite frontend
    credentials: true,
  }),
);

server.use(cookieParser());
server.use(express.json());
server.use("/api/user", userrouter);
server.use("/api/product", productRouter);
server.use("/api/auth", authRouter);
server.use("/api", cartRoute);
