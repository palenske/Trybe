const controller = require('../controller/cepController');
const validation = require('../validation/cepValidate');
module.exports = cepRoute = require('express').Router();

cepRoute.route('/:cep')
  .get(validation.validateCep, controller.findByCep);

cepRoute.route('/')
  .post(validation.validateAddress, controller.createAddress);
