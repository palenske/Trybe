// const fetch = require('node-fetch');
const fetch = (...args) => import('node-fetch').then(module => module.default(...args));

const searchCep = async (cep) => {
  const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(endpoint);
  const result = await response.json();
  return result.erro ? null : result;
};

module.exports = {
  searchCep,
};
