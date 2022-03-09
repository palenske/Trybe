const { User } = require('../models');
const getToken = require('../auth/authenticateToken');

const createUser = async (userData) => {
  const existingUser = await User.findOne({ where: { email: userData.email } });

  if (existingUser) return { code: 'alreadyExists', message: 'User already registered' };

  const newUser = await User.create({ ...userData });

  return getToken(newUser.dataValues);
};

const getUsers = async () => {
  const users = await User.findAll();

  if (!users) return { code: 'notFound', message: 'no user' };

  return users;
};

const getUserById = async (id) => {
  const result = await User.findOne({ where: { id } });

  if (!result) return { code: 'notFound', message: 'User does not exist' };

  const { dataValues: { password, ...user } } = result;

  return user;
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
