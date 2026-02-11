import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";


const User=sequelize.define(
    'User',
    {
    firstName:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},
{
    tableName:"User",
    modelName:"User",
});

console.log(User===sequelize.models.User);
