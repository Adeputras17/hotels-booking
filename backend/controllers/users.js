// import Users from "../models/Users.js";

// export const updateUser = async (req,res,next)=>{
//     try {
//         const updateUser = await Users.findByIdAndUpdate(
//             req.params.id,
//             {$set:req.body},
//             {new:true}
//         )
//         res.status(200).json(updateUser);
//     } catch (error) {
//         next(error)
//     }
// };

// export const deleteUser = async (req,res,next)=>{
//     try {
//         const deleteUser = await Users.findByIdAndDelete(
//             req.params.id
//         )
//         res.status(200).json("users has been delete")
//     } catch (error) {
//         next(error)
//     }
// };

// export const getUser = async (req,res,next)=>{
//     try {
//         const getUser = await Users.findById(
//             req.params.id
//         )
//         res.status(200).json(getUser)
//     } catch (error) {
//         next(error)
//     }
// };

// export const getAllUser = async (req,res,next)=>{
//     try {
//         const allUser = await Users.find()
//         res.status(200).json(allUser)
//     } catch (error) {
//         next(error)
//     }
// };

import users from "../models/users";


export const updateUser = async(req,res,next)=>{
    try {
        const updateUser = await users.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}  
        )
        res.status(200).json(updateUser);
    } catch (error) {
        next(error)
    }
};

export const deleteUser = async(req,res,next)=>{
    try {
        const deleteUser = await users.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json(deleteUser)
    } catch (error) {
        next(deleteUser)
    }
};

export const getUser = async(req,res,next)=>{
    try {
        const user = await users.findById(
            req.params.id
        )
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
};

export const getAllUser = async(req,res,next)=>{
    try {
        const Users = await users.find()
        res.status(200).json(Users)
    } catch (error) {
        next(error)
    }
};