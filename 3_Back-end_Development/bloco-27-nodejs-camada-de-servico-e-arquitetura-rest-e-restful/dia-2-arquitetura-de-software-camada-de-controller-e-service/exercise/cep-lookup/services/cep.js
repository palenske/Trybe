const model = require('../models/cep');
const { getAddress } = require('./utils/cepUtils');

const errorMessage = (code, message) => ({ error: { code, message } });

const findByCep = async (cep) => {
  const pureCep = cep.replace('-', '');
  if (!/^[0-9]{8}$/.test(pureCep) || !/\d{5}-\d{3}/.test(cep)) {
    return errorMessage('invalidData', 'CEP inválido');
  };

  const resultCep = await model.findByCep(pureCep);

  return resultCep
    ? getAddress(resultCep)
    : errorMessage('notFound', 'CEP não encontrado')
};

module.exports = {
  findByCep,
};
