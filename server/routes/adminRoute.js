import express from "express";
import { getAdmin } from "../controller/adminController.js";

const router = express.Router();

router.get("/", getAdmin);

export default router;
