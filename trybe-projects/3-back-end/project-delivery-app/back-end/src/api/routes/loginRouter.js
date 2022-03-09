const routes = require('express').Router();

const loginController = require('../controllers/loginController');

routes.post('/login', loginController.login);

module.exports = routes;