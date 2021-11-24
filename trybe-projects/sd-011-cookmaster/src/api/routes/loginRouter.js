const loginRoutes = require('express').Router();
const controller = require('../controllers/loginController');
const validate = require('../../validations/validateBody');

loginRoutes.route('/')
  .post(validate.validateLogin, controller.login);

module.exports = loginRoutes;
