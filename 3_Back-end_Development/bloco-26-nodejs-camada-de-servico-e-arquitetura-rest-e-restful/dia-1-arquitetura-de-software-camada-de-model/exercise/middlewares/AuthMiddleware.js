const Joi = require('joi');

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// messages({
//   'any.required': 'O campo {{#label}} é obrigatório',
//   'string.min': 'O campo {{#label}} deve ter no mínimo 6 caracters',
//   'string.mail': 'O campo {{#label}} deve receber um e-mail válido',
// });

const validateBody = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);

  return error
  ? next(error)
  : next();
};

module.exports = {
  validateBody,
};
