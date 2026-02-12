import {Sequelize} from "sequelize"
import dotenv from 'dotenv'
dotenv.config()
export const sequelize=new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
    host:process.env.DB_HOST,
    port:Number(process.env.DB_PORT),
    logging:false,
    dialect:"postgres"
    })

// import { Sequelize } from '@sequelize/core';
// import { PostgresDialect } from '@sequelize/postgres';

// const sequelize = new Sequelize({
//   dialect: PostgresDialect,
//   database: 'mydb',
//   user: 'myuser',
//   password: 'mypass',
//   host: 'localhost',
//   port: 5432,
//   ssl: true,
//   clientMinMessages: 'notice',
// });