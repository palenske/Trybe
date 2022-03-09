const Users = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'users',
    underscored: false,
  });
  
  return user;
  };
  
  module.exports = Users; 