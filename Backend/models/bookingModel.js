const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rideId: { type: mongoose.Schema.Types.ObjectId, ref: "Ride", required: true },
  status: { type: String, enum: ["active", "canceled", "completed"], default: "active" },
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
