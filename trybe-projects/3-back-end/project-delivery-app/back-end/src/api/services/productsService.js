const { products } = require('../../database/models');

const getAll = () => products.findAll();

module.exports = {
  getAll,
};
