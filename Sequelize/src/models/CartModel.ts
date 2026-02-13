import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Product",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalBill: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: "Cart",
    modelName: "Cart",
  },
);
// Cart.belongsTo(Product, {
//   foreignKey: "productId",
//   as: "product",
// });

// Cart.belongsTo(Users, {
//   foreignKey: "userId",
//   as: "user",
// });

console.log(Cart === sequelize.models.Cart);
