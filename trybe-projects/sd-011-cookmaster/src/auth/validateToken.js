const jwt = require('jsonwebtoken');
const model = require('../api/models/usersModel');

const secret = 't0k3n';
const tokenErr = { code: 'unauthorized', message: 'jwt malformed' };
const tokenMiss = { code: 'unauthorized', message: 'missing auth token' };

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) return next(tokenMiss);

  try {
    const { email } = jwt.verify(token, secret);
    const { _id, role } = await model.getUser(email);

    if (!_id) return next(tokenErr);

    req.user = { userId: _id, email, role };

    next();
  } catch (error) {
    return next(tokenErr);
  }
};
