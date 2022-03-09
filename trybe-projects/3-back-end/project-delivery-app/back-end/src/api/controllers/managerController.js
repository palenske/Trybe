const managerService = require('../services/managerService');

const userRegister = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = await managerService.userRegister(name, email, password, role);
  if (user.code) {
    return res.status(user.code).json({ message: user.message });
  }
  return res.status(201).json(user);
};

const deleteUser = async (req, _res) => {
  const { email } = req.headers;
  await managerService.deleteUser(email);
};

module.exports = {
  userRegister,
  deleteUser,
};