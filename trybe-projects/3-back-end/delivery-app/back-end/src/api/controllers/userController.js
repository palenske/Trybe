const userService = require('../services/userService');

const findUserByRole = async (req, res) => {
  const { role } = req.params;
  const users = await userService.findUserByRole(role);
  if (users) {
    return res.status(200).json(users);
  }
};

const findAllUsers = async (req, res) => {
  const allUsers = await userService.findAllUsers();
  if (allUsers) {
    return res.status(200).json(allUsers);
  }
};

module.exports = {
  findUserByRole,
  findAllUsers,
};