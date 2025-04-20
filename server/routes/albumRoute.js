import express from "express";
import { getAlbumById, getAllAlbums } from "../controller/albumController.js";

const router = express.Router();

router.get("/", getAllAlbums);
router.get("/:albumId", getAlbumById);

export default router;
