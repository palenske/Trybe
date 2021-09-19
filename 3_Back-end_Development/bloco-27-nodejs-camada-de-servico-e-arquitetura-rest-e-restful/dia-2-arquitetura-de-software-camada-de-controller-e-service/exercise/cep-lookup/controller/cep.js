const service = require('../services/cep');
const rescue = require('express-rescue');

const findByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;
  
  const address = await service.findByCep(cep);

  return address.error
    ? next(address.error)
    : res.status(200).json(address);
});

module.exports = {
  findByCep,
};
