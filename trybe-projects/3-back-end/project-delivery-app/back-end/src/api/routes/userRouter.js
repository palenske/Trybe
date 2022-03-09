const routes = require('express').Router();
const userController = require('../controllers/userController');

routes.get('/users/', userController.findAllUsers);
routes.get('/users/:role', userController.findUserByRole);

module.exports = routes;