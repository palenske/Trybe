const md5 = require('md5');
const { users } = require('../../database/models');
const jwt = require('../auth/authenticateToken');

const register = async (name, email, password) => {
  const user = await users.findOne({ where: { email } });
  if (user) {
    return { code: 409, message: 'already exists' };
  }

  const newUserPayload = { name, email, password: md5(password), role: 'customer' };

  const { dataValues:
    { id, password: pass, ...userData } } = await users.create(newUserPayload);
  const token = jwt(userData);

  return { ...userData, token };
};

module.exports = {
  register,
};