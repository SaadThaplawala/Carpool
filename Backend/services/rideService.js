const connect = require('../database/db');

async function getAllRides() {
    let connection;
    try {
        connection = await connect.getConnection();
        const result = await connection.execute('SELECT * FROM Rides');
        return result.rows;
    } catch (err) {
        throw new Error("Failed to fetch rides: " + err.message);
    } finally {
        if (connection) {
            await connection.close();
        }
    }
}

async function createRide(location, date, time) {
    let connection;
    try {
        connection = await connect.getConnection();
        await connection.execute(
            `INSERT INTO rides (location, ride_date, ride_time) VALUES (:location, :ride_date, :ride_time)`,
            [location, date, time]
        );
        await connection.commit();
        return { message: "Ride created successfully!" };
    } catch (err) {
        throw new Error("Failed to create ride: " + err.message);
    } finally {
        if (connection) {
            await connection.close();
        }
    }
}

module.exports = {
    getAllRides,
    createRide,
};
