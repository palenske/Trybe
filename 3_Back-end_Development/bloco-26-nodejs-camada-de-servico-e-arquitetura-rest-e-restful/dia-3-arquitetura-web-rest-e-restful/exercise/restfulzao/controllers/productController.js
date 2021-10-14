const service = require('../services/productService');

const getAll = async (_req, res, next) => {
  const products = await service.getAll();

  return products.error
    ? next(products.error)
    : res.status(200).json(products);
};

const getById = async (req, res, next) => {
  const product = await service.getById(req.params.id);

  return product.error
    ? next(product.error)
    : res.status(200).json(product);
};

const update = async (req, res, next) => {
  const { name, brand } = req.body;
  const products = await service.update(req.params.id, name, brand);

  return products.error
    ? next(products.error)
    : res.status(200).json(products);
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


module.exports = {
  getAll,
  getById,
  create,
  exclude,
  update,
};