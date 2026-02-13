import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { Product } from "./ProductModel";
import { Cart } from "./CartModel";

export const Users = sequelize.define(
  "Users",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "Users",
    modelName: "Users",
  },
);

// Users.hasMany(Product, {
//   foreignKey: "userId",
//   as: "products", // Alias for the collection of products
// });

// Users.hasMany(Cart, {
//   foreignKey: "userId",
//   as: "cartItems",
// });
console.log(Users === sequelize.models.Users);
