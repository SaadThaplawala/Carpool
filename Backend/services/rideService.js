const connect = require('../database/db');

async function getAllRides() {
    const connection = await connect();
    const result = await connection.execute('SELECT * FROM Rides');
    await connection.close();
    return result.rows;
}

async function createRide(location, date, time) {
    const connection = await connect();
    await connection.execute(
        `INSERT INTO rides (location, ride_date, ride_time) VALUES (:location, :ride_date, :ride_time)`,
        [location, date, time]
    );
    await connection.commit();
    await connection.close();
    return { message: "Ride created successfully!" };
}

module.exports = {
    getAllRides,
    createRide,
};

