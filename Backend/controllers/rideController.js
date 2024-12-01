const Ride = require("../models/rideModel");
const Booking = require("../models/bookingModel"); // Create a new model for ride bookings

// Create a new ride
exports.createRide = async (req, res) => {
  try {
    const { from, to, dateTime, seatsAvailable, price } = req.body;
    const driverId = req.user.userId;

    const newRide = new Ride({ driverId, from, to, dateTime, seatsAvailable, price });
    await newRide.save();

    res.status(201).json({ message: "Ride created successfully", ride: newRide });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Cancel a booking
exports.cancelBooking = async (req, res) => {
    try {
      const { bookingId } = req.body;
  
      const booking = await Booking.findById(bookingId).populate("rideId");
      if (!booking) return res.status(404).json({ error: "Booking not found" });
  
      if (booking.status !== "active") return res.status(400).json({ error: "Booking already canceled or completed" });
  
      // Update booking and ride
      booking.status = "canceled";
      await booking.save();
  
      booking.rideId.seatsAvailable += 1;
      await booking.rideId.save();
  
      res.status(200).json({ message: "Booking canceled successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  


// List rides created by the user (Active Bookings)
exports.listUserRides = async (req, res) => {
  try {
    const userId = req.user.userId;
    const activeRides = await Ride.find({ driverId: userId, dateTime: { $gte: new Date() } });
    res.status(200).json(activeRides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// List user's ride history (past rides)
exports.listUserRideHistory = async (req, res) => {
    try {
      const userId = req.user.userId;
      const rideHistory = await Ride.find({ driverId: userId, dateTime: { $lt: new Date() } });
      res.status(200).json(rideHistory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

  const Booking = require("../models/bookingModel"); // Create a new model for ride bookings

// Book a ride
exports.bookRide = async (req, res) => {
  try {
    const { rideId } = req.body;
    const userId = req.user.userId;

    const ride = await Ride.findById(rideId);
    if (!ride) return res.status(404).json({ error: "Ride not found" });

    if (ride.seatsAvailable <= 0) return res.status(400).json({ error: "No seats available" });

    // Create booking
    const booking = new Booking({
      userId,
      rideId,
    });

    await booking.save();

    // Update ride seats
    ride.seatsAvailable -= 1;
    await ride.save();

    res.status(201).json({ message: "Ride booked successfully", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



// List all rides
exports.listRides = async (req, res) => {
  try {
    const rides = await Ride.find({ dateTime: { $gte: new Date() }, seatsAvailable: { $gt: 0 } });
    res.status(200).json(rides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
