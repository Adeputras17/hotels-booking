// import express from "express";
// import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/users.js";
// import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

// const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req,res,next)=>{
//     res.send("hello user you are logged in")
// })

// router.get("/checkUser", verifyUser, (req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkAdmin", verifyAdmin, (req,res,next)=>{
//     res.send("hello user, yous are logged in you can delete all account")
// })

// import express from "express";
// import {deleteUser, getAllUser, getUser, updateUser} from "../controllers/users.js"
// import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

// const router = express.Router();

// router.put("/:id", verifyUser, updateUser);
// router.delete("/:id", verifyUser, deleteUser);
// router.get("/:id", verifyUser, getUser);
// router.get("/", verifyAdmin, getAllUser);

// export default router;

import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/users";

const router = express.Router();

router.put("/", updateUser);
router.delete("/", deleteUser);
router.get("/", getUser);
router.get("/", getAllUser);

export default router;