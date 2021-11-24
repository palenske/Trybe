const { ObjectId } = require('mongodb');
const Joi = require('joi');

const JoiStringBase = Joi.string().not().empty().required();

const validateUser = (req, _res, next) => {
  const JoiResult = Joi.object({
    name: JoiStringBase,
    email: Joi.string().email().required(),
    password: JoiStringBase,
  }).validate(req.body);

  return JoiResult.error
    ? next(
      {
        code: 'invalidData',
        message: 'Invalid entries. Try again.',
      },
    )
    : next();
};

const validateLogin = (req, _res, next) => {
  const JoiResult = Joi.object({
    email: Joi.string().email().required(),
    password: JoiStringBase,
  }).validate(req.body);

  return JoiResult.error
    ? next(
      {
        code: 'unauthorized',
        message: 'All fields must be filled',
      },
    )
    : next();
};

const validateRecipe = (req, _res, next) => {
  const JoiResult = Joi.object({
    name: JoiStringBase,
    ingredients: JoiStringBase,
    preparation: JoiStringBase,
  }).validate(req.body);

  return JoiResult.error
    ? next(
      {
        code: 'invalidData',
        message: 'Invalid entries. Try again.',
      },
    )
    : next();
};

const validateId = (req, _res, next) => (!ObjectId.isValid(req.params.id)
  ? next({ code: 'notFound', message: 'recipe not found' })
  : next());

module.exports = {
  validateUser,
  validateLogin,
  validateRecipe,
  validateId,
};
