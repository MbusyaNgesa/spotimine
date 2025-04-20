import express from "express";
import {
  createAlbum,
  createSong,
  deleteAlbum,
  deleteSong,
} from "../controller/adminController.js";
import { protectRoute, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/songs", protectRoute, requireAdmin, createSong);
router.delete("/songs/:id", protectRoute, requireAdmin, deleteSong);

router.post("/albums", protectRoute, requireAdmin, createAlbum);
router.delete("/albums/:id", protectRoute, requireAdmin, deleteAlbum);

export default router;
