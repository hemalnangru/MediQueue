import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect Database & Start Server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`
========================================
🏥 MediQueue Server Started
🌐 Environment : ${process.env.NODE_ENV || "development"}
🚀 Port        : ${PORT}
========================================
      `);
    });
  } catch (error) {
    console.error("❌ Server startup failed:");
    console.error(error.message);
    process.exit(1);
  }
};

startServer();