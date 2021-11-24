const usersRoutes = require('express').Router();
const controller = require('../controllers/usersController');
const adminController = require('../controllers/adminController');
const validate = require('../../validations/validateBody');
const validateToken = require('../../auth/validateToken');

usersRoutes.route('/')
  .post(validate.validateUser, controller.create);

usersRoutes.route('/admin')
  .post(validateToken, validate.validateUser, adminController.create);

module.exports = usersRoutes;
