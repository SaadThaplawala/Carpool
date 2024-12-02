
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  contactNo: { type: String, required: true, match: /^03\d{9}$/ },
  email: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9._%+-]+@+[a-zA-Z0-9._%+-]+iba\.edu\.pk$/ },
  erp: { type: Number, required: true, min: 10000, max: 99999 },
  password: { type: String, required: true },
  carDetails: {
    plateNo: { type: String },
    licenseNo: { type: String },
    vehicleCapacity: { type: Number }
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
