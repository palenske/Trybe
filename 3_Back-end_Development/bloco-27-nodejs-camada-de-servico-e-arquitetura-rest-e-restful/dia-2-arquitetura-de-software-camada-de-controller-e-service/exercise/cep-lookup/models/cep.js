const connection = require('./connection');

const findByCep = async (cep) => {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const result = await connection.execute(query, [cep])
    .then(([results]) => (results.length ? results[0] : null ));
  
  return result ? result : null;
};

module.exports = {
  findByCep,
};
