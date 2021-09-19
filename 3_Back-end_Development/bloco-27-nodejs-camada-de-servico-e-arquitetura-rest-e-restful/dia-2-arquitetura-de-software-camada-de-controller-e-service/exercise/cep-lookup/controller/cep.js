const service = require('../services/cep');
const rescue = require('express-rescue');
const validate = require('../validation/cepValidate');

const findByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;


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

  const newAdress = await service.createAddress(req.body);
  return newAdress.error
    ? next(newAdress.error)
    : res.status(201).json(newAdress);
});

module.exports = {
  findByCep,
  createAddress,
};
