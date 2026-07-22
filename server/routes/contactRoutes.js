const express = require("express");
const router = express.Router();
const { submitContact } = require("../controllers/contactController");

// This maps to http://localhost:3000/api/contact/
router.post("/", submitContact);

module.exports = router;
