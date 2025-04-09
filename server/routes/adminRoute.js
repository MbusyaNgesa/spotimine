import express from "express";
import { getAdmin } from "../controller/adminController.js";
import { protectRoute, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protectRoute, requireAdmin);

export default router;
