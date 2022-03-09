const login = require('./loginRouter');
const register = require('./registerRouter');
const products = require('./productsRouter');
const user = require('./userRouter');
const sales = require('./salesRouter');
const admin = require('./managerRouter');

module.exports = {
  login,
  register,
  products,
  user,
  sales,
  admin,
};