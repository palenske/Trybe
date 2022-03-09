const fs = require('fs');
const jwt = require('jsonwebtoken');
const { users } = require('../../database/models');

const secret = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' }).trim();
const tokenErr = { code: 'unauthorized', message: 'Expired or invalid token' };
const tokenMiss = { code: 'unauthorized', message: 'Token not found' };

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) return next(tokenMiss);

  try {
    const { tkemail } = jwt.verify(token, secret);
    const { dataValues } = await users.findOne({ where: { email: tkemail } });
    const { id: userId, name, email, role } = dataValues;
    if (!email) return next(tokenErr);

    req.user = { userId, name, email, role };

    next();
  } catch (error) {
    return next(tokenErr);
  }
};
