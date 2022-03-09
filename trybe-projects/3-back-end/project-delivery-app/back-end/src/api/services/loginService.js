const md5 = require('md5');
const { users } = require('../../database/models');
const jwt = require('../auth/authenticateToken');

const login = async (email, password) => {
  const hashedPass = md5(password);

  const user = await users.findOne({ where: { email } });
  
  if (!user || hashedPass !== user.password) {
    return { code: 404, message: 'Not found' };
  }
  const { name, role } = user;
  
  const token = jwt(user);
  return { name, email, role, token };
};

module.exports = {
  login,
};
