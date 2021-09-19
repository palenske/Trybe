const Joi = require('joi');

const required = Joi.string().not().empty().required();
const errorMessage = (code, message) => ({ error: { code, message } });

const addressFormat = (obj) => {
  return Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: required,
    bairro: required,
    localidade: required,
    uf: required.length(2),
  }).validate(obj);
};

const cepFormat = (cep) => {
  return /^[0-9]{8}$/.test(cep) || /\d{5}-\d{3}/.test(cep)
    ? {}
    : errorMessage('invalidData', 'CEP inválido');
};

module.exports = {
  addressFormat,
  cepFormat,
};
