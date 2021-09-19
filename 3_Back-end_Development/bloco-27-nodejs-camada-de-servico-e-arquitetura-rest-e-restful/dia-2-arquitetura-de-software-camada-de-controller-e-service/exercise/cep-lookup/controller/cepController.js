const rescue = require('express-rescue');
const service = require('../services/cepServices');
const validate = require('./validation/cepValidate');

const findByCep = rescue(async (req, res, next) => {
  const { cep } = req.params
  const { error } = validate.cepFormat(cep);
  if (error) return next(error);

  const address = await service.findByCep(cep);
  return address.error
    ? next(address.error)
    : res.status(200).json(address);
});

const createAddress = rescue(async (req, res, next) => {
  const { error } = validate.addressFormat(req.body);
  if (error) return next(error);

  const newAddress = await service.createAddress(req.body);
  return newAddress.error
    ? next(newAddress.error)
    : res.status(201).json(newAddress);
});

module.exports = {
  findByCep,
  createAddress,
};
