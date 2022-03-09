const routes = require('express').Router();
const salesController = require('../controllers/salesController');
const validateToken = require('../auth/validateToken');

routes.post('/sales', validateToken, salesController.createSales);
routes.get('/sales', salesController.getSales);
routes.get('/sales/seller', validateToken, salesController.getSalesBySeller);
routes.get('/sales/:id', salesController.getSalesById);

module.exports = routes;