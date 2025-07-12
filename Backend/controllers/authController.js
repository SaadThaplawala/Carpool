const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateToken = require("../config/jwt");
const { handleError } = require("../utils/errorHandler");

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    handleError(error, res);
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const { fullName, contactNo, carDetails } = req.body;
    const user = await User.findById(req.user.userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    user.fullName = fullName || user.fullName;
    user.contactNo = contactNo || user.contactNo;
    user.carDetails = carDetails || user.carDetails;

    await user.save();
    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    handleError(error, res);
  }
};
