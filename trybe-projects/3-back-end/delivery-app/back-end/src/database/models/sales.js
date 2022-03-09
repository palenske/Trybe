module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  { timestamps: false, tableName: 'sales', underscored: true });
  sales.associate = (models) => {
    sales.belongsTo(models.users, { foreignKey: 'user_id', as: 'user' });
    sales.belongsTo(models.users, { foreignKey: 'seller_id', as: 'seller' });
  };
  return sales;
};