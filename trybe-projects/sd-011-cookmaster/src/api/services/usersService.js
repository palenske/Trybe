const model = require('../models/usersModel');

const create = async (userData) => {
  const newUser = { ...userData, role: 'user' };

  const existingUser = await model.getUser(userData.email);

  if (existingUser) return { code: 'alreadyExists', message: 'Email already registered' };

  const createdUser = await model.create(newUser);
  return createdUser;
};

module.exports = {
  create,
};
