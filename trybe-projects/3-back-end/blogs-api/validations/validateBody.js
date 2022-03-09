const Joi = require('joi');

const validateUser = (req, _res, next) => {
  const JoiResult = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string().allow(null).allow(''),
  }).validate(req.body);

  return JoiResult.error
    ? next(
      {
        code: 'invalidData',
        message: JoiResult.error.details[0].message,
      },
    )
    : next();
};

const validateLogin = (req, _res, next) => {
  const joiDefault = Joi.string().not().empty().required();

  const JoiResult = Joi.object({
    email: joiDefault.email(),
    password: joiDefault,
  }).validate(req.body);

  return JoiResult.error
    ? next(
      {
        code: 'invalidData',
        message: JoiResult.error.details[0].message,
      },
    )
    : next();
};

const validateCategory = (req, _res, next) => {
  const joiDefault = Joi.string().not().empty().required();

  const JoiResult = Joi.object({
    name: joiDefault,
  }).validate(req.body);

  return JoiResult.error
    ? next(
      {
        code: 'invalidData',
        message: JoiResult.error.details[0].message,
      },
    )
    : next();
};

const validatePost = (req, _res, next) => {
  const joiDefault = Joi.string().not().empty().required();

  const JoiResult = Joi.object({
    title: joiDefault,
    content: joiDefault,
    categoryIds: Joi.array().not().empty().required(),
  }).validate(req.body);

  return JoiResult.error
    ? next(
      {
        code: 'invalidData',
        message: JoiResult.error.details[0].message,
      },
    )
    : next();
};

module.exports = {
  validateUser,
  validateLogin,
  validateCategory,
  validatePost,
};
