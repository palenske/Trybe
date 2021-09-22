const express = require('express');
const productModel = require('../models/productModel');

const router = express.Router();

router.route('/')
  .get(async (_req, res, next) => {
    const products = await productModel.getAll();

    res.send(products);
  })
  .post(async (req, res, next) => {
    const { name, brand } = req.body;
    const newProduct = await productModel.add(name, brand);

    res.send(newProduct)
  });

router.route('/:id')
  .get(async (req, res, next) => {
    const { id } = req.params;
    const product = await productModel.getById(id);
    
    res.send(product);
  })
  .put(async (req, res, next) => {
    const { id } = req.params;
    const { name, brand } = req.body;
    const product = await productModel.update(id, name, brand);

    res.send(product);
  })
  .delete(async (req, res, next) => {
    const { id } = req.params;
    
    await productModel.exclude(id);

    res.send(ok);
  })

module.exports = router;
