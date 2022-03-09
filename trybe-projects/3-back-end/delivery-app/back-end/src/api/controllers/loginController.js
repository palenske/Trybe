const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService.login(email, password);
  if (user.code) {
    return res.status(user.code).json({ message: user.message });
  }
  return res.status(200).json(user);
};

module.exports = {
  login,
};