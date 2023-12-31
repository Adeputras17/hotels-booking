
// import jwt from "jsonwebtoken";
// import { createError } from "./error.js";

// export const verifyToken = (req,res,next)=>{
//     const token = req.cookies.access_token;
//     if(!token) return next(createError(403, "you are not authenticated"));

//     jwt.verify(token, process.env.JWT, (error, user, next)=>{
//         if(!token) return next(createError(403, "token invalid"));
//         req.user = user;
//         next()
//     })
// };

// export const verifyUser = (req,res,next)=>{
//     verifyToken(req,res,next, ()=>{
//         if(req.user.id === req.params.id || req.user.isAdmin){
//             next()
//         }else{
//             return next(createError(403, "you are not authenticated"))
//         }
//     })
// };

// export const verifyAdmin = (req,res,next)=>{
//     verifyToken(req,res,next, ()=>{
//         if(req.user.isAdmin){
//             next()
//         }else{
//             return next(createError(403, "you are not authenticated"))
//         }
//     })
// };

import jwt from "jsonwebtoken";
import { createError } from "./error";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token) return next(createError(403, "you are not authenticated"));

    jwt.verify(token, process.env.JWT, (req,res,next)=>{
        if(!token) return next(createError(403, "token invalid"));
        req.user = user;
        next()
    });
};

export const verifyUser = async (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        } else{
            return next(createError(403, "you are not authorized"));
        }
    })
};

export const verifyAdmin = async(req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.isAdmin){
            next()
        } else{
            return next(createError(403, "you are not authorized"))
        }
    })
};