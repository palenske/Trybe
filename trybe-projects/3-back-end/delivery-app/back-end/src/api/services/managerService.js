const md5 = require('md5');
const { users } = require('../../database/models');

const userRegister = async (name, email, password, role) => {
  const user = await users.findOne({ where: { email } });
  if (user) {
    return { code: 409, message: 'already exists' };
  }

  const newUserPayload = { name, email, password: md5(password), role };

  const { dataValues:
    { id, password: pass, ...userData } } = await users.create(newUserPayload);

  return { ...userData };
};

const deleteUser = async (email) => {
  await users.destroy({ where: { email } });
};

module.exports = {
  userRegister,
  deleteUser,
};