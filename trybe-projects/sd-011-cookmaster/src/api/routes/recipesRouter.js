const recipesRoutes = require('express').Router();
const controller = require('../controllers/recipesController');
const validateToken = require('../../auth/validateToken');
const validate = require('../../validations/validateBody');
const upload = require('../../middlewares/upload');

recipesRoutes.route('/')
  .get(controller.getRecipes)
  .post(validateToken, validate.validateRecipe, controller.create);

recipesRoutes.route('/:id/image')
  .put(validateToken, upload, controller.uploadImg);

recipesRoutes.route('/:id')
  .all(validate.validateId)
  .get(controller.getById)
  .put(validateToken, controller.update)
  .delete(validateToken, controller.exclude);

module.exports = recipesRoutes;
