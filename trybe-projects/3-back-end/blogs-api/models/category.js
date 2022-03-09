module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category',
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Categories',
      underscored: false,
    });

  return Category;
};
