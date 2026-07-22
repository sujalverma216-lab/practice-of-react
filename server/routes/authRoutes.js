const express = require("express");
const router = express.Router();
const { signup, login, me } = require("../controllers/authController");
const { verifyToken } = require("../controllers/tradeController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", verifyToken, me);

module.exports = router;
