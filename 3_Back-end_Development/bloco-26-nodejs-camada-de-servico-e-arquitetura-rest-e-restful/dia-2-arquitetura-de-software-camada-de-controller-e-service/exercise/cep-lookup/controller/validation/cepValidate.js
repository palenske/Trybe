const Joi = require('joi');

const req = Joi.string().not().empty().required();
const errorMessage = (code, message) => ({ error: { code, message } });

const addressFormat = (obj) => {
  return Joi.object({
    cep: req.regex(/\d{5}-\d{3}/),
    logradouro: req,
    bairro: req,
    localidade: req,
    uf: req.length(2),
  })
  .messages({
    'any.required': 'O campo {{#label}} é obrigatório',
    'string.base': 'O campo {{#label}} tem de ser do tipo "string"',
    'string.min': 'O campo {{#label}} tem de ter no mínimo {{#limit}} caracteres',
    'string.max': 'O campo {{#label}} não pode ter mais do que {{#limit}} caracteres',
    'regex.base': 'O campo {{#label}} é inválido',
  })
  .validate(obj);
};

const cepFormat = (cep) => {
  return /^\d{5}-?\d{3}$/.test(cep)
    ? {}
    : errorMessage('invalidData', 'CEP inválido');
};

module.exports = {
  addressFormat,
  cepFormat,
};
