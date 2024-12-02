const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db"); // Import the `connectDB` function
const cors = require("cors"); // Import CORS middleware
require("dotenv").config();
 // Call the function to establish the MongoDB connection

// Import routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

const authRoutes = require("./routes/authRoutes");
const rideRoutes = require("./routes/rideRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5000"], // Update domains as needed
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json()); // Parse incoming JSON data

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/rides", rideRoutes); // Placeholder for ride-related routes
app.use("/api/profile", profileRoutes); // Placeholder for profile-related routes

// Error handling middleware (optional, useful for debugging)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
