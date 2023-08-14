
// import express from "express";
// import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotels.js";
// import { verifyAdmin } from "../utils/verifyToken.js";

// const router = express.Router();

// router.post("/", verifyAdmin, createHotel);
// router.put("/:id", verifyAdmin, updateHotel);
// router.delete("/:id", verifyAdmin, deleteHotel);
// router.get("/:id", getHotel);
// router.get("/", getAllHotel);

// export default router;

import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotels";

const router = express.Router();

router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/:id", getHotel);
router.get("/", getAllHotel)

export default router