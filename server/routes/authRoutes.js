// server/routes/authRoutes.js
const express = require("express");
const { register } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);  // Handle user registration

module.exports = router;
