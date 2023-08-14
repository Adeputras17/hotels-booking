import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/rooms";
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js"

const router = express.Router();

router.post("/", verifyAdmin, createRoom);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id", verifyAdmin, deleteRoom);
router.get("/:id", getRoom);
router.get("/", getAllRoom);

export default router