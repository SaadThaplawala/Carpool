require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rideRoutes = require('./routes/rideRoutes');
const db = require('./database/db');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Database Connection Pool
(async () => {
    try {
        await db.initialize();
    } catch (err) {
        console.error("Failed to initialize the database. Exiting...");
        process.exit(1);
    }
})();

// Routes
app.use('/api', rideRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('Hello, Carpool Backend is running!');
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Graceful Shutdown
process.on('SIGINT', async () => {
    console.log("\nShutting down server...");
    await db.closePool();
    process.exit(0);
});
