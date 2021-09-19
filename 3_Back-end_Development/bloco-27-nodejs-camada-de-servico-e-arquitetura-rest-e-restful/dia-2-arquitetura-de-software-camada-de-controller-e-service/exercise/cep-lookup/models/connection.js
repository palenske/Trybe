const mysql = require('mysql2/promise');

const { host, user, password, database } = process.env;

const connection = mysql.createPool({ host, user, password, database });

module.exports = connection;