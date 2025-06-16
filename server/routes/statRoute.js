import express from "express";
import { protectRoute, requireAdmin } from "../middleware/authMiddleware.js";
import { getStats } from "../controller/statController.js";

const router = express.Router();

router.get("/", protectRoute, requireAdmin, getStats);

export default router;
