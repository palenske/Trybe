const controller = require('../controller/cepController');
module.exports = cepRoute = require('express').Router();

cepRoute.route('/:cep')
  .get(controller.findByCep);

cepRoute.route('/')
  .post(controller.createAddress);
