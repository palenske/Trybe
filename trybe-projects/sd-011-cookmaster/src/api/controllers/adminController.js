const rescue = require('express-rescue');
const service = require('../services/adminService');

const create = rescue(async (req, res, next) => {
  const { role } = req.user;
  const result = await service.create(role, req.body);

  return result.code
    ? next(result)
    : res.status(201).json(result);
});

module.exports = {
  create,
};
