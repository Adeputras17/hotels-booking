// import express from "express";
// import mongoose, { disconnect } from "mongoose";
// import dotenv from "dotenv";

// import authRouter from "./routes/auth.js";
// import hotelsRouter from "./routes/hotels.js";
// import roomsRouter from "./routes/rooms.js";
// import usersRouter from "./routes/users.js";
// import cookieParser from "cookie-parser";

// const app = express();
// dotenv.config();

// const connect = async ()=>{
//     try {
//         await mongoose.connect(process.env.MONGO)
//         console.log("connected to mongodb")
//     } catch (error) {
//       throw error  
//     }
// }

// mongoose.connection.on("disconnected", ()=>{
//     console.log("mongodb disconnected")
// })

// // middleware
// app.use(cookieParser());
// app.use(express.json());

// app.use("/api/auth", authRouter);
// app.use("/api/hotels", hotelsRouter);
// app.use("/api/rooms", roomsRouter);
// app.use("/api/users", usersRouter);

// app.use((error, req, res, next)=>{
//     const errorStatus = error.status || 500;
//     const errorMessage = error.message || "something went wrong";
//     return res.status(errorStatus).json({
//         success: false,
//         status:errorStatus,
//         message:errorMessage,
//         stack:error.stack,
//     })
// })

// app.listen(5000, ()=>{
//     connect()
//     console.log("connected to backend")
// } )

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"

import authRouter from "./routes/auth.js";
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";
import usersRouter from "./routes/users.js"

const app = express();
dotenv.config();

const connect = async ()=>{
   try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb")  
   } catch (error) {
     throw error
   } 
}

// middleware
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/users", usersRouter);

app.use((error,req,res,next)=>{
    const status = error.status || 403;
    const message = error.message || "something went wrong";
    return res.status(status).json({
        success: false,
        status:status,
        message:message,
        stack:error.stack,
    })
})

app.listen(5000, ()=>{
    connect();
    console.log("connected to backend");
})