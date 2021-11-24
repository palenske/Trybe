const Joi = require('joi');

const joiReq = Joi.string().not().empty().required();
const errorMessage = (code, message) => ({ error: { code, message } });
const regexCustomMessage = (value, helper) => /\d{5}-\d{3}/.test(value)
  ? true
  : helper.message('O campo {{#label}} deve ter um formato "00000-000"');

const validateAddress = (req, _res, next) => {
  const joiResult = Joi.object({
    cep: joiReq.custom(regexCustomMessage),
    logradouro: joiReq,
    bairro: joiReq,
    localidade: joiReq,
    uf: joiReq.length(2),
  })
    .messages({
      'any.required': 'O campo {{#label}} é obrigatório',
      'string.base': 'O campo {{#label}} tem de ser do tipo "string"',
      'string.empty': 'O campo {{#label}} não pode ser vazio',
      'string.length': 'O campo {{#label}} deve conter {{#limit}} caracteres'
    })
    .validate(req.body);

  return !joiResult.error
    ? next()
    : next(joiResult.error);
};

const validateCep = (req, _res, next) => {
  console.log('validate aqui');
  const { cep } = req.params
  return /^\d{5}-?\d{3}$/.test(cep)
    ? next()
    : next(errorMessage('invalidData', 'CEP inválido').error);
};

module.exports = {
  validateAddress,
  validateCep,
};
