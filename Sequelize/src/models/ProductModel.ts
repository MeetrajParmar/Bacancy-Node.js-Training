import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";


const Product=sequelize.define(
    'Product',
    {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },

    costPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },

    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
},
{
    tableName:"Product",
    modelName:"Product",
});

console.log(Product===sequelize.models.Product);
