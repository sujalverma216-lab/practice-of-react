const express = require("express");
const router = express.Router();
const { verifyToken, addTrade, getTrades } = require("../controllers/tradeController");

// The verifyToken middleware runs before the controller logic
router.post("/", verifyToken, addTrade);
router.get("/", verifyToken, getTrades);

module.exports = router;