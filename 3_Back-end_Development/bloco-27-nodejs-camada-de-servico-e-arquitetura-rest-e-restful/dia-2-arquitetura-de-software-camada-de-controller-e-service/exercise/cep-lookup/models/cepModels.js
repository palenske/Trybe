const connection = require('./connection');

const findByCep = async (cep) => {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const result = await connection.execute(query, [cep])
    .then(([results]) => (results.length ? results[0] : null));

  return result ? result : null;
};

const createAddress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query =
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
  return { cep, logradouro, bairro, localidade, uf };
}

module.exports = {
  findByCep,
  createAddress,
};
