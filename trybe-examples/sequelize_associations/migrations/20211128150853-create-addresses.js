'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Addresses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    city: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    street: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    number: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    employeeId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'employee_id',
      references: {
        model: 'Employees',
        key: 'id',
      },
    },
  }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('Addresses'),
};
