const models = require('../models/cepModels');
const modelsApi = require('../models/cepApi');
const utils = require('./utils/formatter');

const errorMessage = (code, message) => ({ error: { code, message } });

const findByCep = async (cep) => {
  const numericCep = utils.toNumericCep(cep);
  const resultCep = await models.findByCep(numericCep);
  if (resultCep) return utils.formatAddress(resultCep);
  const resultApi = await modelsApi.searchCep(numericCep);

  if (!resultApi) return errorMessage('notFound', 'CEP não encontrado');
  const createdAdress = await models.createAddress({ ...resultApi, cep: numericCep });

  return utils.formatAddress(createdAdress);
};

const createAddress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const numericCep = utils.toNumericCep(cep);
  const resultCep = await models.findByCep(numericCep);

  return resultCep
    ? errorMessage('alreadyExists', 'CEP já existente')
    : utils.formatAddress(await models.createAddress({
      cep: numericCep,
      logradouro,
      bairro,
      localidade,
      uf
    }));
}

module.exports = {
  findByCep,
  createAddress,
};
