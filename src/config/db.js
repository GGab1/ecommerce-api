const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "ecommerce",
  waitForConnections: true,
  connectionLimit: 10,
});

function waitForDB() {
  return new Promise((resolve) => {
    const tryConnect = () => {
      db.getConnection((err, connection) => {
        if (err) {
          console.log("⏳ MySQL pas prêt, retry...");
          setTimeout(tryConnect, 2000);
        } else {
          console.log("✅ Connecté à MySQL");
          connection.release();
          resolve();
        }
      });
    };
    tryConnect();
  });
}

module.exports = { db, waitForDB };
