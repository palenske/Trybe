const routes = require('express').Router();

const productsController = require('../controllers/productsController');

routes.get('/customer/products', productsController.getAll);

module.exports = routes;