const user = require('./userRouter');
const login = require('./loginRouter');
const category = require('./categoryRouter');
const post = require('./postRouter');

module.exports = {
  user,
  login,
  category,
  post,
};