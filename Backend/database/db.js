const oracledb = require('oracledb');

async function connect() {
    try {
        const connection = await oracledb.getConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectString: process.env.DB_CONNECTION_STRING,
        });
        console.log("Connected to the database!");
        return connection;
    } catch (err) {
        console.error("Database connection failed:", err);
        throw err;
    }
}

module.exports = connect;

