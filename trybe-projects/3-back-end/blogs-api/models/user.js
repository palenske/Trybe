module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User',
    {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Users',
      underscored: false,
    });

    user.associate = (models) => {
      user.hasMany(models.BlogPost, {
        foreignKey: 'userId', as: 'BlogPost',
      });
    };

  return user;
};
