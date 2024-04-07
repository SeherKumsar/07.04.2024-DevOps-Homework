const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createPool({
  connectionLimit: 100, // 100 tane bağlantı oluşturabilir
  host: "lab-db.cnoiwo4ae2s6.eu-west-1.rds.amazonaws.com",
  user: "admin",
  // Buraya MySQL şifrenizi ekleyin
  password: process.env.AWS_RDD_PASSWORD,
  database: "lab-db",
});

module.exports = connection;
