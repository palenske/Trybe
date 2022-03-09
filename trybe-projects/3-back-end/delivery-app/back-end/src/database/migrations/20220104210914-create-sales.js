module.exports = {
  /* eslint-disable max-lines-per-function */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        field: 'total_price',
      },
      deliveryAddress: {
        type: Sequelize.STRING(100),
        field: 'delivery_address',
      },
      deliveryNumber: {
        type: Sequelize.STRING(50),
        field: 'delivery_number',
      },
      saleDate: {
        defaultValue: Sequelize.fn('now'),
        isDate: true,
        allowNull: false,
        field: 'sale_date',
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING(50),
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  },
};