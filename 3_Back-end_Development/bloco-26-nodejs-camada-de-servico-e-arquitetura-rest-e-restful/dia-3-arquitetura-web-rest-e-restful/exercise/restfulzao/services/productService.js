const models = require('../models/productModel');

const getAll = async () => {
  const result = await models.getAll();

  if (!result) {
    return { code: 'notFound', message: 'nenhum produto' };
  }

  if (result.error) {
    return { error: true, message: 'erro interno' };
  }

  return result;
};

const getById = async (id) => {
  const result = await models.getById(id);
  if (!result) {
    return { code: 'notFound', message: 'produto não encontrado' };
  }

  if (result.error) {
    return { error: true, message: 'erro interno' };
  }

  return result;
};

const update = async (id, name, brand) => {
  const result = await models.update(id, name, brand);

  if(result.error) {
    return { error: true, message: 'erro interno' };
  }

  return { message: `Produto de ID: ${id} atualizado com sucesso`};
};

const create = async (name, brand) => {
  const result = await models.create(name, brand);

  if(result.error) {
    return { error: true, message: 'erro interno' };
  }

  return { message: 'Produto criado com sucesso' };
};

const exclude = async (id) => {
  const result = await models.exclude(id);

  if(!result) {
    return { error: true, message: 'produto não existe' };
  }

  if(result.error) {
    return { error: true, message: 'erro interno' };
  }

  return { message: `produto ${result.name} excluído com sucesso` };
}

module.exports = {
  getAll,
  getById,
  update,
  create,
  exclude
}