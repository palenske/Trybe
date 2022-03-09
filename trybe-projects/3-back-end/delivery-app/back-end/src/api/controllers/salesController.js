const salesService = require('../services/salesService');

const createSales = async (req, res) => {
  const { userId } = req.user;
  const sales = await salesService.createSales(userId, req.body);
  if (!sales) {
    return res.status(404).json({ message: 'Not Created' });
  }
  return res.status(201).json(sales);
};

const getSales = async (_req, res) => {
  const sales = await salesService.getSales();
  // if (sales.code) {
  //   return res.status(sales.code).json({ message: sales.message });
  // }
  return res.status(201).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;

  const sale = await salesService.getSalesById(id);

  return res.status(201).json(sale);
};

const getSalesBySeller = async (req, res) => {
  const { userId } = req.user;

  const sales = await salesService.getSalesBySeller(userId);

  return res.status(201).json(sales);
};

module.exports = {
  getSalesById,
  createSales,
  getSales,
  getSalesBySeller,
};