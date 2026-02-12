import {Users} from "../models/userModel";

export const getAllUserData = async () => {
  const data = await Users.findAll();
  return data;
};

export const getOneUserData=async (id:number) =>{
    const data=await Users.findOne({
        where:{
            "id":id
        }
    });
    return data;
}

export const createUser=async (userData:any)=>{
    const response= await Users.create({
        firstName:userData.firstName,
        lastName:userData.lastName,
    }); 
    return response;
}

export const updateUser=async(userData:any)=>{
    const updateUser=await Users.findOne({
        where:{
            "id":userData.id
        }
    })
    if(!updateUser){
        throw new Error(`User not found`);
    }
    await  updateUser.update(userData); 
    return updateUser; 
}