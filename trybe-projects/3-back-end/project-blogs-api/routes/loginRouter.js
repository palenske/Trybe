const userRoutes = require('express').Router();
const controller = require('../controllers/loginController');
const { validateLogin } = require('../validations/validateBody');

userRoutes.post('/', validateLogin, controller.login);

module.exports = userRoutes;
