const express = require("express");
const cors = require("cors");

// Import Routes (You will create these next)
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const studentRoutes = require("./routes/studentRoutes");
const tradeRoutes = require("./routes/tradeRoutes");

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors({
    origin: "http://localhost:5173", // Only allow your frontend port
    credentials: true
}));

// Mount Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/trades", tradeRoutes);

module.exports = app;