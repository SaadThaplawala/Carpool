const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  dateTime: { type: Date, required: true },
  seatsAvailable: { type: Number, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Ride", rideSchema);
