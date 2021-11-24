const model = require('../models/usersModel');

const create = async (role, userData) => {
  const newAdmin = { ...userData, role };

  if (role !== 'admin') {
    return {
      code: 'forbidden',
      message: 'Only admins can register new admins',
    };
  }

  const existingUser = await model.getUser(userData.email);

  if (existingUser) return { code: 'alreadyExists', message: 'Email already registered' };

  const createdUser = await model.create(newAdmin);
  return createdUser;
};

module.exports = {
  create,
};
