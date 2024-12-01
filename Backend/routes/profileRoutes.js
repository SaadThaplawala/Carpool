const express = require("express");
const { getProfile, updateProfile } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// Get user profile
router.get("/", authMiddleware, getProfile);

// Update user profile
router.put("/update", authMiddleware, updateProfile);

module.exports = router;
