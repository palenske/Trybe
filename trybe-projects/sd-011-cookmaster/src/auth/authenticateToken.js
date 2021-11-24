const jwt = require('jsonwebtoken');

const secret = 't0k3n';

module.exports = (user) => {
  const jwtConfig = {
    expiresIn: '1m',
    algorithm: 'HS256',
  };

  const { _id, role, email } = user;
  return jwt.sign({ _id, email, role }, secret, jwtConfig);
};
