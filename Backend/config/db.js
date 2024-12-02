const mongoose = require("mongoose");
require("dotenv").config();


console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging statement

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process with failure
  }
};


module.exports = connectDB; // Only export the `connectDB` function
