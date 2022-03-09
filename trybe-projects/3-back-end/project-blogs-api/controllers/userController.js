const rescue = require('express-rescue');
const service = require('../services/userService');

const createUser = rescue(async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const result = await service.createUser({ displayName, email, password, image });

  return result.code
    ? next(result)
    : res.status(201).json(result);
});

const getUsers = rescue(async (_req, res, next) => {
  const result = await service.getUsers();

  return result.code
    ? next(result)
    : res.status(200).json(result);
});

const getUserById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const result = await service.getUserById(id);

  return result.code
    ? next(result)
    : res.status(200).json(result);
});
module.exports = {
  createUser,
  getUsers,
  getUserById,
};
