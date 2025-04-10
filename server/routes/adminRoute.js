import express from "express";
import { createSong } from "../controller/adminController.js";
import { protectRoute, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/songs", protectRoute, requireAdmin, createSong);

export default router;
