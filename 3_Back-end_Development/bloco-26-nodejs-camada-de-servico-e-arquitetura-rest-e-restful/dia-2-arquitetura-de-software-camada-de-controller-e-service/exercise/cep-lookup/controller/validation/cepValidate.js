const Joi = require('joi');

const req = Joi.string().not().empty().required();
const errorMessage = (code, message) => ({ error: { code, message } });
const regexCustomMessage = (value, helper) => /\d{5}-\d{3}/.test(value)
  ? true
  : helper.message('O campo {{#label}} deve ter um formato "00000-000"');

const addressFormat = (obj) => {
  return Joi.object({
    cep: req.custom(regexCustomMessage),
    logradouro: req,
    bairro: req,
    localidade: req,
    uf: req.length(2),
  })
    .messages({
      'any.required': 'O campo {{#label}} é obrigatório',
      'string.base': 'O campo {{#label}} tem de ser do tipo "string"',
      'string.empty': 'O campo {{#label}} não pode ser vazio'
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
