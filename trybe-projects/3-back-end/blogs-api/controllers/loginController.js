const rescue = require('express-rescue');
const service = require('../services/loginService');

const login = rescue(async (req, res, next) => {
  const { email, password } = req.body;

  const result = await service.login({ email, password });

  return result.code
    ? next(result)
    : res.status(200).json(result);
});

module.exports = {
  login,
};
