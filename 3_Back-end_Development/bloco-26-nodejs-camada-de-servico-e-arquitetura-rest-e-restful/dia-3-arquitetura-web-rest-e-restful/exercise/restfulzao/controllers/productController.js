const ProductModel = require('../models/productModel');

const getAll = async (_req, res, _next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
};

const getById = async (req, res, _next) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(200).json(product);
};

const create = async (req, res) => {
  const { name, brand } = req.body;
  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
};

const exclude = async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.status(200).json(products);
};

const update = async (req, res) => {
  const { name, brand } = req.body;
  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json(products);
};

module.exports = {
  getAll,
  getById,
  create,
  exclude,
  update,
};