const jwt = require('jsonwebtoken');

const secret = 't0k3n';

module.exports = (user) => {
  const jwtConfig = {
    expiresIn: '60d',
    algorithm: 'HS256',
  };

  const { id, displayName, email } = user;
  return jwt.sign({ id, displayName, email }, secret, jwtConfig);
};
