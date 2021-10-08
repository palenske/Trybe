const userModel = require('../models/UserModel');
const rescue = require('express-rescue');
const { validateBody } = require('./AuthMiddleware');

const createUser = rescue(async (req, res, _next) => {
  const newUser = await userModel.createUser(req.body);

  res.status(201).json(newUser);
});

module.exports = [validateBody, createUser];