import express from "express"
import { sequelize } from "./config/database";
import userrouter from "./routes/userRoutes";
import productRouter from "./routes/productRoutes";

export const server = express();

try {
    sequelize.authenticate()
    .then(()=>{
        console.log(`Database Connected Successfull!!`);
    })
    .catch((error)=>{
        console.log(`Database Not Connected!!${error}`);
    })

} catch (error) {
    console.log(`Some Error Occured!!`);    
}
server.listen(3000,()=>{
    console.log(`Server running at http://localhost:${3000}`)
})

server.use(express.json());
server.use("/api/user",userrouter)
server.use("/api/product",productRouter)

