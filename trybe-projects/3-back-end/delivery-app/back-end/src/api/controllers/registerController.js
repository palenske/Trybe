const registerService = require('../services/registerService');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await registerService.register(name, email, password);
  if (user.code) {
    return res.status(user.code).json({ message: user.message });
  }
  return res.status(201).json(user);
};

module.exports = {
  register,
};