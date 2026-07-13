import express from "express";

import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} from "../controllers/auth.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// ===============================
// Public Routes
// ===============================

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Logout
router.post("/logout", logoutUser);

// ===============================
// Protected Routes
// ===============================

// Current Logged-in User
router.get("/me", protect, getCurrentUser);

export default router;