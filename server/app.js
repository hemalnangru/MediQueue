import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

// ===============================
// Middleware
// ===============================
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// Health Check
// ===============================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MediQueue API Running Successfully",
  });
});

// ===============================
// Routes
// ===============================
app.use("/api/auth", authRoutes);

// ===============================
// 404 Handler
// ===============================
app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: "Route Not Found",
    });
});

export default app;