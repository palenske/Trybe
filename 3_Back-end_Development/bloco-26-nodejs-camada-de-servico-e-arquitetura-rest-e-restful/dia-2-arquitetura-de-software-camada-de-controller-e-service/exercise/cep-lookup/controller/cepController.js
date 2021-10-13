const rescue = require('express-rescue');
const service = require('../services/cepServices');

const findByCep = rescue(async (req, res, next) => {
  const address = await service.findByCep(req.params.cep);
  return address.error
    ? next(address.error)
    : res.status(200).json(address);
});

const createAddress = rescue(async (req, res, next) => {
  const newAddress = await service.createAddress(req.body);
  return newAddress.error
    ? next(newAddress.error)
    : res.status(201).json(newAddress);
});

module.exports = {
  findByCep,
  createAddress,
};
