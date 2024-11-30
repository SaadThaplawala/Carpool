// const oracledb = require('oracledb');

// let pool;

// async function initialize() {
//     try {
//         pool = await oracledb.createPool({
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             connectString: process.env.DB_CONNECTION_STRING,
//         });
//         console.log("Connection pool started");
//     } catch (err) {
//         console.error("Failed to initialize the database pool:", err);
//         throw err;
//     }
// }

// async function getConnection() {
//     if (!pool) {
//         throw new Error("Database pool is not initialized. Call initialize() first.");
//     }
//     return pool.getConnection();
// }

// async function closePool() {
//     try {
//         if (pool) {
//             await pool.close();
//             console.log("Connection pool closed");
//         }
//     } catch (err) {
//         console.error("Failed to close the database pool:", err);
//     }
// }

// module.exports = { initialize, getConnection, closePool };
