const rescue = require('express-rescue');
const service = require('../services/loginService');

const login = rescue(async (req, res, next) => {
  const result = await service.login(req.body);

  return result.code
    ? next(result)
    : res.status(200).json(result);
});

module.exports = {
  login,
};
