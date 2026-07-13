import User from "../models/user.js";
import generateToken from "../utils/generateToken.js";
import {
  hashPassword,
  comparePassword,
} from "../utils/hashPassword.js";

// ======================================
// Register User
// ======================================
export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, phone, role } = req.body;

    // Validate required fields
    if (!fullName || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered.",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      role: role || "patient",
    });

    // Generate JWT
    const token = generateToken(user._id, user.role);

    return res.status(201).json({
      success: true,
      message: "Registration successful.",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ======================================
// Login User
// ======================================
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const isMatch = await comparePassword(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = generateToken(user._id, user.role);

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ======================================
// Get Current User
// ======================================
export const getCurrentUser = async (req, res) => {
    try {
      return res.status(200).json({
        success: true,
        user: req.user,
      });
    } catch (error) {
      console.error("Get Current User Error:", error);
  
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

// ======================================
// Logout User
// ======================================
export const logoutUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Logout successful.",
  });
};