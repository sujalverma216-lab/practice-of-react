const Trade = require("../models/Trade");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to verify the user's token
const verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization?.startsWith("Bearer ")) return res.status(401).json({ message: "Access denied" });
  
  try {
    const verified = jwt.verify(authorization.slice(7), JWT_SECRET);
    req.user = verified; // Attach the user ID to the request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

const addTrade = async (req, res) => {
  try {
    const { stock, date, buyPrice, sellPrice, quantity, profit } = req.body;
    
    const newTrade = new Trade({
      userId: req.user.id, // Save trade to specific user
      stock, 
      date, 
      buyPrice, 
      sellPrice, 
      quantity, 
      profit
    });
    
    await newTrade.save();
    res.status(200).json(newTrade);
  } catch (error) {
    res.status(500).json({ error: "Failed to save trade" });
  }
};

const getTrades = async (req, res) => {
  try {
    // Fetch only trades belonging to the logged-in user
    const trades = await Trade.find({ userId: req.user.id });
    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch trades" });
  }
};

module.exports = { verifyToken, addTrade, getTrades };
