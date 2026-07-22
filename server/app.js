const express = require("express");
const cors = require("cors");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const studentRoutes = require("./routes/studentRoutes");
const tradeRoutes = require("./routes/tradeRoutes");

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests

// Updated CORS configuration to allow local development and Vercel production
app.use(cors({
    origin: [
      "http://localhost:5173", 
      "http://localhost:3000",
      /\.vercel\.app$/ // Automatically allows any preview or production deployment on Vercel
    ],
    credentials: true
}));

// Mount Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/trades", tradeRoutes);

module.exports = app;