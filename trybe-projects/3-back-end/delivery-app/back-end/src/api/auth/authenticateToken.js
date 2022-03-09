const fs = require('fs');
const jwt = require('jsonwebtoken');

const secret = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' }).trim();

module.exports = (user) => {
  const jwtConfig = {
    expiresIn: '60d',
    algorithm: 'HS256',
  };

  const { name, email, role } = user;
  return jwt.sign({ name, tkemail: email, role }, secret, jwtConfig);
};
