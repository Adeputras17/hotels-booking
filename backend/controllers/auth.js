// import Users from "../models/Users.js";
// import bcrypt from "bcryptjs";
// import { createError } from "../utils/error.js";
// import jwt from "jsonwebtoken";



// export const register = async(req,res,next)=>{
//     try {
//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(req.body.password, salt);
        
//         const newUser = new Users({
//             username:req.body.username,
//             email:req.body.username,
//             password:hash,
//         });
//         await newUser.save();
//         res.status(200).send("user has been created")
//     } catch (error) {
//         next(error)
//     }
// };

// export const login = async (req,res,next)=>{
//     try {
//         const user = await Users.findOne({username:req.body.username});
//         if(!user) return next(createError(400, "username not found"))

//         const isPassword = await bcrypt.compare(req.body.password, user.password)
//         if(!isPassword)return next(createError(404, "wrong password or username"))

//         const token = jwt.sign({
//             id:user._id, isAdmin:user.isAdmin
//         }, process.env.JWT)

//         const {password, isAdmin, ...othersDetails} = user._doc;

//         res.cookie("access token", token, ({httpOnly:true})).status(200).json({...othersDetails});

//     } catch (error) {
//         next(error)   
//     }
// }

import users from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const register = async(req,res,next)=>{
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new users({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })
        await newUser.save()
        res.status(200).send("user has been register");
    } catch (error) {
        next(error)
    }
};

export const login = async (req,res,next)=>{
    const user = await users.findOne(req.body.username, user.username);
    if(!user) return next(createError(403, "you are not authenticated"));

    const isPassword = await bcrypt.compare(req.body.password, user.password);
    if(!isPassword) return next(createError(403, "wrong password and username"))

    const token = jwt.sign({
        id:user._id, isAdmin:user.isAdmin
    }, process.env.JWT);

    const{password, isAdmin, ...othersDetails} = user._doc;

    res.cookies("token access", token, ({httpOnly:true})).status(200).json({...othersDetails});
}