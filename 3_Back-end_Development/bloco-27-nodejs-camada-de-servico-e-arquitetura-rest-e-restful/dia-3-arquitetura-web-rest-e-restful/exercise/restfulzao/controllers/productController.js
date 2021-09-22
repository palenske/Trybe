const express = require('express');
const productModel = require('../models/productModel');

const router = express.Router();

router.route('/')
  .get(async (_req, res, next) => {
    try {
      const products = await productModel.getAll();
      res.status(200).json(products);
    } catch (error) {
      next(error)
    };
  })
  .post(async (req, res, _next) => {
    const { name, brand } = req.body;
    try {
      const newProduct = await productModel.add(name, brand);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).send({ message: 'Internal Error' });
    };
  });

router.route('/:id')
  .get(async (req, res, next) => {
    const { id } = req.params;
    const product = await productModel.getById(id);

    return product
    ? res.status(201).json(product)
    : res.status(404).send({ message: 'Not Found'});
  })
  .put(async (req, res, next) => {
    const { id } = req.params;
    const { name, brand } = req.body;
    try {
      const product = await productModel.update(id, name, brand);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  })
  .delete(async (req, res, _next) => {
    const { id } = req.params;
    try {
      const product = await productModel.exclude(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).send({ message: 'Internal Error' });
    };
  });

module.exports = router;
