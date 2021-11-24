const { ObjectId } = require('mongodb');
const model = require('../models/recipesModel');

const create = async (payload) => {
  const result = await model.create(payload);

  if (!result) return { code: 'internalError', message: 'Server error' };

  return { recipe: result };
};

const getRecipes = async () => {
  const result = await model.getRecipes();

  if (!result) return { code: 'notFound', message: 'No recipe' };

  return result;
};

const getById = async (id) => {
  const recipeId = new ObjectId(id);
  const result = await model.getById(recipeId);

  if (!result) return { code: 'notFound', message: 'recipe not found' };

  return result;
};

const update = async (id, user, payload) => {
  const recipeId = new ObjectId(id);
  const { userId, role } = user;

  const recipeData = await model.getById(recipeId);

  if (role !== 'admin' && !userId.equals(recipeData.userId)) {
    return { code: 'unauthorized', message: 'only the creator has permission to edit' };
  }

  const result = await model.update(recipeId, { ...payload, userId });

  return result;
};

const exclude = async (id) => {
  const recipeId = new ObjectId(id);
  
  const result = await model.exclude(recipeId);

  if (!result) return { code: 'internalError', message: 'Server error' };
};

module.exports = {
  create,
  getRecipes,
  getById,
  update,
  exclude,
};
