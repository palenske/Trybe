const { sales, salesProducts, users, products } = require('../../database/models');

const createSalesProduct = async (cart, { dataValues }) => {
  cart.forEach(async ({ id, quantity }) => {
    await salesProducts.create({
      saleId: dataValues.id,
      productId: id,
      quantity,
    });
  });
};

const createSales = async (userId, { 
  cart,
  sellerId,
  totalPrice,
  saleDate,
  deliveryNumber,
  deliveryAddress,
}) => {
  const newSale = await sales.create({
    userId,
    sellerId,
    totalPrice,
    saleDate,
    deliveryNumber,
    deliveryAddress,
    status: 'Pendente',
  });
  createSalesProduct(cart, newSale);
  return newSale;
};

const getSales = async () => {
  const allSales = await sales.findAll();
  return allSales;
};

const getSalesById = async (id) => {
  const sale = await sales.findAll({
    where: { id },
    include: [{ model: users, as: 'user' },
      { model: users, as: 'seller' }, { model: products, as: 'products' }],
    });

  return sale;
};

const getSalesBySeller = async (userId) => {
  const sellerSales = await sales.findOne({
    where: { sellerId: userId },
    include: [{ model: users, as: 'user' },
      { model: users, as: 'seller' }, { model: products, as: 'products' }],
    });
    return sellerSales;
};

module.exports = {
  getSalesById,
  createSales,
  getSales,
  getSalesBySeller,
};
