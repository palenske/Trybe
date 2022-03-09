const routes = require('express').Router();

const registerController = require('../controllers/registerController');

routes.post('/register', registerController.register);

module.exports = routes;