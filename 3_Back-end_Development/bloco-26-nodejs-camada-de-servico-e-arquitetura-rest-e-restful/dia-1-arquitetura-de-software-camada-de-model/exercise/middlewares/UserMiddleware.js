const userModel = require('../models/UserModel');
const rescue = require('express-rescue');
const { validateBody } = require('./AuthMiddleware');

const create = rescue(async (req, res, _next) => {
  const newUser = await userModel.createUser(req.body);

  res.status(201).json(newUser);
});

const createUser = [validateBody, create];

const getUsers = rescue(async (_req, res, _next) => {
  const users = await userModel.getUsers();

  res.status(200).json(users);
});

const getById = rescue(async (req, res, _next) => {
  const { id } = req.params;

  const user = await userModel.getById(id);

  return user
    ? res.status(200).json(user)
    : res.status(404).json({ error: true, message: 'Usuário não encontrado' });
});

const update = rescue(async (req, res, _next) => {
  const { id } = req.params;
  
  const updatedUser = await userModel.updateUser(id, req.body);
  console.log(updatedUser);
  return updatedUser
  ? res.status(200).json(updatedUser)
  : res.status(404).json({ error: true, message: 'Usuário não encontrado' });
})

const updateUser = [validateBody, update];

module.exports = {
  getUsers,
  getById,
  createUser,
  updateUser,
};