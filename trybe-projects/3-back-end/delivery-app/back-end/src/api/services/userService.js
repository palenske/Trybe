const { users } = require('../../database/models');

const findUserByRole = async (role) => {
  const foundUser = await users.findAll({ where: { role } });
  return foundUser;
};

const findAllUsers = async () => {
  const foundUsers = await users.findAll({});
  return foundUsers;
};

module.exports = {
  findUserByRole,
  findAllUsers,
};
