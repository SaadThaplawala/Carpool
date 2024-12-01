const express = require("express");
const { createRide, listRides } = require("../controllers/rideController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// Create a new ride
router.post("/create", authMiddleware, createRide);

// List available rides
router.get("/list", listRides);
router.get("/my-active-bookings", authMiddleware, listUserRides);
router.get("/my-ride-history", authMiddleware, listUserRideHistory);
router.post("/book", authMiddleware, bookRide);
router.post("/cancel-booking", authMiddleware, cancelBooking);


module.exports = router;
