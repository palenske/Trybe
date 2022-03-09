module.exports = {
  // eslint-disable-next-line max-lines-per-function
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'sale_id',
        onDelete: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      productId: {
        primaryKey: true,
        allowNull: false,
        field: 'product_id',
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id',
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  },
}; 