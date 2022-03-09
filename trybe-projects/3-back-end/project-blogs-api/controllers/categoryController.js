const rescue = require('express-rescue');
const service = require('../services/categoryService');

const createCategory = rescue(async (req, res, next) => {
  const { name } = req.body;

  const result = await service.createCategory(name);

  return result.code
    ? next(result)
    : res.status(201).json(result);
});

const getCategories = rescue(async (_req, res, next) => {
  const result = await service.getCategories();

  return result.code
    ? next(result)
    : res.status(200).json(result);
});

module.exports = {
  createCategory,
  getCategories,
};
