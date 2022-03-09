const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 't0k3n';
const tokenErr = { code: 'unauthorized', message: 'Expired or invalid token' };
const tokenMiss = { code: 'unauthorized', message: 'Token not found' };

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) return next(tokenMiss);

  try {
    const { id } = jwt.verify(token, secret);
    const { displayName, email } = await User.findOne({ where: { id } });

    if (!email) return next(tokenErr);

    req.user = { userId: id, displayName, email };

    next();
  } catch (error) {
    return next(tokenErr);
  }
};
