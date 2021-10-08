const userModel = require('../models/UserModel');
const rescue = require('express-rescue');
const { validateBody } = require('./AuthMiddleware');

const createUser = rescue(async (req, res, _next) => {
  const newUser = await userModel.createUser(req.body);

  res.status(201).json(newUser);
});

const create = [validateBody, createUser];

const getUsers = rescue(async (_req, res, _next) => {
  const users = await userModel.getUsers();

  res.status(200).json(users);
});

module.exports = {
  create,
  getUsers,
};