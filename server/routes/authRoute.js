import express from "express";
import { authCallback } from "../controller/authController.js";

const router = express.Router();

router.post("/callback", authCallback);

export default router;
