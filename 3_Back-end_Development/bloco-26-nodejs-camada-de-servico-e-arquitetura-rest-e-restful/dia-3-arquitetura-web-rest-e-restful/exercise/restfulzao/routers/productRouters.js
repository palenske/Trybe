const products = require('express').Router();
const controller = require('../controllers/productController');

products.route('/')
  .get(controller.getAll)
  .post(controller.create);

products.route('/:id')
  .get(controller.getById)
  .put(controller.update)
  .delete(controller.exclude);

module.exports = products;