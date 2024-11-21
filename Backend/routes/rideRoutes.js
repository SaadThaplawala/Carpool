const express = require('express');
const rideController = require('../controllers/rideController');
const router = express.Router();

router.get('/rides', rideController.getAllRides);
router.post('/rides', rideController.createRide);

module.exports = router;

