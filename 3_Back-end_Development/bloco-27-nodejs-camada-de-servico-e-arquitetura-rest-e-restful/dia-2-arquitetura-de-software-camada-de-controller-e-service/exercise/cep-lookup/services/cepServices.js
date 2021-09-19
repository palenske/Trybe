const models = require('../models/cepModels');
const utils = require('./utils/formatter');

const errorMessage = (code, message) => ({ error: { code, message } });

const findByCep = async (cep) => {
  const numericCep = utils.formatToNumericCep(cep);
  const resultCep = await models.findByCep(numericCep);

  return resultCep
    ? utils.formatAddress(resultCep)
    : errorMessage('notFound', 'CEP não encontrado');
};

const createAddress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const numericCep = utils.formatToNumericCep(cep);
  const resultCep = await models.findByCep(numericCep);

  return resultCep
    ? errorMessage('alreadyExists', 'CEP já existente')
    : await models.createAddress({
      cep: numericCep,
      logradouro,
      bairro,
      localidade,
      uf
    });
}

module.exports = {
  findByCep,
  createAddress,
};
