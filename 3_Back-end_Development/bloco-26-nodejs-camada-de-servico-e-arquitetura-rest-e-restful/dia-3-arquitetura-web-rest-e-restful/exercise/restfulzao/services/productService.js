const models = require('../models/productModel');

const getAll = async () => {
  const result = await models.getAll();

  if (!result) {
    return { error: true, code: 'notFound' };
  }

  return result;
};

const getById = async (id) => {
  const result = await models.getById(id);

  if (!result) {
    return { error: true, code: 'notFound' };
  }

  return result;
};

const update = async (id, name, brand) => {
  const result = await models.update(id, name, brand);

  if(result.error) {
    return { error: true, code: 'error' };
  }

  return { message: `Produto de ID: ${id} atualizado com sucesso`};
}

module.exports = {
  getAll,
  getById,
  update,
}