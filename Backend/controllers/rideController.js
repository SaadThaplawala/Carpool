const rideService = require('../services/rideService');

async function getAllRides(req, res) {
    try {
        const rides = await rideService.getAllRides();
        res.status(200).json(rides);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function createRide(req, res) {
    const { location, date, time } = req.body;
    try {
        const result = await rideService.createRide(location, date, time);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getAllRides,
    createRide,
};

