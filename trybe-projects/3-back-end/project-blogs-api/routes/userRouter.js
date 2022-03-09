const userRoutes = require('express').Router();
const controller = require('../controllers/userController');
const validateToken = require('../auth/validateToken');
const { validateUser } = require('../validations/validateBody');

userRoutes.route('/')
  .get(validateToken, controller.getUsers)
  .post(validateUser, controller.createUser);

userRoutes.route('/:id')
  .get(validateToken, controller.getUserById);

module.exports = userRoutes;
