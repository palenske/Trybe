const rescue = require('express-rescue');
const service = require('../services/usersService');

const create = rescue(async (req, res, next) => {
  const result = await service.create(req.body);

  return result.code
    ? next(result)
    : res.status(201).json(result);
});

module.exports = {
  create,
};
