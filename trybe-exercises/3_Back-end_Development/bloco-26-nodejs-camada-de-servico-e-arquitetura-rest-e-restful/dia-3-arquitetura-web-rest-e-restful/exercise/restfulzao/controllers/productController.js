const service = require('../services/productService');

const getAll = async (_req, res, next) => {
  const products = await service.getAll();

  return products.error || products.code
    ? next(products)
    : res.status(200).json(products);
};

const getById = async (req, res, next) => {
  const product = await service.getById(req.params.id);

  return product.error || product.code
    ? next(product)
    : res.status(200).json(product);
};

const update = async (req, res, next) => {
  const { name, brand } = req.body;
  const product = await service.update(req.params.id, name, brand);

  return product.error
    ? next(product)
    : res.status(200).json(product);
};

const create = async (req, res, next) => {
  const { name, brand } = req.body;
  const newProduct = await service.create(name, brand);

  return newProduct.error
    ? next(newProduct)
    : res.status(201).json(newProduct);
};

const exclude = async (req, res) => {
  const product = await service.exclude(req.params.id);

  res.status(200).json(product);
};


module.exports = {
  getAll,
  getById,
  create,
  exclude,
  update,
};