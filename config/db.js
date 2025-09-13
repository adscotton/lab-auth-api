const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'adscotton',
  password: process.env.DB_PASS || 'strong password',
  database: process.env.DB_NAME || 'lab_auth',
  db_port: process.env.DB_PORT || "3306", 
});

connection.connect(err => {
  if (err) {
    console.error('❌ DB connection failed:', err.message);
    return;
  }
  console.log('✅ MySQL connected');
});

module.exports = connection;