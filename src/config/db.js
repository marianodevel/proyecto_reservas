const mysql = require("mysql2/promise");
require("dotenv").config();

// los secretos se usan durante el desarrollo. Luego se van a guardar solamente en .env
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "reservas_user",
  password: process.env.DB_PASS || "reservas_pass",
  database: process.env.DB_NAME || "reservas_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
