'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 1,
        seller_id: 1,
        total_price: 10.50,
        delivery_address: 'Casa do Pedro',
        delivery_number: '2221',
        status: 'pendente',
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales');
  }
};
