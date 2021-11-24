const mysql = require('mysql2/promise');

const { HOST: host, USER: user, PASSWORD: password, DATABASE: database } = process.env;

const connection = mysql.createPool({
  host,
  user,
  password,
  database,
});

module.exports = connection;