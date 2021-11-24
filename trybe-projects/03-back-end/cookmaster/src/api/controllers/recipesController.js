const rescue = require('express-rescue');
const service = require('../services/recipesService');

const create = rescue(async (req, res, next) => {
  const { userId } = req.user;
  const recipePayload = { ...req.body, userId };
  const result = await service.create(recipePayload);

  return result.code
    ? next(result)
    : res.status(201).json(result);
});

const getRecipes = rescue(async (_req, res, next) => {
  const result = await service.getRecipes();

  return result.code
    ? next(result)
    : res.status(200).json(result);
});

const getById = rescue(async (req, res, next) => {
  const result = await service.getById(req.params.id);

  return result.code
    ? next(result)
    : res.status(200).json(result);
});

const update = rescue(async (req, res, next) => {
  const { user, body } = req;
  const { id } = req.params;

  const result = await service.update(id, user, body);

  return result.code
    ? next(result)
    : res.status(200).json(result);
});

const uploadImg = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { filePath, user } = req;

  const result = await service.update(id, user, { image: filePath });

  return result.code
    ? next(result)
    : res.status(200).json(result);
});

const exclude = rescue(async (req, res, _next) => {
  await service.exclude(req.params.id);

  return res.status(204).json();
});

module.exports = {
  create,
  getRecipes,
  getById,
  update,
  uploadImg,
  exclude,
};
