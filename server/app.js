const express = require("express");
const cors = require("cors");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const studentRoutes = require("./routes/studentRoutes");
const tradeRoutes = require("./routes/tradeRoutes");

const app = express();

// Middleware
app.use(express.json()); 

// UPDATE 2: Allow requests from BOTH your local React and your live Vercel app
app.use(cors({
    origin: ["http://localhost:5173", "https://eternal-education-pied.vercel.app"], 
    credentials: true
}));

// Mount Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/trades", tradeRoutes);

module.exports = app;