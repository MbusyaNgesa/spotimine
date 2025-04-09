import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";

import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";
import adminRoutes from "./routes/adminRoute.js";
import albumRoutes from "./routes/albumRoute.js";
import songRoutes from "./routes/songRoute.js";
import statRoutes from "./routes/statRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(clerkMiddleware()); // adds auth to req object

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

app.listen(PORT, () => {
  console.log("Server is running ");
  connectDB();
});
