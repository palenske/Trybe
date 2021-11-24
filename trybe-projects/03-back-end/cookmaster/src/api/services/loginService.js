const usersModel = require('../models/usersModel');
const authenticate = require('../../auth/authenticateToken');

const login = async ({ email, password }) => {
  const user = await usersModel.getUser(email);

  if (!user || user.password !== password) {
    return { code: 'unauthorized', message: 'Incorrect username or password' };
  }

  const token = authenticate(user);
  return { token };
};

module.exports = {
  login,
};
