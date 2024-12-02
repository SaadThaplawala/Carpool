const express = require("express");
const {
  createRide,
  listRides,
  listUserRides,
  listUserRideHistory,
  bookRide,
  cancelBooking,
} = require("../controllers/rideController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// Create a new ride
router.post("/create", authMiddleware, createRide);

// List available rides
router.get("/list", listRides);

// List active bookings for the user
router.get("/my-active-bookings", authMiddleware, listUserRides);

// List ride history for the user
router.get("/my-ride-history", authMiddleware, listUserRideHistory);

// Book a ride
router.post("/book", authMiddleware, bookRide);

// Cancel a booking
router.post("/cancel-booking", authMiddleware, cancelBooking);

module.exports = router;
