const fetcher = require('node-fetch'); // ~> voltamos para a versão 2.0, dica do @AladinoBorges
// const fetch = (...args) => import('node-fetch').then(module => module.default(...args)); node fetch v3.0 fix

const searchCep = async (cep) => {
  const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetcher(endpoint);
  const result = await response.json();
  return result.erro ? null : result;
};

module.exports = {
  searchCep,
};
