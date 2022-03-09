const rescue = require('express-rescue');
const service = require('../services/postService');

const createPost = rescue(async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req.user;

  const result = await service.createPost(categoryIds, { userId, title, content });

  return result.code
    ? next(result)
    : res.status(201).json(result);
});

const getPosts = rescue(async (_req, res, _next) => {
  const result = await service.getPosts();

  return res.status(200).json(result);
});

const getPostById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const result = await service.getPostById(id);

  return result.code
    ? next(result)
    : res.status(200).json(result);
});

module.exports = {
  createPost,
  getPosts,
  getPostById,
};